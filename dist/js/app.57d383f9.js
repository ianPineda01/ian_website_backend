(function(e){function t(t){for(var n,o,u=t[0],l=t[1],i=t[2],s=0,b=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},r={app:0},c=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"36d852c9","chunk-37ead4e9":"9d98f527","chunk-cc5e99f6":"5c2d1387"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var i=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",i.name="ChunkLoadError",i.type=n,i.request=c,a[1](i)}r[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(a,n,function(t){return e[t]}.bind(null,n));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1194:function(e,t,a){"use strict";a("4cbc")},"4cbc":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={class:"p-5 w-max mx-auto"},c=Object(n["g"])("Home"),o=Object(n["g"])(" | "),u=Object(n["g"])("About me"),l=Object(n["g"])(" | "),i={class:"hidden md:inline"},s=Object(n["g"])("Snake"),d=Object(n["g"])(" | "),b=Object(n["g"])("Contact");function v(e,t){var a=Object(n["x"])("router-link"),v=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",r,[Object(n["h"])(a,{to:"/",class:"font-bold"},{default:Object(n["C"])((function(){return[c]})),_:1}),o,Object(n["h"])(a,{to:"/about",class:"font-bold"},{default:Object(n["C"])((function(){return[u]})),_:1}),l,Object(n["e"])("span",i,[Object(n["h"])(a,{to:"/snake",class:"font-bold"},{default:Object(n["C"])((function(){return[s]})),_:1}),d]),Object(n["h"])(a,{to:"/contact",class:"font-bold"},{default:Object(n["C"])((function(){return[b]})),_:1})]),Object(n["h"])(v,{class:"font-sans antialiased text-gray-600"})],64)}var p=a("d959"),f=a.n(p);const h={},j=f()(h,[["render",v]]);var g=j,O=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),m=a("cf05"),k=a.n(m),y={class:"w-max mx-auto text-center"},_=Object(n["e"])("h1",null,"Ian Pineda",-1),w=Object(n["e"])("h3",null,"(Under construction)",-1),x=Object(n["e"])("img",{alt:"Vue logo",src:k.a},null,-1),C=[_,w,x];function P(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("div",y,C)}var S=a("d4ec"),E=a("262e"),T=a("2caf"),q=a("9ab4"),I=a("ce1f");Object(n["u"])("data-v-8839ec56");var L={class:"hello"},M=Object(n["f"])('<p data-v-8839ec56> For a guide and recipes on how to configure / customize this project,<br data-v-8839ec56> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>vue-cli documentation</a>. </p><h3 data-v-8839ec56>Installed CLI Plugins</h3><ul data-v-8839ec56><li data-v-8839ec56><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-8839ec56>babel</a></li><li data-v-8839ec56><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-8839ec56>router</a></li><li data-v-8839ec56><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-8839ec56>typescript</a></li></ul><h3 data-v-8839ec56>Essential Links</h3><ul data-v-8839ec56><li data-v-8839ec56><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>Core Docs</a></li><li data-v-8839ec56><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>Forum</a></li><li data-v-8839ec56><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>Community Chat</a></li><li data-v-8839ec56><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-8839ec56>Twitter</a></li><li data-v-8839ec56><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>News</a></li></ul><h3 data-v-8839ec56>Ecosystem</h3><ul data-v-8839ec56><li data-v-8839ec56><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>vue-router</a></li><li data-v-8839ec56><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>vuex</a></li><li data-v-8839ec56><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-8839ec56>vue-devtools</a></li><li data-v-8839ec56><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-8839ec56>vue-loader</a></li><li data-v-8839ec56><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-8839ec56>awesome-vue</a></li></ul>',7);function A(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("div",L,[Object(n["e"])("h1",null,Object(n["z"])(e.msg),1),M])}Object(n["r"])();var H=function(e){Object(E["a"])(a,e);var t=Object(T["a"])(a);function a(){return Object(S["a"])(this,a),t.apply(this,arguments)}return a}(I["b"]);H=Object(q["a"])([Object(I["a"])({props:{msg:String}})],H);var z=H;a("1194");const F=f()(z,[["render",A],["__scopeId","data-v-8839ec56"]]);var J=F,D=function(e){Object(E["a"])(a,e);var t=Object(T["a"])(a);function a(){return Object(S["a"])(this,a),t.apply(this,arguments)}return a}(I["b"]);D=Object(q["a"])([Object(I["a"])({components:{HelloWorld:J}})],D);var N=D;const U=f()(N,[["render",P]]);var V=U,W=[{path:"/",name:"Home",component:V},{path:"/about",name:"About me",component:function(){return a.e("chunk-37ead4e9").then(a.bind(null,"f820"))}},{path:"/snake",name:"Snake",component:function(){return a.e("about").then(a.bind(null,"61ea"))}},{path:"/contact",name:"Contact",component:function(){return a.e("chunk-cc5e99f6").then(a.bind(null,"b8fa"))}}],B=Object(O["a"])({history:Object(O["b"])(),routes:W}),G=B;a("f85c");Object(n["c"])(g).use(G).mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f85c:function(e,t,a){}});
//# sourceMappingURL=app.57d383f9.js.map