(this["webpackJsonpshoppies-2020"]=this["webpackJsonpshoppies-2020"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),i=(n(12),n(4)),l=n(2);n(13);var u=function(e){return c.a.createElement("div",{className:"Card"},c.a.createElement("div",{className:"title"},e.isBold?c.a.createElement("b",null,e.title):e.title),e.children)};n(14);var s=function(e){return c.a.createElement("div",{className:"Searchbar"},c.a.createElement("i",{className:"fa fa-search"}),c.a.createElement("input",{type:"search",className:"Search",onChange:function(t){return e.setSearchQuery(t.target.value)}}))};n(15);var m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(null),m=Object(l.a)(r,2),d=m[0],f=m[1],h=Object(a.useState)(""),v=Object(l.a)(h,2),E=v[0],p=v[1],b=Object(a.useState)([]),y=Object(l.a)(b,2),g=y[0],w=y[1];return Object(a.useEffect)((function(){if(E.length<3)return f("Please search for a longer title name."),void o([]);fetch("https://www.omdbapi.com/?s=".concat(E,"&apikey=").concat("9510083")).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){if("False"===e.Response)f(e.Error);else{var t=e.Search.reduce((function(e,t){return[].concat(Object(i.a)(e),[{title:t.Title,year:t.Year,id:t.imdbID}])}),[]);o(t)}})).catch((function(e){var t=e.message;f(t)}))}),[E]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Column"},c.a.createElement("h1",null,"The Shoppies"),c.a.createElement(u,{title:"Movie title",isBold:!0},c.a.createElement(s,{setSearchQuery:p})),c.a.createElement("div",{className:"Row"},c.a.createElement(u,{title:'Results for "'.concat(E,'"'),isBold:!0},n.length>0?c.a.createElement("ul",null,null===n||void 0===n?void 0:n.map((function(e){return c.a.createElement("div",{className:"Row",key:e.id},c.a.createElement("li",null,"".concat(e.title," (").concat(e.year,")")),c.a.createElement("button",{onClick:function(){return function(e){5===g.length?alert("You can only have up to ".concat(5," nominations.")):w([].concat(Object(i.a)(g),[e]))}(e)},disabled:g.filter((function(t){return t.id===e.id})).length>0},"Nominate"))}))):c.a.createElement("div",null,d||"Couldn't find any movies for this title. Try another title.")),c.a.createElement(u,{title:"Nominations",isBold:!0},g.length>0?c.a.createElement("ul",null,g.map((function(e){return c.a.createElement("div",{className:"Row",key:e.id},c.a.createElement("li",null,"".concat(e.title," (").concat(e.year,")")),c.a.createElement("button",{onClick:function(){return function(e){if(null!==e&&void 0!==e){var t=e.id,n=g.filter((function(e){return e.id!==t}));w(n)}}(e)}},"Remove"))}))):c.a.createElement("div",null,"You don't have any nominations yet. You can nominate up to ".concat(5," movies."))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.95e42957.chunk.js.map