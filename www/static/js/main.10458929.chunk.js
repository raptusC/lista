(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(t,e,n){"use strict";n.r(e);var r=n(16),o=n.n(r),a=n(63),i=n.n(a),c=(n(76),n(64)),u=n(39),s=n(69),l=n(29);n(60),n(61);function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new O(o||[]);return r(i,"_invoke",{value:x(t,n,c)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var f={};function d(){}function p(){}function m(){}var v={};u(v,a,function(){return this});var g=Object.getPrototypeOf,y=g&&g(g(A([])));y&&y!==e&&n.call(y,a)&&(v=y);var w=m.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=m,r(w,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var f="1BEdgdwItam2jOA9MGEhtexD3MqK21Y0mMxxBebvooO4",d="ya29.a0AeTM1icE-aqqd5b4IJuBugBhQaE-mYP8R5MWt_5pRc3k8pt1cXkMXUqpHYYczFVbTJsbgApkwkN-QmWf3KmAFNYgFFy8D8nHKLBN27eR9WrFn6A1Qp29JqV5qqY0SFDeWKzhvSfxjVcwVh7LPSzcVGsuq1yLaCgYKAV4SARISFQHWtWOmZNLI9LERKAUgA50rJsDJSQ0163",p=function(){var t=Object(r.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(""),p=Object(u.a)(i,2),m=p[0],v=p[1],g=Object(r.useState)(""),y=Object(u.a)(g,2),w=y[0],b=y[1],E=Object(r.useState)(""),x=Object(u.a)(E,2),L=x[0],S=x[1],j=Object(r.useState)(!1),O=Object(u.a)(j,2),A=O[0],T=O[1],I={ABM1101:[4,7],CA1101:[9,22],DA1101:[9,22],HUMSS1101:[24,29],TO1101:[24,29],ITM1101:[31,54],STEM1101:[56,81],STEM1102:[83,92],ABM1201:[95,113],CA1201:[115,121],DA1201:[115,121],HUMSS1201:[123,134],ITM1201:[136,160],STEM1201:[162,178],STEM1202:[180,195]},C=function(){var t=Object(c.a)(h().mark(function t(e,n){var r,o,a,i,c,u,s,l,p;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=1,o=3,t.next=4,fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(f,"/values/").concat("ListaAttendance","!D2:2"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d)}});case 4:return i=t.sent,t.next=7,i.json();case 7:return c=t.sent.values[0],u=new Date,c[c.length-1]===u.toLocaleDateString("en-us",{month:"short",day:"numeric"}).split(" ").join(". ")?a=c.length:(console.log("Cannot find Current Date in Google Sheets\nAdding a new Column!"),fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(f,":batchUpdate"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d)},body:JSON.stringify({requests:[{updateCells:{range:{sheetId:0,startColumnIndex:o+c.length,endColumnIndex:o+c.length+1,endRowIndex:2,startRowIndex:1},fields:"*",rows:[{values:[{userEnteredValue:{stringValue:u.toLocaleDateString("en-us",{month:"short",day:"numeric"}).split(" ").join(". ")}}]}]}}]})}),a=c.length+1),t.next=12,fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(f,"/values/").concat("ListaAttendance","!A").concat(I[n][0],":B").concat(I[n][1]),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d)}});case 12:return s=t.sent,t.next=15,s.json();case 15:l=t.sent,t.t0=h().keys(l.values);case 17:if((t.t1=t.t0()).done){t.next=26;break}if(p=t.t1.value,l.values[p][1]!==e){t.next=24;break}return r=parseInt(p)+I[n][0],console.log("Located at Column 1, Row "+r),fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(f,":batchUpdate"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d)},body:JSON.stringify({requests:[{updateCells:{rows:[{values:[{userEnteredValue:{stringValue:"ATTENDED"}}]}],range:{sheetId:0,startColumnIndex:o+(a-1),endColumnIndex:o+a,endRowIndex:r,startRowIndex:r-1},fields:"*"}}]})}),t.abrupt("return");case 24:t.next=17;break;case 26:return console.log("Couldn't Find Name"),console.log(l),t.abrupt("return",l);case 29:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),N="";Object(r.useEffect)(function(){new s.a("reader").start({facingMode:"environment"},{fps:10,qrbox:200},function(t,e){var n=function(t){var e=t.split(" [|] ");return{name:e[0],studentNumber:e[1],guild:e[2],section:e[3]}}(t);a(n.name),v(n.studentNumber),b(n.guild),S(n.section),t!==N&&(N=t,C(n.name,n.section))},function(t){console.log(t)}).catch(function(t){console.log(t)})},[]);return o.a.createElement(l.Page,null,o.a.createElement(l.Splitter,null,o.a.createElement(l.SplitterSide,{side:"left",width:"300",swipeable:!0,collapse:!0,isOpen:A,onPostClose:function(){return T(!1)}},o.a.createElement(l.Page,null," Page Left ")),o.a.createElement(l.SplitterContent,null,o.a.createElement(l.Page,{renderToolbar:function(){return o.a.createElement(l.Toolbar,{id:"toolbar"},o.a.createElement("div",{className:"left"},o.a.createElement("div",{className:"sidebyside"},o.a.createElement(l.ToolbarButton,{style:{color:"white"},onClick:function(){return T(!0)}},o.a.createElement(l.Icon,{icon:"md-menu"})),o.a.createElement("span",{id:"toolbar-title"},"Lista"))))}},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{id:"reader"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{align:"center",id:"student-information"},o.a.createElement(l.Card,null,o.a.createElement("h2",{className:"title",align:"center"},"Student Information"),o.a.createElement("p",{id:"name"},"Name: ",n),o.a.createElement("p",{id:"student-number"},"Student number: ",m),o.a.createElement("p",{id:"guild"},"Guild: ",w),o.a.createElement("p",{id:"section"},"Section: ",L)))))))},m=function(){i.a.createRoot(document.getElementById("root")).render(o.a.createElement(p,null))};window.cordova?document.addEventListener("deviceready",m,!1):m()},70:function(t,e,n){t.exports=n(137)},76:function(t,e,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.10458929.chunk.js.map