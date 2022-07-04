import { GifGroup } from "../GifGroup/GifGroup"
import { useGifs } from "../../hooks/useGifs"
import { Spinner } from "../Spinner/Spinner"


export const SearchGifs = ({keyword})=>{
    
    const {gifs, loading} = useGifs({keyword})
    
    return(
        <>
            {(loading) ? <Spinner/> : <GifGroup gifs={gifs} />}
        </>
    )
    
}