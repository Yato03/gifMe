import "./GifGroup.css"
import {Gif} from "../Gif/Gif"
//import Bricks from 'bricks.js'

export const GifGroup = ({gifs}) =>{

    /*const sizes = [
        { columns: 2, gutter: 10 },       
        { mq: '300px', columns: 1, gutter: 15 },
        { mq: '768px', columns: 3, gutter: 25 },
        { mq: '1024px', columns: 4, gutter: 25 }
    ]
    const instance = Bricks({
        container: '.gifGroup',
        packed:    'data-packed',        // if not prefixed with 'data-', it will be added
        sizes:     sizes
    })    
    if(gifs.length !==0){
        console.log(gifs)
        instance
            .resize(true)    
            .pack()
    }*/
    
    return(
        <div className="gifGroup">
            {(gifs) ? gifs.map(g => (<Gif key={g.id} url={g.images.original.url} title={g.title} id={g.id} />)) : "Cargando..."}
        </div>
    )
}