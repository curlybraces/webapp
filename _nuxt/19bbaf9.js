(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{499:function(t,e,r){t.exports=r.p+"img/logo.878c6ef.png"},524:function(t,e,r){"use strict";r.r(e);var n={meta:{auth:{requiresAuth:!1}},layout:"home",data:function(){return{valid:!1,show1:!1,show2:!0,show3:!1,show4:!1,password:"",username:"",image:"https://images.squarespace-cdn.com/content/v1/5608c2dae4b0ffbc0ff092a2/1462484735802-94M1A977HJJEL2THCD2Q/ke17ZwdGBToddI8pDm48kLl6r9ydDU0pEbLAVM93WoUUqsxRUqqbr1mOJYKfIPR7IxQp-SzSi0mUVxNxPLQ2a8ST-OHudl8xFkQoit3yJpm7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtBAdYz4rrMKLrjAsWFNRtjSprFKWBuEhUbdsZxltHXcCjLISwBs8eEdxAxTptZAUg/Medical-physician-doctor-hands.png?format=2500w",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}}}},computed:{},methods:{login:function(){this.$store.dispatch("login",{username:this.username,password:this.password})},nativateToHere:function(t){this.$router.push("/"+t)}},beforeMount:function(){console.log(this.$store.getters.isLoggedIn),this.$store.getters.isLoggedIn&&this.$router.push("/")}},o=r(59),c=r(69),l=r.n(c),d=r(400),h=r(457),f=r(416),m=r(514),v=r(409),w=(r(9),r(10),r(86),r(11),r(44),r(18),r(19),r(13),r(204),r(63),r(12),r(53),r(0)),y=r(7),O=r(93),j=r(125);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(y.a)(O.a,Object(j.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:V({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),B=r(517),$=r(412),k=r(454),C=r(47),E=r(120),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{staticClass:"justify-center",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[n("v-card",{staticClass:"elevation-12",attrs:{"max-width":"400"}},[n("v-toolbar",{attrs:{prominent:"",src:t.image,flat:""}},[n("v-toolbar-title",{attrs:{color:"white",dense:""}},[n("img",{staticClass:"mt-6",attrs:{height:"100px",width:"100",src:r(499),alt:""}})]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-text",[n("v-form",{staticClass:"mt-3",attrs:{id:"check-login-form"},on:{submit:function(e){return e.preventDefault(),t.login(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"Username",placeholder:"e.g. elirehema","prepend-inner-icon":"person",rules:[t.rules.required],required:"",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"lock","append-icon":t.show1?"visibility":"visibility_off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-10-1",label:"Password",placeholder:"e.g ********",hint:"At least 8 characters",counter:"",required:"",outlined:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.valid,form:"check-login-form"}},[t._v("Login")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:f.a,VCardText:f.c,VCol:m.a,VContainer:v.a,VForm:_,VRow:B.a,VSpacer:$.a,VTextField:k.a,VToolbar:C.a,VToolbarTitle:E.a})}}]);