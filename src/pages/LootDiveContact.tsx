import { useState } from 'react'
import { submitInquiry } from '../lib/db'
import '../styles/LootDiveLegal.css'

export default function LootDiveContact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: 'bug',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      await submitInquiry(form)
      setStatus('success')
      setForm({ name: '', email: '', category: 'bug', message: '' })
    } catch (err) {
      console.error('Failed to submit inquiry:', err)
      setStatus('error')
      setErrorMessage('送信に失敗しました。時間をおいて再度お試しください。')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="ld-legal-page">
      <div className="ld-legal-container">
        <a href="/lootdive" className="ld-legal-back">&larr; LootDive に戻る</a>

        <div className="ld-legal-content">
          <h1>お問い合わせ</h1>
          <p className="ld-legal-updated">Contact Us</p>

          {status === 'success' ? (
            <div className="ld-contact-success">
              <p>お問い合わせを受け付けました。</p>
              <p>内容を確認の上、必要に応じてご連絡いたします。</p>
              <button
                type="button"
                className="ld-contact-btn"
                onClick={() => setStatus('idle')}
              >
                新しいお問い合わせを送信
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="ld-contact-form">
              <div className="ld-form-group">
                <label htmlFor="name">お名前（ニックネーム可）</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="例: プレイヤー1"
                />
              </div>

              <div className="ld-form-group">
                <label htmlFor="email">メールアドレス（任意）</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="返信が必要な場合はご記入ください"
                />
              </div>

              <div className="ld-form-group">
                <label htmlFor="category">カテゴリ</label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="bug">不具合報告</option>
                  <option value="feature">機能要望</option>
                  <option value="question">質問</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="ld-form-group">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="詳細をご記入ください"
                />
              </div>

              {status === 'error' && (
                <div className="ld-form-error">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="ld-contact-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? '送信中...' : '送信する'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
