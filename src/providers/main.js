const vscode = require('vscode');
const utils = require('../utils');

const clauses = require('./resources/clauses');
const directives = require('./resources/directives');
const keywords = require('./resources/keywords');
const values = require('./resources/values');

class Main {
	constructor() {
		this.ompDirectives = [
			directives['parallel'],
			directives['for'],
			directives['sections'],
			directives['single'],
			directives['critical'],
			directives['flush'],
			directives['threadprivate'],
			directives['section'],
			directives['master'],
			directives['barrier'],
			directives['atomic'],
			directives['ordered']
		];
		this.parallelClauses = [
			clauses['if'],
			clauses['private'],
			clauses['firstprivate'],
			clauses['default'],
			clauses['shared'],
			clauses['copyin'],
			clauses['reduction'],
			clauses['num_threads']
		];
		this.parallelDirectives = [
			directives['for'],
			directives['sections']
		];
		this.forClauses = [
			clauses['private'],
			clauses['firstprivate'],
			clauses['lastprivate'],
			clauses['reduction'],
			clauses['ordered'],
			clauses['schedule'],
			clauses['nowait']
		];
		this.sectionsClauses = [
			clauses['private'],
			clauses['firstprivate'],
			clauses['lastprivate'],
			clauses['reduction'],
			clauses['nowait']
		];
	}

	provideCompletionItems(document, position) {
		const rawLine = utils.getLine(document, position);
		const tokens = utils.tokenize(rawLine);

		let ret = [];

		const unclosedBraked = utils.regexp.unclosedBraked.test(tokens[tokens.length - 1]);

		const addForAndSectionsKw = (tokenInd) => {
			if (!unclosedBraked) {
				if (tokens[tokenInd] == 'for') ret = ret.concat(this.forClauses);
				if (tokens[tokenInd] == 'sections') ret = ret.concat(this.sectionsClauses);
			}
		};

		if (tokens.length == 1)
			if (tokens[0] == "#pragma")
				ret = ret.concat(keywords['omp']);
			else
				if (tokens[0] != 'omp')
					ret = ret.concat({ "token": "#pragma omp", "kind": vscode.CompletionItemKind.Snippet });

		if (tokens[1] == 'omp') {
			if (this.ompDirectives.find((node) => node.token == tokens[2]) == undefined)
				ret = ret.concat(this.ompDirectives);

			if (tokens[2] == 'parallel') {
				if (!unclosedBraked) ret = ret.concat(this.parallelClauses);

				if (tokens.length == 3)
					ret = ret.concat(this.parallelDirectives);
				else
					addForAndSectionsKw(3);
			}

			addForAndSectionsKw(2);

			if (tokens[2] == 'critical') ret = ret.concat(values['_snipnets']['section-name']);

			if (tokens[2] == 'flush') ret = ret.concat(values['_snipnets']['variable-list']);
		}

		ret = utils.unique(ret, "token");
		ret = ret.map((node) => utils.makeCompletionItem(node));

		return ret;
	}
};

module.exports = new Main;