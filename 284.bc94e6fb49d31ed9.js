"use strict";(self.webpackChunkantsystems_frontend=self.webpackChunkantsystems_frontend||[]).push([[284],{8284:(L,f,i)=>{i.r(f),i.d(f,{PurchaseModule:()=>Q});var u=i(6814),d=i(1629),e=i(9468);const x=function(){return["purchase-orders"]},v=function(){return["vendors"]},y=function(){return["carriers"]};let Z=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-purchase"]],decls:8,vars:6,consts:[[1,"flex","justify-center","h-10","my-2"],["routerLinkActive","nav-item-active",1,"px-2","mx-2","nav-item",3,"routerLink"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e._uU(2,"Purchase Orders"),e.qZA(),e.TgZ(3,"button",1),e._uU(4,"Vendors"),e.qZA(),e.TgZ(5,"button",1),e._uU(6,"Carriers"),e.qZA()(),e._UZ(7,"router-outlet")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,x)),e.xp6(2),e.Q6J("routerLink",e.DdM(4,v)),e.xp6(2),e.Q6J("routerLink",e.DdM(5,y)))},dependencies:[d.lC,d.rH,d.Od],styles:[".nav-item-active[_ngcontent-%COMP%]{color:#536a84;border-bottom:#536A84 solid 4px;font-weight:700;background-color:transparent!important;border-radius:8px 8px 0 0!important}.nav-item[_ngcontent-%COMP%]{color:#6a89b0bf;border-radius:8px;transition:background-color .5s cubic-bezier(.18,.89,.32,1.28)}[_ngcontent-%COMP%]:hover.nav-item{background-color:#a5a5a51a}"]})}return o})();var r=i(95),p=i(6289),_=i(8102),c=i(2579),h=i(6318),b=i(9397),C=i(7398),w=i(9862),k=i(4615);let A=(()=>{class o{constructor(n,t){this.http=n,this.api=t,this.baseUrl="api/vendors"}get(){return this.api.get(this.baseUrl)}add(n){return this.http.post(this.baseUrl,n)}update(n){return this.http.patch(this.baseUrl,n)}delete(n){return this.http.delete(this.baseUrl)}static#e=this.\u0275fac=function(t){return new(t||o)(e.LFG(w.eN),e.LFG(k.s))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const s=(0,_.MT)({name:"vendor"},(0,c.h4)(),(0,h.oU)());let g=(()=>{class o{constructor(){this.vendorService=(0,e.f3M)(A),this.skipWhileTodosCached=(0,h.Eo)(s),this.vendors$=s.pipe((0,c.WK)())}setItems(n){s.update((0,h.g9)("vendor"),(0,c.J6)(n))}add(n){return this.vendorService.add(n).pipe((0,b.b)(t=>s.update((0,c.g3)(n))))}getById(n){return s.query((0,c.Hv)(n))}fetchData(){return console.warn("fetch data"),this.vendorService.get().pipe((0,C.U)(n=>n.map(t=>({...t,id:t._id}))),(0,b.b)(this.setItems),this.skipWhileTodosCached("vendor"))}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function T(o,R){if(1&o){const n=e.EpF();e.TgZ(0,"a",44),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.showStreet2=!0)}),e._uU(1," + Address 2 (Optional) "),e.qZA()}}function U(o,R){1&o&&(e.TgZ(0,"div",8),e._UZ(1,"input",45),e.qZA())}let N=(()=>{class o{constructor(n,t){this.modalRef=n,this.vendorRepo=t,this.showStreet2=!1,this.initForm()}initForm(){this.form=new r.cw({vendorId:new r.NI(null,[r.kI.required]),accountNumber:new r.NI(null,[r.kI.required]),netPayment:new r.NI(null,[r.kI.required]),companyName:new r.NI(null,[r.kI.required]),contactName:new r.NI(null,[r.kI.required]),phone:new r.NI(null,[r.kI.required]),email:new r.NI(null,[r.kI.required]),address:new r.cw({street:new r.NI(null,[r.kI.required]),street2:new r.NI(null),city:new r.NI(null,[r.kI.required]),state:new r.NI(null,[r.kI.required]),zip:new r.NI(null,[r.kI.required])})})}save(){console.warn(this.form.value),this.vendorRepo.add(this.form.value).subscribe()}close(n){this.modalRef.close(n)}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.rn),e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-vendor"]],decls:74,vars:6,consts:[[1,"p-4"],[1,"border-2","border-black","m-0"],[3,"formGroup"],[1,"flex","gap-4"],[1,"w-full"],[1,"mt-3","w-full"],["for","vendor_id",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","vendorId","type","text","id","vendor_id","placeholder","",1,"ant-input"],[1,"mt-3"],["for","account_no",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","accountNumber","type","text","id","account_no","placeholder","",1,"ant-input"],["for","company_name",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","companyName","type","text","id","company_name","placeholder","",1,"ant-input"],["for","contact_name",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","contactName","type","text","id","contact_name","placeholder","",1,"ant-input"],["for","net_payment",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","netPayment","type","text","id","net_payment","placeholder","",1,"ant-input"],["formGroupName","address"],["for","street",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","street","type","text","id","street","placeholder","",1,"ant-input"],["class","cursor-pointer text-blue-500 text-xs",3,"click",4,"ngIf"],["class","mt-3",4,"ngIf"],[3,"ngClass"],["for","city",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","city","type","phone","id","city","placeholder","",1,"ant-input"],[1,"flex","flex-row","gap-4"],["for","state",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","state","type","phone","id","state","placeholder","",1,"ant-input"],["value","CA"],["value","NV"],["value","AZ"],["value","UT"],["value","NM"],["value","TX"],["for","zip",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","zip","type","phone","id","zip","placeholder","",1,"ant-input"],["for","phone",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","phone","type","phone","id","phone","placeholder","",1,"ant-input"],["for","email",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","email","type","email","id","email","placeholder","",1,"ant-input"],[1,"border-2","border-black","mt-8"],[1,"flex","gap-2","justify-end"],[1,"btn-cancel",3,"click"],[1,"btn-primary",3,"disabled","ngClass","click"],[1,"cursor-pointer","text-blue-500","text-xs",3,"click"],["formControlName","street2","type","text","id","street2","placeholder","",1,"ant-input"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"h5"),e._uU(2,"Create a Vendor"),e.qZA(),e._UZ(3,"hr",1),e.TgZ(4,"form",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"label",6),e._uU(9,"Vendor ID"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",8)(12,"label",9),e._uU(13,"Account No."),e.qZA(),e._UZ(14,"input",10),e.qZA(),e.TgZ(15,"div",8)(16,"label",11),e._uU(17,"Company Name"),e.qZA(),e._UZ(18,"input",12),e.qZA(),e.TgZ(19,"div",8)(20,"label",13),e._uU(21,"Contact Name"),e.qZA(),e._UZ(22,"input",14),e.qZA(),e.TgZ(23,"div",8)(24,"label",15),e._uU(25,"Net Payment"),e.qZA(),e._UZ(26,"input",16),e.qZA()(),e.TgZ(27,"div",4)(28,"form",17)(29,"div",8)(30,"label",18),e._uU(31,"Street"),e.qZA(),e._UZ(32,"input",19),e.qZA(),e.YNc(33,T,2,0,"a",20),e.YNc(34,U,2,0,"div",21),e.TgZ(35,"div",22)(36,"label",23),e._uU(37,"City"),e.qZA(),e._UZ(38,"input",24),e.qZA(),e.TgZ(39,"div",25)(40,"div",5)(41,"label",26),e._uU(42,"State"),e.qZA(),e.TgZ(43,"select",27)(44,"option",28),e._uU(45,"CA"),e.qZA(),e.TgZ(46,"option",29),e._uU(47,"NV"),e.qZA(),e.TgZ(48,"option",30),e._uU(49,"AZ"),e.qZA(),e.TgZ(50,"option",31),e._uU(51,"UT"),e.qZA(),e.TgZ(52,"option",32),e._uU(53,"NM"),e.qZA(),e.TgZ(54,"option",33),e._uU(55,"TX"),e.qZA()()(),e.TgZ(56,"div",5)(57,"label",34),e._uU(58,"Zip"),e.qZA(),e._UZ(59,"input",35),e.qZA()()(),e.TgZ(60,"div",8)(61,"label",36),e._uU(62,"Phone"),e.qZA(),e._UZ(63,"input",37),e.qZA(),e.TgZ(64,"div",8)(65,"label",38),e._uU(66,"Email"),e.qZA(),e._UZ(67,"input",39),e.qZA()()()(),e._UZ(68,"hr",40),e.TgZ(69,"div",41)(70,"button",42),e.NdJ("click",function(){return a.close(!1)}),e._uU(71,"Cancel"),e.qZA(),e.TgZ(72,"button",43),e.NdJ("click",function(){return a.save()}),e._uU(73,"Save"),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",a.form),e.xp6(29),e.Q6J("ngIf",!a.showStreet2),e.xp6(1),e.Q6J("ngIf",a.showStreet2),e.xp6(1),e.Q6J("ngClass",a.showStreet2?"mt-3":""),e.xp6(37),e.Q6J("disabled",!a.form.valid)("ngClass",a.form.valid?"":"btn-disabled"))},dependencies:[u.mk,u.O5,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.F,r.sg,r.u,r.x0]})}return o})();var m=i(3993);let q=(()=>{class o{constructor(n,t){this.modalService=n,this.vendorRepo=t,this.modalRef=null,this.modalConfig={animation:!0,backdrop:!0,containerClass:"right",data:{title:"Warning!",prev:"",new:""},modalClass:"modal-dialog-centered modal-lg"},this.source=[],this.columns=[{header:"Vendor ID",field:"vendorId",width:100},{header:"Company Name",field:"companyName"},{header:"Address",field:"address",formatter:a=>a.street},{header:"City",field:"address",width:120,formatter:a=>a.city},{header:"State",field:"address",width:60,formatter:a=>a.state},{header:"Zip Code",field:"address",width:100,formatter:a=>a.zip},{header:"Contact",field:"contactName"},{header:"Phone",field:"phone"},{header:"Email",field:"email"},{header:"Action",width:100}],this.sorting={enabled:!0},this.vendorRepo.fetchData().subscribe(),this.vendorRepo.vendors$.subscribe(a=>{console.warn(a),this.source=a})}addVendor(){this.modalRef=this.modalService.open(N,this.modalConfig),this.modalRef.onClose.subscribe(n=>{})}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.Bh),e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-vendors"]],decls:12,vars:5,consts:[[1,"product-container"],[1,"header","flex","justify-center","items-center","text-white","font-semibold"],[1,"content"],[1,"flex","justify-end","mt-2"],[1,"btn-primary","flex","justify-center","items-center","py-1",3,"click"],[1,"material-symbols-outlined"],[1,"mt-4"],[3,"source","columns","sorting","verticalGrid","horizontalGrid"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Vendors"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"button",4),e.NdJ("click",function(){return a.addVendor()}),e._uU(6," Add Vendor "),e.TgZ(7,"span",5),e._uU(8," add "),e.qZA()()(),e._UZ(9,"router-outlet"),e.TgZ(10,"div",6),e._UZ(11,"gui-grid",7),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("source",a.source)("columns",a.columns)("sorting",a.sorting)("verticalGrid",!1)("horizontalGrid",!0))},dependencies:[d.lC,m.q3],styles:[".product-status-container[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000;background:#F1F1F1;box-shadow:0 1px 4px #00000040;margin-inline:20px;display:grid;grid-gap:19px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-auto-columns:1fr;align-content:center;justify-items:center;padding:1rem}.product-container[_ngcontent-%COMP%]{margin-block:1.25rem;margin-inline:20px;border-radius:10px;background:#FFF}.product-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;height:37px;background:#75889D}.product-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:.5rem 1.5rem 1.5rem}.nav-item-active[_ngcontent-%COMP%]{border-bottom:#536A84 solid 4px;font-weight:700;background-color:transparent!important;border-radius:8px 8px 0 0!important}.nav-item[_ngcontent-%COMP%]{border-radius:8px;transition:background-color .5s cubic-bezier(.18,.89,.32,1.28)}[_ngcontent-%COMP%]:hover.nav-item{background-color:#a5a5a51a}"]})}return o})();const P=function(){return["orders"]},O=function(){return["new-order"]};let I=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-purchase-orders"]],decls:10,vars:4,consts:[[1,"product-container"],[1,"header","flex","justify-center","items-center","text-white","font-semibold"],[1,"content"],[1,"flex"],["routerLinkActive","nav-item-active",1,"px-2","mx-2","nav-item",3,"routerLink"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Purchase Orders"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"button",4),e._uU(6,"Orders"),e.qZA(),e.TgZ(7,"button",4),e._uU(8,"New PO"),e.qZA()(),e._UZ(9,"router-outlet"),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(2,P)),e.xp6(2),e.Q6J("routerLink",e.DdM(3,O)))},dependencies:[d.lC,d.rH,d.Od],styles:[".product-status-container[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000;background:#F1F1F1;box-shadow:0 1px 4px #00000040;margin-inline:20px;display:grid;grid-gap:19px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-auto-columns:1fr;align-content:center;justify-items:center;padding:1rem}.product-container[_ngcontent-%COMP%]{margin-block:1.25rem;margin-inline:20px;border-radius:10px;background:#FFF}.product-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;height:37px;background:#75889D}.product-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:.5rem 1.5rem 1.5rem}.nav-item-active[_ngcontent-%COMP%]{border-bottom:#536A84 solid 4px;font-weight:700;background-color:transparent!important;border-radius:8px 8px 0 0!important}.nav-item[_ngcontent-%COMP%]{border-radius:8px;transition:background-color .5s cubic-bezier(.18,.89,.32,1.28)}[_ngcontent-%COMP%]:hover.nav-item{background-color:#a5a5a51a}"]})}return o})(),M=(()=>{class o{constructor(){this.source=[],this.columns=[{header:"Item",field:"item"},{header:"SKU",field:"sku"},{header:"Description",field:"description"},{header:"Order By",field:"unitDetails",formatter:n=>n.masterCase},{header:"Qty",field:"unitDetails",formatter:n=>n.innerBox},{header:"U. Price",field:"unitDetails",formatter:n=>n.pack},{header:"U. Pack",field:"unitDetails",formatter:n=>n.pieces},{header:"Cost By Case",field:"job"},{header:"Total",field:"age"}],this.sorting={enabled:!0}}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-purchase-order-list"]],decls:2,vars:5,consts:[[1,"mt-4"],[3,"source","columns","sorting","verticalGrid","horizontalGrid"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"gui-grid",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("source",a.source)("columns",a.columns)("sorting",a.sorting)("verticalGrid",!1)("horizontalGrid",!0))},dependencies:[m.q3]})}return o})();var F=i(1851),J=i(4759);let V=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["ant-text"]],inputs:{label:"label",value:"value"},decls:5,vars:2,consts:[[1,"mt-2","flex"],["for","inner_box",1,"text-xs","font-medium","text-gray-900","dark:text-white","w-1/3","flex","items-center","justify-end"],[1,"ant-text"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA()()),2&t&&(e.xp6(2),e.hij("",a.label,": \xa0"),e.xp6(2),e.hij(" ",a.value," "))},styles:[".ant-text[_ngcontent-%COMP%]{display:block;height:2rem;width:100%;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding:.375rem;text-align:center;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.ant-text[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity)) }.ant-text[_ngcontent-%COMP%]:disabled{opacity:.7}@media (prefers-color-scheme: dark){.ant-text[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.ant-text[_ngcontent-%COMP%]::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.ant-text[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity)) }}"]})}return o})(),D=(()=>{class o{constructor(n){this.vendorRepo=n,this.statusOptions=[{name:"New"},{name:"Pending"},{name:"Cancelled"}],this.vendors=[{name:"Vendor 1",id:1},{name:"Vendor 2",id:2},{name:"Vendor 3",id:3}],this.shipTo=[{name:"Main Warehouse",id:1},{name:"2nd Warehouse",id:2},{name:"Store Warehouse",id:3}],this.source=[],this.columns=[{header:"Item",field:"item"},{header:"SKU",field:"sku"},{header:"Description",field:"description"},{header:"Order By",field:"unitDetails",formatter:t=>t.masterCase},{header:"Qty",field:"unitDetails",formatter:t=>t.innerBox},{header:"U. Price",field:"unitDetails",formatter:t=>t.pack},{header:"U. Pack",field:"unitDetails",formatter:t=>t.pieces},{header:"Cost By Case",field:"job"},{header:"Total",field:"age"}],this.sorting={enabled:!0},this.initForm(),this.vendorRepo.fetchData().subscribe(),this.vendorRepo.vendors$.subscribe(t=>{this.vendors=t})}initForm(){this.form=new r.cw({status:new r.NI(null),vendor:new r.NI(null),netPayment:new r.NI(null),accountNumber:new r.NI(null),shipTo:new r.NI(null),shipVia:new r.NI(null),freightTerm:new r.NI(null),date:new r.NI(null),etaDate:new r.NI(null),refrence:new r.NI(null),notes:new r.NI(null)})}setVendor(n){console.warn(n),this.form.controls.netPayment.patchValue(n.netPayment),this.form.controls.accountNumber.patchValue(n.accountNumber)}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-new-purchase-order"]],decls:62,vars:13,consts:[[3,"formGroup"],[1,"flex"],[1,"w-1/4","m-4"],["label","Select a status","placeholder","Select Status",3,"groupName","data","controlName"],[1,"mt-4","flex"],["for","inner_box",1,"mb-1","text-xs","font-medium","text-gray-900","dark:text-white","w-1/3","flex","items-center","text"],[1,"ant-text"],[1,"relative"],["for","master_case",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["placeHolder","","feild","companyName",1,"",3,"options","control","selectedItemEvent"],[1,"mt-3"],["formControlName","netPayment","type","text","id","master_case",1,"ant-input"],["formControlName","accountNumber","type","text","id","master_case",1,"ant-input"],["placeHolder","",1,"",3,"options","control"],["formControlName","shipVia","type","text","id","master_case","placeholder","",1,"ant-input"],["formControlName","freightTerm","type","text","id","master_case","placeholder","",1,"ant-input"],[1,""],["formControlName","date","placeholder","","type","date","name","","id","","required","",1,"bg-white","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-1.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500","disabled:opacity-70"],["formControlName","etaDate","placeholder","","type","date","name","","id","","required","",1,"bg-white","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-1.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500","disabled:opacity-70"],["formControlName","refrence","type","text","id","master_case","placeholder","",1,"ant-input"],[1,"border-2","border-black"],[3,"source","columns","sorting","verticalGrid","horizontalGrid"],[1,"flex","gap-x-16"],[1,"w-2/3"],["for","message",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","message","rows","4","placeholder","...",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"w-1/3","mt-4"],["label","Sub-Total","value","Text Value"],["label","Freight","value","Text Value"],["label","Extra","value","Text Value"],["label","Discount","value","Text Value"],["label","Total Amount","value","Text Value"]],template:function(t,a){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2),e._UZ(3,"ant-select",3),e.TgZ(4,"div",4)(5,"label",5),e._uU(6,"PO Number: \xa0"),e.qZA(),e.TgZ(7,"div",6),e._uU(8," Test Value "),e.qZA()()(),e.TgZ(9,"div",2)(10,"div",7)(11,"label",8),e._uU(12,"Vendor"),e.qZA(),e.TgZ(13,"ant-dropdown",9),e.NdJ("selectedItemEvent",function(B){return a.setVendor(B)}),e.qZA()(),e.TgZ(14,"div",10)(15,"label",8),e._uU(16,"Net Payment"),e.qZA(),e._UZ(17,"input",11),e.qZA(),e.TgZ(18,"div",10)(19,"label",8),e._uU(20,"Account Number"),e.qZA(),e._UZ(21,"input",12),e.qZA()(),e.TgZ(22,"div",2)(23,"div",7)(24,"label",8),e._uU(25,"Ship To"),e.qZA(),e._UZ(26,"ant-dropdown",13),e.qZA(),e.TgZ(27,"div",10)(28,"label",8),e._uU(29,"Ship Via"),e.qZA(),e._UZ(30,"input",14),e.qZA(),e.TgZ(31,"div",10)(32,"label",8),e._uU(33,"Freight Term"),e.qZA(),e._UZ(34,"input",15),e.qZA()(),e.TgZ(35,"div",2)(36,"div",16)(37,"label",8),e._uU(38,"Date"),e.qZA(),e._UZ(39,"input",17),e.qZA(),e.TgZ(40,"div",10)(41,"label",8),e._uU(42,"ETA Date"),e.qZA(),e._UZ(43,"input",18),e.qZA(),e.TgZ(44,"div",10)(45,"label",8),e._uU(46,"Refrence"),e.qZA(),e._UZ(47,"input",19),e.qZA()()(),e._UZ(48,"hr",20)(49,"gui-grid",21)(50,"hr",20),e.TgZ(51,"div",22)(52,"div",23)(53,"label",24),e._uU(54,"Notes"),e.qZA(),e._UZ(55,"textarea",25),e.qZA(),e.TgZ(56,"div",26),e._UZ(57,"ant-text",27)(58,"ant-text",28)(59,"ant-text",29)(60,"ant-text",30)(61,"ant-text",31),e.qZA()()()),2&t&&(e.Q6J("formGroup",a.form),e.xp6(3),e.Q6J("groupName",a.form)("data",a.statusOptions)("controlName",a.form.get("status")),e.xp6(10),e.Q6J("options",a.vendors)("control",a.form.get("vendor")),e.xp6(13),e.Q6J("options",a.shipTo)("control",a.form.get("shipTo")),e.xp6(23),e.Q6J("source",a.source)("columns",a.columns)("sorting",a.sorting)("verticalGrid",!1)("horizontalGrid",!0))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,F.H,m.q3,J.J,V],styles:['.ant-text[_ngcontent-%COMP%]{display:block;height:1.5rem;width:66.666667%;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding:.375rem;text-align:center;font-size:.875rem;line-height:1.25rem;line-height:1;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.ant-text[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.ant-text[_ngcontent-%COMP%]:disabled{opacity:.7}@media (prefers-color-scheme: dark){.ant-text[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.ant-text[_ngcontent-%COMP%]::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.ant-text[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}}textarea[_ngcontent-%COMP%]{resize:none}input[type=date][_ngcontent-%COMP%]:before{content:attr(placeholder);position:absolute;color:#999}input[type=date][_ngcontent-%COMP%]{color:#fff}input[type=date][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:valid{color:#666}input[type=date][_ngcontent-%COMP%]:focus:before, input[type=date][_ngcontent-%COMP%]:valid:before{content:""}']})}return o})(),S=(()=>{class o{constructor(n){this.modalRef=n,this.initForm()}initForm(){this.form=new r.cw({carrierId:new r.NI(null,[r.kI.required]),serviceType:new r.NI(null,[r.kI.required]),email:new r.NI(null,[r.kI.required]),companyName:new r.NI(null,[r.kI.required]),contactName:new r.NI(null,[r.kI.required]),phone:new r.NI(null,[r.kI.required])})}save(){console.warn(this.form.value)}close(n){this.modalRef.close(n)}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.rn))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-carrier"]],decls:38,vars:3,consts:[[1,"p-4"],[1,"border-2","border-black","m-0"],[3,"formGroup"],[1,"flex","gap-4"],[1,"w-full"],[1,"mt-3","w-full"],["for","carrier_id",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","carrierId","type","text","id","carrier_id","placeholder","",1,"ant-input"],[1,"mt-3"],["for","service_type",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","serviceType","type","text","id","service_type","placeholder","",1,"ant-input"],["for","email",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","email","type","email","id","email","placeholder","",1,"ant-input"],["for","company_name",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","companyName","type","text","id","company_name","placeholder","",1,"ant-input"],["for","contact_name",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","contactName","type","text","id","contact_name","placeholder","",1,"ant-input"],["for","phone",1,"block","text-xxs","font-medium","text-gray-900","dark:text-white"],["formControlName","phone","type","phone","id","phone","placeholder","",1,"ant-input"],[1,"border-2","border-black","mt-8"],[1,"flex","gap-2","justify-end"],[1,"btn-cancel",3,"click"],[1,"btn-primary",3,"disabled","ngClass","click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"h5"),e._uU(2,"Create a Carrier"),e.qZA(),e._UZ(3,"hr",1),e.TgZ(4,"form",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"label",6),e._uU(9,"Carrier ID"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",8)(12,"label",9),e._uU(13,"Type of Service"),e.qZA(),e._UZ(14,"input",10),e.qZA(),e.TgZ(15,"div",8)(16,"label",11),e._uU(17,"Email"),e.qZA(),e._UZ(18,"input",12),e.qZA()(),e.TgZ(19,"div",4)(20,"div",8)(21,"label",13),e._uU(22,"Company Name"),e.qZA(),e._UZ(23,"input",14),e.qZA(),e.TgZ(24,"div",8)(25,"label",15),e._uU(26,"Contact Name"),e.qZA(),e._UZ(27,"input",16),e.qZA(),e.TgZ(28,"div",8)(29,"label",17),e._uU(30,"Phone"),e.qZA(),e._UZ(31,"input",18),e.qZA()()()(),e._UZ(32,"hr",19),e.TgZ(33,"div",20)(34,"button",21),e.NdJ("click",function(){return a.close(!1)}),e._uU(35,"Cancel"),e.qZA(),e.TgZ(36,"button",22),e.NdJ("click",function(){return a.save()}),e._uU(37,"Save"),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",a.form),e.xp6(32),e.Q6J("disabled",!a.form.valid)("ngClass",a.form.valid?"":"btn-disabled"))},dependencies:[u.mk,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return o})();const G=[{path:"",component:Z,children:[{path:"",redirectTo:"purchase-orders",pathMatch:"full"},{path:"vendors",component:q,children:[]},{path:"carriers",component:(()=>{class o{constructor(n){this.modalService=n,this.modalRef=null,this.modalConfig={animation:!0,backdrop:!0,containerClass:"right",data:{title:"Warning!",prev:"",new:""},modalClass:"modal-dialog-centered modal-lg"},this.source=[],this.columns=[{header:"Item",field:"item"},{header:"SKU",field:"sku"},{header:"Description",field:"description"},{header:"Order By",field:"unitDetails",formatter:t=>t.masterCase},{header:"Qty",field:"unitDetails",formatter:t=>t.innerBox},{header:"U. Price",field:"unitDetails",formatter:t=>t.pack},{header:"U. Pack",field:"unitDetails",formatter:t=>t.pieces},{header:"Cost By Case",field:"job"},{header:"Total",field:"age"}],this.sorting={enabled:!0}}addCarrier(){this.modalRef=this.modalService.open(S,this.modalConfig),this.modalRef.onClose.subscribe(n=>{})}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.Bh))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-carriers"]],decls:12,vars:5,consts:[[1,"product-container"],[1,"header","flex","justify-center","items-center","text-white","font-semibold"],[1,"content"],[1,"flex","justify-end","mt-2"],[1,"btn-primary","flex","justify-center","items-center","py-1",3,"click"],[1,"material-symbols-outlined"],[1,"mt-4"],[3,"source","columns","sorting","verticalGrid","horizontalGrid"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Carriers"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"button",4),e.NdJ("click",function(){return a.addCarrier()}),e._uU(6," Add Carrier "),e.TgZ(7,"span",5),e._uU(8," add "),e.qZA()()(),e._UZ(9,"router-outlet"),e.TgZ(10,"div",6),e._UZ(11,"gui-grid",7),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("source",a.source)("columns",a.columns)("sorting",a.sorting)("verticalGrid",!1)("horizontalGrid",!0))},dependencies:[d.lC,m.q3],styles:[".product-status-container[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000;background:#F1F1F1;box-shadow:0 1px 4px #00000040;margin-inline:20px;display:grid;grid-gap:19px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-auto-columns:1fr;align-content:center;justify-items:center;padding:1rem}.product-container[_ngcontent-%COMP%]{margin-block:1.25rem;margin-inline:20px;border-radius:10px;background:#FFF}.product-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;height:37px;background:#75889D}.product-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:.5rem 1.5rem 1.5rem}.nav-item-active[_ngcontent-%COMP%]{border-bottom:#536A84 solid 4px;font-weight:700;background-color:transparent!important;border-radius:8px 8px 0 0!important}.nav-item[_ngcontent-%COMP%]{border-radius:8px;transition:background-color .5s cubic-bezier(.18,.89,.32,1.28)}[_ngcontent-%COMP%]:hover.nav-item{background-color:#a5a5a51a}"]})}return o})(),children:[]},{path:"purchase-orders",component:I,children:[{path:"",redirectTo:"orders",pathMatch:"full"},{path:"orders",component:M},{path:"new-order",component:D}]}]}];let z=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(G),d.Bz]})}return o})();var j=i(6317);let Q=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[u.ez,z,j.m]})}return o})()}}]);