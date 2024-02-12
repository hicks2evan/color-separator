// copied from source https://github.com/Evercoder/d3-color-difference/blob/master/src/euclidean.js while I figure out import

import { lab, rgb, hsl, hcl, cubehelix, RGBColor, LabColor, HCLColor, HSLColor, CubehelixColor } from 'd3-color';

function euclidean(ca1: number, ca2: number, ca3: number, cb1: number, cb2: number, cb3: number) {
	return Math.sqrt(Math.pow(ca1 - cb1, 2) + Math.pow(ca2 - cb2, 2) + Math.pow(ca3 - cb3, 2));
}

function differenceEuclideanRGB(std: string | RGBColor, smp: string | RGBColor) {
	std = rgb(std as string); smp = rgb(smp as string);
	return euclidean(std.r, std.g, std.b, smp.r, smp.g, smp.b);
}

function differenceEuclideanLab(std: string | LabColor, smp: string | LabColor) {
	std = lab(std as string); smp = lab(smp as string);
	return euclidean(std.l, std.a, std.b, smp.l, smp.a, smp.b);
}

function differenceEuclideanHcl(std: string | HCLColor, smp: string | HCLColor) {
	std = hcl(std as string); smp = hcl(smp as string);
	return euclidean(std.h, std.c, std.l, smp.h, smp.c, smp.l);
}

function differenceEuclideanHsl(std: string | HSLColor, smp: string | HSLColor) {
	std = hsl(std as string); smp = hsl(smp as string);
	return euclidean(std.h, std.s, std.l, smp.h, smp.s, smp.l);
}

function differenceEuclideanCubehelix(std: string | CubehelixColor, smp: string | CubehelixColor) {
	std = cubehelix(std as string); smp = cubehelix(smp as string);
	return euclidean(std.h, std.s, std.l, smp.h, smp.s, smp.l);
}

export {
	euclidean,
	differenceEuclideanRGB,
	differenceEuclideanLab,
	differenceEuclideanHcl,
	differenceEuclideanHsl,
	differenceEuclideanCubehelix
};