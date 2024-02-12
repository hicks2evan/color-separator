import png from 'png-ts';
import {rgb, RGBColor} from 'd3-color';
import { differenceEuclideanRGB} from '../util/diff';

export const separate = function (image: png, colors: RGBColor[]) : Uint8Array[] {
    const pixels = image.decodePixels();

    const resultPixels: Uint8Array[] = Array(colors.length).fill(Array(pixels.length).fill(0));

    for(let i = 0; i < pixels.length; i+=4) {
        let currentColor = rgb(pixels[i], pixels[i + 1], pixels[i + 2]);

        let indexOfMin = 0;
        let min = 1000;
        colors.forEach((color, index) => {
            let difference = differenceEuclideanRGB(color, currentColor);
            if (difference < min) {
                min = difference;
                indexOfMin = index;
            }
        })

        // fill pixels with white
        //resultPixels[indexOfMin][0] = 255;
        //resultPixels[indexOfMin][1] = 255;
        //resultPixels[indexOfMin][2] = 255;
    }

    return resultPixels;
}