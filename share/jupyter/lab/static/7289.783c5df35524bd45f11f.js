"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[7289],{61504:(r,n,e)=>{e.d(n,{Z:()=>A});var i=e(94015);var t=e.n(i);var o=e(23645);var a=e.n(o);var c=a()(t());c.push([r.id,"/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/vibrant-ink.css"],names:[],mappings:"AAAA,4DAA4D;;AAE5D,+BAA+B,iBAAiB,EAAE,YAAY,EAAE;AAChE,4CAA4C,mBAAmB,EAAE;AACjE,mKAAmK,kCAAkC,EAAE;AACvM,kLAAkL,kCAAkC,EAAE;;AAEtN,wCAAwC,mBAAmB,EAAE,4BAA4B,EAAE;AAC3F,6CAA6C,YAAY,EAAE;AAC3D,oDAAoD,cAAc,EAAE;AACpE,2CAA2C,cAAc,EAAE;AAC3D,uCAAuC,4BAA4B,EAAE;;AAErE,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,WAAW,EAAE;AAC1C,+BAA+B,eAAe,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kEAAkE,cAAc,EAAE;AAClF,8FAA8F,cAAc,EAAE;AAC9G,iCAAiC,WAAW,EAAE;AAC9C,gCAAgC,WAAW,EAAE,iBAAiB,EAAE;AAChE,+BAA+B,eAAe,EAAE;AAChD,iCAAiC,UAAU,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,gCAAgC,cAAc,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,cAAc,EAAE;AAC/C,2BAA2B,cAAc,EAAE;AAC3C,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,4BAA4B,EAAE;;AAE5D,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:["/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n"],sourceRoot:""}]);const A=c},23645:r=>{r.exports=function(r){var n=[];n.toString=function n(){return this.map((function(n){var e=r(n);if(n[2]){return"@media ".concat(n[2]," {").concat(e,"}")}return e})).join("")};n.i=function(r,e,i){if(typeof r==="string"){r=[[null,r,""]]}var t={};if(i){for(var o=0;o<this.length;o++){var a=this[o][0];if(a!=null){t[a]=true}}}for(var c=0;c<r.length;c++){var A=[].concat(r[c]);if(i&&t[A[0]]){continue}if(e){if(!A[2]){A[2]=e}else{A[2]="".concat(e," and ").concat(A[2])}}n.push(A)}};return n}},94015:r=>{function n(r,n){return a(r)||o(r,n)||i(r,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(r,n){if(!r)return;if(typeof r==="string")return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor)e=r.constructor.name;if(e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}function t(r,n){if(n==null||n>r.length)n=r.length;for(var e=0,i=new Array(n);e<n;e++){i[e]=r[e]}return i}function o(r,n){var e=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(e==null)return;var i=[];var t=true;var o=false;var a,c;try{for(e=e.call(r);!(t=(a=e.next()).done);t=true){i.push(a.value);if(n&&i.length===n)break}}catch(A){o=true;c=A}finally{try{if(!t&&e["return"]!=null)e["return"]()}finally{if(o)throw c}}return i}function a(r){if(Array.isArray(r))return r}r.exports=function r(e){var i=n(e,4),t=i[1],o=i[3];if(!o){return t}if(typeof btoa==="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o))));var c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);var A="/*# ".concat(c," */");var s=o.sources.map((function(r){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(r," */")}));return[t].concat(s).concat([A]).join("\n")}return[t].join("\n")}},87289:(r,n,e)=>{e.r(n);e.d(n,{default:()=>A});var i=e(93379);var t=e.n(i);var o=e(61504);var a={};a.insert="head";a.singleton=false;var c=t()(o.Z,a);const A=o.Z.locals||{}},93379:(r,n,e)=>{var i=function r(){var n;return function r(){if(typeof n==="undefined"){n=Boolean(window&&document&&document.all&&!window.atob)}return n}}();var t=function r(){var n={};return function r(e){if(typeof n[e]==="undefined"){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement){try{i=i.contentDocument.head}catch(t){i=null}}n[e]=i}return n[e]}}();var o=[];function a(r){var n=-1;for(var e=0;e<o.length;e++){if(o[e].identifier===r){n=e;break}}return n}function c(r,n){var e={};var i=[];for(var t=0;t<r.length;t++){var c=r[t];var A=n.base?c[0]+n.base:c[0];var s=e[A]||0;var l="".concat(A," ").concat(s);e[A]=s+1;var m=a(l);var u={css:c[1],media:c[2],sourceMap:c[3]};if(m!==-1){o[m].references++;o[m].updater(u)}else{o.push({identifier:l,updater:b(u,n),references:1})}i.push(l)}return i}function A(r){var n=document.createElement("style");var i=r.attributes||{};if(typeof i.nonce==="undefined"){var o=true?e.nc:0;if(o){i.nonce=o}}Object.keys(i).forEach((function(r){n.setAttribute(r,i[r])}));if(typeof r.insert==="function"){r.insert(n)}else{var a=t(r.insert||"head");if(!a){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}a.appendChild(n)}return n}function s(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var l=function r(){var n=[];return function r(e,i){n[e]=i;return n.filter(Boolean).join("\n")}}();function m(r,n,e,i){var t=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(r.styleSheet){r.styleSheet.cssText=l(n,t)}else{var o=document.createTextNode(t);var a=r.childNodes;if(a[n]){r.removeChild(a[n])}if(a.length){r.insertBefore(o,a[n])}else{r.appendChild(o)}}}function u(r,n,e){var i=e.css;var t=e.media;var o=e.sourceMap;if(t){r.setAttribute("media",t)}else{r.removeAttribute("media")}if(o&&typeof btoa!=="undefined"){i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")}if(r.styleSheet){r.styleSheet.cssText=i}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(i))}}var d=null;var v=0;function b(r,n){var e;var i;var t;if(n.singleton){var o=v++;e=d||(d=A(n));i=m.bind(null,e,o,false);t=m.bind(null,e,o,true)}else{e=A(n);i=u.bind(null,e,n);t=function r(){s(e)}}i(r);return function n(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap){return}i(r=e)}else{t()}}}r.exports=function(r,n){n=n||{};if(!n.singleton&&typeof n.singleton!=="boolean"){n.singleton=i()}r=r||[];var e=c(r,n);return function r(i){i=i||[];if(Object.prototype.toString.call(i)!=="[object Array]"){return}for(var t=0;t<e.length;t++){var A=e[t];var s=a(A);o[s].references--}var l=c(i,n);for(var m=0;m<e.length;m++){var u=e[m];var d=a(u);if(o[d].references===0){o[d].updater();o.splice(d,1)}}e=l}}}}]);
//# sourceMappingURL=7289.783c5df35524bd45f11f.js.map?v=783c5df35524bd45f11f