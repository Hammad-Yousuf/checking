/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "a7c5");
/******/ })
/************************************************************************/
/******/ ({

/***/ "022d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "07ff":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),

/***/ "1c51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramWidget_vue_vue_type_style_index_0_id_6ce63ec7_prod_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5292");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramWidget_vue_vue_type_style_index_0_id_6ce63ec7_prod_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramWidget_vue_vue_type_style_index_0_id_6ce63ec7_prod_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramWidget_vue_vue_type_style_index_0_id_6ce63ec7_prod_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramWidget_vue_vue_type_style_index_0_id_6ce63ec7_prod_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "3810":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "3875":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("b489");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "3a61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "4739":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "47c8":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("6fc9")))

/***/ }),

/***/ "4c32":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");
var bind = __webpack_require__("e506");
var Axios = __webpack_require__("b9a8");
var mergeConfig = __webpack_require__("66b8");
var defaults = __webpack_require__("6d1b");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("b489");
axios.CancelToken = __webpack_require__("3875");
axios.isCancel = __webpack_require__("7b98");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("eacf");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("3810");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "5292":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("acca");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("c4de").default
module.exports.__inject__ = function (shadowRoot) {
  add("33a1e1b8", content, shadowRoot)
};

/***/ }),

/***/ "66b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "6840":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("d8a1");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "6d1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("a2f8");
var normalizeHeaderName = __webpack_require__("ef59");
var enhanceError = __webpack_require__("3a61");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("cdfe");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("cdfe");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("6fc9")))

/***/ }),

/***/ "6fc9":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("47c8");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "70e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "7338":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4c32");

/***/ }),

/***/ "7b98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "7f09":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "82e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");
var transformData = __webpack_require__("e0e9");
var isCancel = __webpack_require__("7b98");
var defaults = __webpack_require__("6d1b");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "8543":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "8755":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("4739");
var combineURLs = __webpack_require__("8543");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "8b41":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "91e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__("07ff");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "a2f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("e506");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "a7c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("dc36")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ../node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("022d");

// EXTERNAL MODULE: ../node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("c4de");

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7100fa52-vue-loader-template"}!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/InstagramWidget.vue?vue&type=template&id=6ce63ec7&scoped=true&shadow
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.profileFetchState === 'fetching' || _vm.profileFetchState === 'error' ? _c('div', {
    staticClass: "fetch_loader"
  }, [_vm.profileFetchState === 'fetching' ? _c('b-spinner') : _vm._e(), _vm.profileFetchState === 'error' ? _c('h3', {
    staticClass: "error_fetching"
  }, [_vm._v(_vm._s(_vm.profileFetchMessage))]) : _vm._e()], 1) : _vm._e(), _vm.profileFetchState === '' || _vm.profileFetchState === 'success' ? _c('div', [_vm.posts_type === 'profile' ? _c('div', [_vm.editor.layout.show_profile_details ? _c('div', [_c('div', {
    staticClass: "profile_details_container",
    style: {
      backgroundColor: _vm.editor.styles.header_bg,
      color: _vm.editor.styles.header_text
    }
  }, [_c('div', {
    staticClass: "profile_details_left"
  }, [_vm.editor.layout.profile_details.profile_image ? _c('div', {
    staticClass: "profile_picture_container rounded rounded-circle"
  }, [_c('img', {
    staticClass: "profile_picture",
    attrs: {
      "src": _vm.profile.profile_picture_url ? _vm.profile.profile_picture_url : '/images/widget-layouts/profile.jpg'
    }
  })]) : _vm._e(), _c('div', {
    staticClass: "profile_names_container"
  }, [_c('div', {
    staticClass: "username_container"
  }, [_vm.editor.layout.profile_details.name ? _c('h3', {
    staticClass: "name",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_vm._v(_vm._s(_vm.profile.name))]) : _vm._e()]), _c('div', {
    staticClass: "username_container"
  }, [_vm.editor.layout.profile_details.username ? _c('h3', {
    staticClass: "username",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_vm._v(" " + _vm._s(_vm.profile.username) + " ")]) : _vm._e()])])]), _c('div', {
    staticClass: "profile_insights_container"
  }, [_vm.editor.layout.profile_details.post_count ? _c('p', {
    staticClass: "insight_count_tag",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_c('strong', {
    staticClass: "post_count",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_vm._v(_vm._s(_vm.profile.media_count))]), _vm._v(" posts ")]) : _vm._e(), _vm.editor.layout.profile_details.followers ? _c('p', {
    staticClass: "insight_count_tag",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_c('strong', {
    staticClass: "followers_count",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_vm._v(_vm._s(_vm.profile.followers_count))]), _vm._v(" followers ")]) : _vm._e(), _vm.editor.layout.profile_details.following ? _c('p', {
    staticClass: "insight_count_tag",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_c('strong', {
    staticClass: "following_count",
    style: {
      color: _vm.editor.styles.header_text
    }
  }, [_vm._v(_vm._s(_vm.profile.follows_count))]), _vm._v(" following ")]) : _vm._e()]), _c('div', {
    staticClass: "follow_button_container"
  }, [_vm.editor.layout.profile_details.follow_button ? _c('button', {
    staticClass: "follow_button",
    style: {
      backgroundColor: _vm.editor.styles.follow_button_bg,
      color: _vm.editor.styles.follow_button_text
    },
    on: {
      "click": _vm.redirectToProfile
    }
  }, [_c('i', {
    staticClass: "uil uil-instagram"
  }), _vm._v(" Follow ")]) : _vm._e()])])]) : _vm._e()]) : _vm._e(), _vm.editor.layout.layoutStyle === 'grid' ? _c('div', {
    staticClass: "posts_container grid_layout_posts_container",
    style: {
      gridTemplateColumns: `repeat(${_vm.editor.layout.columns}, 1fr)`,
      gap: _vm.editor.layout.padding + 'px'
    }
  }, [_vm._l(_vm.filteredPosts, function (post) {
    return _c('div', {
      key: post.id,
      staticClass: "post image_card",
      on: {
        "click": function ($event) {
          return _vm.post_action(post);
        }
      }
    }, [_c('div', {
      staticClass: "media_wrapper"
    }, [_c('i', {
      staticClass: "media_icon",
      class: {
        'uil uil-play': post.media_type === 'VIDEO',
        'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM'
      }
    }), post.media_type === 'IMAGE' && post.media_product_type === 'FEED' ? _c('img', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url,
        "alt": "Post image"
      }
    }) : post.media_type === 'IMAGE' ? _c('img', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url,
        "alt": "Post image"
      }
    }) : post.media_type === 'CAROUSEL_ALBUM' ? _c('img', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url,
        "alt": "Post image"
      }
    }) : _vm._e(), post.media_type === 'VIDEO' && post.media_product_type === 'REELS' ? _c('video', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url
      }
    }) : post.media_type === 'VIDEO' ? _c('video', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url
      }
    }) : _vm._e()]), _c('div', {
      staticClass: "post_insights_container"
    }, [_c('span', {
      staticClass: "d-flex gap-5"
    }, [_c('p', {
      staticClass: "post_like"
    }, [_c('i', {
      staticClass: "uil uil-heart-alt"
    }), _vm._v(_vm._s(post.like_count) + " ")]), _c('p', {
      staticClass: "post_like ml-3"
    }, [_c('i', {
      staticClass: "uil uil-comment"
    }), _vm._v(_vm._s(post.comments_count) + " ")])])])]);
  }), _vm._l(_vm.expandedPosts, function (post) {
    return _c('div', {
      key: post.id,
      staticClass: "post expanded"
    }, [_c('div', {
      staticClass: "post_header justify-content-between align-items-center"
    }, [_c('div', {
      staticClass: "d-flex justify-content-start align-items-center"
    }, [_vm.editor.post_style.post_details.profile_image ? _c('div', {
      staticClass: "profile_image_container"
    }, [_c('img', {
      staticClass: "profile_image",
      attrs: {
        "src": _vm.profile.profile_picture_url ? _vm.profile.profile_picture_url : '/images/widget-layouts/profile.jpg',
        "alt": _vm.profile.name
      }
    })]) : _vm._e(), _vm.editor.post_style.post_details.username ? _c('div', {
      staticClass: "post_username_container mx-1"
    }, [_c('h3', {
      staticClass: "username"
    }, [_vm._v(_vm._s(_vm.profile.username))])]) : _vm._e()]), _c('div', {
      staticClass: "font-size-24 mx-2"
    }, [_c('a', {
      attrs: {
        "href": 'https://instagram.com/' + _vm.profile.username,
        "target": "_blank"
      }
    }, [_c('i', {
      staticClass: "uil uil-instagram instagram_icon"
    })])])]), _c('div', {
      staticClass: "post_image_container",
      on: {
        "click": function ($event) {
          return _vm.post_action(post);
        }
      }
    }, [_c('div', {
      staticClass: "media_wrapper"
    }, [_c('i', {
      staticClass: "media_icon",
      class: {
        'uil uil-play': post.media_type === 'VIDEO',
        'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM'
      }
    }), post.media_type === 'IMAGE' && post.media_product_type === 'FEED' ? _c('img', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url,
        "alt": "Post image"
      }
    }) : post.media_type === 'IMAGE' ? _c('img', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url,
        "alt": "Post image"
      }
    }) : post.media_type === 'CAROUSEL_ALBUM' ? _c('img', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url,
        "alt": "Post image"
      }
    }) : _vm._e(), post.media_type === 'VIDEO' && post.media_product_type === 'REELS' ? _c('video', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url
      }
    }) : post.media_type === 'VIDEO' ? _c('video', {
      staticClass: "post_image",
      attrs: {
        "src": post.media_url
      }
    }) : _vm._e()])]), _c('div', {
      staticClass: "post_footer",
      on: {
        "click": function ($event) {
          return _vm.post_action(post);
        }
      }
    }, [_c('div', {
      staticClass: "post_insights_container"
    }, [_c('span', {
      staticClass: "d-flex gap-5"
    }, [_vm.editor.post_style.post_details.likes_count ? _c('p', {
      staticClass: "post_like"
    }, [_c('i', {
      staticClass: "uil uil-heart-alt"
    }), _vm._v(_vm._s(post.like_count) + " ")]) : _vm._e(), _vm.editor.post_style.post_details.comments_count ? _c('p', {
      staticClass: "post_like ml-2"
    }, [_c('i', {
      staticClass: "uil uil-comment"
    }), _vm._v(_vm._s(post.comments_count) + " ")]) : _vm._e()])]), _vm.editor.post_style.post_details.caption ? _c('p', {
      staticClass: "post_caption"
    }, [_vm._v(_vm._s(post.caption))]) : _vm._e()])]);
  })], 2) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/InstagramWidget.vue?vue&type=template&id=6ce63ec7&scoped=true&shadow

// EXTERNAL MODULE: ../node_modules/axios/index.js
var axios = __webpack_require__("7338");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/InstagramWidget.vue?vue&type=script&lang=js&shadow

axios_default.a.defaults.baseURL = ( true ? window.location.origin.includes('staging.') ? 'http://127.0.0.1:8000/' : 'http://127.0.0.1:8000/' : undefined) + 'api/v1';
/* harmony default export */ var InstagramWidgetvue_type_script_lang_js_shadow = ({
  name: "InstagramWidget",
  data() {
    return {
      profileFetchState: '',
      profileFetchMessage: '',
      profile: {
        username: '',
        name: '',
        profile_picture_url: '',
        followers_count: '',
        follows_count: '',
        media_count: ''
      },
      tokens: {
        accessToken: '',
        igID: ''
      },
      posts: [{
        'id': '',
        'like_count': '',
        'comments_count': '',
        'caption': '',
        'media_url': ''
      }],
      posts_type: 'profile',
      widgetId: 0,
      new_widget_title: '',
      editor: {
        source: {
          username: 'elonreevmusk',
          type: 'username'
        },
        layout: {
          layoutStyle: 'grid',
          rows: 3,
          columns: 3,
          show_profile_details: true,
          profile_details: {
            profile_image: true,
            username: true,
            name: true,
            follow_button: true,
            post_count: true,
            followers: true,
            following: true
          },
          padding: 5
        },
        post_style: {
          post_style: 'image_card',
          post_details: {
            profile_image: true,
            username: true,
            likes_count: true,
            comment_count: true,
            caption: true
          },
          post_action: 'instagram'
        },
        editing: 'layout',
        styles: {
          theme: 'light',
          header_bg: '#ffffff',
          header_text: '#000000',
          follow_button_bg: '#0081ff',
          follow_button_text: '#ffffff',
          load_more_button_bg: '#0081ff',
          load_more_button_text: '#ffffff'
        }
      },
      gettingWidget: false,
      additionalPostsToShow: 0,
      widgets: [],
      selectedWidget: null
    };
  },
  computed: {
    widgetList() {
      let widgets = this.$store.getters['igwidget/all'];
      console.log(widgets);
      return this.$store.getters['igwidget/all'];
    },
    visiblePostCount() {
      return this.editor.layout.columns * this.editor.layout.rows + this.additionalPostsToShow;
    },
    visiblePosts() {
      const maxPosts = this.editor.layout.columns * this.editor.layout.rows + this.additionalPostsToShow;
      const filteredPosts = this.posts.filter(post => post.media_url);
      return filteredPosts.slice(0, maxPosts);
    },
    showLoadMore() {
      console.log(this.visiblePostCount);
      console.log(this.posts.length);
      return this.visiblePostCount < this.posts.length;
    },
    filteredPosts() {
      return this.posts.filter(post => {
        return this.editor.post_style.post_style === 'image_card' && post.media_url;
      });
    },
    expandedPosts() {
      return this.posts.filter(post => {
        return this.editor.post_style.post_style === 'expanded' && post.media_url;
      });
    }
  },
  mounted() {
    this.getWidget(false);
  },
  watch: {
    reload: val => {
      undefined.getWidget(false);
      console.log(val);
    },
    'editor.styles.theme': function (newTheme) {
      if (newTheme === 'dark') {
        this.editor.styles.header_bg = '#1b1b1b';
        this.editor.styles.header_text = '#ffffff';
        this.editor.styles.follow_button_bg = '#333333';
        this.editor.styles.follow_button_text = '#ffffff';
        this.editor.styles.load_more_button_bg = '#333333';
        this.editor.styles.load_more_button_text = '#ffffff';
      } else if (newTheme === 'light') {
        this.editor.styles.header_bg = '#ffffff';
        this.editor.styles.header_text = '#000000';
        this.editor.styles.follow_button_bg = '#0081ff';
        this.editor.styles.follow_button_text = '#ffffff';
        this.editor.styles.load_more_button_bg = '#0081ff';
        this.editor.styles.load_more_button_text = '#ffffff';
      }
    }
  },
  methods: {
    loadMore() {
      this.additionalPostsToShow += this.editor.layout.columns;
      console.log(this.additionalPostsToShow);
    },
    getWidget(fetchProfile = false) {
      var _this$editor$source$u;
      let username = (_this$editor$source$u = this.editor.source.username) !== null && _this$editor$source$u !== void 0 ? _this$editor$source$u : 'elonreevmusk';
      this.gettingWidget = true;
      this.profileFetchState = 'fetching';
      if (fetchProfile) {
        if (this.editor.source.type === 'username') {
          this.$store.dispatch('igwidget/getIgWidget', {
            username: username
          }).then(res => {
            if (res.businessDetails) {
              this.profile = res.businessDetails;
              this.posts = res.businessDetails.media.data;
              console.log(this.profile);
              this.gettingWidget = false;
              this.profileFetchState = 'success';
              this.posts_type = 'profile';
              if (fetchProfile !== true) {
                this.showWidgetModal();
              }
            } else {
              console.log('Invalid Username or You\'re trying to access a private account');
              this.gettingWidget = false;
              this.profileFetchState = 'error';
              this.profileFetchMessage = 'Invalid Username or You\'re trying to access a private account';
            }
          }).catch(error => {
            console.log(error);
            console.log('Invalid Username or You\'re trying to access a private account');
            this.gettingWidget = false;
            this.profileFetchState = 'error';
            this.profileFetchMessage = 'Invalid Username or You\'re trying to access a private account';
          });
        } else {
          this.$store.dispatch('igwidget/searchKeyword', {
            username: username
          }).then(res => {
            console.log(res);
            this.posts = res;
            this.gettingWidget = false;
            this.profileFetchState = 'success';
            this.posts_type = 'profile';
            this.posts_type = 'hashtag';
            if (fetchProfile !== true) {
              this.showWidgetModal();
            }
          }).catch(error => {
            console.log(error);
            console.log('Invalid Username or You\'re trying to access a private account');
            this.gettingWidget = false;
            this.profileFetchState = 'error';
            this.profileFetchMessage = 'Invalid Username or You\'re trying to access a private account';
          });
        }
      } else {
        console.log("Fetching Profile");
        if (this.editor.source.type === 'username') {
          this.$store.dispatch('igwidget/getIgWidget', {
            username: username
          }).then(res => {
            if (res.businessDetails) {
              this.profile = res.businessDetails;
              this.posts = res.businessDetails.media.data;
              console.log(this.profile);
              this.gettingWidget = false;
              this.profileFetchState = 'success';
              this.posts_type = 'profile';
              if (fetchProfile !== true) {
                this.showWidgetModal();
              }
            } else {
              console.log('Invalid Username or You\'re trying to access a private account');
              this.gettingWidget = false;
              this.profileFetchState = 'error';
              this.profileFetchMessage = 'Invalid Username or You\'re trying to access a private account';
            }
          }).catch(error => {
            console.log(error);
            console.log('Invalid Username or You\'re trying to access a private account');
            this.gettingWidget = false;
            this.profileFetchState = 'error';
            this.profileFetchMessage = 'Invalid Username or You\'re trying to access a private account';
          });
        } else {
          this.$store.dispatch('igwidget/searchKeyword', {
            username: username
          }).then(res => {
            console.log(res);
            this.posts = res;
            this.gettingWidget = false;
            this.profileFetchState = 'success';
            this.posts_type = 'profile';
            this.posts_type = 'hashtag';
            if (fetchProfile !== true) {
              this.showWidgetModal();
            }
          }).catch(error => {
            console.log(error);
            console.log('Invalid Username or You\'re trying to access a private account');
            this.gettingWidget = false;
            this.profileFetchState = 'error';
            this.profileFetchMessage = 'Invalid Username or You\'re trying to access a private account';
          });
        }
      }
    },
    post_action(post) {
      if (this.editor.post_style.post_action === 'instagram') {
        window.open(post.permalink, '_blank');
      } else {
        this.showPostModal = true;
        this.$nextTick(() => {
          setTimeout(() => {
            const postId = 'post_' + post.id;
            const postElement = document.getElementById(postId);
            if (postElement) {
              postElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }, 300);
        });
      }
    },
    redirectToProfile() {
      if (this.profile && this.profile.username) {
        // Redirect to user's Instagram profile
        window.open(`https://www.instagram.com/${this.profile.username}`, '_blank');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/InstagramWidget.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_InstagramWidgetvue_type_script_lang_js_shadow = (InstagramWidgetvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/InstagramWidget.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("1c51")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_InstagramWidgetvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6ce63ec7",
  null
  ,true
)

/* harmony default export */ var InstagramWidgetshadow = (component.exports);
// CONCATENATED MODULE: ../node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('instagram-widget', vue_wc_wrapper(external_Vue_default.a, InstagramWidgetshadow))

/***/ }),

/***/ "acca":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("022d");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".fetch_loader[data-v-6ce63ec7]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.customer_select[data-v-6ce63ec7]{border:1px solid #8a8a8a;border-radius:4px;color:#000;*[data-v-6ce63ec7]{color:#000}}.source_input[data-v-6ce63ec7]{width:100%;border-radius:4px;border:2px solid #456db9}.source_button[data-v-6ce63ec7],.source_input[data-v-6ce63ec7]{padding:.5rem;font-size:1.1rem}.source_button[data-v-6ce63ec7]{height:100%;background:#284273;color:#fff;border:none}.v-select[data-v-6ce63ec7]{cursor:pointer!important;*[data-v-6ce63ec7]{cursor:pointer!important}}.layouts_wrapper[data-v-6ce63ec7]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1rem}.layout-item[data-v-6ce63ec7]{.btn[data-v-6ce63ec7]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;img[data-v-6ce63ec7]{width:5rem}img[data-v-6ce63ec7],label[data-v-6ce63ec7]{display:inline-block}label[data-v-6ce63ec7]{font-size:12px}}}.instagram-widget[data-v-6ce63ec7]{max-height:93vh;overflow-y:scroll;.profile_details_container[data-v-6ce63ec7]{padding:2rem 1rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:3rem;.profile_details_left[data-v-6ce63ec7]{gap:1rem}.profile_picture_container[data-v-6ce63ec7]{width:80px;height:80px;border-radius:50%}.profile_picture[data-v-6ce63ec7]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:50%}.profile_names_container[data-v-6ce63ec7]{justify-self:flex-start;.name[data-v-6ce63ec7]{margin-bottom:.2rem;color:#222}.username[data-v-6ce63ec7]{font-size:16px;font-weight:400;margin-block:0;color:#555}.username[data-v-6ce63ec7]:before{content:\"@\"}}.follow_button[data-v-6ce63ec7]{background:#007fff;color:#fff;padding:.5rem 1rem;border-radius:4px;border:none}.profile_insights_container[data-v-6ce63ec7]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;.insight_count_tag[data-v-6ce63ec7]{//display:inline-block;margin-inline:.5rem;font-size:18px;margin-bottom:0;color:#555;line-height:1;text-transform:capitalize;strong[data-v-6ce63ec7]{display:block;text-align:center;color:#222;font-size:22px;margin-bottom:.2rem}}}}.posts_container[data-v-6ce63ec7]{padding:1rem 2rem}.grid_layout_posts_container[data-v-6ce63ec7]{display:grid;//grid-template-columns:repeat(,1fr);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:.5rem}.post[data-v-6ce63ec7]{cursor:pointer}.media_wrapper[data-v-6ce63ec7]{width:100%;height:100%;aspect-ratio:1;position:relative;background:#0a0a0a;.media_icon[data-v-6ce63ec7]{position:absolute;right:1rem;top:1rem;color:#fff;font-size:2rem;font-weight:700}}.post.image_card:hover .post_insights_container[data-v-6ce63ec7]{display:grid;place-items:center}.post.image_card[data-v-6ce63ec7]{width:100%;position:relative;img.post_image[data-v-6ce63ec7],video.post_image[data-v-6ce63ec7]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.post_insights_container[data-v-6ce63ec7]{width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.5);display:none;.post_like[data-v-6ce63ec7]{font-size:1.5rem;color:#fff}}}.post.expanded[data-v-6ce63ec7]{width:100%;overflow:hidden;.post_header[data-v-6ce63ec7]{display:-webkit-box;display:-ms-flexbox;display:flex;gap:.3rem;margin-bottom:.5rem;.profile_image[data-v-6ce63ec7]{width:50px;border-radius:50%}.username[data-v-6ce63ec7]{font-size:.9rem;font-weight:700;color:#111}}.post_image_container[data-v-6ce63ec7]{.media_wrapper[data-v-6ce63ec7]{height:100%;aspect-ratio:1;position:relative;img.post_image[data-v-6ce63ec7]{height:100%;-o-object-fit:cover;object-fit:cover}video.post_image[data-v-6ce63ec7]{height:100%}}}.post_footer[data-v-6ce63ec7]{.post_insights_container[data-v-6ce63ec7]{p[data-v-6ce63ec7]{margin-block:.5rem;font-size:1.2rem;color:#111}}.post_caption_container[data-v-6ce63ec7]{.caption[data-v-6ce63ec7]{color:#111;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}}}}.load_more_container[data-v-6ce63ec7]{width:100%;margin-top:2rem;margin-bottom:2rem;text-align:center;.load_more_button[data-v-6ce63ec7]{background:#007fff;color:#fff;padding:.5rem 1rem;border-radius:4px;border:none;margin-inline:auto;margin-block:.5rem;font-size:1.1rem}}}.modal-body[data-v-6ce63ec7]{.media_wrapper[data-v-6ce63ec7]{width:100%;height:100%;aspect-ratio:1;position:relative;.media_icon[data-v-6ce63ec7]{position:absolute;right:1rem;top:1rem;color:#fff;font-size:2rem;font-weight:700}img.post_image[data-v-6ce63ec7]{-o-object-fit:cover;object-fit:cover}img.post_image[data-v-6ce63ec7],video.post_image[data-v-6ce63ec7]{width:100%;height:100%}}}.modal_posts_container .post.expanded[data-v-6ce63ec7]{width:100%;overflow:hidden;border-bottom:1px solid #cecece;.post_header[data-v-6ce63ec7]{display:-webkit-box;display:-ms-flexbox;display:flex;gap:.3rem;padding-block:.5rem;cursor:pointer;.profile_image[data-v-6ce63ec7]{width:40px;border-radius:50%}.username[data-v-6ce63ec7]{font-size:.9rem;font-weight:700;color:#111}.follow_btn_post[data-v-6ce63ec7]{border:none;background:transparent;color:#0e8dc7;font-size:.9rem}}.post_image_container[data-v-6ce63ec7]{width:100%;img.post_image[data-v-6ce63ec7]{-o-object-fit:cover;object-fit:cover}}.media_wrapper[data-v-6ce63ec7],img.post_image[data-v-6ce63ec7],video.post_image[data-v-6ce63ec7]{width:100%;height:100%}.media_wrapper[data-v-6ce63ec7]{aspect-ratio:1;position:relative;.media_icon[data-v-6ce63ec7]{position:absolute;right:1rem;top:1rem;color:#fff;font-size:2rem;font-weight:700}}.post_footer[data-v-6ce63ec7]{.post_insights_container[data-v-6ce63ec7]{p[data-v-6ce63ec7]{margin-block:.5rem;font-size:1.2rem;color:#111}}.post_caption_container[data-v-6ce63ec7]{.caption[data-v-6ce63ec7]{color:#111;//overflow:hidden;//display:-webkit-box;//-webkit-line-clamp:3;//line-clamp:3;//-webkit-box-orient:vertical}}}}li[data-v-6ce63ec7]:has(.profile_details){-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important;.profile_details[data-v-6ce63ec7],li[data-v-6ce63ec7]{width:100%}li[data-v-6ce63ec7]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.5rem}}.instagram-widget.dark[data-v-6ce63ec7]{background:#1b1b1b!important;*[data-v-6ce63ec7]{color:#fff!important}.post[data-v-6ce63ec7]{border:1px solid #1f1d10}.post *[data-v-6ce63ec7]{color:#fff!important}.media_wrapper[data-v-6ce63ec7]{background:#0a0a0a}.media_icon[data-v-6ce63ec7]{color:#fff}}.modal-header.dark[data-v-6ce63ec7]{background:#1b1b1b!important;*[data-v-6ce63ec7]{color:#fff!important}}.modal-body[data-v-6ce63ec7]:has(.dark){background:#1b1b1b!important;color:#fff!important;.dark *[data-v-6ce63ec7]{color:#fff!important}}", "",{"version":3,"sources":["C:/laragon/www/social-fusion/instagram-widget/src/components/C:/laragon/www/social-fusion/instagram-widget/src/components/src/components/InstagramWidget.vue"],"names":[],"mappings":"AAybA,+BACA,UAAA,CACA,WAAA,CACA,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,2BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,qBAAA,CACA,uBAAA,CAAA,oBAAA,CAAA,sBAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,kBACA,CAEA,kCACA,wBAAA,CACA,iBAAA,CACA,UAAA,CAEA,mBACA,UACA,CACA,CAEA,+BACA,UAAA,CAEA,iBAAA,CACA,wBAEA,CAEA,+DANA,aAAA,CAGA,gBAUA,CAPA,gCACA,WAAA,CACA,kBAAA,CACA,UAAA,CACA,WAGA,CAEA,2BACA,wBAAA,CAEA,mBACA,wBACA,CACA,CAEA,kCACA,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,kBAAA,CAAA,cAAA,CACA,QACA,CAEA,8BAEA,sBACA,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,2BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,qBAAA,CACA,uBAAA,CAAA,oBAAA,CAAA,sBAAA,CACA,yBAAA,CAAA,sBAAA,CAAA,iBAAA,CAEA,qBAEA,UACA,CAEA,4CAJA,oBAOA,CAHA,uBAEA,cACA,CACA,CAEA,CAEA,mCACA,eAAA,CACA,iBAAA,CAEA,4CACA,iBAAA,CAGA,uBAAA,CAAA,oBAAA,CAAA,sBAAA,CACA,QAAA,CAEA,uCAGA,QACA,CAEA,4CACA,UAAA,CACA,WAAA,CACA,iBACA,CAEA,kCACA,UAAA,CACA,WAAA,CACA,mBAAA,CAAA,gBAAA,CACA,iBACA,CAEA,0CACA,uBAAA,CAEA,uBACA,mBAAA,CACA,UACA,CAEA,2BACA,cAAA,CACA,eAAA,CACA,cAAA,CACA,UACA,CAEA,kCACA,WACA,CACA,CAGA,gCACA,kBAAA,CACA,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,WACA,CAEA,6CAEA,uBAAA,CAAA,oBAAA,CAAA,sBAAA,CAGA,oCACA,sBAAA,CAAA,mBAAA,CAAA,cAAA,CAAA,eAAA,CAAA,UAAA,CAAA,aAAA,CAAA,yBAAA,CAEA,wBACA,aAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CACA,mBACA,CACA,CACA,CAEA,CAEA,kCACA,iBACA,CAEA,8CAEA,YAAA,CACA,oCAAA,CAAA,uBAAA,CAAA,oBAAA,CAAA,sBAAA,CAAA,SACA,CAEA,uBACA,cACA,CAEA,gCACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,6BACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,UAAA,CACA,cAAA,CACA,eACA,CACA,CAEA,iEACA,YAAA,CACA,kBACA,CAEA,kCACA,UAAA,CACA,iBAAA,CAOA,kEAJA,UAAA,CACA,WAAA,CACA,mBAAA,CAAA,gBAMA,CAEA,0CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,yBAAA,CACA,YAAA,CAEA,4BACA,gBAAA,CACA,UACA,CACA,CACA,CAEA,gCACA,UAAA,CACA,eAAA,CAEA,8BACA,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,SAAA,CACA,mBAAA,CAEA,gCACA,UAAA,CACA,iBACA,CAEA,2BACA,eAAA,CACA,eAAA,CACA,UACA,CACA,CAEA,uCAGA,gCAEA,WAAA,CACA,cAAA,CACA,iBAAA,CAEA,gCAEA,WAAA,CACA,mBAAA,CAAA,gBACA,CACA,kCAEA,WACA,CACA,CACA,CAEA,8BAEA,0CACA,mBACA,kBAAA,CACA,gBAAA,CACA,UACA,CACA,CAEA,yCACA,0BACA,UAAA,CACA,eAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BACA,CACA,CAEA,CAEA,CAEA,sCACA,UAAA,CACA,eAAA,CACA,kBAAA,CACA,iBAAA,CAEA,mCACA,kBAAA,CACA,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,kBAAA,CACA,kBAAA,CACA,gBAEA,CACA,CAEA,CAEA,6BACA,gCACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CAEA,6BACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,UAAA,CACA,cAAA,CACA,eACA,CAEA,gCAGA,mBAAA,CAAA,gBACA,CAEA,kEALA,UAAA,CACA,WAOA,CACA,CACA,CAEA,uDACA,UAAA,CACA,eAAA,CACA,+BAAA,CAEA,8BACA,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,SAAA,CACA,mBAAA,CACA,cAAA,CAEA,gCACA,UAAA,CACA,iBACA,CAEA,2BACA,eAAA,CACA,eAAA,CACA,UACA,CAEA,kCACA,WAAA,CACA,sBAAA,CACA,aAAA,CACA,eACA,CACA,CAEA,uCACA,UAAA,CAEA,gCAGA,mBAAA,CAAA,gBACA,CAMA,CAEA,kGAXA,UAAA,CACA,WAwBA,CAdA,gCAGA,cAAA,CACA,iBAAA,CAEA,6BACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,UAAA,CACA,cAAA,CACA,eACA,CACA,CAEA,8BAEA,0CACA,mBACA,kBAAA,CACA,gBAAA,CACA,UACA,CACA,CAEA,yCACA,0BACA,UAAA,CACA,iBAAA,CAAA,qBAAA,CAAA,sBAAA,CAAA,cAAA,CAAA,6BACA,CACA,CAEA,CACA,CAEA,0CACA,gCAAA,CAAA,6BAAA,CAAA,oCAAA,CAMA,sDAHA,UAQA,CALA,oBAEA,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,6BAAA,CACA,mBACA,CACA,CAEA,wCACA,4BAAA,CAEA,mBACA,oBACA,CAEA,uBACA,wBACA,CAEA,yBACA,oBACA,CAEA,gCACA,kBACA,CACA,6BACA,UACA,CACA,CAGA,oCACA,4BAAA,CAEA,mBACA,oBACA,CACA,CAEA,wCACA,4BAAA,CACA,oBAAA,CAEA,yBACA,oBACA,CACA","file":"InstagramWidget.vue","sourcesContent":["<template>\r\n  <div>\r\n    <div v-if=\"profileFetchState === 'fetching' || profileFetchState === 'error'\" class=\"fetch_loader\">\r\n      <b-spinner v-if=\"profileFetchState === 'fetching'\"></b-spinner>\r\n      <h3 v-if=\"profileFetchState === 'error'\" class=\"error_fetching\">{{ profileFetchMessage }}</h3>\r\n    </div>\r\n    <div v-if=\"profileFetchState === '' || profileFetchState === 'success'\">\r\n      <div v-if=\"posts_type === 'profile'\">\r\n        <div v-if=\"editor.layout.show_profile_details\">\r\n          <div :style=\"{ backgroundColor: editor.styles.header_bg, color: editor.styles.header_text }\"\r\n               class=\"profile_details_container\">\r\n            <div class=\"profile_details_left\">\r\n              <div v-if=\"editor.layout.profile_details.profile_image\"\r\n                   class=\"profile_picture_container rounded rounded-circle\">\r\n                <img\r\n                    :src=\"(profile.profile_picture_url) ? profile.profile_picture_url : '/images/widget-layouts/profile.jpg'\"\r\n                    class=\"profile_picture\">\r\n              </div>\r\n              <div class=\"profile_names_container\">\r\n                <div class=\"username_container\">\r\n                  <h3 v-if=\"editor.layout.profile_details.name\" class=\"name\" :style=\"{ color: editor.styles.header_text }\">{{ profile.name }}</h3>\r\n                </div>\r\n                <div class=\"username_container\">\r\n                  <h3 v-if=\"editor.layout.profile_details.username\" class=\"username\" :style=\"{ color: editor.styles.header_text }\">\r\n                    {{ profile.username }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"profile_insights_container\">\r\n              <p v-if=\"editor.layout.profile_details.post_count\" class=\"insight_count_tag\" :style=\"{ color: editor.styles.header_text }\">\r\n                <strong class=\"post_count\" :style=\"{ color: editor.styles.header_text }\">{{ profile.media_count }}</strong>\r\n                posts\r\n              </p>\r\n              <p v-if=\"editor.layout.profile_details.followers\" class=\"insight_count_tag\" :style=\"{ color: editor.styles.header_text }\">\r\n                <strong class=\"followers_count\" :style=\"{ color: editor.styles.header_text }\">{{ profile.followers_count }}</strong>\r\n                followers\r\n              </p>\r\n              <p v-if=\"editor.layout.profile_details.following\" class=\"insight_count_tag\" :style=\"{ color: editor.styles.header_text }\">\r\n                <strong class=\"following_count\" :style=\"{ color: editor.styles.header_text }\">{{ profile.follows_count }}</strong>\r\n                following\r\n              </p>\r\n            </div>\r\n            <div class=\"follow_button_container\">\r\n              <button v-if=\"editor.layout.profile_details.follow_button\" class=\"follow_button\"\r\n                      @click=\"redirectToProfile\"\r\n                      :style=\"{ backgroundColor: editor.styles.follow_button_bg, color: editor.styles.follow_button_text }\">\r\n                <i class=\"uil uil-instagram\"></i> Follow\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div v-if=\"editor.layout.layoutStyle === 'grid'\" class=\"posts_container grid_layout_posts_container\"\r\n           :style=\"{\r\n              gridTemplateColumns: `repeat(${editor.layout.columns}, 1fr)`,\r\n              gap: editor.layout.padding + 'px',\r\n            }\">\r\n        <div v-for=\"post in filteredPosts\" :key=\"post.id\" class=\"post image_card\" @click=\"post_action(post)\">\r\n          <div class=\"media_wrapper\">\r\n            <i class=\"media_icon\"\r\n               :class=\"{'uil uil-play': post.media_type === 'VIDEO', 'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM' }\"></i>\r\n            <img v-if=\"post.media_type === 'IMAGE' && post.media_product_type === 'FEED'\" :src=\"post.media_url\"\r\n                 class=\"post_image\" alt=\"Post image\">\r\n            <img v-else-if=\"post.media_type === 'IMAGE'\" :src=\"post.media_url\" class=\"post_image\"\r\n                 alt=\"Post image\">\r\n            <img v-else-if=\"post.media_type === 'CAROUSEL_ALBUM'\" :src=\"post.media_url\" class=\"post_image\"\r\n                 alt=\"Post image\">\r\n            <video v-if=\"post.media_type === 'VIDEO' && post.media_product_type === 'REELS'\"\r\n                   :src=\"post.media_url\" class=\"post_image\"></video>\r\n            <video v-else-if=\"post.media_type === 'VIDEO'\" :src=\"post.media_url\" class=\"post_image\"></video>\r\n          </div>\r\n          <div class=\"post_insights_container\">\r\n          <span class=\"d-flex gap-5\">\r\n            <p class=\"post_like\">\r\n              <i class=\"uil uil-heart-alt\"></i>{{ post.like_count }}\r\n            </p>\r\n            <p class=\"post_like ml-3\">\r\n              <i class=\"uil uil-comment\"></i>{{ post.comments_count }}\r\n            </p>\r\n          </span>\r\n          </div>\r\n        </div>\r\n        <div v-for=\"post in expandedPosts\" :key=\"post.id\" class=\"post expanded\">\r\n          <div class=\"post_header justify-content-between align-items-center\">\r\n            <div class=\"d-flex justify-content-start align-items-center\">\r\n              <div v-if=\"editor.post_style.post_details.profile_image\" class=\"profile_image_container\">\r\n                <img\r\n                    :src=\"(profile.profile_picture_url) ? profile.profile_picture_url : '/images/widget-layouts/profile.jpg'\"\r\n                    :alt=\"profile.name\" class=\"profile_image\">\r\n              </div>\r\n              <div v-if=\"editor.post_style.post_details.username\" class=\"post_username_container mx-1\">\r\n                <h3 class=\"username\">{{ profile.username }}</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-size-24 mx-2\">\r\n              <a :href=\"'https://instagram.com/' + profile.username\" target=\"_blank\">\r\n                <i class=\"uil uil-instagram instagram_icon\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"post_image_container\" @click=\"post_action(post)\">\r\n            <div class=\"media_wrapper\">\r\n              <i class=\"media_icon\"\r\n                 :class=\"{'uil uil-play': post.media_type === 'VIDEO', 'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM' }\"></i>\r\n              <img v-if=\"post.media_type === 'IMAGE' && post.media_product_type === 'FEED'\"\r\n                   :src=\"post.media_url\"\r\n                   class=\"post_image\" alt=\"Post image\">\r\n              <img v-else-if=\"post.media_type === 'IMAGE'\" :src=\"post.media_url\" class=\"post_image\"\r\n                   alt=\"Post image\">\r\n              <img v-else-if=\"post.media_type === 'CAROUSEL_ALBUM'\" :src=\"post.media_url\" class=\"post_image\"\r\n                   alt=\"Post image\">\r\n              <video v-if=\"post.media_type === 'VIDEO' && post.media_product_type === 'REELS'\"\r\n                     :src=\"post.media_url\" class=\"post_image\"></video>\r\n              <video v-else-if=\"post.media_type === 'VIDEO'\" :src=\"post.media_url\"\r\n                     class=\"post_image\"></video>\r\n            </div>\r\n          </div>\r\n          <div class=\"post_footer\" @click=\"post_action(post)\">\r\n            <div class=\"post_insights_container\">\r\n            <span class=\"d-flex gap-5\">\r\n              <p v-if=\"editor.post_style.post_details.likes_count\" class=\"post_like\">\r\n                <i class=\"uil uil-heart-alt\"></i>{{ post.like_count }}\r\n              </p>\r\n              <p v-if=\"editor.post_style.post_details.comments_count\" class=\"post_like ml-2\">\r\n                <i class=\"uil uil-comment\"></i>{{ post.comments_count }}\r\n              </p>\r\n            </span>\r\n            </div>\r\n            <p v-if=\"editor.post_style.post_details.caption\" class=\"post_caption\">{{ post.caption }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport axios from \"axios\";\r\naxios.defaults.baseURL = (process.env.NODE_ENV === 'production' ? window.location.origin.includes('staging.') ? 'http://127.0.0.1:8000/' : 'http://127.0.0.1:8000/' : 'http://127.0.0.1:8000/') + 'api/v1';\r\nexport default {\r\n  name: \"InstagramWidget\",\r\n  data() {\r\n    return {\r\n      profileFetchState: '',\r\n      profileFetchMessage: '',\r\n      profile: {\r\n        username: '',\r\n        name: '',\r\n        profile_picture_url: '',\r\n        followers_count: '',\r\n        follows_count: '',\r\n        media_count: '',\r\n      },\r\n      tokens: {\r\n        accessToken: '',\r\n        igID: ''\r\n      },\r\n      posts: [{\r\n        'id': '',\r\n        'like_count': '',\r\n        'comments_count': '',\r\n        'caption': '',\r\n        'media_url': '',\r\n      }],\r\n      posts_type: 'profile',\r\n      widgetId: 0,\r\n      new_widget_title: '',\r\n      editor: {\r\n        source: {\r\n          username: 'elonreevmusk',\r\n          type: 'username',\r\n        },\r\n        layout: {\r\n          layoutStyle: 'grid',\r\n          rows: 3,\r\n          columns: 3,\r\n          show_profile_details: true,\r\n          profile_details: {\r\n            profile_image: true,\r\n            username: true,\r\n            name: true,\r\n            follow_button: true,\r\n            post_count: true,\r\n            followers: true,\r\n            following: true,\r\n          },\r\n          padding: 5,\r\n        },\r\n        post_style: {\r\n          post_style: 'image_card',\r\n          post_details: {\r\n            profile_image: true,\r\n            username: true,\r\n            likes_count: true,\r\n            comment_count: true,\r\n            caption: true,\r\n          },\r\n          post_action: 'instagram'\r\n        },\r\n        editing: 'layout',\r\n        styles: {\r\n          theme: 'light',\r\n          header_bg: '#ffffff',\r\n          header_text: '#000000',\r\n          follow_button_bg: '#0081ff',\r\n          follow_button_text: '#ffffff',\r\n          load_more_button_bg: '#0081ff',\r\n          load_more_button_text: '#ffffff',\r\n\r\n        }\r\n      },\r\n      gettingWidget: false,\r\n      additionalPostsToShow: 0,\r\n      widgets: [],\r\n      selectedWidget: null,\r\n    }\r\n  },\r\n\r\n  computed: {\r\n    widgetList() {\r\n      let widgets = this.$store.getters['igwidget/all'];\r\n      console.log(widgets);\r\n      return this.$store.getters['igwidget/all'];\r\n    },\r\n    visiblePostCount() {\r\n      return (this.editor.layout.columns * this.editor.layout.rows) + this.additionalPostsToShow;\r\n    },\r\n    visiblePosts() {\r\n      const maxPosts = (this.editor.layout.columns * this.editor.layout.rows) + this.additionalPostsToShow;\r\n      const filteredPosts = this.posts.filter(post => post.media_url);\r\n      return filteredPosts.slice(0, maxPosts);\r\n    },\r\n    showLoadMore() {\r\n      console.log(this.visiblePostCount)\r\n      console.log(this.posts.length)\r\n      return this.visiblePostCount < this.posts.length;\r\n    },\r\n    filteredPosts() {\r\n      return this.posts.filter(post => {\r\n        return this.editor.post_style.post_style === 'image_card' && post.media_url;\r\n      });\r\n    },\r\n    expandedPosts() {\r\n      return this.posts.filter(post => {\r\n        return this.editor.post_style.post_style === 'expanded' && post.media_url;\r\n      });\r\n    }\r\n  },\r\n\r\n  mounted() {\r\n    this.getWidget(false);\r\n  },\r\n\r\n  watch: {\r\n    reload: (val) => {\r\n      this.getWidget(false);\r\n      console.log(val)\r\n    },\r\n    'editor.styles.theme': function (newTheme) {\r\n      if (newTheme === 'dark') {\r\n        this.editor.styles.header_bg = '#1b1b1b';\r\n        this.editor.styles.header_text = '#ffffff';\r\n        this.editor.styles.follow_button_bg = '#333333';\r\n        this.editor.styles.follow_button_text = '#ffffff';\r\n        this.editor.styles.load_more_button_bg = '#333333';\r\n        this.editor.styles.load_more_button_text = '#ffffff';\r\n      } else if (newTheme === 'light') {\r\n        this.editor.styles.header_bg = '#ffffff';\r\n        this.editor.styles.header_text = '#000000';\r\n        this.editor.styles.follow_button_bg = '#0081ff';\r\n        this.editor.styles.follow_button_text = '#ffffff';\r\n        this.editor.styles.load_more_button_bg = '#0081ff';\r\n        this.editor.styles.load_more_button_text = '#ffffff';\r\n      }\r\n    }\r\n  },\r\n\r\n  methods: {\r\n    loadMore() {\r\n      this.additionalPostsToShow += this.editor.layout.columns;\r\n\r\n      console.log(this.additionalPostsToShow)\r\n    },\r\n\r\n    getWidget(fetchProfile = false) {\r\n      let username = this.editor.source.username ?? 'elonreevmusk';\r\n      this.gettingWidget = true;\r\n      this.profileFetchState = 'fetching';\r\n\r\n      if (fetchProfile) {\r\n        if (this.editor.source.type === 'username') {\r\n          this.$store\r\n              .dispatch('igwidget/getIgWidget', {\r\n                username: username\r\n              })\r\n              .then((res) => {\r\n                if (res.businessDetails) {\r\n                  this.profile = res.businessDetails;\r\n                  this.posts = res.businessDetails.media.data;\r\n                  console.log(this.profile);\r\n                  this.gettingWidget = false;\r\n                  this.profileFetchState = 'success';\r\n                  this.posts_type = 'profile'\r\n                  if (fetchProfile !== true) {\r\n                    this.showWidgetModal();\r\n                  }\r\n                } else {\r\n                  console.log('Invalid Username or You\\'re trying to access a private account');\r\n                  this.gettingWidget = false;\r\n                  this.profileFetchState = 'error';\r\n                  this.profileFetchMessage = 'Invalid Username or You\\'re trying to access a private account'\r\n                }\r\n\r\n              })\r\n              .catch((error) => {\r\n                console.log(error)\r\n                console.log('Invalid Username or You\\'re trying to access a private account');\r\n                this.gettingWidget = false;\r\n                this.profileFetchState = 'error';\r\n                this.profileFetchMessage = 'Invalid Username or You\\'re trying to access a private account'\r\n              });\r\n        }\r\n        else {\r\n          this.$store\r\n              .dispatch('igwidget/searchKeyword', {\r\n                username: username\r\n              })\r\n              .then((res) => {\r\n                console.log(res)\r\n\r\n                this.posts = res;\r\n                this.gettingWidget = false;\r\n                this.profileFetchState = 'success';\r\n                this.posts_type = 'profile'\r\n                this.posts_type = 'hashtag'\r\n                if (fetchProfile !== true) {\r\n                  this.showWidgetModal();\r\n                }\r\n              })\r\n              .catch((error) => {\r\n                console.log(error)\r\n                console.log('Invalid Username or You\\'re trying to access a private account');\r\n                this.gettingWidget = false;\r\n                this.profileFetchState = 'error';\r\n                this.profileFetchMessage = 'Invalid Username or You\\'re trying to access a private account'\r\n              });\r\n        }\r\n      } else {\r\n        console.log(\"Fetching Profile\")\r\n        if (this.editor.source.type === 'username') {\r\n          this.$store\r\n              .dispatch('igwidget/getIgWidget', {\r\n                username: username\r\n              })\r\n              .then((res) => {\r\n                if (res.businessDetails) {\r\n                  this.profile = res.businessDetails;\r\n                  this.posts = res.businessDetails.media.data;\r\n                  console.log(this.profile);\r\n                  this.gettingWidget = false;\r\n                  this.profileFetchState = 'success';\r\n                  this.posts_type = 'profile'\r\n                  if (fetchProfile !== true) {\r\n                    this.showWidgetModal();\r\n                  }\r\n                } else {\r\n                  console.log('Invalid Username or You\\'re trying to access a private account');\r\n                  this.gettingWidget = false;\r\n                  this.profileFetchState = 'error';\r\n                  this.profileFetchMessage = 'Invalid Username or You\\'re trying to access a private account'\r\n                }\r\n\r\n              })\r\n              .catch((error) => {\r\n                console.log(error)\r\n                console.log('Invalid Username or You\\'re trying to access a private account');\r\n                this.gettingWidget = false;\r\n                this.profileFetchState = 'error';\r\n                this.profileFetchMessage = 'Invalid Username or You\\'re trying to access a private account'\r\n              });\r\n        }\r\n        else {\r\n          this.$store\r\n              .dispatch('igwidget/searchKeyword', {\r\n                username: username\r\n              })\r\n              .then((res) => {\r\n                console.log(res)\r\n\r\n                this.posts = res;\r\n                this.gettingWidget = false;\r\n                this.profileFetchState = 'success';\r\n                this.posts_type = 'profile'\r\n                this.posts_type = 'hashtag'\r\n                if (fetchProfile !== true) {\r\n                  this.showWidgetModal();\r\n                }\r\n              })\r\n              .catch((error) => {\r\n                console.log(error)\r\n                console.log('Invalid Username or You\\'re trying to access a private account');\r\n                this.gettingWidget = false;\r\n                this.profileFetchState = 'error';\r\n                this.profileFetchMessage = 'Invalid Username or You\\'re trying to access a private account'\r\n              });\r\n        }\r\n      }\r\n    },\r\n\r\n    post_action(post) {\r\n      if (this.editor.post_style.post_action === 'instagram') {\r\n        window.open(post.permalink, '_blank');\r\n      } else {\r\n        this.showPostModal = true;\r\n        this.$nextTick(() => {\r\n          setTimeout(() => {\r\n            const postId = 'post_' + post.id;\r\n            const postElement = document.getElementById(postId);\r\n            if (postElement) {\r\n              postElement.scrollIntoView({ behavior: 'smooth' });\r\n            }\r\n          }, 300);\r\n        });\r\n      }\r\n    },\r\n\r\n    redirectToProfile() {\r\n      if (this.profile && this.profile.username) {\r\n        // Redirect to user's Instagram profile\r\n        window.open(`https://www.instagram.com/${this.profile.username}`, '_blank');\r\n      }\r\n    },\r\n\r\n  },\r\n}\r\n</script>\r\n\r\n<!--WIdget Styles-->\r\n<style scoped>\r\n\r\n.fetch_loader {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.customer_select {\r\n  border: 1px solid #8a8a8a;\r\n  border-radius: 4px;\r\n  color: #000;\r\n\r\n  * {\r\n    color: #000;\r\n  }\r\n}\r\n\r\n.source_input {\r\n  width: 100%;\r\n  padding: .5rem;\r\n  border-radius: 4px;\r\n  border: 2px solid #456db9;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.source_button {\r\n  height: 100%;\r\n  background: #284273;\r\n  color: #fff;\r\n  border: none;\r\n  padding: .5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.v-select {\r\n  cursor: pointer !important;\r\n\r\n  * {\r\n    cursor: pointer !important;\r\n  }\r\n}\r\n\r\n.layouts_wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.layout-item {\r\n\r\n  .btn {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: fit-content;\r\n\r\n    img {\r\n      display: inline-block;\r\n      width: 5rem;\r\n    }\r\n\r\n    label {\r\n      display: inline-block;\r\n      font-size: 12px;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.instagram-widget {\r\n  max-height: 93vh;\r\n  overflow-y: scroll;\r\n\r\n  .profile_details_container {\r\n    padding: 2rem 1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n\r\n    .profile_details_left {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 1rem;\r\n    }\r\n\r\n    .profile_picture_container {\r\n      width: 80px;\r\n      height: 80px;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    .profile_picture {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    .profile_names_container {\r\n      justify-self: flex-start;\r\n\r\n      .name {\r\n        margin-bottom: .2rem;\r\n        color: #222\r\n      }\r\n\r\n      .username {\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        margin-block: 0;\r\n        color: #555;\r\n      }\r\n\r\n      .username::before {\r\n        content: '@';\r\n      }\r\n    }\r\n\r\n\r\n    .follow_button {\r\n      background: #007FFF;\r\n      color: #fff;\r\n      padding: .5rem 1rem;\r\n      border-radius: 4px;\r\n      border: none;\r\n    }\r\n\r\n    .profile_insights_container {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      .insight_count_tag {\r\n      //display: inline-block; margin-inline: .5rem; font-size: 18px; margin-bottom: 0; color: #555; line-height: 1; text-transform: capitalize;\r\n\r\n        strong {\r\n          display: block;\r\n          text-align: center;\r\n          color: #222;\r\n          font-size: 22px;\r\n          margin-bottom: .2rem;\r\n        }\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n  .posts_container {\r\n    padding: 1rem 2rem;\r\n  }\r\n\r\n  .grid_layout_posts_container {\r\n\r\n    display: grid;\r\n  //grid-template-columns: repeat( , 1fr); justify-content: center; gap: .5rem;\r\n  }\r\n\r\n  .post {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .media_wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    position: relative;\r\n    background: #0a0a0a;\r\n    .media_icon {\r\n      position: absolute;\r\n      right: 1rem;\r\n      top: 1rem;\r\n      color: #fff;\r\n      font-size: 2rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n\r\n  .post.image_card:hover .post_insights_container {\r\n    display: grid;\r\n    place-items: center;\r\n  }\r\n\r\n  .post.image_card {\r\n    width: 100%;\r\n    position: relative;\r\n\r\n    img.post_image{\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n    }\r\n    video.post_image{\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    .post_insights_container {\r\n      width: 100%;\r\n      height: 100%;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      background: rgba(0, 0, 0, 0.5);\r\n      display: none;\r\n\r\n      .post_like {\r\n        font-size: 1.5rem;\r\n        color: #fff\r\n      }\r\n    }\r\n  }\r\n\r\n  .post.expanded {\r\n    width: 100%;\r\n    overflow: hidden;\r\n\r\n    .post_header {\r\n      display: flex;\r\n      gap: .3rem;\r\n      margin-bottom: .5rem;\r\n\r\n      .profile_image {\r\n        width: 50px;\r\n        border-radius: 50%;\r\n      }\r\n\r\n      .username {\r\n        font-size: .9rem;\r\n        font-weight: 700;\r\n        color: #111;\r\n      }\r\n    }\r\n\r\n    .post_image_container {\r\n      width: 100%;\r\n\r\n      .media_wrapper {\r\n        width: 100%;\r\n        height: 100%;\r\n        aspect-ratio: 1;\r\n        position: relative;\r\n\r\n        img.post_image{\r\n          width: 100%;\r\n          height: 100%;\r\n          object-fit: cover;\r\n        }\r\n        video.post_image{\r\n          width: 100%;\r\n          height: 100%;\r\n        }\r\n      }\r\n    }\r\n\r\n    .post_footer {\r\n\r\n      .post_insights_container {\r\n        p {\r\n          margin-block: 0.5rem;\r\n          font-size: 1.2rem;\r\n          color: #111;\r\n        }\r\n      }\r\n\r\n      .post_caption_container {\r\n        .caption {\r\n          color: #111;\r\n          overflow: hidden;\r\n          display: -webkit-box;\r\n          -webkit-line-clamp: 3;\r\n          line-clamp: 3;\r\n          -webkit-box-orient: vertical;\r\n        }\r\n      }\r\n\r\n    }\r\n\r\n  }\r\n\r\n  .load_more_container {\r\n    width: 100%;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    text-align: center;\r\n\r\n    .load_more_button {\r\n      background: #007FFF;\r\n      color: #fff;\r\n      padding: .5rem 1rem;\r\n      border-radius: 4px;\r\n      border: none;\r\n      margin-inline: auto;\r\n      margin-block: .5rem;\r\n      font-size: 1.1rem;\r\n\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.modal-body{\r\n  .media_wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    position: relative;\r\n\r\n    .media_icon {\r\n      position: absolute;\r\n      right: 1rem;\r\n      top: 1rem;\r\n      color: #fff;\r\n      font-size: 2rem;\r\n      font-weight: 700;\r\n    }\r\n\r\n    img.post_image{\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    video.post_image{\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.modal_posts_container .post.expanded {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-bottom: 1px solid #cecece;\r\n\r\n  .post_header {\r\n    display: flex;\r\n    gap: .3rem;\r\n    padding-block: .5rem;\r\n    cursor: pointer;\r\n\r\n    .profile_image {\r\n      width: 40px;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    .username {\r\n      font-size: .9rem;\r\n      font-weight: 700;\r\n      color: #111;\r\n    }\r\n\r\n    .follow_btn_post {\r\n      border: none;\r\n      background: transparent;\r\n      color: #0e8dc7;\r\n      font-size: .9rem;\r\n    }\r\n  }\r\n\r\n  .post_image_container {\r\n    width: 100%;\r\n\r\n    img.post_image{\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    video.post_image{\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n  }\r\n\r\n  .media_wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    position: relative;\r\n\r\n    .media_icon {\r\n      position: absolute;\r\n      right: 1rem;\r\n      top: 1rem;\r\n      color: #fff;\r\n      font-size: 2rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n\r\n  .post_footer {\r\n\r\n    .post_insights_container {\r\n      p {\r\n        margin-block: 0.5rem;\r\n        font-size: 1.2rem;\r\n        color: #111;\r\n      }\r\n    }\r\n\r\n    .post_caption_container {\r\n      .caption {\r\n        color: #111;\r\n      //overflow: hidden; //display: -webkit-box; //-webkit-line-clamp: 3; //line-clamp: 3; //-webkit-box-orient: vertical;\r\n      }\r\n    }\r\n\r\n  }\r\n}\r\n\r\nli:has( .profile_details) {\r\n  justify-content: flex-start !important;\r\n\r\n  .profile_details {\r\n    width: 100%;\r\n  }\r\n\r\n  li {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: .5rem;\r\n  }\r\n}\r\n\r\n.instagram-widget.dark {\r\n  background: #1b1b1b !important;\r\n\r\n  * {\r\n    color: #fff !important;\r\n  }\r\n\r\n  .post {\r\n    border: 1px solid #1f1d10;\r\n  }\r\n\r\n  .post * {\r\n    color: #fff !important;\r\n  }\r\n\r\n  .media_wrapper{\r\n    background: #0a0a0a;\r\n  }\r\n  .media_icon{\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n\r\n.modal-header.dark {\r\n  background: #1b1b1b !important;\r\n\r\n  * {\r\n    color: #fff !important\r\n  }\r\n}\r\n\r\n.modal-body:has(.dark) {\r\n  background: #1b1b1b !important;\r\n  color: #fff !important;\r\n\r\n  .dark * {\r\n    color: #fff !important\r\n  }\r\n}\r\n</style>\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b489":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "b9a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");
var buildURL = __webpack_require__("7f09");
var InterceptorManager = __webpack_require__("8b41");
var dispatchRequest = __webpack_require__("82e5");
var mergeConfig = __webpack_require__("66b8");
var validator = __webpack_require__("91e2");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "bcc3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "c4de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ../node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ../node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "c521":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "cdfe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");
var settle = __webpack_require__("6840");
var cookies = __webpack_require__("bcc3");
var buildURL = __webpack_require__("7f09");
var buildFullPath = __webpack_require__("8755");
var parseHeaders = __webpack_require__("c521");
var isURLSameOrigin = __webpack_require__("70e3");
var createError = __webpack_require__("d8a1");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "d8a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("3a61");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "dc36":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "e0e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");
var defaults = __webpack_require__("6d1b");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "e506":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "eacf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "ef59":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("a2f8");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ })

/******/ });
//# sourceMappingURL=instagram-widget.js.map