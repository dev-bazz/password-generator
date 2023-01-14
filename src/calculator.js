// getting maths property for calculation
const { floor, random } = Math;
const { log: l } = console;

const calcMethods = {
	genSmallCaps: () => {
		return String.fromCharCode(calcMethods.ranDomGen(26, 97));
	},
	ranDomGen: (length = 10, number = 0) => {
		return floor(random() * length) + number;
	},
};

const useCalc = () => {
	return { calcMethods };
};

export { useCalc };

const res = calcMethods.ranDomGen()
l("this is ", res);