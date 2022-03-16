import alfy from 'alfy';
import emoj from 'emoj';

const emojis = await emoj(alfy.input);

const items = emojis.map(emoji => ({
	title: emoji,
	arg: emoji,
	icon: {
		path: ' ', // Hide icon
	},
}));

alfy.output(items);
