import fs from 'fs';
import {rgb} from 'd3-color';
import { Image } from 'image-js';
import { separate } from './separation';


describe('seperate', () => {
  test('it can provide two-color separation for a small image', async () => {
    const image = await Image.load(fs.readFileSync('test-data/worm-small.png'));
    const whiteExpectation = await Image.load(fs.readFileSync('test-data/worm-small-white.png'));
    const blackExpectation = await Image.load(fs.readFileSync('test-data/worm-small-black.png'));

    const result = separate(image, [rgb(255, 255, 255), rgb(0,0,0)]);
    
    expect(result).toHaveLength(2);
    expect(result[0].data).toEqual(whiteExpectation.data);
    expect(result[1].data).toEqual(blackExpectation.data);
  });

  test('it can provide three-color separation for a large image', async () => {
    const image = await Image.load(fs.readFileSync('test-data/worm.png'));
    const whiteExpectation = await Image.load(fs.readFileSync('test-data/worm-white.png'));
    const redExpectation = await Image.load(fs.readFileSync('test-data/worm-red.png'));
    const blackExpectation = await Image.load(fs.readFileSync('test-data/worm-black.png'));

    const result = separate(image, [rgb(255, 255, 255), rgb(0,0,0), rgb(255,20,40)]);
    
    expect(result).toHaveLength(3);
    // spot check a few pixels
    expect(result[0].data[100]).toEqual(whiteExpectation.data[100]);
    expect(result[1].data[100]).toEqual(redExpectation.data[100]);
    expect(result[2].data[100]).toEqual(blackExpectation.data[100]);
    expect(result[0].data[300]).toEqual(whiteExpectation.data[300]);
    expect(result[1].data[300]).toEqual(redExpectation.data[300]);
    expect(result[2].data[300]).toEqual(blackExpectation.data[300]);
    expect(result[0].data[500]).toEqual(whiteExpectation.data[500]);
    expect(result[1].data[500]).toEqual(redExpectation.data[500]);
    expect(result[2].data[500]).toEqual(blackExpectation.data[500]);
  });
});
