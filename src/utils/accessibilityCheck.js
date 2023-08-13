import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export async function accessibilityCheck(container) {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}
