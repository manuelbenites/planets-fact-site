import { usePlanets } from "../hooks/usePlanets"
import { data } from "../utils/data"
import { CHOICES } from "../utils/functions"

import SourceIcon from "./icons/SourceIcon"

const GEOLOGY_OPTION = "geology"

function Planets() {
	const { image, planet, description, setDescription, setImage } = usePlanets()
	const handleChangePlanetImage = (e) => {
		setDescription(e.target.getAttribute("data-description"))
		setImage(e.target.getAttribute("data-image"))
	}
	return (
		<main className="relative z-40 px-6 pb-10 md:px-10">
			{data
				.filter((item) => item.name == planet)
				.map((element, index) => (
					<section key={index} className="relative z-30">
						<div className="flex justify-center items-center h-[300px] md:h-[430px]">
							<div
								className={
									"relative " +
									element.width.mobile +
									" " +
									element.width.tablet
								}
							>
								<img src={element.images[image]} />
								{description === GEOLOGY_OPTION && (
									<div className="absolute left-2/4 -translate-x-2/4 bottom-[-10px] w-[70px]">
										<img className="relative" src={element.images.geology} />
									</div>
								)}
							</div>
						</div>
						<div className="flex flex-row gap-[60px]">
							<div className="text-center md:text-start">
								<h1 className="font-['Antonio'] uppercase text-[40px] mb-4">
									{element.name}
								</h1>
								<p className="mb-8 font-spartan text-[14px] leading-[22px]">
									{element[description].content}
								</p>
								<p className="flex justify-center opacity-50 md:justify-start font-spartan text-[14px]">
									Source:{" "}
									<a
										className="flex items-center font-bold opacity-50"
										href={element[description].source}
									>
										Wikipedia
										<SourceIcon />
									</a>
								</p>
							</div>
							<ul className="hidden flex-col gap-4 justify-center md:flex">
								{CHOICES.map((choice, index) => (
									<li key={index}>
										<button
											className="flex justify-start items-center border w-[281px] h-[40px] pl-[50px] border-dark-slate-gray"
											data-description={choice.description}
											data-image={choice.image}
											onClick={handleChangePlanetImage}
										>
											<span className="font-bold uppercase pointer-events-none font-spartan tracking-[1.93px] text-[12px]">
												{choice.content}
											</span>
										</button>
									</li>
								))}
							</ul>
						</div>
						<ul className="flex flex-col gap-2 mt-7 md:flex-row">
							<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-around md:items-start md:py-2 border-dark-slate-gray md:h-[88px]">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									rotation time
								</p>
								<p className="font-['Antonio'] text-[20px] md:text-[24px] leading-[25px] md:leading-[31px]">
									{element.rotation}
								</p>
							</li>
							<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-around md:items-start md:py-2 border-dark-slate-gray md:h-[88px]">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									revolution time
								</p>
								<p className="font-['Antonio'] text-[20px] md:text-[24px] leading-[25px] md:leading-[31px]">
									{element.revolution}
								</p>
							</li>
							<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-around md:items-start md:py-2 border-dark-slate-gray md:h-[88px]">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									radius
								</p>
								<p className="font-['Antonio'] text-[20px] md:text-[24px] leading-[25px] md:leading-[31px]">
									{element.radius}
								</p>
							</li>
							<li className="flex justify-between items-center px-6 w-full h-12 border md:flex-col md:justify-around md:items-start md:py-2 border-dark-slate-gray md:h-[88px]">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									average temp.
								</p>
								<p className="font-['Antonio'] text-[20px] md:text-[24px] leading-[25px] md:leading-[31px]">
									{element.temperature}
								</p>
							</li>
						</ul>
					</section>
				))}
		</main>
	)
}

export default Planets
