export const CHOICES = [
	{
		mobile: "overview",
		tablet: "overview",
		description: "overview",
		image: "planet",
	},
	{
		mobile: "structure",
		tablet: "internal structure",
		description: "structure",
		image: "internal",
	},
	{
		mobile: "surface",
		tablet: "surface geology",
		description: "geology",
		image: "planet",
	},
]

const planetColor = {
	Mercury: "bg-steel-blue",
	Venus: "bg-sandy-brown",
	Earth: "bg-blue-violet",
	Mars: "bg-chocolate",
	Jupiter: "bg-crimson",
	Saturn: "bg-sienna",
	Uranus: "bg-light-sea-green",
	Neptune: "bg-royal-blue",
}

export const getPlanetColor = (planet) => {
	return planetColor[planet]
}
