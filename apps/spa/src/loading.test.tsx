import './utils/global-jsdom.ts' // This import is necessary to setup the jsdom environment it should be at the top of the test file
import { assertEquals } from 'jsr:@std/assert'
import { describe, it } from 'jsr:@std/testing/bdd'
import { cleanup, render, screen } from '@testing-library/react'
import { Loading } from './loading.tsx'

const loadingTests = describe({
	name: 'Loading',
	beforeEach() {
	},
	afterEach() {
		cleanup()
	},
})

it(loadingTests, 'renders loading message', () => {
	render(<Loading />)
	assertEquals(screen.getByText('Loading...').textContent, 'Loading...')
})
