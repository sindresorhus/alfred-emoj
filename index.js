'use strict';
const alfy = require('alfy');

(async () => {
	const data = await alfy.fetch('https://emoji.getdango.com/api/emoji', {
		query: {
			q: alfy.input
		}
	});

	let all = '';

	const items = data.results.map(item => {
		const emoji = item.text;
		all += emoji;

		return {
			title: emoji,
			arg: emoji,
			icon: {
				path: ' ' // Hide icon
			}
		};
	});

	items.push({
		title: all,
		arg: all,
		icon: {
			path: ' '
		}
	});

	alfy.output(items);
})();

