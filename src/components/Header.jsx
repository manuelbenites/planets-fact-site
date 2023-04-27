import { usePlanets } from "../hooks/usePlanets"
import { data } from "../utils/data"
import MenuIcon from "../components/icons/MenuIcon"

const CHOICES = [
	{
		content: "overview",
		description: "overview",
		image: "planet",
	},
	{
		content: "structure",
		description: "structure",
		image: "internal",
	},
	{
		content: "surface",
		description: "geology",
		image: "planet",
	},
]

export default function Header() {
	const { modal, description, setModal, setDescription, setImage } =
		usePlanets()
	const handleChangePlanetImage = (e) => {
		setDescription(e.target.getAttribute("data-description"))
		setImage(e.target.getAttribute("data-image"))
	}
	const handleToggleModal = () => {
		!modal ? setModal(true) : setModal(false)
	}
	return (
		<header className="relative z-30">
			<div className="flex justify-between items-center px-6 border-b border-dark-slate-gray h-[68px]">
				<h1 className="font-['Antonio'] uppercase text-[28px] font-normal tracking-[-1.05px]">
					the planets
				</h1>
				<button onClick={handleToggleModal}>
					{modal ? (
						<MenuIcon className="pointer-events-none fill-dark-slate-gray" />
					) : (
						<MenuIcon className="pointer-events-none fill-white" />
					)}
				</button>
			</div>
			<div className="flex justify-between px-6 border-b border-dark-slate-gray h-[50px]">
				{CHOICES.map((choice, index) => (
					<div
						key={index}
						className="flex relative justify-center items-center w-20"
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
							<div className="absolute w-20 h-1 bottom-[-1px] bg-steel-blue"></div>
						)}
					</div>
				))}
			</div>
		</header>
	)
}
