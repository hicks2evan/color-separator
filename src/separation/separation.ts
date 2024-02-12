import sharp from 'sharp';

export const separate = function (imageBuffer: Buffer, colors: string[]) : Buffer[] {
    const image = sharp(imageBuffer).rotate;
    const result: Buffer[] = [];
    return result;
}