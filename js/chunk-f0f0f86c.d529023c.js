(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0f0f86c"],{"04f0":function(t,e,a){},"0e8f":function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("flex")},"17b3":function(t,e,a){},"2ad9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("NavigationAdmin",{attrs:{name:"ผู้ดูแลระบบ"}}),a("v-container",{attrs:{"grid-list-xs":""}},[a("v-text-field",{staticClass:"widths rounded-lg pt-3",attrs:{clearable:"",flat:"","hide-details":"","append-icon":"mdi-magnify",label:"ค้นหา",solo:"",outlined:"","single-line":""}}),a("br"),a("v-btn",{staticClass:"rounded-lg",attrs:{color:"green",large:"",block:"",dark:""},on:{click:function(e){return t.$router.push("/admin/addadmin")}}},[a("h3",[t._v("เพิ่มผู้ดูแลระบบ")])]),a("br"),t._l(5,(function(e){return a("v-card",{staticClass:"elevation-5 rounded-lg pa-3 mt-3"},[a("div",{staticClass:"d-flex flex-no-wrap"},[a("h4",[t._v("ผู้ดูแลระบบ")])]),a("h4",[t._v("ชื่อ-นามสกุล : นายแดง แดงแดง ")]),a("h4",[t._v("ชื่อผู้ใช้งาน : dang1234 ")]),a("h4",[t._v("อีเมล : dang@gmail.com ")]),a("br"),a("center",[a("v-flex",{attrs:{xs12:"",row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-btn",{staticClass:"rounded-l-lg width ",attrs:{outlined:"",dark:"",color:"warning"},on:{click:function(e){return t.$router.push("/admin/editadmin")}}},[a("v-icon",[t._v("mdi-pencil")]),t._v("แก้ไข ")],1)],1),a("v-flex",{attrs:{xs6:""}},[a("v-btn",{staticClass:"rounded-r-lg width",attrs:{outlined:"",dark:"",color:"red"},on:{click:function(e){t.dialog1=!1}}},[a("v-icon",[t._v("mdi-delete")]),t._v("ลบ ")],1)],1)],1)],1)],1)})),a("div",{staticClass:"text-center pt-4"},[a("v-pagination",{attrs:{color:"green",length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2)],1)},n=[],r=(a("96cf"),a("1da1")),s={name:"checkUser",components:{},props:{},data:function(){return{page:1,dialog:!1,value:[423,446,675,510,590,610,760]}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,a){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:{load:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},o=s,l=(a("89ea"),a("2877")),c=a("6544"),u=a.n(c),d=a("8336"),h=a("b0af"),v=a("a523"),f=a("0e8f"),g=a("132d"),p=a("891e"),b=a("8654"),m=Object(l["a"])(o,i,n,!1,null,"54283699",null);e["default"]=m.exports;u()(m,{VBtn:d["a"],VCard:h["a"],VContainer:v["a"],VFlex:f["a"],VIcon:g["a"],VPagination:p["a"],VTextField:b["a"]})},"4b85":function(t,e,a){},"615b":function(t,e,a){},"891e":function(t,e,a){"use strict";a("99af"),a("d81d"),a("a9e3"),a("d3b7"),a("25f0");var i=a("2909"),n=a("5530"),r=(a("17b3"),a("9d26")),s=a("dc22"),o=a("a9ad"),l=a("de2c"),c=a("7560"),u=a("58df");e["a"]=Object(u["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:s["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,n=Math.floor(e/2),r=this.length-n+1+a;if(this.value>n&&this.value<r){var s=this.value-n+2,o=this.value+n-2-a;return[1,"..."].concat(Object(i["a"])(this.range(s,o)),["...",this.length])}if(this.value===n){var l=this.value+n-1-a;return[].concat(Object(i["a"])(this.range(1,l)),["...",this.length])}if(this.value===r){var c=this.value-n+1;return[1,"..."].concat(Object(i["a"])(this.range(c,this.length)))}return[].concat(Object(i["a"])(this.range(1,n)),["..."],Object(i["a"])(this.range(r,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{type:"button","aria-label":n},on:a?{}:{click:i}},[t(r["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),n=e===this.value,r=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},"89ea":function(t,e,a){"use strict";var i=a("04f0"),n=a.n(i);n.a},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85");var i=a("e8f2"),n=a("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,r=e.data,s=e.children,o=r.attrs;return o&&(r.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),s)}})},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("5530"),n=(a("615b"),a("10d2")),r=a("297c"),s=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(r["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-f0f0f86c.d529023c.js.map