import{g as r}from"./vform.es-21186655.js";import{f as o,c as n,n as m}from"./app-d7e169b8.js";import"./_commonjsHelpers-53f7dec1.js";const i={scrollToTop:false,mixins:[o],data:()=>({metaTitle:"Profile",form:new r({name:"",email:""})}),computed:n({user:"auth/user"}),created(){this.form.keys().forEach(a=>{this.form[a]=this.user[a]})},methods:{async update(){const{data:a}=await this.form.patch("/api/settings/profile");this.$store.dispatch("auth/updateUser",{user:a})}}};var l=function a(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"font-semibold text-2xl text-gray-900"},[t._v("Profile details")]),e("small",{staticClass:"text-gray-600"},[t._v("Update your username and manage your account details.")]),e("form",{staticClass:"mt-3",on:{"submit":function(s){s.preventDefault();return t.update.apply(null,arguments)},"keydown":function(s){return t.form.onKeydown(s)}}},[e("alert-success",{staticClass:"mb-5",attrs:{"form":t.form,"message":t.$t("info_updated")}}),e("text-input",{attrs:{"name":"name","form":t.form,"label":t.$t("name"),"required":true}}),e("text-input",{attrs:{"name":"email","form":t.form,"label":t.$t("email"),"required":true}}),e("v-button",{staticClass:"mt-4",attrs:{"loading":t.form.busy}},[t._v("Save changes")])],1)])};var u=[];var f=m(i,l,u,false,null,null,null,null);const _=f.exports;export{_ as default};
