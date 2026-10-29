import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { db } from './firebase'

export interface Inquiry {
  id: string
  name: string
  email: string
  category: string
  message: string
  createdAt: Timestamp
  status: 'new' | 'read' | 'resolved'
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
