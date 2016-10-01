import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();

	const result = await alfy('gimme cats');

	t.deepEqual(result[0], {
		title: '🐱',
		arg: '🐱',
		icon: {
			path: ' '
		}
	});
});
