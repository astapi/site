import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from './firebase'

export interface InquiryInput {
  name: string
  email: string
  category: string
  message: string
}

// Discord通知を中継する Worker (workers/inquiry-notify)。Webhook URL はWorker側のシークレットにのみ置く
const INQUIRY_NOTIFY_URL = import.meta.env.VITE_INQUIRY_NOTIFY_URL

export async function submitInquiry(data: InquiryInput) {
  const inquiry = {
    ...data,
    createdAt: Timestamp.now(),
    status: 'new' as const,
  }
  const docRef = await addDoc(collection(db, 'inquiries'), inquiry)

  if (INQUIRY_NOTIFY_URL) {
    try {
      await fetch(INQUIRY_NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch (err) {
      console.error('Inquiry notification failed:', err)
    }
  }

  return docRef.id
}
