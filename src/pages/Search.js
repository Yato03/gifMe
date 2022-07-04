import { Searcher } from "../components/Searcher/Searcher"
import { SearchGifs } from "../components/SearchGifs/SearchGifs"

export const Search = ({params}) => {
    
    const {keyword} = params
    
    return(
    <main>
        <h1>Search: {decodeURI(keyword)}</h1>
        <Searcher/>
        <SearchGifs keyword={keyword}/>
    </main>
    )
    
}