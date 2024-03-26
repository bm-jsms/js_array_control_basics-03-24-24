const months = ['December', 'February', 'April', 'January', 'March'];

console.log(months.sort());

const numbers = [1, 10, 6, 21, 1000, 99, 7];

console.log(numbers.sort((a, b) => a - b));

const orders = [
	{
		customerName: 'Nicolas',
		total: 600,
		delivered: true,
	},
	{
		customerName: 'Zulema',
		total: 120,
		delivered: false,
	},
	{
		customerName: 'Santiago',
		total: 1840,
		delivered: true,
	},
	{
		customerName: 'Valentina',
		total: 240,
		delivered: true,
	},
];

console.log(orders.sort((a, b) => a.total - b.total));
