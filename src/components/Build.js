import {getBuild, deleteBuild} from '../services/builders-api'
import {useState, useEffect} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import {useParams, useNavigate} from 'react-router-dom'


function Build() {
    const nav = useNavigate()
    const {id} = useParams()
    const [build, setBuild] = useState({})
    useEffect(() => {getBuild(id)
    .then(res => setBuild(res.data))
}, [])

    const deleteTheBuild = () =>{
        deleteBuild(id) // service in builds-api
        nav('/') // take us back to home screen
    }

    return (
        <div>
            <h1>Build:</h1>
            <h3>{build.description}</h3>
            Completed: <input type='checkbox' defaultChecked={build.complete} /> 
            <br />
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <br />
            <button onClick={deleteTheBuild}>Delete</button>
            <br />
            <button onClick={() => {nav('/')}}>Back to the Main Page</button>
        </div>
    )
}

export default Build