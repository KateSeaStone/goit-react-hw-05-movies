"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[561],{608:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(523),c=t(271),a={},u=t(184);function i(n){var e=n.movies,t=(0,c.TH)();return(0,u.jsx)("ul",{children:e.map((function(n){return(0,u.jsx)("li",{className:a.movieLink,children:(0,u.jsxs)(r.rU,{to:{pathname:"/movies/".concat(n.id),state:{from:t}},children:[n.title," ",n.name]})},n.id)}))})}},565:function(n,e,t){t.d(e,{Tg:function(){return f},Y5:function(){return d},xc:function(){return l},Hx:function(){return h},Vu:function(){return p}});var r=t(861),c=t(757),a=t.n(c),u="https://api.themoviedb.org/3",i="419dfd451284fd57cfd962fe73165683";function o(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var e,t,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",n.next=3,fetch(e);case 3:if(!(t=n.sent).ok){n.next=10;break}return n.next=7,t.json();case 7:n.t0=n.sent,n.next=11;break;case 10:n.t0=Promise.reject(new Error("Not found"));case 11:return n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return o("".concat(u,"/trending/all/day?api_key=").concat(i,"&page=1"))}function d(n){return o("".concat(u,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"))}function l(n){return o("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function h(n){return o("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}function p(n){return o("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&include_adult=false&query=").concat(n))}},561:function(n,e,t){t.r(e),t.d(e,{default:function(){return o}});var r=t(152),c=t(791),a=t(565),u=t(608),i=t(184);function o(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],o=e[1];return(0,c.useEffect)((function(){(0,a.Tg)().then((function(n){return o(n.results)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Trending Today"}),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{movies:t})})]})}}}]);
//# sourceMappingURL=561.1ce242aa.chunk.js.map