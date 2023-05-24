import 'regenerator-runtime/runtime';

const text = 'Hola Mundo';
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('Tenemos una banana?', () => {
  expect(fruits).toContain('banana');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('booleano verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
}

test('Probar callback', () => {
  reverseString('Hola', (callback) => {
    expect(callback).toBe('aloH');
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if(!str){
      return reject(Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  });
}

test('Probar una promesa', () => {
  return reverseString2('Hola')
  .then(str => {
    expect(str).toBe('aloH');
  });
})

const reverseString3 = string => {
  return new Promise((resolve, reject) => {
    if(!string){
      return reject(Error('Error'));
    }
    resolve(string.split("").reverse().join(""));
  });
}

test('Probar async await', async() => {
  const string = await reverseString3("Hola");
  expect(string).toBe('aloH');
});

afterEach(() => console.log('Despues de cada una'));

afterAll(() => console.log('Despues de todas'));
