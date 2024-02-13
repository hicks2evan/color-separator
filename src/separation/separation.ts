import { differenceEuclideanRGB } from '../util/colorDiff';
import { Image } from 'image-js';
import { rgb } from 'd3-color';

export const separate = async function (image: Image, colors: string[]) : Promise<Image[]> {
    const pixelArray: number[][] = image.getPixelsArray();
    const rgbColors = colors.map(color => rgb(color));

    // fill separations with white to start
    const separations: Image[] = Array(colors.length).fill({}).map(() => Image.createFrom(image, {}).invert());

    // naiive shortest euclidean distance check on each rgb pixel
    pixelArray.forEach((pixel, index) => {
        let currentColor = rgb(pixel[0], pixel[1], pixel[2]);
        
        let indexOfMin = 0;
        let min = 1000;

        rgbColors.forEach((color, index) => {
            let difference = differenceEuclideanRGB([color.r,color.g,color.b], [currentColor.r,currentColor.g,currentColor.b]);
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