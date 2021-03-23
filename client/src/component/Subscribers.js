import React,{useState} from 'react'
import axios from 'axios'

const Subscribers = () => {
    const [sub, setSub] = useState([])
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')

    axios.get('/')
    .then ((res)=> { setSub(res.data.subscribers)})
    .catch ((err)=>console.log(err))

    const handleAdd =()=> {
        axios.post('/',{fullName,email})
        .then ((res)=>console.log(res.data.msg))
        .catch ((err)=>console.log(err))    
    }
    return (
        <div>
            <input onChange={e=>setFullName(e.target.value)}></input>
            <input onChange={e=>setEmail(e.target.value)}></input>
            <button onClick={handleAdd}>add</button>
            {sub.map(el=> <h1>{el.fullName}</h1>)}
        </div>
    )
}

export default Subscribers
