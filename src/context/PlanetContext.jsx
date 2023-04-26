import { useState, createContext } from "react"

export const PlanetContext = createContext()

export const PlanetContextProvider = ({ children }) => {
	const [planet, setPlanet] = useState("Venus")
	const [description, setDescription] = useState("overview")
	const [image, setImage] = useState("planet")
	const [modal, setModal] = useState(false)

	const initialState = {
		planet,
		setPlanet,
		description,
		setDescription,
		image,
		setImage,
		modal,
		setModal,
	}

	return (
		<PlanetContext.Provider value={initialState}>
			{children}
		</PlanetContext.Provider>
	)
}
