(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{877:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-app",data:function(){return{number:null,previousMessage:"অ্যাপ হোম পেজ",nextMessage:{url:"/experience/mobile-app/merchant-pay/merchant-pay-two",message:"পরিমাণ টাইপ করে নেক্সট চাপুন"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number}}),this.$store.commit("setMessage",t.message)}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("পেমেন্ট")])]),t._v(" "),n("div",{staticClass:"playground"},[n("form",{staticClass:"form p-25"},[n("div",{staticClass:"custom-form-group number-input"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"custom-form-control",attrs:{type:"number",id:"phoneNumber",placeholder:"number"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("প্রাপক")]),t._v(" "),n("p",{staticClass:"info"},[t._v("১১ ডিজিটের মোবাইল নাম্বার লিখুন")]),t._v(" "),n("input",{staticClass:"number-submit",attrs:{type:"submit",value:""}}),t._v(" "),n("a",{staticClass:"number-submit",on:{click:function(e){return t.nextStep(t.nextMessage)}}})])]),t._v(" "),n("div",{staticClass:"contacts"},[n("h3",{staticClass:"title"},[t._v("সব কনট্যাক্টস")]),t._v(" "),n("ul",{attrs:{role:"list"}},[n("li",[n("a",{on:{click:function(e){return t.nextStep(t.nextMessage)}}},[n("span",{staticClass:"name"},[t._v("ABC Footwaer")]),t._v(" "),n("span",{staticClass:"number"},[t._v("01XXXXXXXXX")])])])])])])])}),[],!1,null,"2e9e57a4",null);e.default=component.exports}}]);