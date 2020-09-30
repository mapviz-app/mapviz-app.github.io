# Innovation Project - Mapviz

[![Actions Status](https://github.com/mapviz-app/mapviz-app.github.io/workflows/Deploy%20to%20GitHub%20pages/badge.svg)](https://github.com/mapviz-app/mapviz-app.github.io/actions) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[View the latest deployed version](https://mapviz-app.github.io/)

Team Godzillas innovation project Mapviz.

> TODO: add better description of the innovation project task, goal and process.

> TODO: add a description of our project idea --> _what is Mapviz_

## Development

### Getting started

Clone repository.

```bash
# Using HTTPS
$ git clone https://github.com/mapviz-app/mapviz-app.github.io.git

# Using SSH
$ git clone git@github.com:mapviz-app/mapviz-app.github.io.git


# Navigate to repository folder
$ cd mapviz-app.github.io
```

Install dependencies.

```bash
$ npm install
```

Start local development server.

```bash
$ npm start
```

### VSCode extensions

You should have **ESLint** and **Prettier** extensions added to your vscode in order for formatting and linting to work correctly.

It is also recommended to enable `"editor.formatOnSave": true` in vscode settings.

If linting is not working correctly, you might also need to add this `"eslint.validate": ["typescript", "typescriptreact"],` to the settings.

Since the project is using styled-components you probably also want to add **vscode-styled-components** extension for better syntax highlighting in the IDE.

## Development workflow

### CI/CD

This repository's continuous delivery pipeline is setup to run [semantic-release](https://github.com/semantic-release/semantic-release). This means that all of the commit messages need to follow [Angula Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) in order for semantic-release to be able to automate release and deploy step. This repository uses commitizen to format commit messages correctly. More on this below.

### Local environment

This repository is setup to use [commitizen](https://github.com/commitizen/cz-cli), [husky](https://github.com/typicode/husky/tree/master) and [lint-staged](https://github.com/okonet/lint-staged). These will prevent bad code from getting into the repository.

Husky is used to easily manage different git hooks. [View current Husky setup.](https://github.com/mapviz-app/mapviz-app.github.io/blob/4e2f62a9ec0fedc51600f39e8c350cb3c5e0ac44/package.json#L98) This repo is configured to run code on the following hooks:

- `pre-commit`

  Is run when command `git commit` is run and will run `lint-staged`. lint-staged will run eslint and prettier against the staged files and will prevent a commit if there are lint and/or formatting errors that cannot be automatically fixed. These errors need to be fixed before a commit can be made.

- `prepare-commit-msg`

  Is run when command `git commit` is run and opens `commitizen` cli tool. This is an interactive terminal session that asks questions about the commit changes and then generates a commit message in the right format for semantic-release.

  After commitizen exits it opens the commit message in vim. Here you can preview the message and make changes if someting is off. To accept the commit message type `:wq` and vim will save and close.

- `pre-push`

  Is run when command `git push` is run and will run tests before the changes/branch will be pushed to repo. If any tests fail the push will be cancelled and the tests need to be fixed before a push can be made.

---

**NOTE:** When making commits always use the `git commit` command to make new commits. This will make sure the correct commit message format is used. Also use the `git push` command when pushing changes to repo. Otherwise the git hooks might not trigger correctly.

---
