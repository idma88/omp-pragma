const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

class Reference {
	constructor() {
		this.getRefDir = () => path.resolve(__dirname, `../../docs/${this.lang}`);

		this.setLang(vscode.workspace.getConfiguration('omp-pragma').referenceLang);

		if (!fs.existsSync(this.getRefDir())) this.lang = "en";
	}

	setLang(lang) {
		this.lang = lang;
		if (!fs.existsSync(this.getRefDir())) this.lang = "en";
	}

	getHelp(ref) {
		let filePath = path.resolve(this.getRefDir(), `./${ref}.md`);

		if (!fs.existsSync(filePath)) return undefined;

		const content = fs.readFileSync(filePath).toString();

		const doc = new vscode.MarkdownString(content);
		doc.isTrusted = true;
		doc.supportHtml = true;

		return doc;
	}
}

module.exports = new Reference();