(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220ff3bf"],{"615b":function(t,e,a){},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var s=a("5530"),n=(a("615b"),a("10d2")),r=a("297c"),i=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(r["a"],i["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},cb15:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("NavigationAdmin",{attrs:{name:"รายงานสรุปจำนวนควายที่มีชีวิต"}}),a("v-container",[a("v-btn",{staticClass:"mb-6",attrs:{fab:"",small:""},on:{click:function(e){return t.$router.push("/admin/report")}}},[a("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),a("v-select",{staticClass:"rounded-lg mt-2 mb-2",attrs:{solo:"",outlined:"",items:t.province,label:"กรุณาเลือกจังหวัด","hide-details":""}}),a("v-select",{staticClass:"rounded-lg mb-2",attrs:{solo:"",outlined:"",items:t.district,label:"กรุณาเลือกอำเภอ","hide-details":""}}),a("v-select",{staticClass:"rounded-lg mb-2",attrs:{solo:"",outlined:"",items:t.place,label:"กรุณาเลือกตำบล","hide-details":""}}),a("v-select",{staticClass:"rounded-lg mb-2",attrs:{solo:"",outlined:"",items:t.farm,label:"กรุณาเลือกฟาร์ม","hide-details":""}})],1),a("v-container",{attrs:{"grid-list-xs":""}},[a("v-card",{staticClass:"rounded-lg"},[a("div",{staticClass:"d-flex flex-no-wrap ma-4"},[a("div",{staticClass:"ma-3"},[a("h4",[t._v("ชื่อฟาร์ม : สวัสดิ์ฟาร์ม ")]),a("h4",[t._v("กลุ่มเกษตกร : แม่ใจ")]),a("h4",[t._v("จังหวัด : พะเยา")]),a("h4",[t._v("อำเภอ : เมือง")]),a("h4",[t._v("ตำบล : แม่กา")]),a("h4",[t._v("จำนวนควายทั้งหมด : 30 ตัว")])])])])],1)],1)},n=[],r=(a("96cf"),a("1da1")),i={name:"Root",components:{},props:{},data:function(){return{province:[{text:"พะเยา"},{text:"เชียงราย"},{text:"แพร่"},{text:"น่าน"}],district:[{text:"พะเยา"},{text:"เชียงราย"},{text:"แพร่"},{text:"น่าน"}],place:[{text:"ปัว"},{text:"แงง"},{text:"สถาน"},{text:"ศิลาแลง"},{text:"ศิลาเพชร"},{text:"อวน"},{text:"ไชยวัฒนา"},{text:"เจดีย์ชัย"},{text:"ภูคา"},{text:"สกาด"},{text:"ป่ากลาง"},{text:"\tวรนคร"}],farm:[{text:"เชียงกลาง"},{text:"ท่าวังผา"},{text:"ทุ่งช้าง"},{text:"นาน้อย"},{text:"บ่อเกลือ"},{text:"นาน้อย"},{text:"บ้านหลวง"},{text:"ปัว"},{text:"ภูเพียง"},{text:"แม่จริม"},{text:"เมืองน่าน"},{text:"เวียงสา"},{text:"สองแคว"},{text:"สันติสุข"}]}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,a){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:{load:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},o=i,c=(a("f592"),a("2877")),l=a("6544"),d=a.n(l),u=a("8336"),h=a("b0af"),v=a("a523"),f=a("132d"),m=a("b974"),p=Object(c["a"])(o,s,n,!1,null,"370086c2",null);e["default"]=p.exports;d()(p,{VBtn:u["a"],VCard:h["a"],VContainer:v["a"],VIcon:f["a"],VSelect:m["a"]})},f300:function(t,e,a){},f592:function(t,e,a){"use strict";var s=a("f300"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-220ff3bf.87957c79.js.map