'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart(){
    const pathName = usePathname()
    const search = useSearchParams()
    console.log(pathName);
    console.log(search.get('search'), search.get('rvalue'))
    return<div>
        <h1>{pathName} </h1>
        <h2>{}</h2>
        </div>
}