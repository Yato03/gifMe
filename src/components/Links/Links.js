import "./Links.css"
import {Link} from "wouter"

function Links(){
    return(
        <ul>
            <li><Link to="/info"><a href="#">Info</a></Link></li>
            <li><Link to="/search/anya"><a href="#">Anya</a></Link></li>
        </ul>
        
    );
}

export default Links;