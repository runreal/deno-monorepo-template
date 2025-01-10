import { add } from './mod.ts'
import { assertEquals } from 'jsr:@std/assert'

Deno.test('add test', () => {
	const result = add(1, 2)
	assertEquals(result, 3)
})
