// Save the original console methods
const originalConsole = { ...console };

beforeAll(() => {
  // Mock console methods to prevent logs from cluttering the test output
  console.log = jest.fn();
  console.info = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  // Restore original console methods after all tests
  global.console = originalConsole;
});
