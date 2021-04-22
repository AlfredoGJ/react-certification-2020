import { convertTime } from './fns';

describe('Function: convertTime', () => {
  const case1 = 'PT48S';
  const case2 = 'PT3M20S';
  const case3 = 'PT3H2M31S';

  it('Works for case 1', () => {
    const result = convertTime(case1);
    expect(result).toEqual('0:0:48');
  });

  it('Works for case 2', () => {
    const result = convertTime(case2);
    expect(result).toEqual('0:3:20');
  });

  it('Works for case 3', () => {
    const result = convertTime(case3);
    expect(result).toEqual('3:2:31');
  });
});
