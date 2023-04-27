import { usePlanets } from "../hooks/usePlanets"
import { data } from "../utils/data"
import ChevronIcon from "./icons/ChevronIcon"

function Modal() {
	const { modal, setPlanet, setModal } = usePlanets()
	const handleChangePlanet = (e) => {
		setPlanet(e.target.name)
		setModal(false)
	}
	return (
		<>
			{modal && (
				<div className="absolute z-50 w-full bg-midnight-blue top-[68px] bg-midnight-bluebg-midnight-blue">
					<div className="flex flex-col gap-10 px-6 pt-11">
						{data.map((item, index) => (
							<button
								className="flex justify-between items-center"
								key={index}
								name={item.name}
								onClick={handleChangePlanet}
							>
								<span className="flex gap-6 pointer-events-none">
									<span
										className={
											"w-5 h-5 rounded-full pointer-events-none " + item.bg
										}
									></span>
									<span className="font-bold pointer-events-none font-[League-Spartan] text-[15px] tracking-[1.36px]">
										{item.name.toUpperCase()}
									</span>
								</span>
								<ChevronIcon className="pointer-events-none" />
							</button>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
