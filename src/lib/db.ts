import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { db } from './firebase'

export interface Inquiry {
  id?: string
  name: string
  email: string
  category: string
  message: string
  createdAt: Timestamp
  status: 'new' | 'read' | 'resolved'
}

const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL

export async function submitInquiry(data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) {
  const inquiry = {
    ...data,
    createdAt: Timestamp.now(),
    status: 'new' as const,
  }
  const docRef = await addDoc(collection(db, 'inquiries'), inquiry)

  // Discord webhook通知
  if (DISCORD_WEBHOOK_URL) {
    const categoryLabels: Record<string, string> = {
      bug: '不具合報告',
      feature: '機能要望',
      question: '質問',
      other: 'その他',
    }

    try {
      await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: `📩 新しいお問い合わせ`,
            color: 0xBFFF00,
            fields: [
              { name: 'カテゴリ', value: categoryLabels[data.category] || data.category, inline: true },
              { name: '名前', value: data.name, inline: true },
              { name: 'メール', value: data.email || '未入力', inline: true },
              { name: '内容', value: data.message.slice(0, 1000) },
              { name: '管理画面', value: '[確認する](https://astapi.net/admin/inquiries)' },
            ],
            timestamp: new Date().toISOString(),
          }],
        }),
      })
    } catch (err) {
      console.error('Discord webhook failed:', err)
    }
  }

  return docRef.id
}

export async function getInquiries(): Promise<Inquiry[]> {
  const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Inquiry[]
}

export async function updateInquiryStatus(id: string, status: Inquiry['status']) {
  await updateDoc(doc(db, 'inquiries', id), { status })
}
