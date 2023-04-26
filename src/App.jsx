import BackGround from "./components/BackGround"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Planets from "./components/Planets"

function App() {
	return (
		<div className="bg-midnight-blue">
			<BackGround className="absolute z-10 w-full h-screen" />
			<Header />
			<Modal />
			<Planets />
		</div>
	)
}

export default App
