(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n.n(a),l=n(63),c=n.n(l),i=(n(75),n(42)),o=n(68),u=n(31),s=(n(60),n(61),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),d=s[0],m=s[1],E=Object(a.useState)(""),b=Object(i.a)(E,2),p=b[0],f=b[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),S=v[0],h=v[1],w="";return Object(a.useEffect)(function(){new o.a("reader").start({facingMode:"environment"},{fps:10,qrbox:150},function(e,t){var n=function(e){var t=e.split(" [|] ");return{name:t[0],studentNumber:t[1],guild:t[2],section:t[3]}}(e);if(l(n.name),m(n.studentNumber),f(n.guild),h(n.section),e!==w){w=e;var a=(new Date).toLocaleTimeString();!function(e,t,n,a){fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat("1BEdgdwItam2jOA9MGEhtexD3MqK21Y0mMxxBebvooO4",":batchUpdate"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("TOKEN")},body:JSON.stringify({requests:[{appendCells:{rows:[{values:[{userEnteredValue:{stringValue:e}},{userEnteredValue:{stringValue:t}},{userEnteredValue:{stringValue:n}},{userEnteredValue:{stringValue:a}}]}],fields:"*"}}]})})}(n.name,n.guild,n.section,a)}},function(e){console.log(e)}).catch(function(e){console.log(e)})},[]),r.a.createElement(u.Page,null,r.a.createElement(u.Splitter,null,r.a.createElement(u.SplitterSide,{side:"left",width:"300",isSwipeable:!0,collapse:!0},r.a.createElement(u.Page,null," Page Left ")),r.a.createElement(u.SplitterContent,null,r.a.createElement(u.Page,{renderToolbar:function(){return r.a.createElement(u.Toolbar,{id:"toolbar"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"sidebyside"},r.a.createElement(u.Icon,{icon:"md-menu"}),r.a.createElement("span",{id:"toolbar-title"},"Lista"))))}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"reader"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{align:"center"},r.a.createElement("h2",null,"Student Information"),r.a.createElement("div",{id:"student-information"},r.a.createElement("p",{id:"name"},"Name: ",n),r.a.createElement("p",{id:"student-number"},"Student number: ",d),r.a.createElement("p",{id:"guild"},"Guild: ",p),r.a.createElement("p",{id:"section"},"Section: ",S)))))))}),d=function(){c.a.createRoot(document.getElementById("root")).render(r.a.createElement(s,null))};window.cordova?document.addEventListener("deviceready",d,!1):d()},69:function(e,t,n){e.exports=n(136)},75:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.839ade58.chunk.js.map