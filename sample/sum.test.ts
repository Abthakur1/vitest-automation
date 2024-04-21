import { describe, expect, test } from 'vitest';
import { add } from './sum';

describe('Test sum method', ()=> {
test('Verify the sum of 2 numbers');
const result: number = add(2,5);
expect(result).to.equal(7);
})