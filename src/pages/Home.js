import Links from "../components/Links/Links"
import {SearchGifs} from "../components/SearchGifs/SearchGifs"
import { Searcher } from "../components/Searcher/Searcher"

export const Home = () => {

    const lastKeyWord = localStorage.getItem('lastKeyWord')

    return(
    <main>
        <h1>Home</h1>
        <Links/>
        <Searcher/>
        <h2>Last search: {(lastKeyWord !== 'undefined') ? decodeURI(lastKeyWord) : "welcome"}</h2>
        <SearchGifs/>
    </main>)
}