const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello, ${name}!!!`;

test('should add two numbers', () => {
  const result = add(2,3);
  expect(result).toBe(5);
});

test('should return correct generateGreeting string from name', () => {
  const result = generateGreeting('Patrick');
  expect(result).toBe('Hello, Patrick!!!');
});

test('should return correct generateGreeting string from NO name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello, Anonymous!!!');
});
