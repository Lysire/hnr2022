(function(e){function t(t){for(var n,o,s=t[0],i=t[1],c=t[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",[e._v("Games")])],1),a("v-main",{staticClass:"grey lighten-2"},[a("v-container",[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("Advanced Search")]),a("v-expansion-panel-content",[a("v-text-field",{attrs:{dense:"",filled:"",placeholder:"Title"},model:{value:e.gameinfo.title,callback:function(t){e.$set(e.gameinfo,"title",t)},expression:"gameinfo.title"}}),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{dense:"",filled:"",placeholder:"Genre"},model:{value:e.gameinfo.genre,callback:function(t){e.$set(e.gameinfo,"genre",t)},expression:"gameinfo.genre"}})],1),a("v-spacer",{staticClass:"mx-4",attrs:{vertical:""}}),a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{dense:"",filled:"",placeholder:"Year"},model:{value:e.gameinfo.year,callback:function(t){e.$set(e.gameinfo,"year",t)},expression:"gameinfo.year"}})],1),a("v-spacer",{staticClass:"mx-4",attrs:{vertical:""}}),a("v-col",{staticClass:"pt-3",attrs:{cols:"1"}},[e._v(" Players: ")]),a("v-col",{attrs:{cols:"1"}},[a("v-select",{attrs:{items:e.players,dense:"",chips:"",outlined:""},model:{value:e.gameinfo.minnumber,callback:function(t){e.$set(e.gameinfo,"minnumber",t)},expression:"gameinfo.minnumber"}})],1),a("v-col",{staticClass:"pt-3 pl-10",attrs:{cols:"0","align-content":"center"}},[e._v(" to ")]),a("v-col",{attrs:{cols:"1"}},[a("v-select",{attrs:{items:e.players,dense:"",chips:"",outlined:""},model:{value:e.gameinfo.maxnumber,callback:function(t){e.$set(e.gameinfo,"maxnumber",t)},expression:"gameinfo.maxnumber"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{align:"end"}},[a("v-btn",{attrs:{color:"primary"}},[e._v("Submit")])],1)],1)],1)],1)],1),a("v-row",{staticClass:"mt-4"},[e._l(4,(function(t){return e._l(6,(function(e){return a("v-col",{key:""+t+e,attrs:{cols:"6",md:"2"}},[a("GameCard")],1)}))}))],2)],1)],1)],1)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"},on:{click:e.onclick}},[a("v-card-title",[e._v(" "+e._s(e.title)+" "),a("div",{staticClass:"text--secondary ml-1"},[e._v("("+e._s(e.year)+")")])]),a("v-card-subtitle",[e._v(" "+e._s(e.minplayers)+"-"+e._s(e.maxplayers)+" players ")])],1)],1)},s=[],i=(a("a9e3"),{props:{title:{default:"",type:String},year:{default:0,type:Number},minplayers:{default:0,type:Number},maxplayers:{default:0,type:Number}},methods:{onclick:function(){}}}),c=i,u=a("2877"),p=a("6544"),f=a.n(p),d=a("b0af"),v=a("99d9"),m=a("a523"),b=Object(u["a"])(c,o,s,!1,null,null,null),y=b.exports;f()(b,{VCard:d["a"],VCardSubtitle:v["a"],VCardTitle:v["b"],VContainer:m["a"]});var g={name:"App",data:function(){return{gameinfo:{title:"",genre:null,year:null,minplayers:null,maxplayers:null},genres:[],players:[1,2,3,4,5,6,7,8,9,10]}},components:{GameCard:y}},x=g,h=a("7496"),_=a("40dc"),V=a("8336"),w=a("62ad"),C=a("cd55"),O=a("49e2"),k=a("c865"),P=a("0393"),j=a("f6c4"),S=a("0fd9"),T=a("b974"),$=a("2fa4"),E=a("8654"),M=a("2a7f"),A=Object(u["a"])(x,r,l,!1,null,null,null),G=A.exports;f()(A,{VApp:h["a"],VAppBar:_["a"],VBtn:V["a"],VCol:w["a"],VContainer:m["a"],VExpansionPanel:C["a"],VExpansionPanelContent:O["a"],VExpansionPanelHeader:k["a"],VExpansionPanels:P["a"],VMain:j["a"],VRow:S["a"],VSelect:T["a"],VSpacer:$["a"],VTextField:E["a"],VToolbarTitle:M["a"]});var N=a("f309");n["a"].use(N["a"]);var B=new N["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:B,render:function(e){return e(G)}}).$mount("#app")}});
//# sourceMappingURL=app.d27a6ca0.js.map