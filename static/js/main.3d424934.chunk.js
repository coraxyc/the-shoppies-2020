(this["webpackJsonpshoppies-2020"]=this["webpackJsonpshoppies-2020"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),i=(n(12),n(4)),r=n(2);n(13);var u=function(e){return c.a.createElement("div",{className:"Card"},c.a.createElement("div",{className:"title"},e.isBold?c.a.createElement("b",null,e.title):e.title),e.children)};n(14);var s=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(null),s=Object(r.a)(l,2),m=s[0],d=s[1],f=Object(a.useState)(""),h=Object(r.a)(f,2),v=h[0],E=h[1],p=Object(a.useState)([]),b=Object(r.a)(p,2),w=b[0],g=b[1];return Object(a.useEffect)((function(){fetch("http://www.omdbapi.com/?s=".concat(v,"&apikey=").concat("9510083")).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){if("False"===e.Response)d(e.Error),console.log(m);else{var t=e.Search.reduce((function(e,t){return[].concat(Object(i.a)(e),[{title:t.Title,year:t.Year,id:t.imdbID}])}),[]);o(t),console.log(t)}})).catch((function(e){var t=e.message;d(t)}))}),[v]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Column"},c.a.createElement("h1",null,"The Shoppies"),c.a.createElement(u,{title:"Movie title"},c.a.createElement("form",{onSubmit:function(){}},c.a.createElement("input",{type:"text",className:"Search",onChange:function(e){return E(e.target.value)},placeholder:"Enter 3 letters or more and hit enter to search"}))),c.a.createElement("div",{className:"Row"},c.a.createElement(u,{title:'Results for "'.concat(v,'"'),isBold:!0},n.length>0?c.a.createElement("ul",null,null===n||void 0===n?void 0:n.map((function(e){return c.a.createElement("div",{className:"Row",key:e.id},c.a.createElement("li",null,"".concat(e.title," (").concat(e.year,")")),c.a.createElement("button",{onClick:function(){return function(e){g([].concat(Object(i.a)(w),[e]))}(e)},disabled:w.filter((function(t){return t.id===e.id})).length>0},"Nominate"))}))):c.a.createElement("div",null,m||"Couldn't find any movies for this title.")),c.a.createElement(u,{title:"Nominations",isBold:!0},w.length>0?c.a.createElement("ul",null,w.map((function(e){return c.a.createElement("div",{className:"Row",key:e.id},c.a.createElement("li",null,"".concat(e.title," (").concat(e.year,")")),c.a.createElement("button",{onClick:function(){return function(e){if(null!==e&&void 0!==e){var t=e.id,n=w.filter((function(e){return e.id!==t}));g(n)}}(e)}},"Remove"))}))):c.a.createElement("div",null,"You don't have any nominations yet. Nominate some movies!")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3d424934.chunk.js.map