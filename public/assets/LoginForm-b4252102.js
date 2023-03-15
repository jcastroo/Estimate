import{g as a}from"./vform.es-2ce0e762.js";import{n,C as s}from"./index-e0b9de87.js";import{O as i}from"./OpenFormFooter-53c3b41e.js";import{T as l}from"./Testimonials-59a139a0.js";import m from"./ForgotPasswordModal-b4bba63f.js";import"./_commonjsHelpers-53f7dec1.js";const u={name:"LoginForm",components:{OpenFormFooter:i,Testimonials:l,ForgotPasswordModal:m},props:{isQuick:{type:Boolean,required:false,default:false}},data:()=>({form:new a({email:"",password:""}),remember:false,showForgotModal:false}),methods:{async login(){const{data:o}=await this.form.post("/api/login");this.$store.dispatch("auth/saveToken",{token:o.token,remember:this.remember});await this.$store.dispatch("auth/fetchUser");this.redirect()},redirect(){if(this.isQuick){this.$emit("afterQuickLogin");return}const o=s.get("intended_url");if(o){s.remove("intended_url");this.$router.push({path:o})}else{this.$router.push({name:"home"})}}}};var c=function o(){var e=this,t=e._self._c;return t("div",[t("forgot-password-modal",{attrs:{"show":e.showForgotModal},on:{"close":function(r){e.showForgotModal=false}}}),t("form",{staticClass:"mt-4",on:{"submit":function(r){r.preventDefault();return e.login.apply(null,arguments)},"keydown":function(r){return e.form.onKeydown(r)}}},[t("text-input",{attrs:{"name":"email","form":e.form,"label":e.$t("email"),"required":true,"placeholder":"Your email address"}}),t("text-input",{attrs:{"native-type":"password","placeholder":"Your password","name":"password","form":e.form,"label":e.$t("password"),"required":true}}),t("div",{staticClass:"relative flex items-center my-5"},[t("v-checkbox",{staticClass:"w-full md:w-1/2",attrs:{"name":"remember","size":"small"},model:{value:e.remember,callback:function(r){e.remember=r},expression:"remember"}},[e._v(" "+e._s(e.$t("remember_me"))+" ")]),t("div",{staticClass:"w-full md:w-1/2 text-right"},[t("a",{staticClass:"text-xs hover:underline text-gray-500 sm:text-sm hover:text-gray-700",attrs:{"href":"#"},on:{"click":function(r){r.preventDefault();e.showForgotModal=true}}},[e._v(" Forgot your password? ")])])],1),t("v-button",{attrs:{"dusk":"btn_login","loading":e.form.busy}},[e._v("Log in to continue")]),t("p",{staticClass:"text-gray-500 mt-4"},[e._v(" Don't have an account? "),e.isQuick?t("a",{staticClass:"font-semibold ml-1",attrs:{"href":"#"},on:{"click":function(r){r.preventDefault();return e.$emit("openRegister")}}},[e._v("Sign Up")]):t("router-link",{staticClass:"font-semibold ml-1",attrs:{"to":{name:"register"}}},[e._v("Sign Up")])],1)],1)],1)};var d=[];var f=n(u,c,d,false,null,null,null,null);const b=f.exports;export{b as default};
