const vscode = require('vscode');
const utils = require('../utils');

const values = require('./resources/values');

class scheduleKindClause {
	constructor() {
		this.reTest = new RegExp(
			utils.regexp.src.startPragmaOmp + 
			utils.regexp.src.optionalParallel +
			'for .*schedule\\s*\\((?:static|dynamic|guided)\\s*,');

		this.ret = values.schedule.kind.map((node) => utils.makeCompletionItem(node));
	}

	provideCompletionItems(document, position) {
		const rawLine = utils.getLine(document, position);
		const tokens = utils.tokenize(rawLine);
		const line = utils.makeLine(tokens);

		if (!this.reTest.test(line)) return undefined;

		let ret = [];

		for (let i = 1; i <= vscode.workspace.getConfiguration('omp-pragma').scheduleMaxChunkSize; ++i)
			ret.push(new vscode.CompletionItem(i.toString(), vscode.CompletionItemKind.Value));

		return ret;
	}
};

module.exports = new scheduleKindClause;