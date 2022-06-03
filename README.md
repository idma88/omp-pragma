# OpenMP pragma code completion proposals for Visual Studio Code

[![License](https://img.shields.io/github/license/idma88/omp-pragma?style=for-the-badge)](https://github.com/idma88/omp-pragma/blob/main/LICENSE)
[![VS Code Marketplace Version](https://vsmarketplacebadge.apphb.com/version-short/idma88.omp-pragma.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.omp-pragma)
[![VS Code Marketplace Downloads](https://vsmarketplacebadge.apphb.com/downloads-short/idma88.omp-pragma.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.omp-pragma)
[![VS Code Marketplace Installs](https://vsmarketplacebadge.apphb.com/installs-short/idma88.omp-pragma.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.omp-pragma)

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

### 1.0.2

- Fixed change in the language of reference materials
- Added translation of reference materials in Russian
- Update README

### 1.0.1

- Update README

### 1.0.0

- Initial release