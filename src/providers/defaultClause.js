const utils = require('../utils');

const values = require('./resources/values');

class DefaultClause {
	constructor() {
		this.reTest = new RegExp(
			utils.regexp.src.startPragmaOmp +
			'parallel .*default\s*' +
			utils.regexp.src.unclosedBraked);

		this.ret = values.default.map((node) => utils.makeCompletionItem(node));
	}

	provideCompletionItems(document, position) {
		const rawLine = utils.getLine(document, position);
		const tokens = utils.tokenize(rawLine);
		const line = utils.makeLine(tokens);

		if (!this.reTest.test(line)) return undefined;

		return this.ret
	}
};

module.exports = new DefaultClause;