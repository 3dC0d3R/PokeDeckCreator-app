import {getBuild, editBuild} from '../services/builders-api'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
const {id} = useParams()
const nav = useNavigate()
const [data, setData] = useState({})

useEffect(() => {
    getBuild(id) // get the todo that matches this id
    .then(res => setData(res.data)) // updating the state to the todo we get back
}, []) // prevent a continous loop

const editTheBuild = (e) => {
    e.preventDefault()
    const updatedBuild = {description: e.target.description.value, complete: e.target.complete.checked}
    editBuild(id, updatedBuild)
    nav(`/${id}`)
}
    return (
        <div>
            <form onSubmit={editTheBuild}>
                <input type='text' name='description' defaultValue={data.description}/>
                Complete: <input type='checkbox' name='complete' defaultChecked={data.complete}/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default Edit