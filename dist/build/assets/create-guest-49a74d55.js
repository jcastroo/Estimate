import{f as i,m as a,g as n,n as m,s as r}from"./app-d7e169b8.js";import{g as p}from"./vform.es-21186655.js";import l from"./QuickRegister-31d940d6.js";import{i as d}from"./initForm-d654b046.js";import"./_commonjsHelpers-53f7dec1.js";import"./LoginForm-8aab30d4.js";import"./OpenFormFooter-d382f0e8.js";import"./Testimonials-8b29dc83.js";import"./ForgotPasswordModal-b0490e56.js";import"./RegisterForm-f9156ff6.js";const c=function(){r.commit("open/templates/startLoading");r.dispatch("open/templates/loadIfEmpty").then(()=>{r.commit("open/templates/stopLoading")})};const f={name:"CreateFormGuest",mixins:[d,i],components:{QuickRegister:l},middleware:"guest",beforeRouteEnter(t,e,s){c();s()},data(){return{metaTitle:"Create a new Form as Guest",stateReady:false,loading:false,error:"",editorMaxHeight:500,registerModal:false,isGuest:true}},computed:{...a({workspaces:t=>t["open/workspaces"].content,workspacesLoading:t=>t["open/workspaces"].loading}),form:{get(){return this.$store.state["open/working_form"].content},set(t){this.$store.commit("open/working_form/set",t)}},workspace(){return this.$store.getters["open/workspaces/getCurrent"]()}},watch:{workspace(){if(this.workspace){this.form.workspace_id=this.workspace.id}}},mounted(){const t={id:null,name:"Guest Workspace",is_enterprise:false,is_pro:false};this.$store.commit("open/workspaces/set",[t]);this.$store.commit("open/workspaces/setCurrentId",t.id);this.initForm();if(this.$route.query.template!==void 0&&this.$route.query.template){const e=this.$store.getters["open/templates/getBySlug"](this.$route.query.template);if(e&&e.structure){this.form=new p({...this.form.data(),...e.structure})}}this.closeAlert();this.stateReady=true},created(){window.addEventListener("resize",this.onResize)},destroyed(){window.removeEventListener("resize",this.onResize)},methods:{...n({loadWorkspaces:"open/workspaces/load"}),onResize(){if(this.$refs.editor){this.editorMaxHeight=window.innerHeight-this.$refs.editor.$el.offsetTop}},openRegister(){this.registerModal=true},afterLogin(){this.registerModal=false;this.isGuest=false;this.loadWorkspaces();setTimeout(()=>{this.$refs.editor.saveFormCreate()},500)}}};var u=function t(){var e=this,s=e._self._c;return s("div",{staticClass:"flex flex-wrap flex-col"},[e.stateReady?s("transition",{attrs:{"name":"fade","mode":"out-in"}},[s("div",{key:"2"},[!e.workspacesLoading?s("form-editor",{ref:"editor",staticClass:"w-full flex flex-grow",style:{"max-height":e.editorMaxHeight+"px"},attrs:{"error":e.error,"isGuest":e.isGuest},on:{"mounted":e.onResize,"openRegister":e.openRegister}}):s("div",{staticClass:"text-center mt-4 py-6"},[s("loader",{staticClass:"h-6 w-6 text-nt-blue mx-auto"})],1)],1)]):e._e(),s("quick-register",{attrs:{"showRegisterModal":e.registerModal},on:{"close":function(o){e.registerModal=false},"reopen":function(o){e.registerModal=true},"afterLogin":e.afterLogin}})],1)};var h=[];var g=m(f,u,h,false,null,null,null,null);const L=g.exports;export{L as default};
