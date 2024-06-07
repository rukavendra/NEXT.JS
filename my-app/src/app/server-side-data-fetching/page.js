// fetching data from server side

import Link from "next/link"

async function fetchListofUsers(){
    try{
        const response  = await fetch('http://dummyjson.com/users')
        const data = await response.json()
        return data.users
    }catch(error){
        throw new Error(error)
    }
}

// async function handleClick(event){
//     const userRes = await fetch(`http://dummyjson.com/users/${event}`)
//     const data = await userRes.json()
//     return data
// }

export default async function ServerSideDataFetching(){
    const datas = await fetchListofUsers()
    return <div className="text-center">
        <h1>SSR</h1>
        <div>
            <ol>
            {datas.map(item=><li className="cursor-pointer mt-6 " key={item.id}><Link href={`server-side-data-fetching/${item.id}`}>{item.firstName}</Link></li>)}
            </ol>
        </div>
    </div>
}