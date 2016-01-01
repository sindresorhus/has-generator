import test from 'ava';
import m2 from './browser';
import m from './';

test(t => {
	const oldNode = /^v0\./.test(process.version);
	t.true(oldNode ? !m : m);
	t.true(oldNode ? !m2 : m2);
});
