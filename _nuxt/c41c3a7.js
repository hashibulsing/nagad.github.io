(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{618:function(t,e,n){var content=n(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("14c819f2",content,!0,{sourceMap:!1})},650:function(t,e,n){"use strict";n(618)},651:function(t,e,n){var r=n(31)(!1);r.push([t.i,".faqService-tab-button[data-v-7157c8a6]{padding:15px 25px;border:none;outline:none;width:100%;background:linear-gradient(161.04deg,#fff9f4 -58.16%,rgba(255,250,245,.26) 76.42%);border:1px solid hsla(0,0%,100%,.2);box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(62px);backdrop-filter:blur(62px);border-radius:30px;transition:transform .3s linear}.faqService-tab-button .icon[data-v-7157c8a6]{margin-bottom:13px;height:60px;background-repeat:no-repeat;background-size:auto 100%;background-position:50%;filter:hue-rotate(235deg) brightness(.55) invert(.33)}.faqService-tab-button .service-title[data-v-7157c8a6]{color:#6e7191;text-align:center;font-weight:700;font-size:16px;line-height:22px;margin-bottom:0}@media screen and (min-width:768px){.faqService-tab-button[data-v-7157c8a6]{padding:20px 25px}.faqService-tab-button .icon[data-v-7157c8a6]{margin-bottom:20px;height:70px}.faqService-tab-button .service-title[data-v-7157c8a6]{font-size:20px;line-height:32px}.faq[data-v-7157c8a6]{padding:70px 20px 20px}.faq .serviceFAQ[data-v-7157c8a6]{padding:30px 0 0}}@media screen and (min-width:1200px){.faqService-tab-button[data-v-7157c8a6]{padding:20px 35px}.faqService-tab-button .icon[data-v-7157c8a6]{margin-bottom:20px;height:100px}}",""]),t.exports=r},670:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(30),{data:function(){return{faqCategories:[],faqContents:[]}},methods:{faqHandler:function(t){this.getFaqDetail(t)},getFaqCategory:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("get-faq-category");case 2:n=e.sent,t.faqCategories=n.data.data;case 4:case"end":return e.stop()}}),e)})))()},getFaqDetail:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,e.$axios.get("get-faq-detail/"+t);case 3:r=n.sent,e.faqContents=r.data.data[0];case 5:case"end":return n.stop()}}),n)})))()}},created:function(){this.faqHandler(1),this.getFaqCategory(),this.getFaqDetail()}}),c=(n(650),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.faqCategories.length>0?n("section",{staticClass:"faq faqSlider"},[n("client-only",[n("carousel",{attrs:{autoplay:!1,loop:!0,center:!0,nav:!0,margin:20,responsive:{0:{items:1,stagePadding:100},600:{items:3,stagePadding:50},1024:{items:5,stagePadding:75}}}},t._l(t.faqCategories,(function(e){return n("div",{key:e.id,staticClass:"faqService"},[n("button",{staticClass:"faqService-tab-button",on:{click:function(n){return t.faqHandler(e.id)}}},[n("div",{staticClass:"icon",style:{backgroundImage:"url("+e.file_url_thumbnail+")"}}),t._v(" "),n("h5",{staticClass:"service-title"},[t._v(t._s(e.title_english))])])])})),0)],1),t._v(" "),n("div",[n("div",{staticClass:"serviceFAQ"},[n("b-container",[t.faqContents?n("div",{staticClass:"section-heading"},["en"==t.$i18n.locale?n("h2",[t._v(t._s(t.faqContents.title_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("h2",{staticClass:"font-bn"},[t._v(t._s(t.faqContents.title_bangla))]):t._e()]):t._e(),t._v(" "),t.faqContents.faq.length>0?n("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.faqContents.faq,(function(e,r){return n("b-card",{key:r,staticClass:"mb-1",attrs:{"no-body":""}},[n("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},["en"==t.$i18n.locale?n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+r,expression:"'accordion-' + index"}],attrs:{block:"",variant:"info"}},[t._v(t._s(e.question_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+r,expression:"'accordion-' + index"}],attrs:{block:"",variant:"info"}},[t._v(t._s(e.question_bangla))]):t._e()],1),t._v(" "),n("b-collapse",{attrs:{id:"accordion-"+r,visible:"",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",["en"==t.$i18n.locale?n("b-card-text",[t._v(t._s(e.answer_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("b-card-text",[t._v(t._s(e.answer_bangla))]):t._e()],1)],1)],1)})),1):t._e()])],1)])],1):t._e()}),[],!1,null,"7157c8a6",null);e.default=component.exports}}]);