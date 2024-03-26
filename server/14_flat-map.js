const users = [
	{ userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
	{ userId: 2, username: 'Mike', attributes: ['Lovely'] },
	{ userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] },
];

/* 
	const rta = users.map((i) => i.attributes).flat();

	console.log(rta); 
*/

const rta = users.flatMap((i) => i.attributes);

console.log(rta);
