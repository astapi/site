import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInAnonymous, checkIsAdmin, onAuthChange } from '../lib/auth'
import { getInquiries, updateInquiryStatus } from '../lib/db'
import type { Inquiry } from '../lib/db'
import '../styles/Admin.css'

export default function AdminInquiries() {
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (user) {
        const admin = await checkIsAdmin(user.uid)
        if (!admin) {
          navigate('/', { replace: true })
          return
        }
        setIsAdmin(true)
        loadInquiries()
      } else {
        // 自動で匿名ログイン
        signInAnonymous()
      }
    })
    return unsubscribe
  }, [navigate])

  const loadInquiries = async () => {
    setLoading(true)
    try {
      const data = await getInquiries()
      setInquiries(data)
    } catch (err) {
      console.error('Failed to load inquiries:', err)
    } finally {
      setLoading(false)
    }
  }

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

  const formatDate = (timestamp: Inquiry['createdAt']) => {
    if (!timestamp) return ''
    const date = timestamp.toDate()
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const categoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      bug: '不具合報告',
      feature: '機能要望',
      question: '質問',
      other: 'その他',
    }
    return labels[category] || category
  }

  const statusLabel = (status: Inquiry['status']) => {
    const labels: Record<string, string> = {
      new: '新規',
      read: '確認済',
      resolved: '対応済',
    }
    return labels[status] || status
  }

  if (!isAdmin) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <p className="admin-loading">読み込み中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <header className="admin-header">
          <h1>お問い合わせ管理</h1>
          <button onClick={loadInquiries} className="admin-btn-secondary">
            更新
          </button>
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
                    {statusLabel(inquiry.status)}
                  </span>
                  <span className="inquiry-category">{categoryLabel(inquiry.category)}</span>
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
                      handleStatusChange(inquiry.id!, e.target.value as Inquiry['status'])
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
