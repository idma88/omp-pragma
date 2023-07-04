# OpenMP pragma code completion proposals for Visual Studio Code

[![License](https://img.shields.io/github/license/idma88/omp-pragma?style=for-the-badge)](https://github.com/idma88/omp-pragma/blob/master/LICENSE)
[![VS Code Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/idma88.omp-pragma?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.omp-pragma)
[![VS Code Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/idma88.omp-pragma?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.omp-pragma)
[![VS Code Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/idma88.omp-pragma?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.omp-pragma)
[![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/idma88.omp-pragma?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.omp-pragma)


This extension adds code completion proposals for OpenMP's pragma into Visual Studio Code.

## Features

### Code completion proposals
![Code completion proposals](https://raw.githubusercontent.com/idma88/omp-pragma/main/images/completion.gif)

### Reference for directive/clause

> Based on [Microsoft reference](https://docs.microsoft.com/en-us/cpp/parallel/openmp/2-directives)

![Reference](https://raw.githubusercontent.com/idma88/omp-pragma/main/images/reference.gif)

## Extension Settings

This extension contributes the following settings:

Settings | Description
-|-
`omp-pragma.scheduleMaxChunkSize` | Item count for *schedule* `chunk_size`
`omp-pragma.helpLang` | Reference language

## Release Notes

### 1.1.0
- Transition to semantic versioning
- Dependency update
- Update icon

### 1.0.3

- Added parameter localization in Russian

### 1.0.2

- Fixed change in the language of reference materials
- Added translation of reference materials in Russian
- Update README

### 1.0.1

- Update README

### 1.0.0

- Initial release