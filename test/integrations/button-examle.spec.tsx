import { render, screen } from '@testing-library/react'

/**Los test de integracion son aqellos que evaluan la funcionalidad de un componente de clase o funcion e incluso una vista */
function Button() {
  return <button role='button'>carlos</button>
}

describe('button example', () => {
  it('renders a heading', () => {
    render(<Button />) // renderizan en un dom

    const button = screen.getByText('carlos') as HTMLButtonElement

    expect(button.textContent).toBe('carlos')
  })
})
