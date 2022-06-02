const vscode = require('vscode');

module.exports = {
	'schedule': {
		'kind': [
			{
				"token": "static",
				"kind": vscode.CompletionItemKind.Value,
				"docRef": "values/schedule/static"
			},
			{
				"token": "dynamic",
				"kind": vscode.CompletionItemKind.Value,
				"docRef": "values/schedule/dynamic"
			},
			{
				"token": "guided",
				"kind": vscode.CompletionItemKind.Value,
				"docRef": "values/schedule/guided"
			},
			{
				"token": "runtime",
				"kind": vscode.CompletionItemKind.Value,
				"docRef": "values/schedule/runtime"
			}
		]
	},
	'default': [
		{
			"token": "shared",
			"kind": vscode.CompletionItemKind.Value,
			//- "docRef": "values/default/shared"
		},
		{
			"token": "none",
			"kind": vscode.CompletionItemKind.Value,
			//- "docRef": "values/default/none"
		}
	],
	'_snipnets': {
		'section-name': {
			"token": "section-name",
			"kind": vscode.CompletionItemKind.Property,
			"insertText": "(${1:name})"
		},
		'variable-list': {
			"token": "variable-list",
			"kind": vscode.CompletionItemKind.Property,
			"insertText": "(${1:variable-list})"
		}
	}
}
