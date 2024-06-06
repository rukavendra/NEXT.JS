'use client'


//slug cath all routes

import { useParams } from "next/navigation"



export default function CatchAllRoutes(){
    const data = useParams()
    console.log(data);
    return<h1>All Routes {}</h1>
}