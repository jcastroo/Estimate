import{f as s,c as r,n as o}from"./index-e0b9de87.js";import{O as i}from"./OpenFormFooter-53c3b41e.js";import"./_commonjsHelpers-53f7dec1.js";const a={components:{OpenFormFooter:i},layout:"default",middleware:"auth",mixins:[s],data:()=>({metaTitle:"Subscription Success",interval:null}),mounted(){this.redirectIfSubscribed();this.interval=setInterval(()=>this.checkSubscription(),5e3)},beforeDestroy(){clearInterval(this.interval)},methods:{async checkSubscription(){await this.$store.dispatch("auth/fetchUser");this.redirectIfSubscribed()},redirectIfSubscribed(){if(this.user.is_subscribed){this.$logEvent("subscribed",{plan:this.user.has_enterprise_subscription?"enterprise":"pro"});this.$crisp.push(["set","session:event",[[["subscribed",{plan:this.user.has_enterprise_subscription?"enterprise":"pro"},"blue"]]]]);this.$router.push({name:"home"});if(this.user.has_enterprise_subscription){this.alertSuccess("Awesome! Your subscription to OpnForm is now confirmed! You now have access to all Enterprise features. No need to invite your teammates, just ask them to create a OpnForm account and to connect the same Notion workspace. Feel free to contact us if you have any question 🙌")}else{this.alertSuccess("Awesome! Your subscription to OpnForm is now confirmed! You now have access to all Pro features. Feel free to contact us if you have any question 🙌")}}}},computed:{...r({authenticated:"auth/check",user:"auth/user"})}};var n=function l(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col min-h-screen"},[e("div",{staticClass:"w-full md:max-w-3xl md:mx-auto px-4 mb-10 md:pb-20 md:pt-16 text-center flex-grow"},[e("h1",{staticClass:"text-4xl font-semibold"},[t._v(" Thank you! ")]),e("h4",{staticClass:"text-xl mt-6"},[t._v(" We're checking the status of your subscription please wait a moment... ")]),e("div",{staticClass:"text-center"},[e("loader",{staticClass:"h-6 w-6 text-nt-blue mx-auto mt-20"})],1)]),e("open-form-footer")],1)};var c=[];var u=o(a,n,c,false,null,null,null,null);const d=u.exports;export{d as default};
