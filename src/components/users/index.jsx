    import axios from "axios"
    import { useEffect,useState } from "react"
    import UserModal from "../modal"
    const Index = () => {
        const [users,setUsers] = useState([])
        const [modal,setModal] = useState(false)
        const [user,setUser] = useState({})
        useEffect(()=>{
            axios.get("http://localhost:3000/users").then(res=>{  
                // console.log(res);
                if(res.status === 200){
                    setUsers(res.data)
                }
            })
        },[])  
        const toggle =()=>{
            setModal(false)
            setUser({})
        }
        const deleteUser =(id)=>{
            axios.delete(`http://localhost:3000/users/${id}`).then(res=>{
                if(res.status === 200){
                    window.location.reload()
                }
            })
        }
        const openModal =(item)=>{
            setUser(item)
            setModal(true)
        }
    return (
        <>
        <UserModal open={modal} toggle={toggle} user={user}/>
        <div className="container">
        <h1 className="text-center my-3">Users</h1>
        <button className="btn btn-success my-3" onClick={()=>setModal(true)}>add user</button>
        <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>
                                <button className="btn btn-info mx-1" onClick={()=>openModal(item)}>edit</button>
                                <button className="btn btn-danger mx-1" onClick={()=>deleteUser(item.id)}>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        </>
    )
    }

    export default Index
