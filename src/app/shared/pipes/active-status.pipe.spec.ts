import { ActivationStatusPipe } from './active-status.pipe';

describe('ActiveStatusPipe', () => {
  const pipe = new ActivationStatusPipe();

  it('transforms true to "Active"', () => {
    expect(pipe.transform(true)).toBe('Active');
  });

  it('transforms false to "Inactive"', () => {
    expect(pipe.transform(false)).toBe('Inactive');
  });
});
