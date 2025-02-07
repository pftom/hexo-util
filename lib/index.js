'use strict';

const hash = require('./hash');

exports.CacheStream = require('./cache_stream');
exports.camelCaseKeys = require('./camel_case_keys');
exports.Color = require('./color');
exports.createSha1Hash = hash.createSha1Hash;
exports.decodeURL = require('./decode_url');
exports.encodeURL = require('./encode_url');
exports.escapeDiacritic = require('./escape_diacritic');
exports.escapeHTML = require('./escape_html');
exports.escapeRegExp = require('./escape_regexp');
exports.full_url_for = require('./full_url_for');
exports.gravatar = require('./gravatar');
exports.hash = hash.hash;
exports.HashStream = hash.HashStream;
exports.highlight = require('./highlight');
exports.htmlTag = require('./html_tag');
exports.Pattern = require('./pattern');
exports.Permalink = require('./permalink');
exports.relative_url = require('./relative_url');
exports.slugize = require('./slugize');
exports.spawn = require('./spawn');
exports.stripHTML = require('./strip_html');
exports.truncate = require('./truncate');
exports.unescapeHTML = require('./unescape_html');
exports.url_for = require('./url_for');
exports.wordWrap = require('./word_wrap');
