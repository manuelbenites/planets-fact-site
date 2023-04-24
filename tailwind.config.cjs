/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			spartan: ['"League Spartan"'],
		},
		extend: {
			colors: {
				"midnight-blue": "#070724",
				"dark-slate-gray": "#38384F",
				gray: "#838391",
				"steel-blue": "#419EBB",
				"sandy-brown": "#EDA249",
				"blue-violet": "#6f2ed6",
				chocolate: "#D14C32",
				crimson: "#D83A34",
				sienna: "#CD5120",
				"light-sea-green": "#1ec2a4",
				"royal-blue": "#2d68f0",
				mercury: "#DEF4FC",
				venus: "#F7CC7F",
				earth: "#545BFE",
				mars: "#FF6A45",
				jupiter: "#ECAD7A",
				saturn: "#FCCB6B",
				uranus: "#65F0D5",
				neptune: "#497EFA",
			},
		},
	},
	plugins: [],
}
