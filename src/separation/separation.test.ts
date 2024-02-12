import fs from 'fs';
import png from 'png-ts';
import {rgb} from 'd3-color';
import { separate } from './separation';


describe('seperate', () => {
  test('it returns an array of the right length', () => {
    const pngImage = png.load(fs.readFileSync('/Users/evanhicks/Documents/CODE/color-separator/data/worm-small.png'));
    expect(separate(pngImage, [rgb(255, 255, 255), rgb(0,0,0), rgb(10,100,20)])).toHaveLength(3);
  });
});
