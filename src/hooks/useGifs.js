import { useContext, useEffect, useState } from "react"
import { searchGifs } from "../services/searchGifs"
import GifContext from "../context/GifContext"

export const useGifs = ({keyword}) => {

    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifContext)
    
    const keywordToUse = 
        keyword || localStorage.getItem('lastKeyWord') || "welcome"
    
    useEffect(()=>{
        setLoading(true)
        searchGifs(keywordToUse)
            .then(res=>{
                setGifs(res.data)
                setLoading(false)
                localStorage.setItem('lastKeyWord', keyword)
            })
    },[keyword])
    
    return {gifs, loading}
    
}