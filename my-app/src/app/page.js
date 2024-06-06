'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useState } from "react";

export default function Home() {
  // const [data,setData] = useState(0)
  const router = useRouter()
  console.log(router);
  const handleNavigate =()=>{
    router.push('/products')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold ">Home</h1>
      <div className="flex gap-5 ">
      <Link href='/products' className="text-4xl border-b-2 border-black hover:border-hidden ">Products</Link>
      <Link href='/account' className="text-4xl border-b-2 border-black hover:border-hidden ">Account</Link>
      </div>
      <h2 className="font-bold ">Alternative way to Navigate using useRouter</h2>
      <button onClick={handleNavigate} className="border-blue-500 ">Products Page</button>
    </main>
  );
}
