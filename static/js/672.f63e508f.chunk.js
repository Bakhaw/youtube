"use strict";(self.webpackChunkapp_youtube=self.webpackChunkapp_youtube||[]).push([[672],{5840:function(n,t,e){e.d(t,{Z:function(){return d}});var i=e(5861),r=e(7757),a=e.n(r),s=e(4569),c=e.n(s),o="AIzaSyA_Mk59ZVewZU_vbcVmOv2UKZOVyeLn58o",u={getTrendingVideos:function(){var n=(0,i.Z)(a().mark((function n(){var t,e,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=FR&maxResults=50&key=".concat(o),n.next=4,c().get(t);case 4:return e=n.sent,i=e.data,n.abrupt("return",i);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),getRelatedVideos:function(){var n=(0,i.Z)(a().mark((function n(t){var e,i,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=".concat(t,"&type=video&maxResults=50&key=").concat(o),n.next=4,c().get(e);case 4:return i=n.sent,r=i.data,n.abrupt("return",r.items);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),getVideosByMultipleIds:function(){var n=(0,i.Z)(a().mark((function n(t){var e,i,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://www.googleapis.com/youtube/v3/videos?part=statistics&id=".concat(t,"&key=").concat(o),n.next=4,c().get(e);case 4:return i=n.sent,r=i.data,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),getVideoById:function(){var n=(0,i.Z)(a().mark((function n(t){var e,i,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(t,"&key=").concat(o),n.next=4,c().get(e);case 4:return i=n.sent,r=i.data,n.abrupt("return",r.items);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),getVideoComments:function(){var n=(0,i.Z)(a().mark((function n(t){var e,i,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=".concat(t,"&maxResults=100&key=").concat(o),n.next=4,c().get(e);case 4:return i=n.sent,r=i.data,n.abrupt("return",r.items);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),searchByQuery:function(){var n=(0,i.Z)(a().mark((function n(t){var e,i,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=" https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=".concat(t,"&key=").concat(o),n.next=4,c().get(e);case 4:return i=n.sent,r=i.data,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},d=u},154:function(n,t,e){var i,r=e(168),a=(e(2791),e(7225)),s=e(184),c=a.ZP.ul(i||(i=(0,r.Z)(["\n  display: grid;\n  grid-template-columns: ",";\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 800px) {\n    grid-template-columns: 100vw;\n    gap: -30px 0;\n    margin: 0;\n  }\n"])),(function(n){return n.columnWidth}));t.Z=function(n){var t=n.children,e=n.columnWidth,i=n.items;return(0,s.jsx)(c,{columnWidth:e,children:i.map((function(n){return t(n)}))})}},1747:function(n,t,e){e.d(t,{Z:function(){return P}});var i,r=e(168),a=(e(2791),e(1523)),s=e(7225),c=e(184),o=s.ZP.img(i||(i=(0,r.Z)(["\n  height: 100%;\n  min-width: ",";\n  border-radius: 6px 0 0 6px;\n  @media (max-width: 800px) {\n    height: 250px;\n    width: 100%;\n    border-radius: 0;\n  }\n"])),(function(n){return n.thumbWidth}));var u=function(n){var t=n.item,e=n.thumbWidth;return(0,c.jsx)(o,{alt:"Video thumbnail",src:t.snippet.thumbnails.high.url,thumbWidth:e})},d=e(2426),l=e.n(d);e(593);var p,h,x=e.p+"static/media/eye.c49c6300d6670f7e0e5a9737a4e7ee70.svg",m=s.ZP.div(p||(p=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  align-self: flex-end;\n  grid-row: 3;\n  h4 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 10px 0 0;\n    font-size: 12px;\n    color: #949fbb;\n  }\n  @media (max-width: 800px) {\n    justify-content: flex-end;\n    h4 {\n      display: none;\n    }\n  }\n"]))),f=s.ZP.img(h||(h=(0,r.Z)(["\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n"])));var v,g,w=function(n){var t=n.item,e=l()(t.snippet.publishedAt).locale("en").fromNow();return(0,c.jsxs)(m,{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)(f,{src:x}),function(n){var t=Math.log10(n)/3|0;if(0===t)return n;var e=["","k","M","G","T","P","E"][t];return(n/Math.pow(10,3*t)).toFixed(1)+e}(t.statistics?t.statistics.viewCount:"3604239")]}),(0,c.jsx)("h4",{children:e})]})},y=s.ZP.div(v||(v=(0,r.Z)(["\n  display: grid;\n  grid-template-rows: 23px 23px 1fr;\n  padding: 6px 10px;\n  h2,\n  h3 {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0;\n    max-width: 100%;\n  }\n  h3 {\n    grid-row: 2;\n    font-size: 12px;\n    font-weight: bold;\n    color: #69718e;\n  }\n  @media (max-width: 800px) {\n    display: block;\n    h2 {\n      max-width: 100vw;\n      margin: 10px 0 5px 0;\n    }\n  }\n"]))),Z=s.ZP.h2(g||(g=(0,r.Z)(["\n  grid-row: 1;\n  font-size: ",";\n  font-weight: bold;\n  color: #80a2ff;\n"])),(function(n){return n.videoTitleSize}));var j,b=function(n){var t=n.item,e=n.videoTitleSize;return(0,c.jsxs)(y,{children:[(0,c.jsx)(Z,{dangerouslySetInnerHTML:{__html:t.snippet.title},videoTitleSize:e}),(0,c.jsx)("h3",{children:t.snippet.channelTitle}),(0,c.jsx)(w,{item:t})]})},k=s.ZP.div(j||(j=(0,r.Z)(["\n  display: flex;\n  height: ",";\n  margin: 6px 0;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.06);\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  &:hover {\n    transform: scale(1.01);\n  }\n  @media (max-width: 800px) {\n    flex-direction: column;\n    justify-content: center;\n    height: auto;\n    background: #fff;\n    border-radius: 0;\n  }\n"])),(function(n){return n.cardHeight})),z={small:{cardHeight:"130px",thumbWidth:"180px",videoTitleSize:"14px"},default:{cardHeight:"160px",thumbWidth:"230px",videoTitleSize:"16px"}};var P=function(n){var t=n.item,e=n.size,i=z[void 0===e?"default":e],r=i.cardHeight,s=i.thumbWidth,o=i.videoTitleSize;return(0,c.jsx)(a.rU,{to:"/watch/".concat(t.id.videoId||t.id),children:(0,c.jsxs)(k,{cardHeight:r,children:[(0,c.jsx)(u,{item:t,thumbWidth:s}),(0,c.jsx)(b,{item:t,videoTitleSize:o})]})})}},4157:function(n,t,e){e.d(t,{i:function(){return d}});var i=e(2982),r=e(5861),a=e(885),s=e(7757),c=e.n(s),o=e(2791),u=e(5840);var d=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=(0,o.useState)(e),d=(0,a.Z)(s,2),l=d[0],p=d[1];return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z[n].apply(u.Z,(0,i.Z)(t));case 2:return r=e.sent,e.next=5,p(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n].concat((0,i.Z)(t))),l}},7672:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var i,r=e(168),a=e(2791),s=e(7225),c=e(9794),o=e(2881),u=e(1679),d=e(5899),l=e(5366),p=e(9147),h=e(184),x=s.ZP.div(i||(i=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  h4 {\n    margin: 0;\n    color: #606060;\n    font-size: 14px;\n  }\n  svg {\n    fill: #909090;\n    height: 22px;\n    width: 22px;\n    margin-right: 5px;\n  }\n"])));var m,f,v=function(n){var t=n.item;function e(n){var t=Math.log10(n)/3|0;if(0===t)return n;var e=["","k","M","G","T","P","E"][t];return(n/Math.pow(10,3*t)).toFixed(1)+e}return(0,h.jsxs)(x,{children:[(0,h.jsx)(d.Z,{title:"J'aime ce contenu",children:(0,h.jsxs)(u.Z,{"aria-label":"Like",children:[(0,h.jsx)(p.Z,{}),(0,h.jsx)("h4",{children:e(t.statistics.likeCount)})]})}),(0,h.jsx)(d.Z,{title:"Je n'aime pas ce contenu",children:(0,h.jsxs)(u.Z,{"aria-label":"Dislike",children:[(0,h.jsx)(l.Z,{}),(0,h.jsx)("h4",{children:e(t.statistics.dislikeCount)})]})})]})},g=s.ZP.div(m||(m=(0,r.Z)(["\n  height: 90px;\n  width: 100%;\n  h2 {\n    font-size: 18px;\n    color: #0a0a0a;\n  }\n  h3 {\n    margin: 0;\n    color: #606060;\n    font-size: 16px;\n  }\n  @media (max-width: 800px) {\n    padding: 0 10px;\n    width: calc(100% - 20px);\n  }\n"]))),w=s.ZP.div(f||(f=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));var y,Z=function(n){var t=n.item;return(0,h.jsxs)(g,{children:[(0,h.jsx)("h2",{children:t.snippet.title}),(0,h.jsxs)(w,{children:[(0,h.jsxs)("h3",{children:[Number(t.statistics.viewCount).toLocaleString()," vues"]}),(0,h.jsx)(v,{item:t})]})]})},j=s.ZP.div(y||(y=(0,r.Z)(["\n  height: 70vh;\n  width: 100%;\n  iframe {\n    height: calc(100% - 90px); /* 90px is <BottomBar/> height */\n    width: 100%;\n  }\n  @media (max-width: 800px) {\n    height: 33vh;\n    width: 100vw;\n  }\n"])));var b,k=function(n){var t=n.item;return(0,h.jsxs)(j,{children:[(0,h.jsx)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,frameBorder:"0",src:"https://www.youtube.com/embed/".concat(t.id,"?autoplay=true"),title:"video-".concat(t.id)}),(0,h.jsx)(Z,{item:t})]})},z=e(4157),P=e(154),T=s.ZP.div(b||(b=(0,r.Z)(["\n  display: flex;\n  margin: 10px 0;\n  h3 {\n    margin: 0 10px;\n    font-size: 13px;\n    font-weight: bold;\n    color: #0a0a0a;\n  }\n  p {\n    margin: 8px 10px;\n    font-size: 14px;\n    color: #111;\n  }\n  img {\n    height: 40px;\n    min-width: 40px;\n    border-radius: 50%;\n  }\n"])));var C=function(n){var t=n.items;return(0,h.jsx)(P.Z,{columnWidth:"100%",items:t,children:function(n){var t=n.snippet.topLevelComment.snippet,e=t.authorDisplayName,i=t.authorProfileImageUrl,r=t.textDisplay;return(0,h.jsx)("li",{children:(0,h.jsxs)(T,{children:[(0,h.jsx)("img",{alt:"".concat(e," channel avatar"),src:i}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:e}),(0,h.jsx)("p",{dangerouslySetInnerHTML:{__html:r}})]})]})},n.id)}})},S=e(1747);var V,W,I=function(n){var t=n.items;return(0,h.jsx)(P.Z,{columnWidth:"100%",items:t,children:function(n){return(0,h.jsx)("li",{children:(0,h.jsx)(S.Z,{item:n,size:"small"})},n.id.videoId)}})},M=s.ZP.div(V||(V=(0,r.Z)(["\n  width: 65vw;\n"]))),B=s.ZP.div(W||(W=(0,r.Z)(["\n  padding-left: 20px;\n  min-height: calc(100vh - 70px); /* 70px is <NavBar /> height */\n  width: 35vw; /* because LeftContentWrapper is 65vw width */\n"])));var _=function(n){var t=n.match.params.videoId,e=(0,z.i)("getVideoById",[t]),i=(0,z.i)("getVideoComments",[t]),r=(0,z.i)("getRelatedVideos",[t]);return(0,a.useEffect)((function(){window.scrollTo(0,0),e.length>0&&(document.title="".concat(e[0].snippet.title," - YouTube"))}),[e,t]),0===e.length||0===i.length||0===r.length?(0,h.jsx)(o.Z,{}):(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)(M,{children:[(0,h.jsx)(k,{item:e[0]}),(0,h.jsx)(C,{items:i})]}),(0,h.jsx)(B,{children:(0,h.jsx)(I,{items:r})})]})}}}]);
//# sourceMappingURL=672.f63e508f.chunk.js.map