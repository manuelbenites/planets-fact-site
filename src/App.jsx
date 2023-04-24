import { useState } from "react"

import BackGround from "./components/BackGround"
import MenuIcon from "./components/MenuIcon"
import IconChevron from "./components/IconChevron"

import { data } from "./utils/data"

const planets = [
	{ planet: "Mercury", bg: "bg-mercury" },
	{ planet: "Venus", bg: "bg-venus" },
	{ planet: "Earth", bg: "bg-earth" },
	{ planet: "Mars", bg: "bg-mars" },
	{ planet: "Jupiter", bg: "bg-jupiter" },
	{ planet: "Saturn", bg: "bg-saturn" },
	{ planet: "Uranus", bg: "bg-uranus" },
	{ planet: "Neptune", bg: "bg-neptune" },
]

function App() {
	const [planet, setPlanet] = useState("Venus")
	const [planetDescription, setPlanetDescription] = useState("overview")
	const [planetImage, setPlanetImage] = useState("planet")
	const [planetOptions, setPlanetOptions] = useState(false)
	const handlePlanetImage = (e) => {
		setPlanetDescription(e.target.name)
	}
	const handlePlanet = (e) => {
		setPlanet(e.target.name)
	}
	const handlePlanetOptions = () => {
		if (!planetOptions) setPlanetOptions(true)
		else setPlanetOptions(false)
	}
	return (
		<div className="min-h-screen bg-midnight-blue">
			<BackGround className="absolute z-10 w-full h-screen" />
			<div className="relative z-50 px-6">
				<header>
					<div className="flex justify-between items-center h-[68px]">
						<h1 className="font-['Antonio'] uppercase text-[28px] font-normal tracking-[-1.05px]">
							the planets
						</h1>
						<button onClick={handlePlanetOptions}>
							<MenuIcon className="pointer-events-none fill-white" />
						</button>
					</div>
					<div className="flex justify-between h-[50px]">
						<button
							className="uppercase tracking-[1.93px] font-spartan"
							name="overview"
							onClick={handlePlanetImage}
						>
							overview
						</button>
						<button
							className="uppercase tracking-[1.93px] font-spartan"
							name="structure"
							onClick={handlePlanetImage}
						>
							structure
						</button>
						<button
							className="uppercase tracking-[1.93px] font-spartan"
							name="geology"
							onClick={handlePlanetImage}
						>
							surface
						</button>
					</div>
				</header>
				{planetOptions && (
					<div className="w-full bg-midnight-bluebg-midnight-blue">
						<div className="flex flex-col">
							{planets.map((item, index) => (
								<button
									className="flex justify-between items-center"
									key={index}
									name={item.planet}
									onClick={handlePlanet}
								>
									<span
										className={
											"w-5 h-5 rounded-full pointer-events-none " + item.bg
										}
									></span>
									<span className="font-bold pointer-events-none font-[League-Spartan] text-[15px] tracking-[1.36px]">
										{item.planet.toUpperCase()}
									</span>
									<IconChevron className="pointer-events-none" />
								</button>
							))}
						</div>
					</div>
				)}
				<main>
					{data
						.filter((item) => item.name == planet)
						.map((element, index) => (
							<div key={index}>
								<div className="flex justify-center items-center h-[300px]">
									<div className="relative h-[111px] w-[111px]">
										<img
											className="absolute"
											src={element.images[planetImage]}
										/>
									</div>
								</div>
								<div>
									<h1 className="font-['Antonio'] uppercase text-[40px]">
										{element.name}
									</h1>
									<p className="font-spartan">
										{element[planetDescription].content}
									</p>
									<p>
										Source:{" "}
										<a href={element[planetDescription].source}>Wikipedia</a>
									</p>
								</div>
							</div>
						))}
				</main>
			</div>
		</div>
	)
}

export default App
