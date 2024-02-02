import Navbar from './navbar'
import { render } from '@testing-library/react'

it('should render component navbar only example', () => {
  const DOM = render(<Navbar background='#FFF' />)

  expect(DOM.getByText(/Login/).tagName).toBe('A')
})
