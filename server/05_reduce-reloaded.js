let items = [1, 3, 2, 3, 3, 10];

const rta = items.reduce((o, i) => {
	if (!o[i]) {
		o[i] = 1;
	} else {
		o[i] += 1;
	}

	return o;
}, {});

console.log(rta);

const data = [
	{
		name: 'Nicolas',
		level: 'low',
	},
	{
		name: 'Andrea',
		level: 'medium',
	},
	{
		name: 'Zulema',
		level: 'hight',
	},
	{
		name: 'Santiago',
		level: 'low',
	},
	{
		name: 'Valentina',
		level: 'medium',
	},
	{
		name: 'Lucia',
		level: 'hight',
	},
];

const rta2 = data
	.map((i) => {
		return i.level;
	})
	.reduce((total, i) => {
		if (!total[i]) {
			total[i] = 1;
		} else {
			total[i] += 1;
		}

		return total;
	}, {});

console.log(rta2);

const itm = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 10, 10, 9, 10, 7, 10, 10, 10, 10];

const rta3 = itm.reduce(
	(obj, i) => {
		if (i <= 5) {
			obj['1-5'] += 1;
		} else {
			obj['6-10'] += 1;
		}

		return obj;
	},
	{
		'1-5': 0,
		'6-10': 0,
	},
);

console.log(rta3);

const data2 = [
	{
		name: 'Nicolas',
		level: 'low',
		age: 23,
	},
	{
		name: 'Andrea',
		level: 'medium',
		age: 27,
	},
	{
		name: 'Zulema',
		level: 'hight',
		age: 89,
	},
	{
		name: 'Santiago',
		level: 'low',
		age: 15,
	},
	{
		name: 'Valentina',
		level: 'medium',
		age: 19,
	},
	{
		name: 'Lucia',
		level: 'hight',
		age: 26,
	},
];

const rta5 = data2
	.map((i) => i.age)
	.reduce(
		(obj, i) => {
			if (i <= 20) {
				obj['0-20'] += 1;
			} else if (i <= 40) {
				obj['21-40'] += 1;
			} else {
				obj['41-100'] += 1;
			}

			return obj;
		},
		{
			'0-20': 0,
			'21-40': 0,
			'41-100': 0,
		},
	);

console.log(rta5);
