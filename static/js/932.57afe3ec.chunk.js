"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[932],{608:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(523),c=n(271),a={},o=n(184);function u(e){var t=e.movies,n=(0,c.TH)();return(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsx)("li",{className:a.movieLink,children:(0,o.jsxs)(r.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:n}},children:[e.title," ",e.name]})},e.id)}))})}},565:function(e,t,n){n.d(t,{Tg:function(){return f},Y5:function(){return p},xc:function(){return l},Hx:function(){return h},Vu:function(){return m}});var r=n(861),c=n(757),a=n.n(c),o="https://api.themoviedb.org/3",u="419dfd451284fd57cfd962fe73165683";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function e(){var t,n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return i("".concat(o,"/trending/all/day?api_key=").concat(u,"&page=1"))}function p(e){return i("".concat(o,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"))}function l(e){return i("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"))}function h(e){return i("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"))}function m(e){return i("".concat(o,"/search/movie?api_key=").concat(u,"&language=en-US&include_adult=false&query=").concat(e))}},932:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return m}});var o=n(152),u=n(791),i=n(271),s={},f=n(184),p=function(e){var t=(0,i.k6)(),n=e.onSubmit,r=(0,u.useState)(""),c=(0,o.Z)(r,2),a=c[0],p=c[1];return(0,f.jsxs)("form",{className:s.SearchForm,onSubmit:function(e){e.preventDefault(),""!==a.trim()?(n(a),t.push({search:"query=".concat(a)}),p("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!")},children:[(0,f.jsx)("input",{type:"text",value:a,onChange:function(e){p(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}),(0,f.jsx)("button",{type:"submit",children:(0,f.jsx)("span",{children:"Search"})})]})},l=n(565),h=n(608);function m(){var e=(0,i.TH)(),t=(0,i.k6)(),n=(0,u.useState)(""),r=(0,o.Z)(n,2),c=r[0],s=r[1],m=(0,u.useState)([]),d=(0,o.Z)(m,2),v=d[0],g=d[1];(0,u.useEffect)((function(){if(""!==e.search){var t=new URLSearchParams(e.search).get("query");s(t)}}),[e.search]),(0,u.useEffect)((function(){c&&(0,l.Vu)(c).then((function(e){g(e.results)}))}),[c]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Search Movie"}),(0,f.jsx)(p,{onSubmit:function(n){c!==n&&(s(n),g([]),t.push(a(a({},e),{},{search:"query=".concat(n,"&page=1")})))},query:c}),(0,f.jsx)(h.Z,{movies:v})]})}}}]);
//# sourceMappingURL=932.57afe3ec.chunk.js.map