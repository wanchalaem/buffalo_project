(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24159c88"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,a){return n[t+Object(o["z"])(a)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},g=u("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},h=u("alignContent",(function(){return{type:String,default:null,validator:p}})),b={align:Object.keys(f),justify:Object.keys(g),alignContent:Object.keys(h)},y={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){var a=y[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var x=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},g),{},{alignContent:{type:String,default:null,validator:p}},h),render:function(t,e){var n=e.props,r=e.data,i=e.children,o="";for(var c in n)o+=String(n[c]);var l=x.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var a=n[t],r=m(e,t,a);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(o,l)}(),t(n.tag,Object(s["a"])(r,{staticClass:"row",class:l}),i)}})},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),r=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"615b":function(t,e,n){},6566:function(t,e,n){"use strict";var a=n("9bf2").f,r=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),g=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,a){o(t,u,e),g(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&c(a,t[l],t,n)})),v=p(e),h=function(t,e,n){var a,r,i=v(t),s=b(t,e);return s?s.value=n:(i.last=s={index:r=f(e,!0),key:e,value:n,previous:a=i.last,next:void 0,removed:!1},i.first||(i.first=s),a&&(a.next=s),d?i.size++:t.size++,"F"!==r&&(i.index[r]=s)),t},b=function(t,e){var n,a=v(t),r=f(e);if("F"!==r)return a.index[r];for(n=a.first;n;n=n.next)if(n.key==e)return n};return i(u.prototype,{clear:function(){var t=this,e=v(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),a=b(e,t);if(a){var r=a.next,i=a.previous;delete n.index[a.index],a.removed=!0,i&&(i.next=r),r&&(r.previous=i),n.first==a&&(n.first=r),n.last==a&&(n.last=i),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=v(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(u.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),d&&a(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,n){var a=e+" Iterator",r=p(e),i=p(a);l(t,e,(function(t,e){g(this,{type:a,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),r=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),v=n("d44e"),g=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),b=p?"set":"add",y=r[t],m=y&&y.prototype,x=y,j={},w=function(t){var e=m[t];s(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof y||!(h||m.forEach&&!d((function(){(new y).entries().next()})))))x=n.getConstructor(e,t,p,b),o.REQUIRED=!0;else if(i(t,!0)){var C=new x,k=C[b](h?{}:-0,1)!=C,O=d((function(){C.has(1)})),S=f((function(t){new y(t)})),z=!h&&d((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));S||(x=e((function(e,n){l(e,x,t);var a=g(new y,e,x);return void 0!=n&&c(n,a[b],a,p),a})),x.prototype=m,m.constructor=x),(O||z)&&(w("delete"),w("has"),p&&w("get")),(z||k)&&w(b),h&&m.clear&&delete m.clear}return j[t]=x,a({global:!0,forced:x!=y},j),v(x,t),h||n.setStrong(x,t,p),x}},a523:function(t,e,n){"use strict";n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85");var a=n("e8f2"),r=n("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,i=e.data,s=e.children,o=i.attrs;return o&&(i.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),s)}})},b050:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("Navigation",{attrs:{name:""}}),n("v-container",[n("v-row",{staticClass:"d-flex flex-row "},[n("v-btn",{attrs:{color:"",depressed:"",fab:"",small:""},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),n("h2",[t._v("รายงานการเติบโต")])],1)],1),n("v-container",[n("div",{staticClass:"mb-3"},[n("h3",[t._v("การเจริญเติบโตพันธุ์ประวัติรายฟาร์ม")])]),n("v-card",{staticClass:" pa-4 rounded-lg"},[n("v-text-field",{staticClass:"rounded-lg",attrs:{outlined:"",name:"name",label:"ชื่อฟาร์ม",id:"id"}}),n("v-text-field",{staticClass:"rounded-lg",attrs:{outlined:"",name:"name",label:"จำนวนควายอายุ 240 วัน",id:"id"}}),n("v-text-field",{staticClass:"rounded-lg",attrs:{outlined:"",name:"name",label:"จำนวนควายอายุ 400 วัน",id:"id"}}),n("v-text-field",{staticClass:"rounded-lg",attrs:{outlined:"",name:"name",label:"จำนวนควายอายุ 600 วัน",id:"id"}})],1)],1)],1)},r=[],i={data:function(){return{}}},s=i,o=(n("c8bc"),n("2877")),c=n("6544"),l=n.n(c),u=n("8336"),d=n("b0af"),f=n("a523"),v=n("132d"),g=n("0fd9"),p=n("8654"),h=Object(o["a"])(s,a,r,!1,null,null,null);e["default"]=h.exports;l()(h,{VBtn:u["a"],VCard:d["a"],VContainer:f["a"],VIcon:v["a"],VRow:g["a"],VTextField:p["a"]})},b0af:function(t,e,n){"use strict";n("0481"),n("4069"),n("a9e3");var a=n("5530"),r=(n("615b"),n("10d2")),i=n("297c"),s=n("1c87"),o=n("58df");e["a"]=Object(o["a"])(i["a"],s["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},c790:function(t,e,n){},c8bc:function(t,e,n){"use strict";var a=n("c790"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-24159c88.c791ae21.js.map