import {useState} from "react"
import {useLocation} from "wouter"

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
                type="text" 
                onChange={handleOnChange} 
                value={newSearch}
                placeholder="Search a gif..."
            />
        </form>
    )

}