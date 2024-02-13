function differenceEuclideanRGB(colorA: number[], colorB: number[]) {
	return euclidean(colorA[0], colorA[1], colorA[2], colorB[0], colorB[1], colorB[2]);
}

function euclidean(ca1: number, ca2: number, ca3: number, cb1: number, cb2: number, cb3: number) {
	return Math.sqrt(Math.pow(ca1 - cb1, 2) + Math.pow(ca2 - cb2, 2) + Math.pow(ca3 - cb3, 2));
}

export {
	differenceEuclideanRGB,
};