const utils = require('../utils');

const values = require('./resources/values');

class scheduleKindClause {
	constructor() {
		this.reTest = new RegExp(
			utils.regexp.src.startPragmaOmp +
			utils.regexp.src.optionalParallel +
			'for .*schedule\\s*' +
			utils.regexp.src.unclosedBraked);

		this.ret = values.schedule.kind.map((node) => utils.makeCompletionItem(node));
	}

	provideCompletionItems(document, position) {
		const rawLine = utils.getLine(document, position);
		const tokens = utils.tokenize(rawLine);
		const line = utils.makeLine(tokens);

		if (!this.reTest.test(line)) return undefined;

		return this.ret
	}
};

module.exports = new scheduleKindClause;