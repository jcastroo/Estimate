import{g as r}from"./vform.es-21186655.js";import{n as o,f as e}from"./app-d7e169b8.js";import"./_commonjsHelpers-53f7dec1.js";const n={scrollToTop:false,mixins:[e],data:()=>({metaTitle:"Password",form:new r({password:"",password_confirmation:""})}),methods:{async update(){await this.form.patch("/api/settings/password");this.form.reset()}}};var i=function p(){var t=this,s=t._self._c;return s("div",[s("h3",{staticClass:"font-semibold text-2xl text-gray-900"},[t._v("Password")]),s("small",{staticClass:"text-gray-600"},[t._v("Manage your password.")]),s("form",{staticClass:"mt-3",on:{"submit":function(a){a.preventDefault();return t.update.apply(null,arguments)},"keydown":function(a){return t.form.onKeydown(a)}}},[s("alert-success",{staticClass:"mb-5",attrs:{"form":t.form,"message":t.$t("password_updated")}}),s("text-input",{attrs:{"native-type":"password","name":"password","form":t.form,"label":t.$t("password"),"required":true}}),s("text-input",{attrs:{"native-type":"password","name":"password_confirmation","form":t.form,"label":t.$t("confirm_password"),"required":true}}),s("v-button",{staticClass:"mt-4",attrs:{"loading":t.form.busy}},[t._v("Update password")])],1)])};var m=[];var l=o(n,i,m,false,null,null,null,null);const c=l.exports;export{c as default};
