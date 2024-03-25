const words = [
	'spray',
	'limit',
	'elite',
	'exuberant',
	'destruction',
	'present',
];

/* const newArray = [];

for (let i = 0; i < words.length; i++) {
	const element = words[i];

	if (element.length >= 6) {
		newArray.push(element);
	}
}

console.log(newArray); */

const newArray = words.filter((w) => w.length >= 6);

console.log(newArray);

const orders = [
	{
		customerName: 'Nicolas',
		total: 60,
		delivered: true,
	},
	{
		customerName: 'Zulema',
		total: 120,
		delivered: false,
	},
	{
		customerName: 'Santiago',
		total: 180,
		delivered: true,
	},
	{
		customerName: 'Valentina',
		total: 240,
		delivered: true,
	},
];

const delivered = orders.filter((i) => i.delivered && i.total >= 150);

console.log(delivered);

const search = (query) => {
	return orders.filter((u) => {
		return u.customerName.includes(query);
	});
};

console.log(search('Nicolas'));
