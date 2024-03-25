const products = [
	{
		name: 'Pizza',
		price: 12,
		id: '🍕',
	},
	{
		name: 'Burger',
		price: 23,
		id: '🍔',
	},
	{
		name: 'Hot dog',
		price: 34,
		id: '🌭',
	},
	{
		name: 'Hot cakes',
		price: 355,
		id: '🥞',
	},
];

function findIndex(arr, p) {
	const res = arr.findIndex(({ id }) => id === p);
	console.log(`Product index: ${res}`);
}

findIndex(products, '🌭');
