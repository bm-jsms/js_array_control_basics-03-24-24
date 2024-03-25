const numbers = [2, 4, 8, 6, 5];

function findN(arr, n) {
	return arr.find((i) => i === n);
}

console.log(findN(numbers, 5));

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

const rta = products.find(({ id }) => id === '🍔');

console.log(rta);
