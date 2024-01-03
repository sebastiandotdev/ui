import { render, screen } from '@testing-library/react'

describe('button example', () => {
  it('renders a heading', () => {
    render(<button role='button'>welcome to next.js</button>)

    const heading = screen.getByText('welcome to next.js')

    expect(heading.textContent).toBe('welcome to next.js')
  })
})
