import {getBuilders} from '../services/builders-api'
import {useState, useEffect} from 'react'
import Create from './CreateBuild'

export default function Builders() {
 const [builders, setBuilders] = useState([])
 useEffect(()=>{
     getBuilders()
     .then(res => setBuilders(res.data))
 },[])
 console.log(builders)
    return(
    <div>
        <ul>
        {builders.map((build) => {
            return (
            <li><a href={`/${build._id}`}>{build.description}</a>
            </li>
            )
        })}
        
        </ul>
        <Create />
    </div>
)
    
}