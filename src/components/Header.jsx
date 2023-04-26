import { usePlanets } from "../hooks/usePlanets"
import MenuIcon from "../components/MenuIcon"

export default function Header() {
	const { modal, setModal, setDescription, setImage } = usePlanets()
	const handleChangePlanetImage = (e) => {
		setDescription(e.target.name)
		setImage(e.target.value)
	}
	const handleToggleModal = () => {
		if (!modal) setModal(true)
		else setModal(false)
	}
	return (
		<header className="relative z-30">
			<div className="flex justify-between items-center px-6 border-b border-opacity-50 h-[68px]">
				<h1 className="font-['Antonio'] uppercase text-[28px] font-normal tracking-[-1.05px]">
					the planets
				</h1>
				<button onClick={handleToggleModal}>
					<MenuIcon className="pointer-events-none fill-white" />
				</button>
			</div>
			<div className="flex justify-between px-6 border-b border-opacity-50 h-[50px]">
				<button
					className="font-bold uppercase text-[12px] tracking-[1.93px] font-spartan"
					name="overview"
					value="planet"
					onClick={handleChangePlanetImage}
				>
					overview
				</button>
				<button
					className="font-bold uppercase text-[12px] tracking-[1.93px] font-spartan"
					name="structure"
					value="internal"
					onClick={handleChangePlanetImage}
				>
					structure
				</button>
				<button
					className="font-bold uppercase text-[12px] tracking-[1.93px] font-spartan"
					name="geology"
					value="planet"
					onClick={handleChangePlanetImage}
				>
					surface
				</button>
			</div>
		</header>
	)
}
