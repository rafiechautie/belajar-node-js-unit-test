test('test toBe', () => { 
    const name = "Eko";
    const hello = `Hello ${name}`

    expect(hello).toBe("Hello Eko")
 })

 test('should toEqual', () => { 
    let person  = { id: "eko" }
    Object.assign(person, {name: "eko"})

    expect(person).toEqual({id: "eko", name: "eko"})
  })