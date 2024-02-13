import { rgb, RGBColor } from 'd3-color';
import { differenceEuclideanRGB } from '../util/diff.js';
import { Image } from 'image-js';

export const separate = function (image: Image, colors: string[]) : Image[] {
    const pixelArray: number[][] = image.getPixelsArray();
    const rgbColors: RGBColor[] = colors.map(color => rgb(color));

    // fill separations with white to start
    const separations: Image[] = Array(colors.length).fill({}).map(() => Image.createFrom(image, {}).invert());

    // naiive shortest euclidean distance check on each rgb pixel
    pixelArray.forEach((pixel, index) => {
        let currentColor = rgb(pixel[0], pixel[1], pixel[2]);
        
        let indexOfMin = 0;
        let min = 1000;

        rgbColors.forEach((color, index) => {
            let difference = differenceEuclideanRGB(color, currentColor);
            if (difference < min) {
                min = difference;
                indexOfMin = index;
            }
        })
        
        // fill pixel of nearest color separation layer with black
        separations[indexOfMin].setPixel(index, [0,0,0]);
    })

    return separations;
}