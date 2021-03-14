import { DashesOrValuePipe } from './dashes-or-value.pipe';

describe('DashesOrValuePipe', () => {
  const pipe = new DashesOrValuePipe();

  it('transforms null to "---"', () => {
    expect(pipe.transform(null)).toBe('---');
  });

  it('transforms undefined to "---"', () => {
    expect(pipe.transform(undefined)).toBe('---');
  });

  it('transforms "" to "---"', () => {
    expect(pipe.transform('')).toBe('---');
  });

  it('transforms "Hello World" to "Hello World"', () => {
    expect(pipe.transform('Hello World')).toBe('Hello World');
  });
});
