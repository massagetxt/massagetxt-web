const mod = {
	
	MSWPermalinkEncode (inputData) {
		if (typeof inputData !== 'string') {
			throw new Error('MSWErrorInputNotValid');
		}

		return encodeURIComponent(inputData).split('').reduce(function (coll, item) {
			return coll.concat(['(', ')', '*'].includes(item) ? `%${ parseInt(item.charCodeAt(0)).toString(16) }` : item);
		}, '');

	},
	
	MSWStringify (inputData) {
		if (typeof inputData === 'string') {
			return inputData;
		}

		if (inputData instanceof RegExp) {
			return inputData.toString();
		};

		return JSON.stringify(inputData);

	},
	
	MSWVisualString (inputData) {
		if (typeof inputData !== 'string') {
			return inputData;
		}

		return `'${ inputData.split('\n').join('\\n') }'`;

	},

};

Object.assign(exports, mod);
