import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

export async function signInAnonymous(): Promise<User> {
  const result = await signInAnonymously(auth)
  return result.user
}

export async function checkIsAdmin(uid: string): Promise<boolean> {
  const userDoc = await getDoc(doc(db, 'users', uid))
  return userDoc.exists()
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}

export function getCurrentUser(): User | null {
  return auth.currentUser
}
