import { useRef } from "react";

// getting maths property for calculation

function useGenerator() {
	const copy = useRef();
	return { calcMethods, copy };
}

// Password Generation Methods
const { floor, random } = Math;

const calcMethods = {
	genSmallCaps: () => {
		return String.fromCharCode(calcMethods.ranDomGen(26, 97));
	},
	genLargeCaps: () => {
		return String.fromCharCode(calcMethods.ranDomGen());
	},
	ranDomGen: (length = 10, number = 0) => {
		return floor(random() * length) + number;
	},
};

export { useGenerator };
