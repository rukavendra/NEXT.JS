async function fetchListofUser(user){
    try{
        const response  = await fetch(`http://dummyjson.com/users/${user}`)
        const data = await response.json()
        return data
    }catch(error){
        throw new Error(error)
    }
}


export default async function UserDetails({params}){
    const data = params.userDetails
    const userdata = await fetchListofUser(data)
    // console.log(userdata)
    return <div className="text-center  ">
        <h1 className="font-bold">Name: {userdata.firstName}</h1>
        <p>Age: {userdata.age}</p>
        <p>Gender: {userdata.gender}</p>
    </div>
}