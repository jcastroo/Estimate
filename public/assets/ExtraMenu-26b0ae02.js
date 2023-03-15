import{n as a,i as m,D as d,c,d as n}from"./index-e0b9de87.js";import{g as s}from"./vform.es-2ce0e762.js";const u={name:"QuestionsEditor",mixins:[m],props:{loading:{type:Boolean,default:false},addNew:{type:Boolean,default:true}},data(){return{allQuestions:[new s({question:"",answer:""})]}},watch:{allQuestions:{deep:true,handler(){this.compVal=this.allQuestions.map(o=>{return o.data()})}}},computed:{},methods:{onAdd(){this.allQuestions.push(new s({question:"",answer:""}))},onRemove(o){this.allQuestions.splice(o,1)}}};var p=function o(){var t=this,e=t._self._c;return e("div",{class:t.wrapperClass},[t.label?e("label",{class:[t.theme.default.label,{"uppercase text-xs":t.uppercaseLabels,"text-sm":!t.uppercaseLabels}],attrs:{"for":t.id?t.id:t.name}},[t._v(" "+t._s(t.label)+" "),t.required?e("span",{staticClass:"text-red-500 required-dot"},[t._v("*")]):t._e()]):t._e(),t.loading?e("loader",{key:"loader",staticClass:"h-6 w-6 text-nt-blue mx-auto"}):e("div",{staticClass:"my-3"},[t._l(t.allQuestions,function(r,l){return e("div",{key:l,staticClass:"bg-gray-100 p-2 mb-4"},[e("v-button",{staticClass:"mb-2",attrs:{"color":"red","size":"small"},on:{"click":function(i){i.preventDefault();return t.onRemove(l)}}},[e("svg",{staticClass:"h-4 w-4 text-white inline mr-1 -mt-1",attrs:{"viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"d":"M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M10 11V17M14 11V17","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Remove ")]),e("text-input",{attrs:{"name":"question","form":r,"placeholder":"Question title"}}),e("rich-text-area-input",{staticClass:"mt-4",attrs:{"name":"answer","form":r,"placeholder":"Question response"}})],1)}),t.addNew?e("v-button",{staticClass:"mt-2 flex",attrs:{"color":"green","size":"small","nativeType":"button"},on:{"click":function(r){r.preventDefault();return t.onAdd.apply(null,arguments)}}},[e("svg",{staticClass:"h-6 w-6 mr-1 inline",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" Add New ")]):t._e()],2),t.help?e("small",{class:t.theme.SelectInput.help},[t._t("help",function(){return[t._v(t._s(t.help))]})],2):t._e(),t.hasValidation?e("has-error",{attrs:{"form":t.form,"field":t.name}}):t._e()],1)};var f=[];var h=a(u,p,f,false,null,null,null,null);const v=h.exports;const w={name:"CreateTemplateModal",components:{QuestionsEditor:v},props:{show:{type:Boolean,required:true},form:{type:Object,required:true}},data:()=>({templateForm:new s({name:"",slug:"",description:"",image_url:""})}),computed:{},methods:{async createTemplate(){this.templateForm.form=this.form;await this.templateForm.post("/api/templates").then(o=>{this.alertSuccess("Template was successfully created.");this.$emit("close")})}}};var C=function o(){var t=this,e=t._self._c;return e("modal",{attrs:{"show":t.show},on:{"close":function(r){return t.$emit("close")}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{staticClass:"w-10 h-10 text-blue",attrs:{"viewBox":"0 0 48 48","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"d":"M17 27C16.0681 27 15.6022 27 15.2346 26.8478C14.7446 26.6448 14.3552 26.2554 14.1522 25.7654C14 25.3978 14 24.9319 14 24V17.2C14 16.0799 14 15.5198 14.218 15.092C14.4097 14.7157 14.7157 14.4097 15.092 14.218C15.5198 14 16.0799 14 17.2 14H24C24.9319 14 25.3978 14 25.7654 14.1522C26.2554 14.3552 26.6448 14.7446 26.8478 15.2346C27 15.6022 27 16.0681 27 17M24.2 34H30.8C31.9201 34 32.4802 34 32.908 33.782C33.2843 33.5903 33.5903 33.2843 33.782 32.908C34 32.4802 34 31.9201 34 30.8V24.2C34 23.0799 34 22.5198 33.782 22.092C33.5903 21.7157 33.2843 21.4097 32.908 21.218C32.4802 21 31.9201 21 30.8 21H24.2C23.0799 21 22.5198 21 22.092 21.218C21.7157 21.4097 21.4097 21.7157 21.218 22.092C21 22.5198 21 23.0799 21 24.2V30.8C21 31.9201 21 32.4802 21.218 32.908C21.4097 33.2843 21.7157 33.5903 22.092 33.782C22.5198 34 23.0799 34 24.2 34Z","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]},proxy:true},{key:"title",fn:function(){return[t._v(" Create template ")]},proxy:true}])},[e("div",{staticClass:"p-4"},[e("p",[t._v(" New template will be create from your form "),e("span",{staticClass:"font-semibold"},[t._v(t._s(t.form.title))]),t._v(". Template will be public for all to create form quickly. ")]),e("form",{staticClass:"mt-6",on:{"submit":function(r){r.preventDefault();return t.createTemplate.apply(null,arguments)},"keydown":function(r){return t.templateForm.onKeydown(r)}}},[e("div",{staticClass:"-m-6"},[e("div",{staticClass:"border-t py-4 px-6"},[e("text-input",{staticClass:"mt-4",attrs:{"name":"name","form":t.templateForm,"label":"Title","required":true}}),e("text-input",{staticClass:"mt-4",attrs:{"name":"slug","form":t.templateForm,"label":"Slug","required":true}}),e("rich-text-area-input",{staticClass:"mt-4",attrs:{"name":"description","form":t.templateForm,"label":"Description","required":true}}),e("text-input",{staticClass:"mt-4",attrs:{"name":"image_url","form":t.templateForm,"label":"Image","required":true}}),e("questions-editor",{staticClass:"mt-4",attrs:{"name":"questions","form":t.templateForm,"label":"Frequently asked questions"}})],1),e("div",{staticClass:"flex justify-end mt-4 pb-5 px-6"},[e("v-button",{staticClass:"mr-2",attrs:{"loading":t.templateForm.busy}},[t._v("Create")]),e("v-button",{attrs:{"color":"white"},on:{"click":function(r){r.preventDefault();return t.$emit("close")}}},[t._v("Close")])],1)])])])])};var k=[];var g=a(w,C,k,false,null,null,null,null);const _=g.exports;const x={name:"ExtraMenu",components:{Dropdown:d,CreateTemplateModal:_},props:{form:{type:Object,required:true},isMainPage:{type:Boolean,required:false,default:false}},data:()=>({loadingDuplicate:false,loadingDelete:false,showDeleteFormModal:false,showCreateTemplateModal:false}),computed:{...c({user:"auth/user"}),formEndpoint:()=>"/api/open/forms/{id}"},methods:{copyLink(){const o=document.createElement("textarea");o.value=this.form.share_url;document.body.appendChild(o);o.select();document.execCommand("copy");document.body.removeChild(o);this.alertSuccess("Copied!")},duplicateForm(){if(this.loadingDuplicate)return;this.loadingDuplicate=true;n.post(this.formEndpoint.replace("{id}",this.form.id)+"/duplicate").then(o=>{this.$store.commit("open/forms/addOrUpdate",o.data.new_form);this.$router.push({name:"forms.show",params:{slug:o.data.new_form.slug}});this.alertSuccess("Form was successfully duplicated.");this.loadingDuplicate=false})},deleteForm(){if(this.loadingDelete)return;this.loadingDelete=true;n.delete(this.formEndpoint.replace("{id}",this.form.id)).then(()=>{this.$store.commit("open/forms/remove",this.form);this.$router.push({name:"home"});this.alertSuccess("Form was deleted.");this.loadingDelete=false})}}};var y=function o(){var t=this,e=t._self._c;return e("div",[t.loadingDuplicate||t.loadingDelete?e("div",{staticClass:"pr-4 pt-2"},[e("loader",{staticClass:"h-6 w-6 mx-auto"})],1):e("dropdown",{staticClass:"inline",attrs:{"dusk":"nav-dropdown"},scopedSlots:t._u([{key:"trigger",fn:function({toggle:r}){return[e("v-button",{staticClass:"mr-2",attrs:{"color":"white"},on:{"click":r}},[e("svg",{staticClass:"w-4 h-4 inline -mt-1",attrs:{"viewBox":"0 0 16 4","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"d":"M8.00016 2.83366C8.4604 2.83366 8.8335 2.46056 8.8335 2.00033C8.8335 1.54009 8.4604 1.16699 8.00016 1.16699C7.53993 1.16699 7.16683 1.54009 7.16683 2.00033C7.16683 2.46056 7.53993 2.83366 8.00016 2.83366Z","stroke":"#344054","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{"d":"M13.8335 2.83366C14.2937 2.83366 14.6668 2.46056 14.6668 2.00033C14.6668 1.54009 14.2937 1.16699 13.8335 1.16699C13.3733 1.16699 13.0002 1.54009 13.0002 2.00033C13.0002 2.46056 13.3733 2.83366 13.8335 2.83366Z","stroke":"#344054","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{"d":"M2.16683 2.83366C2.62707 2.83366 3.00016 2.46056 3.00016 2.00033C3.00016 1.54009 2.62707 1.16699 2.16683 1.16699C1.70659 1.16699 1.3335 1.54009 1.3335 2.00033C1.3335 2.46056 1.70659 2.83366 2.16683 2.83366Z","stroke":"#344054","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])])]}}])},[e("router-link",{directives:[{name:"track",rawName:"v-track.view_form_click",value:{form_id:t.form.id,form_slug:t.form.slug},expression:"{form_id:form.id, form_slug:form.slug}",modifiers:{"view_form_click":true}}],staticClass:"block sm:hidden px-4 py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex items-center",attrs:{"to":{name:"forms.show_public",params:{slug:t.form.slug}},"target":"_blank"}},[e("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"d":"M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{"d":"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" View form ")]),t.isMainPage?e("router-link",{directives:[{name:"track",rawName:"v-track.edit_form_click",value:{form_id:t.form.id,form_slug:t.form.slug},expression:"{form_id:form.id, form_slug:form.slug}",modifiers:{"edit_form_click":true}}],staticClass:"block block px-4 py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex items-center",attrs:{"to":{name:"forms.edit",params:{slug:t.form.slug}}}},[e("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"width":"18","height":"17","viewBox":"0 0 18 17","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"d":"M8.99998 15.6662H16.5M1.5 15.6662H2.89545C3.3031 15.6662 3.50693 15.6662 3.69874 15.6202C3.8688 15.5793 4.03138 15.512 4.1805 15.4206C4.34869 15.3175 4.49282 15.1734 4.78107 14.8852L15.25 4.4162C15.9404 3.72585 15.9404 2.60656 15.25 1.9162C14.5597 1.22585 13.4404 1.22585 12.75 1.9162L2.28105 12.3852C1.9928 12.6734 1.84867 12.8175 1.7456 12.9857C1.65422 13.1348 1.58688 13.2974 1.54605 13.4675C1.5 13.6593 1.5 13.8631 1.5 14.2708V15.6662Z","stroke":"currentColor","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Edit ")]):t._e(),t.isMainPage?e("a",{staticClass:"block block px-4 py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex items-center",attrs:{"href":"#"},on:{"click":function(r){r.preventDefault();return t.copyLink.apply(null,arguments)}}},[e("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"viewBox":"0 0 16 10","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"d":"M6.00016 8.33317H4.66683C2.82588 8.33317 1.3335 6.84079 1.3335 4.99984C1.3335 3.15889 2.82588 1.6665 4.66683 1.6665H6.00016M10.0002 8.33317H11.3335C13.1744 8.33317 14.6668 6.84079 14.6668 4.99984C14.6668 3.15889 13.1744 1.6665 11.3335 1.6665H10.0002M4.66683 4.99984L11.3335 4.99984","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Copy link to share ")]):t._e(),e("a",{directives:[{name:"track",rawName:"v-track.duplicate_form_click",value:{form_id:t.form.id,form_slug:t.form.slug},expression:"{form_id:form.id, form_slug:form.slug}",modifiers:{"duplicate_form_click":true}}],staticClass:"block block px-4 py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex items-center",attrs:{"href":"#"},on:{"click":function(r){r.preventDefault();return t.duplicateForm.apply(null,arguments)}}},[e("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"}})]),t._v(" Duplicate form ")]),t.user.template_editor?e("a",{staticClass:"block block px-4 py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex items-center",attrs:{"href":"#"},on:{"click":function(r){r.preventDefault();t.showCreateTemplateModal=true}}},[e("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","d":"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}})]),t._v(" Create Template ")]):t._e(),e("a",{directives:[{name:"track",rawName:"v-track.delete_form_click",value:{form_id:t.form.id,form_slug:t.form.slug},expression:"{form_id:form.id, form_slug:form.slug}",modifiers:{"delete_form_click":true}}],staticClass:"block block px-4 py-2 text-md text-red-600 hover:bg-red-50 flex items-center",attrs:{"href":"#"},on:{"click":function(r){r.preventDefault();t.showDeleteFormModal=true}}},[e("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})]),t._v(" Delete form ")])],1),e("modal",{attrs:{"show":t.showDeleteFormModal,"icon-color":"red","max-width":"sm"},on:{"close":function(r){t.showDeleteFormModal=false}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{staticClass:"w-10 h-10",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])]},proxy:true},{key:"title",fn:function(){return[t._v(" Delete form ")]},proxy:true}])},[e("div",{staticClass:"p-3"},[e("p",[t._v(" If you want to permanently delete this form and all of its data, you can do so below. ")]),e("div",{staticClass:"flex mt-4"},[e("v-button",{staticClass:"sm:w-1/2 mr-4",attrs:{"color":"white"},on:{"click":function(r){r.preventDefault();t.showDeleteFormModal=false}}},[t._v("Cancel")]),e("v-button",{staticClass:"sm:w-1/2",attrs:{"color":"red","loading":t.loadingDelete},on:{"click":function(r){r.preventDefault();return t.deleteForm.apply(null,arguments)}}},[t._v("Yes, delete it")])],1)])]),e("create-template-modal",{attrs:{"form":t.form,"show":t.showCreateTemplateModal},on:{"close":function(r){t.showCreateTemplateModal=false}}})],1)};var b=[];var M=a(x,y,b,false,null,null,null,null);const H=M.exports;export{H as E};
