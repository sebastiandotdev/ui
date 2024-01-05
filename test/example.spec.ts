test('should return true', () => {
  expect(true)
})

function total(a: number) {
  return a
}

/** es tu test */ /**esta funcion ejecuta la logica de tu test */

// testing unitarios que la funcion hace el trabajo correcto
it('deberia darme el total', () => {
  const isTotal = total(1000)

  expect(isTotal).toBe(1000) // similar a un if
})
