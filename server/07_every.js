const numbers = [1, 44, 66, 57, 82, 87, 23];

const rta = numbers.every((i) => i <= 50);

console.log(rta);

const team = [
	{
		name: 'Nicolas',
		age: 12,
	},
	{
		name: 'Andrea',
		age: 8,
	},
	{
		name: 'Zulema',
		age: 17,
	},
	{
		name: 'Santiago',
		age: 18,
	},
];

const rta2 = team.every((i) => i.age >= 15);

console.log(rta2);
