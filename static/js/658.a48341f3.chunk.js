"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[658],{565:function(e,n,t){t.d(n,{Tg:function(){return l},Y5:function(){return d},xc:function(){return h},Hx:function(){return f},Vu:function(){return v}});var r=t(861),i=t(757),c=t.n(i),a="https://api.themoviedb.org/3",s="419dfd451284fd57cfd962fe73165683";function o(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function e(){var n,t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(n);case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return o("".concat(a,"/trending/all/day?api_key=").concat(s,"&page=1"))}function d(e){return o("".concat(a,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))}function h(e){return o("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function f(e){return o("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}function v(e){return o("".concat(a,"/search/movie?api_key=").concat(s,"&language=en-US&include_adult=false&query=").concat(e))}},658:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(152),i=t(791),c=t(271),a=t(565),s=t(523),o="MovieDescription_title__uH8LG",u="MovieDescription_imgPoster__Im10J",l="MovieDescription_movieInfo__yik5C",d=t(184);function h(e){var n=e.title,t=e.date,r=e.poster_path,i=e.vote_average,c=e.overview,a=e.genres;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("h1",{className:o,children:[n," (",t,")"]}),(0,d.jsxs)("div",{className:l,children:[r&&(0,d.jsx)("img",{className:u,src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(r),alt:""}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Rating:"})," ",i]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Overview:"})," ",c]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Genres:"})," ",a.join(", ")]})]})]})]})}var f=t(909);function v(e){var n=e.onClick;return(0,d.jsx)("button",{type:"button",onClick:n,children:"Go back"})}var p=(0,i.lazy)((function(){return t.e(900).then(t.bind(t,900))})),x=(0,i.lazy)((function(){return t.e(457).then(t.bind(t,457))}));function _(e){var n=(0,c.TH)(),t=(0,c.k6)(),o=(0,c.$B)(),u=o.url,l=o.path,_=(0,c.UO)().movie_id,j=(0,i.useState)({}),m=(0,r.Z)(j,2),g=m[0],k=m[1],w=(0,i.useState)([]),b=(0,r.Z)(w,2),y=b[0],S=b[1],C=(0,i.useState)(""),Z=(0,r.Z)(C,2),U=Z[0],O=Z[1],E=(0,i.useState)(!1),L=(0,r.Z)(E,2),N=L[0],A=L[1];(0,i.useEffect)((function(){(0,a.Y5)(_).then((function(e){k(e),S(e.genres),O(e.release_date),A(!0)}))}),[_]),(0,i.useEffect)((function(){if(N){O(U.substr(0,4));S(y.map((function(e){return e.name})))}}),[N]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{onClick:function(){var e,r;t.push(null!==(e=null===n||void 0===n||null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/")}}),(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(h,{poster_path:g.poster_path,title:g.title,vote_average:g.vote_average,overview:g.overview,date:U,genres:y}),(0,d.jsx)("hr",{}),(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:{pathname:"".concat(u,"/reviews"),state:{from:n}},children:"Reviews"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:{pathname:"".concat(u,"/cast"),state:{from:n}},children:"Cast"})})]}),(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)("h2",{children:"Loading..."}),children:[(0,d.jsx)(c.AW,{path:"".concat(l,"/reviews"),children:(0,d.jsx)(x,{})}),(0,d.jsx)(c.AW,{path:"".concat(l,"/cast"),children:(0,d.jsx)(p,{})})]})]})]})}function j(){var e=(0,c.UO)().movie_id,n=(0,i.useState)([]),t=(0,r.Z)(n,2),s=t[0],o=t[1];return(0,i.useEffect)((function(){(0,a.Y5)(e).then(o)}),[e]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(_,{movie:s})})}}}]);
//# sourceMappingURL=658.a48341f3.chunk.js.map