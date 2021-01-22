/* eslint-env mocha */

import {match} from '../lib/helpers.mjs';
import assert from 'assert';

describe('wildcard matching', () => {
	it('handles * correctly', () => {
		assert.strictEqual(match('s*th*g', 'something'), true);
	});

	it('handles ? correctly', () => {
		assert.strictEqual(match('someth??g', 'something'), true);
	});
});
