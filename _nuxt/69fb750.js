(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{420:function(t,e,n){"use strict";n(119),n(193),n(28);var d={props:["datalist","pagetitle"],data:function(){return{dialog:!1,search:"",headers:[{text:"Suffix",align:"start",sortable:!1,value:"suffix"},{text:"First Name",value:"first_name"},{text:"Middle Name",value:"middle_name"},{text:"LastName",value:"last_name"},{text:"Gender",value:"gender",sortable:!1},{text:"Country",value:"country"},{text:"Status",value:"isAdmitted",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItemId:"",editedItem:{first_name:null,middle_name:"",last_name:"",suffix:"",ethnicity:"",dob:"",gender:"",ssn:"",mdn:"",principal_tribe:"",country:"",isAdmitted:!1},defaultItem:{first_name:null,middle_name:"",last_name:"",suffix:"",ethnicity:"",dob:"",gender:"",ssn:"",mdn:"",principal_tribe:"",country:"",isAdmitted:!1},genderoptions:["Male","Female","Others"]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},isAppointmentRoute:{get:function(){return"appointments"===this.$router.currentRoute.name}}},watch:{dialog:function(t){t||this.close()}},created:function(){},methods:{editItem:function(t){this.editedIndex=this.datalist.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},deleteItem:function(t){var e=this.datalist.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.datalist.splice(e,1),this.$store.dispatch("delete_patient",t.id)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){console.log(this.editedItemId),this.editedIndex>-1?(Object.assign(this.datalist[this.editedIndex],this.editedItem),delete this.editedItem.contactsInformation,delete this.editedItem.diagnoses,delete this.editedItem.physician,console.log(this.editedItem),this.$store.dispatch("update_patient",{id:this.editedItemId,body:this.editedItem})):(this.datalist.push(this.editedItem),this.$store.dispatch("create_new_patient",this.editedItem)),this.close()},handleClick:function(t){console.log(t),this.$router.push("/patients/"+t.id)},initialize:function(){}},beforeMount:function(){this.$store.dispatch("retrievepatients")}},l=n(59),o=n(69),r=n.n(o),c=n(400),m=n(457),v=n(416),h=n(464),f=n(514),_=n(409),I=n(523),x=n(516),k=n(401),y=n(155),C=n(517),$=n(462),V=n(412),A=n(454),w=n(47),T=n(120),S=n(414),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.datalist,search:t.search,"items-per-page":15,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[n("h3",[t._v(t._s(t.pagetitle))])]),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v("  \n      "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:t._u([{key:"activator",fn:function(e){var d=e.on,l=e.attrs;return[t.isAppointmentRoute?n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"teal",fab:"",small:"",dark:""}},"v-btn",l,!1),d),[n("v-icon",[t._v("mdi-plus")])],1):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"First name"},model:{value:t.editedItem.first_name,callback:function(e){t.$set(t.editedItem,"first_name",e)},expression:"editedItem.first_name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Middle Name"},model:{value:t.editedItem.middle_name,callback:function(e){t.$set(t.editedItem,"middle_name",e)},expression:"editedItem.middle_name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Last Name"},model:{value:t.editedItem.last_name,callback:function(e){t.$set(t.editedItem,"last_name",e)},expression:"editedItem.last_name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Country"},model:{value:t.editedItem.country,callback:function(e){t.$set(t.editedItem,"country",e)},expression:"editedItem.country"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Ethnicity"},model:{value:t.editedItem.ethnicity,callback:function(e){t.$set(t.editedItem,"ethnicity",e)},expression:"editedItem.ethnicity"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{hint:" "+t.editedItem.gender.option,items:t.genderoptions,label:"Select","persistent-hint":"","return-object":"","single-line":""},model:{value:t.editedItem.gender,callback:function(e){t.$set(t.editedItem,"gender",e)},expression:"editedItem.gender"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Date of Birth"},model:{value:t.editedItem.dob,callback:function(e){t.$set(t.editedItem,"dob",e)},expression:"editedItem.dob"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Tribe"},model:{value:t.editedItem.principal_tribe,callback:function(e){t.$set(t.editedItem,"principal_tribe",e)},expression:"editedItem.principal_tribe"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-checkbox",{attrs:{"background-color":"success lighten-4","on-icon":"mdi-bed-outline",label:t.editedItem.isAdmitted?"Patient Admitted":"Check to admit patient"},model:{value:t.editedItem.isAdmitted,callback:function(e){t.$set(t.editedItem,"isAdmitted",e)},expression:"editedItem.isAdmitted"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.isAdmitted",fn:function(e){return[e.item.isAdmitted?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var d=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{"x-small":""}},"v-icon",l,!1),d),[t._v("mdi-bed-outline")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Admitted")])]):n("div")]}},{key:"item.actions",fn:function(e){var d=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{"x-small":""},on:{click:function(e){return t.handleClick(d)}}},[t._v("mdi-eye")]),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(d)}}},[t._v(" mdi-pencil ")]),t._v(" "),n("v-icon",{attrs:{small:"",color:"warning"},on:{click:function(e){return t.deleteItem(d)}}},[t._v("\n      mdi-delete\n    ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=component.exports;r()(component,{VBtn:c.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCheckbox:h.a,VCol:f.a,VContainer:_.a,VDataTable:I.a,VDialog:x.a,VDivider:k.a,VIcon:y.a,VRow:C.a,VSelect:$.a,VSpacer:V.a,VTextField:A.a,VToolbar:w.a,VToolbarTitle:T.a,VTooltip:S.a})},527:function(t,e,n){"use strict";n.r(e);var d={components:{"patient-list":n(420).a},data:function(){return{pagetitle:"OPD Center"}},computed:{opdpatients:{get:function(){return this.$store.getters.opdpatients}}}},l=n(59),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[0!==this.opdpatients.length?e("div",[e("patient-list",{attrs:{datalist:this.opdpatients,pagetitle:this.pagetitle}})],1):e("div",[this._v(this._s(this.$t("label.message.nodataavailable")))])])}),[],!1,null,null,null);e.default=component.exports}}]);