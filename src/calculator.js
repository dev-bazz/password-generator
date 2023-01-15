import { useRef, useState } from "react";

// getting maths property for calculation

function useGenerator() {
	const copy = useRef();
	const lengthRef = useRef();
	const [lowerLetterCheckbox, setLowerLetterCheckbox] = useState(true);
	const [upperLetterCheckbox, setUpperLetterCheckbox] = useState(true);
	const [numberCheckbox, setNumberCheckbox] = useState(true);
	const [symbolCheckbox, setSymbolCheckbox] = useState(true);
	const [length, setLength] = useState(4);
	
	return {
		calcMethods,
		copy,
		length,
		setLength,
		lengthRef,
		generator,
		lowerLetterCheckbox,
		upperLetterCheckbox,
		numberCheckbox,
		symbolCheckbox,
		setLowerLetterCheckbox,
		setUpperLetterCheckbox,
		setNumberCheckbox,
		setSymbolCheckbox,
	};
}

// Password Generation Methods
const { floor, random } = Math;

const calcMethods = {
	genSmallCaps: () => {
		return String.fromCharCode(calcMethods.ranDomGen(26, 97));
	},
	genLargeCaps: () => {
		return String.fromCharCode(calcMethods.ranDomGen(26, 65));
	},
	genNumber: () => {
		return String.fromCharCode(calcMethods.ranDomGen(10, 48));
	},
	genSymbol: () => {
		const symbol = `!@#$%^&*(){}[]<>,=/?|'"`;
		return symbol[calcMethods.ranDomGen(symbol.length)];
	},
	ranDomGen: (length = 10, number = 0) => {
		return floor(random() * length) + number;
	},
};

const generator = () => {
	calcMethods.genLargeCaps();
	calcMethods.genSmallCaps();
	console.log(
		"Password Generator",
		calcMethods.genSmallCaps(),
		calcMethods.genLargeCaps(),
		calcMethods.genNumber(),
		calcMethods.genSymbol()
	);
};

export { useGenerator };
