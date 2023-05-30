export const CHOICES = [
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

const planetColorUnderline = {
	Mercury: "bg-steel-blue",
	Venus: "bg-sandy-brown",
	Earth: "bg-blue-violet",
	Mars: "bg-chocolate",
	Jupiter: "bg-crimson",
	Saturn: "bg-sienna",
	Uranus: "bg-light-sea-green",
	Neptune: "bg-royal-blue",
}

export const getPlanetColorUnderline = (planet) => {
	return planetColorUnderline[planet]
}
