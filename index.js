'use strict';
const alfy = require('alfy');
const emoj = require('emoj');

(async () => {
	const emojis = (await emoj(alfy.input));

	const items = emojis.map(emoji => {
		return {
			title: emoji,
			arg: emoji,
			icon: {
				path: ' ' // Hide icon
			}
		};
	});

	alfy.output(items);
})();

