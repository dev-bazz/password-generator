import { useRef, useState } from "react";

// getting maths property for calculation

function useGenerator() {
	const copy = useRef();
	const lengthRef = useRef();
	const [length, setLength] = useState(4);
	return { calcMethods, copy, length, setLength, lengthRef , generator};
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

const generator = () => {
	console.log("Password Generator");
}

export { useGenerator };
