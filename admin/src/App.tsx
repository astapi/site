import { useState, useEffect, useCallback } from 'react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { auth } from './firebase'
import { getInquiries, updateInquiryStatus } from './inquiries'
import type { Inquiry } from './inquiries'

const CATEGORY_LABELS: Record<string, string> = {
  bug: '不具合報告',
  feature: '機能要望',
  question: '質問',
  other: 'その他',
}

const STATUS_LABELS: Record<Inquiry['status'], string> = {
  new: '新規',
  read: '確認済',
  resolved: '対応済',
}

function formatDate(timestamp: Inquiry['createdAt']) {
  if (!timestamp) return ''
  return timestamp.toDate().toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function App() {
  // undefined = 認証状態の確認中
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(false)
  const [forbidden, setForbidden] = useState(false)

  // 管理者かどうかは Firestore ルールが判定する。読めなければ権限なし
  const loadInquiries = useCallback(async () => {
    setLoading(true)
    try {
      setInquiries(await getInquiries())
      setForbidden(false)
    } catch (err) {
      if (err instanceof FirebaseError && err.code === 'permission-denied') {
        setForbidden(true)
      } else {
        console.error('Failed to load inquiries:', err)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u)
      if (u) loadInquiries()
    })
  }, [loadInquiries])

  const handleStatusChange = async (id: string, status: Inquiry['status']) => {
    try {
      await updateInquiryStatus(id, status)
      setInquiries((prev) =>
        prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
      )
    } catch (err) {
      console.error('Failed to update status:', err)
    }
  }

  if (user === undefined) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <p className="admin-loading">読み込み中...</p>
        </div>
      </div>
    )
  }

  if (user === null) {
    return (
      <div className="admin-page">
        <div className="admin-login-card">
          <h1>管理画面</h1>
          <p>管理者の Google アカウントでログインしてください。</p>
          <button
            className="admin-btn"
            onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
          >
            Google でログイン
          </button>
        </div>
      </div>
    )
  }

  if (forbidden) {
    return (
      <div className="admin-page">
        <div className="admin-login-card">
          <h1>権限がありません</h1>
          <p>このアカウント ({user.email}) は管理者として登録されていません。</p>
          <p className="admin-uid">{user.uid}</p>
          <p className="admin-hint">
            Firestore の <code>admins/{'{uid}'}</code> に上記 UID のドキュメントを作成すると管理者になります。
          </p>
          <button className="admin-btn-secondary" onClick={() => signOut(auth)}>
            ログアウト
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <header className="admin-header">
          <h1>お問い合わせ管理</h1>
          <div>
            <button onClick={loadInquiries} className="admin-btn-secondary">
              更新
            </button>{' '}
            <button onClick={() => signOut(auth)} className="admin-btn-secondary">
              ログアウト
            </button>
          </div>
        </header>

        {loading ? (
          <p className="admin-loading">読み込み中...</p>
        ) : inquiries.length === 0 ? (
          <p className="admin-empty">お問い合わせはまだありません。</p>
        ) : (
          <div className="admin-inquiries">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className={`admin-inquiry status-${inquiry.status}`}>
                <div className="inquiry-header">
                  <span className={`inquiry-status status-${inquiry.status}`}>
                    {STATUS_LABELS[inquiry.status] ?? inquiry.status}
                  </span>
                  <span className="inquiry-category">
                    {CATEGORY_LABELS[inquiry.category] ?? inquiry.category}
                  </span>
                  <span className="inquiry-date">{formatDate(inquiry.createdAt)}</span>
                </div>
                <div className="inquiry-body">
                  <div className="inquiry-meta">
                    <span className="inquiry-name">{inquiry.name}</span>
                    {inquiry.email && (
                      <a href={`mailto:${inquiry.email}`} className="inquiry-email">
                        {inquiry.email}
                      </a>
                    )}
                  </div>
                  <p className="inquiry-message">{inquiry.message}</p>
                </div>
                <div className="inquiry-actions">
                  <select
                    value={inquiry.status}
                    onChange={(e) =>
                      handleStatusChange(inquiry.id, e.target.value as Inquiry['status'])
                    }
                  >
                    <option value="new">新規</option>
                    <option value="read">確認済</option>
                    <option value="resolved">対応済</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
