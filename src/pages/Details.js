import { useContext, useState, useEffect } from "react"
import { GifDetail } from "../components/GifDetail/GifDetail"
import { Spinner } from "../components/Spinner/Spinner"
import GifContext from "../context/GifContext"
import {getGif} from "../services/getGif"

export const Details = ({params})=>{

    const {id} = params
    const [loading, setLoading] = useState(true)
    const [gif, setGif] = useState({})
    const {gifs} = useContext(GifContext)
    console.log(gifs)
    useEffect(()=>{
        
        if(gifs.length > 0){
            setGif(gifs.find(gif => gif.id === id))
            setLoading(false)
        }
        else{
            getGif(id).then((res)=>{
                    setGif(res.data)
                    setLoading(false)
                })
        }
    },[id, gifs])

    return (
        <main>
            <h1>Details</h1>
            {(loading) ? <Spinner/> : <GifDetail gif={gif}/>}
        </main>
    )
}