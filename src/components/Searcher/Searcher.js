import {useState} from "react"
import {useLocation} from "wouter"
import "./Searcher.css"

export const Searcher = () =>{
    
    const [newSearch, setSearch] = useState("")
    const [path, pushLocation] = useLocation()
    
    const handleOnChange = (e) =>{
        setSearch(e.target.value)
    }
    
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        pushLocation(`/search/${newSearch}`)
        console.log(path)
    }
 

    return(
        <form onSubmit={handleOnSubmit}>
            <input 
                className="buscador"
                type="text" 
                onChange={handleOnChange} 
                value={newSearch}
                placeholder="Search a gif..."
            />
        </form>
    )

}