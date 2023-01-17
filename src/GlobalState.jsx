import React, { createContext, useRef, useState , useContext} from 'react'
const AppState = createContext()

export default function GlobalState({ children }) {
  const {...All} = useGenerator()
  return (
    <AppState.Provider value={All}>
      {children}
    </AppState.Provider>
  )
}
// getting maths property for calculation
function useGState() {
  return useContext(AppState)
}
function useGenerator() {
	const copy = useRef(),
		copyText = useRef(),
		lengthRef = useRef();

	const [passwordResult, setPasswordResult] = useState(`...`);
	const [lowerLetterCheckbox, setLowerLetterCheckbox] = useState(false);
	const [upperLetterCheckbox, setUpperLetterCheckbox] = useState(false);
	const [numberCheckbox, setNumberCheckbox] = useState(false);
	const [symbolCheckbox, setSymbolCheckbox] = useState(false);
	const [length, setLength] = useState(4);

	const result = (payload) => {
		setPasswordResult(payload);
	};


	const generator = () => {
		// TODO: Password Generation
		// 1: Initialize password variable
		// 2: filter out unchecked type
		// 3: loop over the length and call the calc method function for each type
		// 4: pass password to result function

		let password = ``;
		const typeCount =
			upperLetterCheckbox +
			lowerLetterCheckbox +
			numberCheckbox +
			symbolCheckbox;

		if (typeCount === 0) return result(`Select a Checkbox`);

		const typeArray = [
			{ upperLetterCheckbox },
			{ lowerLetterCheckbox },
			{ numberCheckbox },
			{ symbolCheckbox },
		].filter((item) => Object.values(item)[0]);

		for (let i = 0; i < length; i += typeCount) {
			typeArray.forEach((item) => {
				const funcName = Object.keys(item)[0];
				password += calcMethods[funcName]();
			});
		}
		result(password.slice(0, length));
  };
  const cl = () => {
    console.log("Global is it?")
  }

  return {
    cl,
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
		passwordResult,
		copyText,
	};
}


// Password Generation Methods
const { floor, random } = Math;
const calcMethods = {
	lowerLetterCheckbox: () => {
		return String.fromCharCode(calcMethods.ranDomGen(26, 97));
	},
	upperLetterCheckbox: () => {
		return String.fromCharCode(calcMethods.ranDomGen(26, 65));
	},
	numberCheckbox: () => {
		return String.fromCharCode(calcMethods.ranDomGen(10, 48));
	},
	symbolCheckbox: () => {
		const symbol = `!@#$%^&*(){}[]<>,=/?|'"`;
		return symbol[calcMethods.ranDomGen(symbol.length)];
	},
	ranDomGen: (length = 10, number = 0) => {
		return floor(random() * length) + number;
	},
};

export { useGState, GlobalState };
