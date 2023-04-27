import { usePlanets } from "../hooks/usePlanets"
import { data } from "../utils/data"

import SourceIcon from "./icons/SourceIcon"

const GEOLOGY_OPTION = "geology"

function Planets() {
	const { image, planet, description } = usePlanets()
	return (
		<main className="relative z-40 px-6 pb-10">
			{data
				.filter((item) => item.name == planet)
				.map((element, index) => (
					<div key={index} className="relative z-30">
						<div className="flex justify-center items-center min-h-[300px]">
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
						<div className="text-center">
							<h1 className="font-['Antonio'] uppercase text-[40px] mb-4">
								{element.name}
							</h1>
							<p className="mb-8 font-spartan text-[14px] leading-[22px]">
								{element[description].content}
							</p>
							<p className="flex justify-center opacity-50 font-spartan text-[14px]">
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
						<div className="flex flex-col gap-2 mt-7">
							<div className="flex justify-between items-center px-6 h-12 border border-dark-slate-gray">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									rotation time
								</p>
								<p className="font-['Antonio'] text-[20px] leading-[25px]">
									{element.rotation}
								</p>
							</div>
							<div className="flex justify-between items-center px-6 h-12 border border-dark-slate-gray">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									revolution time
								</p>
								<p className="font-['Antonio'] text-[20px] leading-[25px]">
									{element.revolution}
								</p>
							</div>
							<div className="flex justify-between items-center px-6 h-12 border border-dark-slate-gray">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									radius
								</p>
								<p className="font-['Antonio'] text-[20px] leading-[25px]">
									{element.radius}
								</p>
							</div>
							<div className="flex justify-between items-center px-6 h-12 border border-dark-slate-gray">
								<p className="font-bold uppercase opacity-50 tracking-[0.77px] font-spartan text-[11px]">
									average temp.
								</p>
								<p className="font-['Antonio'] text-[20px] leading-[25px]">
									{element.temperature}
								</p>
							</div>
						</div>
					</div>
				))}
		</main>
	)
}

export default Planets
