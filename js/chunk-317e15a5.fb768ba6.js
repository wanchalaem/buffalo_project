(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-317e15a5"],{"4bd4":function(t,e,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b");var r=n("5530"),i=n("58df"),a=n("7e2b"),s=n("3206");e["a"]=Object(i["a"])(a["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=n(t)))})):r.valid=n(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4d8d":function(t,e,n){"use strict";var r=n("818f"),i=n.n(r);i.a},7803:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-main",{staticClass:"bg"},[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){return t.$router.push("/")}}},[n("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"10",sm:"8",md:"4"}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"fcw"},[t._v("สมัครสมาชิก")])]),n("br"),n("div",{attrs:{color:"white"}},[n("hr"),n("br")]),n("v-form",[n("v-text-field",{staticClass:"rounded-lg",attrs:{solo:"",label:"ชื่อผู้ใช้งาน","prepend-inner-icon":"mdi-account-star"}}),n("v-text-field",{staticClass:"rounded-lg",attrs:{solo:"",label:"ชื่อ","prepend-inner-icon":"mdi-account",type:"text"}}),n("v-text-field",{staticClass:"rounded-lg",attrs:{solo:"",label:"นามสกุล","prepend-inner-icon":"mdi-account"}}),n("v-text-field",{staticClass:"rounded-lg",attrs:{solo:"",label:"รหัสผ่าน","prepend-inner-icon":"mdi-lock",type:"password"}}),n("v-text-field",{staticClass:"rounded-lg",attrs:{solo:"",label:"ยืนยันรหัสผ่าน","prepend-inner-icon":"mdi-lock",type:"password"}})],1),n("v-spacer"),n("v-btn",{staticClass:"width rounded-lg",attrs:{solo:"",dark:"",large:"",color:"green"},on:{click:function(e){return t.$router.push("/")}}},[t._v("สมัครสมาชิก")])],1)],1)],1)],1)],1)},i=[],a=(n("96cf"),n("1da1")),s={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World",province:["พะเยา"],district:["เมือง"],place:["แม่กา"]}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,n){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:{load:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},o=s,u=(n("4d8d"),n("2877")),c=n("6544"),d=n.n(c),l=n("7496"),f=n("8336"),h=n("62ad"),p=n("a523"),v=n("4bd4"),m=n("132d"),w=n("f6c4"),b=n("0fd9"),g=n("2fa4"),V=n("8654"),_=Object(u["a"])(o,r,i,!1,null,"20d69795",null);e["default"]=_.exports;d()(_,{VApp:l["a"],VBtn:f["a"],VCol:h["a"],VContainer:p["a"],VForm:v["a"],VIcon:m["a"],VMain:w["a"],VRow:b["a"],VSpacer:g["a"],VTextField:V["a"]})},"818f":function(t,e,n){}}]);
//# sourceMappingURL=chunk-317e15a5.fb768ba6.js.map