const vscode = require('vscode');

module.exports = {
	"private": {
		"token": "private",
		"kind": vscode.CompletionItemKind.Property,
		"insertText": "private(${1:variable-list})",
		"docRef": "clauses/private"
	},
	"firstprivate": {
		"token": "firstprivate",
		"kind": vscode.CompletionItemKind.Property,
		"insertText": "firstprivate(${1:variable-list})",
		"docRef": "clauses/firstprivate"
	},
	"lastprivate": {
		"token": "lastprivate",
		"kind": vscode.CompletionItemKind.Property,
		"insertText": "lastprivate(${1:variable-list})",
		"docRef": "clauses/lastprivate"
	},
	"reduction": {
		"token": "reduction",
		"kind": vscode.CompletionItemKind.Property,
		"insertText": "reduction(${1|+,*,-,&,^,\\|,&&,\\|\\||} : ${2:variable-list})",
		"docRef": "clauses/reduction"
	},
	"ordered": {
		"token": "ordered",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/ordered"
	},
	"schedule": {
		"token": "schedule",
		"kind": vscode.CompletionItemKind.Property,
		"insertText": "schedule(",
		"autoTriggerSuggest": true,
		"docRef": "clauses/schedule"
	},
	"nowait": {
		"token": "nowait",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/nowait"
	},
	"if": {
		"token": "if",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/if",
		"insertText": "if(${1:scalar-expression})"
	},
	"default": {
		"token": "default",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/default",
		"insertText": "default(",
		"autoTriggerSuggest": true
	},
	"shared": {
		"token": "shared",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/shared",
		"insertText": "shared(${1:variable-list})"
	},
	"copyin": {
		"token": "copyin",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/copyin",
		"insertText": "copyin(${1:variable-list})"
	},
	"num_threads": {
		"token": "num_threads",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/num_threads",
		"insertText": "num_threads(${1|1,2,3,4,5,6,7,8,9,...|})"
	},
	"copyprivate": {
		"token": "copyprivate",
		"kind": vscode.CompletionItemKind.Property,
		"docRef": "clauses/copyprivate",
		"insertText": "copyprivate(${1:variable-list})"
	}
}
