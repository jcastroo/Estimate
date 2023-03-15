import r from"./LoginForm-b4252102.js";import n from"./RegisterForm-faa8522e.js";import{n as i}from"./index-e0b9de87.js";import"./vform.es-2ce0e762.js";import"./OpenFormFooter-53c3b41e.js";import"./Testimonials-59a139a0.js";import"./ForgotPasswordModal-b4bba63f.js";import"./_commonjsHelpers-53f7dec1.js";const s={name:"QuickRegister",components:{LoginForm:r,RegisterForm:n},props:{showRegisterModal:{type:Boolean,required:true}},data:()=>({showLoginModal:false}),mounted(){},methods:{openLogin(){this.showLoginModal=true;this.$emit("close")},openRegister(){this.showLoginModal=false;this.$emit("reopen")},afterQuickLogin(){this.showLoginModal=false;this.$emit("afterLogin")}}};var a=function c(){var o=this,t=o._self._c;return t("div",[t("modal",{attrs:{"show":o.showLoginModal,"max-width":"lg"},on:{"close":function(e){o.showLoginModal=false}},scopedSlots:o._u([{key:"icon",fn:function(){return[t("svg",{staticClass:"w-8 h-8",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","d":"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}})])]},proxy:true},{key:"title",fn:function(){return[o._v(" Login to SetupEstimate ")]},proxy:true}])},[t("div",{staticClass:"px-4"},[t("login-form",{attrs:{"isQuick":true},on:{"openRegister":o.openRegister,"afterQuickLogin":o.afterQuickLogin}})],1)]),t("modal",{attrs:{"show":o.showRegisterModal,"max-width":"lg"},on:{"close":function(e){return o.$emit("close")}},scopedSlots:o._u([{key:"icon",fn:function(){return[t("svg",{staticClass:"w-8 h-8",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","d":"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}})])]},proxy:true},{key:"title",fn:function(){return[o._v(" Create an account ")]},proxy:true}])},[t("div",{staticClass:"px-4"},[t("register-form",{attrs:{"isQuick":true},on:{"openLogin":o.openLogin,"afterQuickLogin":o.afterQuickLogin}})],1)])],1)};var l=[];var u=i(s,a,l,false,null,null,null,null);const v=u.exports;export{v as default};
