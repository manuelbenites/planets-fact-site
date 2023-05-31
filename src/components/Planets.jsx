import { usePlanets } from "../hooks/usePlanets"
import { data } from "../utils/data"
import { CHOICES, getPlanetColor } from "../utils/functions"

import SourceIcon from "./icons/SourceIcon"

const GEOLOGY_OPTION = "geology"

function PlanetSurfaceImageOptions() {
	const { description, planet, setDescription, setImage } = usePlanets()
	const handleChangePlanetImage = (e) => {
		setDescription(e.target.getAttribute("data-description"))
		setImage(e.target.getAttribute("data-image"))
	}
	const underlineBackground = getPlanetColor(planet)
	return (
		<ul className="hidden flex-col gap-4 justify-center md:flex">
			{CHOICES.map((choice, index) => (
				<li key={index} className="relative">
					{choice.description === description && (
						<div
							className={`absolute w-full h-full ${underlineBackground}`}
						></div>
					)}
					<button
						className="flex relative justify-start items-center border w-[281px] h-[40px] pl-[50px] border-dark-slate-gray lg:h-[48px] lg:w-[350px]"
						data-description={choice.description}
						data-image={choice.image}
						onClick={handleChangePlanetImage}
					>
						<span className="font-bold uppercase pointer-events-none md:hidden font-spartan tracking-[1.93px] text-[12px] lg:text-[15px]">
							{choice.mobile}
						</span>
						<span className="hidden font-bold uppercase pointer-events-none md:block font-spartan tracking-[1.93px] text-[12px] lg:text-[15px]">
							{choice.tablet}
						</span>
					</button>
				</li>
			))}
		</ul>
	)
}

function PlanetCards() {
	const { planet } = usePlanets()
	return (
		<>
			{data
				.filter((item) => item.name == planet)
				.map((element, index) => (
					<ul
						key={index}
						className="flex flex-col gap-2 mx-auto mt-7 md:flex-row md:gap-4 lg:gap-7 max-w-[1110px]"
					>
						<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-center md:items-start md:py-2 border-dark-slate-gray md:h-[88px] lg:h-[128px]">
							<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px] md:text-[12px] lg:text-[15px]">
								rotation time
							</p>
							<p className="font-['Antonio'] text-[20px] md:text-[24px] uppercase lg:text-[34px] xl:text-[40px]">
								{element.rotation}
							</p>
						</li>
						<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-center md:items-start md:py-2 border-dark-slate-gray md:h-[88px] lg:h-[128px]">
							<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px] md:text-[12px] lg:text-[15px]">
								revolution time
							</p>
							<p className="font-['Antonio'] text-[20px] md:text-[24px] uppercase lg:text-[34px] xl:text-[40px]">
								{element.revolution}
							</p>
						</li>
						<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-center md:items-start md:py-2 border-dark-slate-gray md:h-[88px] lg:h-[128px]">
							<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px] md:text-[12px] lg:text-[15px]">
								radius
							</p>
							<p className="font-['Antonio'] text-[20px] md:text-[24px] uppercase lg:text-[34px] xl:text-[40px]">
								{element.radius}
							</p>
						</li>
						<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-center md:items-start md:py-2 border-dark-slate-gray md:h-[88px] lg:h-[128px]">
							<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px] md:text-[12px] lg:text-[15px]">
								average temp.
							</p>
							<p className="font-['Antonio'] text-[20px] md:text-[24px] uppercase lg:text-[34px] xl:text-[40px]">
								{element.temperature}
							</p>
						</li>
					</ul>
				))}
		</>
	)
}

function PlanetBoard() {
	const { planet, description, image } = usePlanets()
	return (
		<>
			{data
				.filter((item) => item.name == planet)
				.map((element, index) => (
					<div
						key={index}
						className="flex relative justify-center items-center w-full h-[300px] md:h-[430px]"
					>
						<div
							className={` ${element.width.mobile} ${element.width.tablet} ${element.width.desktop}`}
						>
							<img src={element.images[image]} />
							{description === GEOLOGY_OPTION && (
								<div className="absolute left-2/4 -translate-x-2/4 w-[70px] bottom-[30px] md:w-[100px] lg:bottom-[-40px] lg:w-[143px]">
									<img className="relative" src={element.images.geology} />
								</div>
							)}
						</div>
					</div>
				))}
		</>
	)
}

function PlanetDescription() {
	const { description, planet } = usePlanets()
	return (
		<>
			{data
				.filter((item) => item.name == planet)
				.map((element, index) => (
					<div key={index} className="text-center md:text-start">
						<h1 className="font-['Antonio'] uppercase text-[40px] mb-4 md:mb-6 md:text-[48px] lg:text-[80px]">
							{element.name}
						</h1>
						<p className="mb-8 font-spartan text-[14px] leading-[22px] md:leading-[25px] lg:text-[17px]">
							{element[description].content}
						</p>
						<p className="flex justify-center opacity-50 md:justify-start font-spartan text-[14px] lg:text-[17px]">
							Source:
							<a
								className="flex items-center font-bold opacity-50"
								href={element[description].source}
							>
								Wikipedia
								<SourceIcon />
							</a>
						</p>
					</div>
				))}
		</>
	)
}

function Planets() {
	return (
		<main className="relative z-40 px-6 pb-10 md:px-10">
			<section className="relative z-30">
				<div className="flex flex-col justify-center items-center mx-auto lg:flex lg:flex-row max-w-[1110px] lg:mb-[80px] lg:mt-[105px]">
					<PlanetBoard />
					<div className="flex flex-row lg:flex-col gap-[60px] lg:w-[350px]">
						<PlanetDescription />
						<PlanetSurfaceImageOptions />
					</div>
				</div>
			</section>
			<PlanetCards />
		</main>
	)
}

export default Planets
