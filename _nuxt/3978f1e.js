(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{628:function(t,e,l){var content=l(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("09a08392",content,!0,{sourceMap:!1})},662:function(t,e,l){"use strict";l(628)},663:function(t,e,l){var r=l(31)(!1);r.push([t.i,".tariffCalculator .calculator[data-v-4350af77]{background:linear-gradient(161.04deg,rgba(255,249,244,.7) -58.16%,rgba(255,250,245,.182) 76.42%);border:1px solid #fff;box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);border-radius:35px;display:flex;flex-direction:column;overflow:hidden;margin:0 0 20px;text-align:center}.tariffCalculator .calculator .calculator-form[data-v-4350af77]{padding:30px 25px}.tariffCalculator .calculator .calculator-form .form-group[data-v-4350af77]{margin-bottom:20px}.tariffCalculator .calculator .calculator-form .form-group .custom-select[data-v-4350af77],.tariffCalculator .calculator .calculator-form .form-group .form-control[data-v-4350af77]{padding:10px 24px;background-color:#fcfcfc;border:2px solid #a0a3bd;border-radius:68px;font-size:14px;line-height:24px;height:unset}.tariffCalculator .calculator .result[data-v-4350af77]{background:#f24f41;color:#fcfcfc;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:50px 17px}.tariffCalculator .calculator .result .title[data-v-4350af77]{margin-bottom:10px;font-weight:700;font-size:16px;line-height:32px}.tariffCalculator .calculator .result .calculated-value[data-v-4350af77]{margin-bottom:30px;font-weight:700;font-size:30px;line-height:32px}.tariffCalculator .calculator .result .short-text[data-v-4350af77]{font-weight:400;font-size:12px;line-height:23px}@media screen and (min-width:768px){.tariffCalculator[data-v-4350af77]{margin-top:0}.tariffCalculator .calculator[data-v-4350af77]{flex-direction:row;margin:10px 0 30px}.tariffCalculator .calculator .calculator-form[data-v-4350af77]{flex-basis:50%;padding:50px 35px;text-align:left}.tariffCalculator .calculator .calculator-form .form-group[data-v-4350af77]{margin-bottom:25px}.tariffCalculator .calculator .calculator-form .form-group .custom-select[data-v-4350af77],.tariffCalculator .calculator .calculator-form .form-group .form-control[data-v-4350af77]{padding:17px 24px}.tariffCalculator .calculator .result[data-v-4350af77]{flex-basis:50%;padding:50px}.tariffCalculator .calculator .result .title[data-v-4350af77]{margin-bottom:15px;font-size:18px}.tariffCalculator .calculator .result .calculated-value[data-v-4350af77]{margin-bottom:40px;font-size:40px;line-height:48px}.tariffCalculator .calculator .result .short-text[data-v-4350af77]{font-size:14px;line-height:27px}}",""]),t.exports=r},715:function(t,e,l){"use strict";l.r(e);var r=l(10),n=(l(30),l(160),l(159),{data:function(){return{disabled:!1,moneySign:!0,form:{amount:"",selectService:"defaultSelect"},allService:Array,tariffCalculatedData:Array,resultData:"",options:[{text:"Select Service",value:"defaultSelect",disabled:!0}],optionsBangla:[{text:"সার্ভিস নির্বাচন করুন",value:"defaultSelect",disabled:!0}],show:!0,selectedServiceDisclaimerEnglish:"",selectedServiceDisclaimerBangla:"",minAmount:"",maxAmount:""}},methods:{onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==t.tariffCalculatedData.is_free?17==t.tariffCalculatedData.service_id?t.resultData=parseFloat(Number(5)).toFixed(2):t.resultData=parseFloat(t.form.amount*t.tariffCalculatedData.charge/t.tariffCalculatedData.divisor).toFixed(2):t.resultData="FREE";case 1:case"end":return e.stop()}}),e)})))()},selectCalculatedValue:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("get-calculated-service/".concat(t.form.selectService));case 2:return l=e.sent,t.tariffCalculatedData=l.data.data,t.minAmount=l.data.data.min_amount,t.maxAmount=l.data.data.max_amount,1==t.tariffCalculatedData.is_free?(t.disabled=!0,t.form.amount="",t.moneySign=!1,t.resultData="FREE"):17==t.tariffCalculatedData.service_id?(t.disabled=!1,t.resultData=parseFloat(Number(5)).toFixed(2),t.moneySign=!0):(t.disabled=!1,t.resultData="",t.moneySign=!0),e.next=9,t.$axios.get("get-single-tariff-calculator-service/".concat(t.form.selectService));case 9:r=e.sent,t.selectedServiceDisclaimerEnglish=r.data.data.description_english,t.selectedServiceDisclaimerBangla=r.data.data.description_bangla;case 12:case"end":return e.stop()}}),e)})))()},getAllService:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,i,option,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("get-tariff-calculator-service");case 2:for(l=e.sent,t.allService=l.data.data,t.selectedServiceDisclaimer=l.data.data.description_english,i=0;i<t.allService.length;i++){for(r in option=[],t.allService[i])"id"==r?option.value=t.allService[i][r]:"title_english"==r&&(option.text=t.allService[i][r]);t.options.push(Object.assign({},option))}case 6:case"end":return e.stop()}}),e)})))()},getAllServiceBangla:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,i,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("get-tariff-calculator-service");case 2:for(l=e.sent,t.allServiceBangla=l.data.data,i=0;i<t.allServiceBangla.length;i++){for(n in r=[],t.allServiceBangla[i])"id"==n?r.value=t.allServiceBangla[i][n]:"title_bangla"==n&&(r.text=t.allServiceBangla[i][n]);t.optionsBangla.push(Object.assign({},r))}case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAllService(),this.getAllServiceBangla()}}),c=(l(662),l(12)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"tariffCalculator",attrs:{id:"#tariffCalculator"}},[l("b-container",[l("div",{staticClass:"section-heading"},["en"==t.$i18n.locale?l("h2",[t._v("Tariff Calculator")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("h2",{staticClass:"font-bn"},[t._v("ট্যারিফ ক্যালকুলেটর")]):t._e()]),t._v(" "),l("div",{staticClass:"calculator"},[t.show?l("b-form",{staticClass:"calculator-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[l("b-form-group",{attrs:{id:"input-group-3"}},["en"==t.$i18n.locale?l("b-form-select",{attrs:{options:t.options,selected:!0},on:{change:function(e){return t.selectCalculatedValue()}},model:{value:t.form.selectService,callback:function(e){t.$set(t.form,"selectService",e)},expression:"form.selectService"}}):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("b-form-select",{staticClass:"font-bn",attrs:{options:t.optionsBangla,selected:!0},on:{change:function(e){return t.selectCalculatedValue()}},model:{value:t.form.selectService,callback:function(e){t.$set(t.form,"selectService",e)},expression:"form.selectService"}}):t._e()],1),t._v(" "),l("b-form-group",{attrs:{id:"input-group-2"}},[l("b-form-input",{attrs:{id:"input-2",type:"number",placeholder:"Numerical Input Box",required:"",min:t.minAmount,max:t.maxAmount,disabled:t.disabled},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),t._v(" "),"en"==t.$i18n.locale?l("button",{staticClass:"theme-btn",attrs:{type:"submit",disabled:t.disabled}},[t._v("\n          Calculate\n        ")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("button",{staticClass:"theme-btn font-bn",attrs:{type:"submit",disabled:t.disabled}},[t._v("\n          ক্যালকুলেট\n        ")]):t._e()],1):t._e(),t._v(" "),l("div",{staticClass:"result"},["en"==t.$i18n.locale?l("h6",{staticClass:"title"},[t._v("Calculation Result")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("h6",{staticClass:"title font-bn"},[t._v("গণনার ফলাফল")]):t._e(),t._v(" "),l("h2",{staticClass:"calculated-value"},[l("span",{directives:[{name:"show",rawName:"v-show",value:t.moneySign,expression:"moneySign"}]},[t._v("৳")]),t._v(" "+t._s(this.resultData)+"\n        ")]),t._v(" "),"en"==t.$i18n.locale?l("p",{staticClass:"short-text"},[t._v("\n          "+t._s(t.selectedServiceDisclaimerEnglish)+"\n        ")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("p",{staticClass:"short-text font-bn"},[t._v("\n          "+t._s(t.selectedServiceDisclaimerBangla)+"\n        ")]):t._e()])],1),t._v(" "),l("div",{staticClass:"text-center"},["en"==t.$i18n.locale?l("nuxt-link",{staticClass:"theme-btn white",attrs:{to:t.localePath("/pg//?n=limits-and-charges")}},[t._v("\n        Limit & Charges\n      ")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("nuxt-link",{staticClass:"theme-btn white font-bn",attrs:{to:t.localePath("/pg//?n=limits-and-charges")}},[t._v("\n        লিমিট ও চার্জ\n      ")]):t._e()],1)])],1)}),[],!1,null,"4350af77",null);e.default=component.exports}}]);