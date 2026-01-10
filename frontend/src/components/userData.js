import { useEffect , useState } from 'react';
import axios from "axios";
import LoadingPage from './loadingPage';


const UserData = () => {
 
    const [users,setUsers] = useState(null);
    // BELUM DIBENERIN
    // const updateUser = async(id)=>{
    //     try {
    //         await axios.patch(`${process.env.REACT_APP_POST}${id}`)
    //         console.log("data berhasil di update")
    //     } catch (error) {
    //         console.log("gagal update data")
    //     }
    // }

    const deleteUser = async(id)=>{
        try {
            await axios.delete(`${process.env.REACT_APP_DELETE}${id}`)
            console.log("user berhasil dihapus")
        } catch (error) {
            console.log("gagal hapus user")
        }
    };

    useEffect(()=>{
        const getData =async()=>{
            try {
            const response = await axios.get(process.env.REACT_APP_GET)
            setUsers(response.data)        
            } catch (error) {
                console.log(error)
            }
        
        }
    getData()

    
    },[])

    if(users === null){
        return(<>
        <LoadingPage />
        </>)
    }else{

        
        return (
            <>

    <div className='container is-half is-centered'>
      <table className='table mt-5 is-striped'>
        <thead>
            <tr>
                <th>title</th>
                <th>description</th>
                <th>status</th>
                <th>priority</th>
                <th>due date</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user =>(
                    <>
                    <tr className='row mt-5 mb-5' key={user.id}>
                        <td>{user.tittle}</td>
                        <td>{user.description}</td>
                        <td>{user.status}</td>
                        <td>{user.priority}</td>
                        <td>{user.due_date}</td>
                    <button className='button  is-success' onClick={()=>{
                        return(<><h1>bacot lu</h1></>)
                    }}>update</button>
                    <button className='button  is-danger' onClick={()=>{
                        deleteUser(user.id)
                        
                        
                        }} >delete</button>
                    </tr>
                    </>
            ))  }
        </tbody>
      </table>
    </div>
        </>
  )
}
}
export default UserData;
