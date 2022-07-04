import "./GifDetail.css"

export const GifDetail = ({gif}) => {

    return (
    <div className="gifDetail">
        <h2>{gif.title}</h2>
        <h3>id: {gif.id}</h3>
        {<img className="gifDetailImg" src={gif.images.downsized_medium.url} alt=""/>}
    </div>
    )
}