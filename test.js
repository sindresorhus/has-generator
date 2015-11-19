import test from 'ava';
import x2 from './browser';
import x from './';

test(t => {
	const oldNode = /^v0\./.test(process.version);
	t.true(oldNode ? !x : x);
	t.true(oldNode ? !x2 : x2);
	t.end();
});
