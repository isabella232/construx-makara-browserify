# construx-makara-i18n-bundle

Lead Maintainer: [Matt Edelman](https://github.com/grawk)

[![Build Status](https://travis-ci.org/krakenjs/construx-makara-i18n-bundle.svg?branch=master)](https://travis-ci.org/krakenjs/construx-makara-i18n-bundle)
[![NPM version](https://badge.fury.io/js/construx-makara-i18n-bundle.png)](http://badge.fury.io/js/construx-makara-i18n-bundle)

[construx](https://github.com/krakenjs/construx) plugin for JIT-compiling makara-i18n-bundle resources during development of [express](http://expressjs.com/) applications.


## Requirements

This plugin requires your project to have `<whatever module>@<whatever semver>`.

## Usage

### Install

```shell
$ npm install --save-dev construx-makara-i18n-bundle
```

### Configure

Where you configure your construx plugins:

```json
{
    "makara-i18n-bundle": {
        "module": "construx-makara-i18n-bundle",
        "files": "/makara-i18n-bundle/**/*.compiled",
    }
}
```

_Note: See [construx README](https://github.com/krakenjs/construx/blob/master/README.md) for general usage of construx_

