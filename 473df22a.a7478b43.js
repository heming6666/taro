(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1631:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(a),d=n,O=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return a?r.a.createElement(O,o({ref:t},p,{components:a})):r.a.createElement(O,o({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},586:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(9),i=(a(0),a(1631)),c={title:"Taro.navigateBack(OBJECT)",sidebar_label:"navigateBack"},o={id:"version-3.0.0-beta.5/apis/interface/navigation/navigateBack",title:"Taro.navigateBack(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.navigateBack`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBack.html)\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/interface/navigation/navigateBack.md",permalink:"/taro/docs/3.0.0-beta.5/apis/interface/navigation/navigateBack",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/interface/navigation/navigateBack.md",version:"3.0.0-beta.5",sidebar_label:"navigateBack",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.switchTab(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/interface/navigation/switchTab"},next:{title:"Taro.reLaunch(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/interface/navigation/reLaunch"}},b=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:b};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBack.html"}),Object(i.b)("inlineCode",{parentName:"a"},"wx.navigateBack")),"\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.navigateBack({ delta: 2 })\n")),Object(i.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.navigateBack"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}l.isMDXComponent=!0}}]);