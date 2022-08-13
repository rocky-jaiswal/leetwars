import { sayHello } from './index'

test('it works', () => {
  expect(sayHello('World')).toEqual('Hello World!')
})
