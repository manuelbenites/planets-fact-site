import { usePlanets } from "../hooks/usePlanets"
import { data } from "../utils/data"
import MenuIcon from "../components/icons/MenuIcon"
import { getPlanetColor, CHOICES } from "../utils/functions"

function PlanetOptionsNav() {
	const { setPlanet, planet } = usePlanets()
	const handleChangePlanet = (e) => {
		setPlanet(e.target.name)
	}
	const underlineBackground = getPlanetColor(planet)
	return (
		<nav className="hidden w-full border-b md:block lg:border-0 h-[68px] border-dark-slate-gray lg:h-[85px] lg:w-fit">
			<ul className="justify-between mx-auto h-full md:flex w-[665px] opacity-[0.75]">
				{data.map((item, index) => (
					<li key={index} className="flex relative items-center">
						{item.name == planet && (
							<div
								className={`hidden lg:block absolute top-0 w-full h-1 ${underlineBackground}`}
							></div>
						)}
						<button
							name={item.name}
							className="relative my-auto font-bold uppercase text-[14px] font-spartan tracking-[1.5px]"
							onClick={handleChangePlanet}
						>
							{item.name}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}

function PlanetSurfaceImageOptions() {
	const { description, planet, setDescription, setImage } = usePlanets()
	const handleChangePlanetImage = (e) => {
		setDescription(e.target.getAttribute("data-description"))
		setImage(e.target.getAttribute("data-image"))
	}
	const buttonBackgroundColor = getPlanetColor(planet)
	return (
		<ul className="flex justify-between px-6 border-b md:hidden h-[50px] border-dark-slate-gray">
			{CHOICES.map((choice, index) => (
				<li
					key={index}
					className="flex relative justify-center items-center w-20"
				>
					<button
						className="font-bold uppercase opacity-50 focus:opacity-100 text-[12px] tracking-[1.93px] font-spartan"
						data-description={choice.description}
						data-image={choice.image}
						onClick={handleChangePlanetImage}
					>
						{choice.mobile}
					</button>
					{choice.description === description && (
						<div
							className={`absolute w-20 h-1 bottom-[-1px] ${buttonBackgroundColor}`}
						></div>
					)}
				</li>
			))}
		</ul>
	)
}

export default function Header() {
	const { modal, setModal } = usePlanets()
	const handleToggleModal = () => {
		!modal ? setModal(true) : setModal(false)
	}
	return (
		<header className="flex relative z-30 flex-col lg:flex-row lg:justify-between lg:px-10 lg:border-b lg:border-dark-slate-gray">
			<nav className="flex justify-between items-center px-6 border-b md:justify-center md:mx-0 md:border-0 lg:px-0 h-[68px] border-dark-slate-gray lg:h-[85px]">
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
			<PlanetSurfaceImageOptions />
			<PlanetOptionsNav />
		</header>
	)
}
