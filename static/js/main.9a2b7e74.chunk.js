(this["webpackJsonpnetflix-clone-pravi"]=this["webpackJsonpnetflix-clone-pravi"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),i=n.n(r),o=(n(28),n(29),n(4)),s=n.n(o),l=n(6),h=n(5),d=n(19),b=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),u=(n(48),n(20)),f=n(23),v=n.n(f),j=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargerRow,r=Object(c.useState)([]),i=Object(h.a)(r,2),o=i[0],d=i[1],f=Object(c.useState)(""),p=Object(h.a)(f,2),g=p[0],m=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(n);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row_posters",children:o.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){g?m(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:" row_imgPoster ".concat(a&&"row_posterLarge"),src:"".concat("http://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(j.jsx)(u.a,{videoId:g,opts:{hight:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="e268785f96ce3cd233ae54e0f60da230",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchMystery:"/discover/movie?api_key=".concat(g,"&with_genres=9648"),fetchSciFi:"/discover/movie?api_key=".concat(g,"&with_genres=878"),fetchWestern:"/discover/movie?api_key=".concat(g,"&with_genres=37"),fetchAnimation:"/discover/movie?api_key=".concat(g,"&with_genres=16"),fetchTV:"/discover/movie?api_key=".concat(g,"&with_genres=10770")};n(71);var _=function(){var e,t,n=Object(c.useState)([]),a=Object(h.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(m.fetchTrending);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("http://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'"\n            )'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner_contents",children:[Object(j.jsx)("h1",{className:"banner_title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"banner_button",children:"Play"}),Object(j.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner_description",children:(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(j.jsx)("div",{className:"banner_fadeBottom"})]})};n(72);var O=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"navbar ".concat(n&&"navbar_black"),children:[Object(j.jsx)("img",{className:"navbar_logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"Netflix Logo"}),Object(j.jsx)("img",{className:"navbar_signUp",src:"https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/100773906_1556172277866253_1073650573124829184_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=QBNLcFh9opoAX8pc8Cq&_nc_ht=scontent.fblr1-4.fna&oh=5513bf96d37584051b8022bb73b59e61&oe=607E02FA",alt:"PrawinPravs"})]})};var x=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{}),Object(j.jsx)(_,{}),Object(j.jsx)(p,{title:"VIDEOHUB ORIGINAL",fetchUrl:m.fetchTrending,isLargerRow:!0}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(j.jsx)(p,{title:"Romantic Movies",fetchUrl:m.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Top Rated Movies",fetchUrl:m.fetchMystery}),Object(j.jsx)(p,{title:"Western",fetchUrl:m.fetchWestern}),Object(j.jsx)(p,{title:"TV Shows",fetchUrl:m.fetchTV})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.9a2b7e74.chunk.js.map