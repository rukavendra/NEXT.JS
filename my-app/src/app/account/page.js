import { redirect } from "next/navigation"

export default function Accounts (){
    const account = null
    if(account === null) redirect('/cart?search=product1&rvalue=abxd')
    return <h1>Accounts Details</h1>
}