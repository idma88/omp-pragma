const vscode = require('vscode');
const providerDoc = require('./providers/docs');

const unique = (arr, keyProp) => [
  ...arr
    .reduce((acc, obj) =>
      (acc.set(obj[keyProp], obj), acc), new Map)
    .values()
]

const getLine = (document, position) => document.lineAt(position).text.substring(0, position.character).trim();
const tokenize = (line) => line.split(/\s+/);
const makeLine = (tokens) => tokens.join(' ');

function makeCompletionItem(node) {
  const completion = new vscode.CompletionItem(node.token, node.kind);
  if (node.insertText) completion.insertText = new vscode.SnippetString(node.insertText);
  if (node.detail) completion.detail = node.detail;
  if (node.autoTriggerSuggest) completion.command = { command: 'editor.action.triggerSuggest', title: '' };
  if (node.docRef) completion.documentation = providerDoc.getHelp(node.docRef);

  return completion;
}

function onChangeConfiguration(params) {
  providerDoc.setLang(vscode.workspace.getConfiguration('omp-pragma').referenceLang);
}

const regexpSrc = {
  startPragmaOmp: '^#pragma omp ',
  optionalParallel: '(?:parallel )?',
  unclosedBraked: '\\([^\\)]*$'
};

module.exports = {
  regexp: {
    src: regexpSrc,
    unclosedBraked: new RegExp(regexpSrc.unclosedBraked)
  },

  unique,
  getLine,
  tokenize,
  makeLine,
  makeCompletionItem,

  onChangeConfiguration
};