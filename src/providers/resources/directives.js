const vscode = require('vscode');

module.exports = {
	"for": {
		"token": "for",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/for"
	},
	"sections": {
		"token": "sections",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/sections"
	},
	"parallel": {
		"token": "parallel",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/parallel"
	},
	"single": {
		"token": "single",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/single"
	},
	"critical": {
		"token": "critical",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/critical"
	},
	"flush": {
		"token": "flush",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/flush"
	},
	"threadprivate": {
		"token": "threadprivate",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/threadprivate",
		"insertText": "threadprivate(${1:variable-list})"
	},
	"section": {
		"token": "section",
		"kind": vscode.CompletionItemKind.Keyword
	},
	"master": {
		"token": "master",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/master"
	},
	"barrier": {
		"token": "barrier",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/barrier"
	},
	"atomic": {
		"token": "atomic",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/atomic"
	},
	"ordered": {
		"token": "ordered",
		"kind": vscode.CompletionItemKind.Keyword,
		"docRef": "directives/ordered"
	}
}
