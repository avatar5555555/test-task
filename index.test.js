import { func, refactoredFunc } from './index'

const runTest = ({ a, b, str, desc }) => {
  test(desc, () => {
    const oldResult = func(str, a, b)
    const newResult = func(str, a, b)

    expect(oldResult).toBe(newResult)
  })
}

const testCases = [
  {
    a: 'a',
    b: 'a',
    str: '',
    desc: 'it checks if string is empty, a === b'
  },
  {
    a: 'a',
    b: 'a',
    str: 'bbab',
    desc: 'it checks if string is not empty, a === b'
  },
  {
    a: 'a',
    b: 'b',
    str: 'bbab',
    desc: 'it checks if string is not empty and a !== b'
  },
  {
    a: 'b',
    b: 'a',
    str: 'bbab',
    desc: 'it checks if string is not empty, a !== b, a and b is swapped'
  },
  {
    a: 'b',
    b: 'a',
    str: 'accc',
    desc: 'it checks if string is not empty, and needed char index 0'
  },
  {
    a: '',
    b: '',
    str: 'accc',
    desc: 'it checks if string is not empty, a and b are'
  }
  ,
  {
    a: '',
    b: 'a',
    str: 'cacc',
    desc: 'it checks if string and b are not empty, a is'
  }
  ,
  {
    a: 'a',
    b: '',
    str: 'cacc',
    desc: 'it checks if string and a is not empty, b are'
  }
]

describe('check if result old function and new one is equal', () => {
  testCases.forEach(runTest)

  test('it checks if to refactoredFunction not passed args', () =>
    expect(refactoredFunc()).toBe(-1)
  )

  test('it checks if refactoredFunction accepts non string first argument', () =>
    expect(refactoredFunc([], 'a', 'b')).toBe(-1)
  )
})
