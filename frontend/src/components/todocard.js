import { useEffect , useState } from 'react';
import axios from "axios";
import LoadingPage from './loadingPage';

const TodoCard = () => {

    const [users,setUsers] = useState(null);
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

    if (users === null) {
        return(
        <>
        <LoadingPage/>
        </>)
    } else {
        
        
        return (
            <>
            {users.map(user=>(
                <div className="column is-4">
                <div className="card mb-4">
                <div className="card-content">
                    <p className="title is-5">{user.tittle}</p>
                    <p className="content">{user.description}</p>
                </div>

                <footer className="card-footer">
                    <a className="card-footer-item has-text-success">Done</a>
                    <a className="card-footer-item has-text-danger" onClick={()=>deleteUser(user.id)}>Delete</a>
                </footer>
                </div>
                </div>)
                )}
                </>)
}
}
export default TodoCard
