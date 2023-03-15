import{g as i}from"./vform.es-21186655.js";import{V as a,O as l,a as n,F as m}from"./VTransition-40ffac98.js";import{n as d,V as c,t as f}from"./app-d7e169b8.js";const u={components:{VTransition:a,VButton:c,OpenFormButton:l,OpenForm:n},props:{form:{type:Object,required:true},creating:{type:Boolean,default:false}},mixins:[m],data(){return{loading:false,submitted:false,themes:f,passwordForm:new i({password:null}),hidePasswordDisabledMsg:false,submissionId:false}},computed:{isIframe(){return window.location!==window.parent.location||window.frameElement},theme(){return this.themes[this.themes.hasOwnProperty(this.form.theme)?this.form.theme:"default"]},getFormCleaningsMsg(){if(this.form.cleanings&&Object.keys(this.form.cleanings).length>0){let s="";Object.keys(this.form.cleanings).forEach(e=>{const t=e.charAt(0).toUpperCase()+e.slice(1);let r="<br/>"+t+"<br/><ul class='list-disc list-inside'>";this.form.cleanings[e].forEach(o=>{r=r+"<li>"+o+"</li>"});s=s+r+"<ul/>"});return s}return false},isPublicFormPage(){return this.$route.name==="forms.show_public"},isHideTitle(){return this.form.hide_title||window.location.href.includes("hide_title=true")}},mounted(){},methods:{submitForm(s,e){if(this.creating){this.submitted=true;this.$emit("submitted",true);return}this.loading=true;this.closeAlert();s.post("/api/forms/"+this.form.slug+"/answer").then(t=>{this.$logEvent("form_submission",{workspace_id:this.form.workspace_id,form_id:this.form.id});try{window.localStorage.removeItem(this.formPendingSubmissionKey)}catch(r){}if(t.data.redirect&&t.data.redirect_url){window.location.href=t.data.redirect_url}if(t.data.submission_id){this.submissionId=t.data.submission_id}this.loading=false;this.submitted=true;this.$emit("submitted",true)}).catch(t=>{if(t.response.data&&t.response.data.message){this.alertError(t.response.data.message)}this.loading=false;e()})},restart(){this.submitted=false;this.$emit("restarted",true)},passwordEntered(){if(this.passwordForm.password!==""&&this.passwordForm.password!==null){this.$emit("password-entered",this.passwordForm.password)}else{this.addPasswordError("The Password field is required.")}},addPasswordError(s){this.passwordForm.errors.set("password",s)}}};var p=function s(){var e=this,t=e._self._c;return e.form?t("div",{staticClass:"open-complete-form"},[!e.isHideTitle?t("h1",{staticClass:"mb-4 px-2",domProps:{"textContent":e._s(e.form.title)}}):e._e(),e.isPublicFormPage&&e.form.is_password_protected?t("div",[t("p",{staticClass:"form-description mb-4 text-gray-700 dark:text-gray-300 px-2"},[e._v(" This form is protected by a password. ")]),t("div",{staticClass:"form-group flex flex-wrap w-full"},[t("div",{staticClass:"relative mb-3 w-full px-2"},[t("text-input",{attrs:{"form":e.passwordForm,"name":"password","native-type":"password","label":"Password"}})],1)]),t("div",{staticClass:"flex flex-wrap justify-center w-full text-center"},[t("v-button",{on:{"click":e.passwordEntered}},[e._v(" Submit ")])],1)]):e._e(),t("v-transition",[!e.form.is_password_protected&&e.form.password&&!e.hidePasswordDisabledMsg?t("div",{staticClass:"border shadow-sm p-2 my-4 flex items-center rounded-md bg-yellow-100 border-yellow-500"},[t("div",{staticClass:"flex flex-grow"},[t("p",{staticClass:"mb-0 py-2 px-4 text-yellow-600"},[e._v(" We disabled the password protection for this form because you are an owner of it. ")]),t("v-button",{attrs:{"color":"yellow"},on:{"click":function(r){e.hidePasswordDisabledMsg=true}}},[e._v(" OK ")])],1)]):e._e()]),e.isPublicFormPage&&(e.form.is_closed||e.form.visibility=="closed")?t("div",{staticClass:"border shadow-sm p-2 my-4 flex items-center rounded-md bg-yellow-100 border-yellow-500"},[t("div",{staticClass:"flex-grow"},[t("p",{staticClass:"mb-0 py-2 px-4 text-yellow-600",domProps:{"innerHTML":e._s(e.form.closed_text)}})])]):e._e(),e.isPublicFormPage&&e.form.max_number_of_submissions_reached?t("div",{staticClass:"border shadow-sm p-2 my-4 flex items-center rounded-md bg-yellow-100 border-yellow-500"},[t("div",{staticClass:"flex-grow"},[t("p",{staticClass:"mb-0 py-2 px-4 text-yellow-600",domProps:{"innerHTML":e._s(e.form.max_submissions_reached_text)}})])]):e._e(),e.getFormCleaningsMsg?t("div",{staticClass:"border shadow-sm p-2 my-4 flex items-center rounded-md bg-yellow-100 border-yellow-500"},[t("div",{staticClass:"flex-grow"},[t("p",{staticClass:"mb-0 py-2 px-4 text-yellow-600"},[e._v(" You're seeing this because you are an owner of this form. "),t("br"),e._v(" All your Pro features are de-activated when sharing this form: "),t("br"),t("span",{domProps:{"innerHTML":e._s(e.getFormCleaningsMsg)}})])]),t("div",{staticClass:"text-right"},[t("v-button",{attrs:{"color":"yellow","shade":"light"},on:{"click":function(r){e.form.cleanings=false}}},[e._v(" Close ")])],1)]):e._e(),!e.form.is_password_protected&&(!e.isPublicFormPage||!e.form.is_closed&&!e.form.max_number_of_submissions_reached&&e.form.visibility!="closed")?t("transition",{attrs:{"enter-active-class":"duration-500 ease-out","enter-class":"translate-x-full opacity-0","enter-to-class":"translate-x-0 opacity-100","leave-active-class":"duration-500 ease-in","leave-class":"translate-x-0 opacity-100","leave-to-class":"translate-x-full opacity-0","mode":"out-in"}},[!e.submitted?t("div",{key:"form"},[e.form.description&&e.form.description!==""?t("p",{staticClass:"form-description mb-4 text-gray-700 dark:text-gray-300 whitespace-pre-wrap px-2",domProps:{"innerHTML":e._s(e.form.description)}}):e._e(),e.form?t("open-form",{attrs:{"form":e.form,"loading":e.loading,"fields":e.form.properties,"theme":e.theme},on:{"submit":e.submitForm},scopedSlots:e._u([{key:"submit-btn",fn:function({submitForm:r}){return[t("open-form-button",{staticClass:"mt-2 px-8 mx-1",attrs:{"loading":e.loading,"theme":e.theme,"color":e.form.color},on:{"click":function(o){o.preventDefault();return r.apply(null,arguments)}}},[e._v(" "+e._s(e.form.submit_button_text)+" ")])]}}],null,false,523662702)}):e._e(),!e.form.no_branding?t("p",{staticClass:"text-center w-full mt-2"},[t("a",{staticClass:"text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500 cursor-pointer hover:underline text-xs",attrs:{"href":"https://setup.technology/","target":"_blank"}},[e._v("Powered by "),t("span",{staticClass:"font-semibold"},[e._v("Setup Tech")])])]):e._e()],1):t("div",{key:"submitted",staticClass:"px-2"},[t("p",{staticClass:"form-description text-gray-700 dark:text-gray-300 whitespace-pre-wrap",domProps:{"innerHTML":e._s(e.form.submitted_text)}}),e.form.re_fillable?t("open-form-button",{staticClass:"my-4",attrs:{"theme":e.theme,"color":e.form.color},on:{"click":e.restart}},[e._v(" "+e._s(e.form.re_fill_button_text)+" ")]):e._e(),e.form.editable_submissions&&e.submissionId?t("p",{staticClass:"mt-5"},[t("a",{staticClass:"text-nt-blue hover:underline",attrs:{"target":"_parent","href":e.form.share_url+"?submission_id="+e.submissionId}},[e._v("Edit submission")])]):e._e(),!e.form.no_branding?t("p",{staticClass:"mt-5"},[t("a",{staticClass:"text-nt-blue hover:underline",attrs:{"target":"_parent","href":"https://opnform.com/?utm_source=form&utm_content=create_form_free"}},[e._v("Create your form for free with Estimate")])]):e._e()],1)]):e._e()],1):e._e()};var _=[];var h=d(u,p,_,false,null,null,null,null);const x=h.exports;export{x as O};
