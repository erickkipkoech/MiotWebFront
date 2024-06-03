'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Page() {
  const router=useRouter();
  return (<nav>
    <Link href="/dashboard">Dashboard</Link>
  <Link href="/components">Components</Link>
  <button type="button" onClick={()=>router.push('/dashboard')}>Dashboard</button>
  </nav>)
}