import { useNavigate } from "react-router-dom"
import {createBuild} from '../services/builders-api'

function Create() {
    const nav = useNavigate()

    const createTheBuild = (e) => {
        const build = {description: e.target.description.value, complete: false}
        createBuild(build)
        nav('/')
    }

return(
    <div>
        <h4>Create a Todo</h4>
        <form onSubmit={createTheBuild}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create