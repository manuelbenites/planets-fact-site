import { PlanetContext } from "../context/PlanetContext"
import { useContext } from "react"

export const usePlanets = () => {
	const context = useContext(PlanetContext)
	return context
}
