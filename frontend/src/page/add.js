import axios from "axios";
import { useState } from "react";

function Add() {

const [tittle,setTittle] = useState(null)
const [description,setDescription] = useState(null)
const [status,setStatus] = useState(null)
const [priority,setPriority] = useState(null)
const [dueDate,setDueDate] = useState(null)

  return (
    <div className="Add is-flex justify-content-space-between">
        <form onSubmit={async()=>{
          await axios.post(process.env.REACT_APP_POST,{
            tittle:tittle ,
            description:description ,
            status:status ,
            priority:priority ,
            due_date : dueDate

          })
        }}>
          
              <input className="input is-link" value={tittle} type="text" placeholder="tittle" onChange={()=>{
              // eslint-disable-next-line no-restricted-globals
              setTittle(event.target.value)
            }}/>
            <input className="input is-link" value={description} type="text" placeholder="description" onChange={()=>{
              // eslint-disable-next-line no-restricted-globals
              setDescription(event.target.value)
            }}/>
            <input className="input is-link" value={status} type="text" placeholder="status" onChange={()=>{
              // eslint-disable-next-line no-restricted-globals
              setStatus(event.target.value)
            }}/>
          
          
          <div className="select is-link is-rounded">

          <select  name="change-priority" onChange={()=>{
            // eslint-disable-next-line no-restricted-globals
            setPriority(event.target.value)
          }}>
            <option  >PRIORITY</option>
            <option value="penting" >penting</option>
            <option value="sedang" >sedang</option>
            <option value="gak penting" >gak penting</option>
          </select>
          </div>
          <input className="input is-link is-4" type="date" value={dueDate} onChange={()=>{
            // eslint-disable-next-line no-restricted-globals
            setDueDate(event.target.value)
          }}/>
          <input className="button is-success is-rounded" type="submit" value="Add" />
        </form>
    </div>
  );
}

export default Add;
