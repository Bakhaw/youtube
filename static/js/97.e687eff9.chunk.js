"use strict";(self.webpackChunkapp_youtube=self.webpackChunkapp_youtube||[]).push([[97],{5840:function(t,n,e){e.d(n,{Z:function(){return p}});var r=e(5861),i=e(7757),a=e.n(i),o=e(4569),c=e.n(o),s="AIzaSyA_Mk59ZVewZU_vbcVmOv2UKZOVyeLn58o",u={getTrendingVideos:function(){var t=(0,r.Z)(a().mark((function t(){var n,e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=FR&maxResults=50&key=".concat(s),t.next=4,c().get(n);case 4:return e=t.sent,r=e.data,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),getRelatedVideos:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=".concat(n,"&type=video&maxResults=50&key=").concat(s),t.next=4,c().get(e);case 4:return r=t.sent,i=r.data,t.abrupt("return",i.items);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),getVideosByMultipleIds:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://www.googleapis.com/youtube/v3/videos?part=statistics&id=".concat(n,"&key=").concat(s),t.next=4,c().get(e);case 4:return r=t.sent,i=r.data,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),getVideoById:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(n,"&key=").concat(s),t.next=4,c().get(e);case 4:return r=t.sent,i=r.data,t.abrupt("return",i.items);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),getVideoComments:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=".concat(n,"&maxResults=100&key=").concat(s),t.next=4,c().get(e);case 4:return r=t.sent,i=r.data,t.abrupt("return",i.items);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),searchByQuery:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=" https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=".concat(n,"&key=").concat(s),t.next=4,c().get(e);case 4:return r=t.sent,i=r.data,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}()},p=u},154:function(t,n,e){var r,i=e(168),a=(e(2791),e(7225)),o=e(184),c=a.ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: ",";\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 800px) {\n    grid-template-columns: 100vw;\n    gap: -30px 0;\n    margin: 0;\n  }\n"])),(function(t){return t.columnWidth}));n.Z=function(t){var n=t.children,e=t.columnWidth,r=t.items;return(0,o.jsx)(c,{columnWidth:e,children:r.map((function(t){return n(t)}))})}},1747:function(t,n,e){e.d(n,{Z:function(){return z}});var r,i=e(168),a=(e(2791),e(1523)),o=e(7225),c=e(184),s=o.ZP.img(r||(r=(0,i.Z)(["\n  height: 100%;\n  min-width: ",";\n  border-radius: 6px 0 0 6px;\n  @media (max-width: 800px) {\n    height: 250px;\n    width: 100%;\n    border-radius: 0;\n  }\n"])),(function(t){return t.thumbWidth}));var u=function(t){var n=t.item,e=t.thumbWidth;return(0,c.jsx)(s,{alt:"Video thumbnail",src:n.snippet.thumbnails.high.url,thumbWidth:e})},p=e(2426),d=e.n(p);e(593);var l,h,f=e.p+"static/media/eye.c49c6300d6670f7e0e5a9737a4e7ee70.svg",v=o.ZP.div(l||(l=(0,i.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  align-self: flex-end;\n  grid-row: 3;\n  h4 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 10px 0 0;\n    font-size: 12px;\n    color: #949fbb;\n  }\n  @media (max-width: 800px) {\n    justify-content: flex-end;\n    h4 {\n      display: none;\n    }\n  }\n"]))),m=o.ZP.img(h||(h=(0,i.Z)(["\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n"])));var x,g,w=function(t){var n=t.item,e=d()(n.snippet.publishedAt).locale("en").fromNow();return(0,c.jsxs)(v,{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)(m,{src:f}),function(t){var n=Math.log10(t)/3|0;if(0===n)return t;var e=["","k","M","G","T","P","E"][n];return(t/Math.pow(10,3*n)).toFixed(1)+e}(n.statistics?n.statistics.viewCount:"3604239")]}),(0,c.jsx)("h4",{children:e})]})},y=o.ZP.div(x||(x=(0,i.Z)(["\n  display: grid;\n  grid-template-rows: 23px 23px 1fr;\n  padding: 6px 10px;\n  h2,\n  h3 {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0;\n    max-width: 100%;\n  }\n  h3 {\n    grid-row: 2;\n    font-size: 12px;\n    font-weight: bold;\n    color: #69718e;\n  }\n  @media (max-width: 800px) {\n    display: block;\n    h2 {\n      max-width: 100vw;\n      margin: 10px 0 5px 0;\n    }\n  }\n"]))),b=o.ZP.h2(g||(g=(0,i.Z)(["\n  grid-row: 1;\n  font-size: ",";\n  font-weight: bold;\n  color: #80a2ff;\n"])),(function(t){return t.videoTitleSize}));var Z,j=function(t){var n=t.item,e=t.videoTitleSize;return(0,c.jsxs)(y,{children:[(0,c.jsx)(b,{dangerouslySetInnerHTML:{__html:n.snippet.title},videoTitleSize:e}),(0,c.jsx)("h3",{children:n.snippet.channelTitle}),(0,c.jsx)(w,{item:n})]})},k=o.ZP.div(Z||(Z=(0,i.Z)(["\n  display: flex;\n  height: ",";\n  margin: 6px 0;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.06);\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  &:hover {\n    transform: scale(1.01);\n  }\n  @media (max-width: 800px) {\n    flex-direction: column;\n    justify-content: center;\n    height: auto;\n    background: #fff;\n    border-radius: 0;\n  }\n"])),(function(t){return t.cardHeight})),T={small:{cardHeight:"130px",thumbWidth:"180px",videoTitleSize:"14px"},default:{cardHeight:"160px",thumbWidth:"230px",videoTitleSize:"16px"}};var z=function(t){var n=t.item,e=t.size,r=T[void 0===e?"default":e],i=r.cardHeight,o=r.thumbWidth,s=r.videoTitleSize;return(0,c.jsx)(a.rU,{to:"/watch/".concat(n.id.videoId||n.id),children:(0,c.jsxs)(k,{cardHeight:i,children:[(0,c.jsx)(u,{item:n,thumbWidth:o}),(0,c.jsx)(j,{item:n,videoTitleSize:s})]})})}},4157:function(t,n,e){e.d(n,{i:function(){return p}});var r=e(2982),i=e(5861),a=e(885),o=e(7757),c=e.n(o),s=e(2791),u=e(5840);var p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=(0,s.useState)(e),p=(0,a.Z)(o,2),d=p[0],l=p[1];return(0,s.useEffect)((function(){function e(){return(e=(0,i.Z)(c().mark((function e(){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z[t].apply(u.Z,(0,r.Z)(n));case 2:return i=e.sent,e.next=5,l(i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t].concat((0,r.Z)(n))),d}},7097:function(t,n,e){e.r(n);e(2791);var r=e(9794),i=e(154),a=e(2881),o=e(1747),c=e(4157),s=e(184);n.default=function(){var t=(0,c.i)("getTrendingVideos");return!t||0===t.length?(0,s.jsx)(a.Z,{}):(0,s.jsx)(r.Z,{children:(0,s.jsx)(i.Z,{columnWidth:"60vw",items:t.items,children:function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(o.Z,{item:t})},t.id)}})})}}}]);
//# sourceMappingURL=97.e687eff9.chunk.js.map