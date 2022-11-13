import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  it('create an instance', () => {
    const pipe = new DiscountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should give discount', () => {
    const pipe = new DiscountPipe();

    const res = pipe.transform(1200, 0.1);

    expect(res).toEqual(1080);

    const res2 = pipe.transform(800, 0.1);

    expect(res2).toEqual(800);
  });
});
