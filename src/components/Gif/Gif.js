import "./Gif.css"
import {useLocation} from "wouter"

export const Gif = ({title, url, id}) => {

	const [path, pushLocation] = useLocation()

	const handleOnClick = () => {
		pushLocation(`/gif/${id}`)
	}

	return (
		<div className="gif" onClick={handleOnClick}>
			<img src={url} alt={title} />
			<span>{title}</span>
		</div>
	)

}