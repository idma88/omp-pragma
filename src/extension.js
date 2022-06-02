const vscode = require('vscode');
const providerMain = require('./providers/main');
const providerDefaultClause = require('./providers/defaultClause');
const providerScheduleKindClause = require('./providers/scheduleKindClause');
const providerScheduleChunkSizeClause = require('./providers/scheduleChunkSizeClause');

const selector = [
	{ language: 'cpp' },
	{ language: 'c' }
];

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const allDirective = vscode.languages.registerCompletionItemProvider(
		selector,
		providerMain,
		' '
	);

	const defaultClause = vscode.languages.registerCompletionItemProvider(
		selector,
		providerDefaultClause,
		'('
	);

	const scheduleKindClause = vscode.languages.registerCompletionItemProvider(
		selector,
		providerScheduleKindClause,
		'(',
	);

	const scheduleChunkSizeClause = vscode.languages.registerCompletionItemProvider(
		selector,
		providerScheduleChunkSizeClause,
		' ', ','
	);

	context.subscriptions.push(allDirective, defaultClause, scheduleKindClause, scheduleChunkSizeClause);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
