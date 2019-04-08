const { succeed, fail, repair, get} = require('./enhancer.js');
// test away!

const tenEnhancementTest = {
  name: "medium item",
  durability: 10,
  enhancement: 10
}

describe('succeed() method', () => {
  test('When passing something other than an object, return an error', () => {
    expect(succeed('hello world!')).toEqual({
      error:'Pass an object, please'}
    )
  })
  test('When passing an object with one or more values being undefined, return an error', () => {
    expect(succeed({durability: 10, enhancement: 10})).toEqual({
      error:'Make sure you pass an object with a name, durability, and enhancement value'
    })
  })

  test('When passing an object with >= 20 enhancement, just return the object with 20 enhancement', () => {
    expect(succeed({
        name: "medium item", 
        durability: 10, 
        enhancement: 22
      }))
      .toEqual({
        name: "medium item",
        durability: 10,
        enhancement: 20})
  })

  test('Return an object with +1 enhancement', () => {
    expect(succeed(tenEnhancementTest)).toEqual({name: "medium item",durability: 10,enhancement: 11})
  })
})

describe('fail() method', () => {
  test('When passing something other than an object, return an error', () => {
    expect(fail('hello world!')).toEqual({
      error:'Pass an object, please'}
    )
  })
  // Question: How can you incorporate it so that you expect an error to be returned?
  // i.e. expect().toEqual(Error)
  
  test('When passing an object with one or more values being undefined, return an error', () => {
    expect(fail({durability: 10, enhancement: 10})).toEqual({
      error:'Make sure you pass an object with a name, durability, and enhancement value'
    })
  })

  test('fail returns an object with -5 durability', () => {
    expect(fail({name: "medium item", durability: 10,enhancement: 10})).toEqual({name: "medium item", durability: 5,enhancement: 10})
  })

  test('When passing an object with > 20 enhancement, reset it to 20', () => {
    expect(fail({name: "medium item", durability: 12,enhancement: 25})).toEqual({name: "medium item", durability: 2,enhancement: 19})
  })
  test('When passing an object with > 100 durability, reset it to 100', () => {
    expect(fail({name: "medium item", durability: 105,enhancement: 10})).toEqual({name: "medium item", durability: 95,enhancement: 10})
  })
  
  test('When an item with < 5 durability && < 15 enhancement, returns an object with 0 durability', () => {
    expect(fail({name: "medium item", durability: 4,enhancement: 10})).toEqual({name: "medium item", durability: 0,enhancement: 10})
    expect(fail({name: "medium item", durability: 2,enhancement: 14})).toEqual({name: "medium item", durability: 0,enhancement: 14})
  })

  test('When an item with < 10 durability && 18 enhancement, returns an object with 0 durability && 17 enhancement', () => {
    expect(fail({name: "medium item", durability: 8,enhancement: 18})).toEqual({name: "medium item", durability: 0,enhancement: 17})
  })
})

describe('repair() method', () => {
  test('When passing something other than an object, return an error', () => {
    expect(repair('hello world!')).toEqual({
      error:'Pass an object, please'}
    )
  })
  // Question: How can you incorporate it so that you expect an error to be returned?
  // i.e. expect().toEqual(Error)
  
  test('When passing an object with one or more values being undefined, return an error', () => {
    expect(repair({durability: 10, enhancement: 10})).toEqual({
      error:'Make sure you pass an object with a name, durability, and enhancement value'
    })
  })

  test('always returns with 100 durability', () => {
    expect(repair({name: "medium item", durability: 10,enhancement: 18})).toEqual({name: "medium item", durability: 100,enhancement: 18})
    expect(repair({name: "medium item", durability: 101,enhancement: 18})).toEqual({name: "medium item", durability: 100,enhancement: 18})
  })
})