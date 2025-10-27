import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export async function fetchProducts(categoryId) {
  const ref = collection(db, 'products')
  let q = ref
  if (categoryId) q = query(ref, where('category', '==', categoryId))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function fetchProductById(id) {
  const ref = doc(db, 'products', id)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

export async function createOrder(order) {
  const ref = collection(db, 'orders')
  const docRef = await addDoc(ref, { ...order, createdAt: serverTimestamp() })
  return docRef.id
}
