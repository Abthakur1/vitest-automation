import { describe, expect, test } from 'vitest';
import { sub } from './sum';

describe('Test sum method', ()=> {
test('Verify the sum of 2 numbers');
const result: number = sub(5,2);
expect(result).to.equal(3);
})