# construx-makara-browserify

[![Build Status](https://travis-ci.org/krakenjs/construx-makara-browserify.svg?branch=master)](https://travis-ci.org/krakenjs/construx-makara-browserify)
[![NPM version](https://badge.fury.io/js/construx-makara-browserify.png)](http://badge.fury.io/js/construx-makara-browserify)

[construx](https://github.com/krakenjs/construx) plugin for JIT-compiling makara-browserify resources during development of [express](http://expressjs.com/) applications.


## Requirements

This plugin requires your project to have `<whatever module>@<whatever semver>`.

## Usage

### Install

```shell
$ npm install --save-dev construx-makara-browserify
```

### Configure

Where you configure your construx plugins:

```json
"browserify-languagepack": {
    "module": construx-makara-browserify",
    "files": "**/_languagepack.js",
    "i18n": "config:i18n",
    "ext": "js"
},
```

_Note: See [construx README](https://github.com/krakenjs/construx/blob/master/README.md) for general usage of construx_
