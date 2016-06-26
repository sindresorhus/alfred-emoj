'use strict';
const got = require('got');

got('emoji.getdango.com/api/emoji', {
	json: true,
	query: {
		q: process.argv[2]
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

	console.log(JSON.stringify({items}));
})
.catch(err => {
	console.log(JSON.stringify({
		items: [{
			title: err.name,
			subtitle: err.message,
			valid: false,
			text: {
				copy: err.stack
			}
		}]
	}));
});
