'use strict';
const alfy = require('alfy');
const got = require('got');

got('emoji.getdango.com/api/emoji', {
	json: true,
	query: {
		q: alfy.input
	}
})
.then(res => {
	let all = '';

	const items = res.body.results
		.map(x => {
			const emoji = x.text;
			all += emoji;
			return {
				title: emoji,
				arg: emoji,
				icon: {
					path: ' ' // hide icon
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
});
