/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2017 PayPal Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
'use strict';

var browserify = require('browserify');
var through = require('through');
var spundle = require('spundle');
var stream = require('stream');
var iferr = require('iferr');

module.exports = function (options) {
    options.precompile = function (options, cb) {
        options.skipRead = true;
        cb(null, options);
    };
    return function (data, args, callback) {
        var locale = /(.*)-(.*)/.exec(args.context.filePath.substr(1,5));
        var b = browserify();
        var converter = new stream.Writable();
        converter.data = [];
        converter._write = function (chunk, enc, cb) {
            converter.data.push(chunk);
            cb();

        };
        spundle(args.i18n.contentPath, locale[2], locale[1], iferr(callback, function (out) {
            b.require(streamOf('module.exports=' + JSON.stringify(out)), {expose: '_languagepack'})
              .bundle()
              .pipe(converter)
              .on('finish', function () {
                  var buf = Buffer.concat(converter.data); // Create a buffer from all the received chunks
                  callback(null, buf.toString());
              })
              .on('error', callback);
        }));
    };

};

function streamOf(str) {
    var o = through();
    process.nextTick(function () {
        o.end(str);
    });
    return o;
}
