import { render } from '@testing-library/react'
import { Header } from '../src/components/Header'

test('sum', () => {
	const { getByText } = render(<Header />)

	expect(getByText('Pomo')).toBeTruthy()
})
