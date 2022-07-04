import "./App.css"
import { Route } from "wouter"
import Links from "../components/Links/Links"
import { Home } from "../pages/Home"
import {Search} from "../pages/Search"



import {Navigator} from "../components/Navigator/Navigator"



import { Details } from "../pages/Details"



import { GifContextProvider } from "../context/GifContext"
import { Footer } from "../components/Footer/Footer"











function App() {



	return (



		<div className="App">



			<Navigator/>



			<GifContextProvider>



				<Route path="/" component={Home}/>



				<Route path="/info" component={Links}/>



				<Route path="/search/:keyword" component={Search}/>



				<Route path="/gif/:id" component={Details}/>



			</GifContextProvider>

			<Footer/>

		</div>



	)



}







export default App



