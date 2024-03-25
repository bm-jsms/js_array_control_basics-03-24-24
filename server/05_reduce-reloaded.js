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
		if (obj['1-5'] <= 5) {
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
