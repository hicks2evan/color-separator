import { separate } from './separation';

describe('seperate', () => {
  test('it returns an empty array of bitmaps', () => {
    const imageBuffer = Buffer.alloc(1);
      expect(separate(imageBuffer, ['#FFFFFF', '#000000', '#ADF0DE'])).toEqual([]);
  });
});
