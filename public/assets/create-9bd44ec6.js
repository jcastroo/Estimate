import{f as r,m as a,g as i,n,s as o}from"./index-e0b9de87.js";import{g as m}from"./vform.es-2ce0e762.js";import{i as d}from"./initForm-c50fe82e.js";import"./_commonjsHelpers-53f7dec1.js";const l=function(){o.commit("open/templates/startLoading");o.dispatch("open/templates/loadIfEmpty").then(()=>{o.commit("open/templates/stopLoading")})};const p={name:"CreateForm",mixins:[d,r],components:{},beforeRouteEnter(e,t,s){l();s()},middleware:"auth",data(){return{metaTitle:"Create a new Form",stateReady:false,loading:false,error:"",editorMaxHeight:500}},computed:{...a({workspaces:e=>e["open/workspaces"].content,workspacesLoading:e=>e["open/workspaces"].loading,user:e=>e.auth.user}),form:{get(){return this.$store.state["open/working_form"].content},set(e){this.$store.commit("open/working_form/set",e)}},workspace(){return this.$store.getters["open/workspaces/getCurrent"]()}},watch:{workspace(){if(this.workspace){this.form.workspace_id=this.workspace.id}},user(){this.stateReady=true}},mounted(){this.initForm();if(this.$route.query.template!==void 0&&this.$route.query.template){const e=this.$store.getters["open/templates/getBySlug"](this.$route.query.template);if(e&&e.structure){this.form=new m({...this.form.data(),...e.structure})}}this.closeAlert();this.loadWorkspaces();this.stateReady=this.user!==null},created(){window.addEventListener("resize",this.onResize)},destroyed(){window.removeEventListener("resize",this.onResize)},methods:{...i({loadWorkspaces:"open/workspaces/loadIfEmpty"}),onResize(){if(this.$refs.editor){this.editorMaxHeight=window.innerHeight-this.$refs.editor.$el.offsetTop}}}};var c=function e(){var t=this,s=t._self._c;return s("div",{staticClass:"flex flex-wrap flex-col"},[t.stateReady?s("transition",{attrs:{"name":"fade","mode":"out-in"}},[s("div",{key:"2"},[!t.workspacesLoading?s("form-editor",{ref:"editor",staticClass:"w-full flex flex-grow",style:{"max-height":t.editorMaxHeight+"px"},attrs:{"error":t.error},on:{"mounted":t.onResize}}):s("div",{staticClass:"text-center mt-4 py-6"},[s("loader",{staticClass:"h-6 w-6 text-nt-blue mx-auto"})],1)],1)]):t._e()],1)};var f=[];var u=n(p,c,f,false,null,null,null,null);const k=u.exports;export{k as default};
