(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(4),c=o.n(e),r=o(3),i=o(1),u=o.n(i),a=(o(9),o(0)),s=u.a.memo((function(t){var n=t.goods;return Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){return d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},f=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},j=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1],c=Object(i.useState)(""),u=Object(r.a)(c,2),j=u[0],b=u[1],h=function(t){t().then((function(t){return e(t)})).catch((function(t){return b(t)}))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Dynamic list of Goods"}),Object(a.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return h(d)},children:"Load all goods"}),Object(a.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return h(l)},children:"Load 5 first goods"}),Object(a.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return h(f)},children:"Load red goods"}),j.length>0&&Object(a.jsx)("p",{children:"Error on loading - ".concat(j)}),o.length>0?Object(a.jsx)(s,{goods:o}):Object(a.jsx)("p",{children:"No goods"})]})};c.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.09b081dc.chunk.js.map