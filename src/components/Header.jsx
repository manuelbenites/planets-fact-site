import { usePlanets } from "../hooks/usePlanets"
import { data } from "../utils/data"
import MenuIcon from "../components/icons/MenuIcon"
import { getPlanetColorUnderline, CHOICES } from "../utils/functions"

export default function Header() {
	const {
		modal,
		planet,
		setPlanet,
		description,
		setModal,
		setDescription,
		setImage,
	} = usePlanets()
	const handleChangePlanetImage = (e) => {
		setDescription(e.target.getAttribute("data-description"))
		setImage(e.target.getAttribute("data-image"))
	}
	const handleChangePlanet = (e) => {
		setPlanet(e.target.name)
	}
	const handleToggleModal = () => {
		!modal ? setModal(true) : setModal(false)
	}
	return (
		<header className="relative z-30">
			<nav className="flex justify-between items-center px-6 border-b md:justify-center md:border-0 border-dark-slate-gray h-[68px]">
				<h1 className="font-['Antonio'] uppercase text-[28px] font-normal tracking-[-1.05px]">
					the planets
				</h1>
				<button onClick={handleToggleModal} className="md:hidden">
					{modal ? (
						<MenuIcon className="pointer-events-none fill-dark-slate-gray" />
					) : (
						<MenuIcon className="pointer-events-none fill-white" />
					)}
				</button>
			</nav>
			<ul className="flex justify-between px-6 border-b md:justify-center border-dark-slate-gray h-[50px]">
				{CHOICES.map((choice, index) => (
					<li
						key={index}
						className="flex relative justify-center items-center w-20 md:hidden"
					>
						<button
							className="font-bold uppercase opacity-50 focus:opacity-100 text-[12px] tracking-[1.93px] font-spartan"
							data-description={choice.description}
							data-image={choice.image}
							onClick={handleChangePlanetImage}
						>
							{choice.content}
						</button>
						{choice.description === description && (
							<div
								className={
									"absolute w-20 h-1 bottom-[-1px] " +
									getPlanetColorUnderline(planet)
								}
							></div>
						)}
					</li>
				))}
				<ul className="hidden justify-between w-full md:flex max-w-[665px]">
					{data.map((item, index) => (
						<li key={index}>
							<button
								name={item.name}
								className="font-bold uppercase text-[14px] font-spartan"
								onClick={handleChangePlanet}
							>
								{item.name}
							</button>
						</li>
					))}
				</ul>
			</ul>
		</header>
	)
}
