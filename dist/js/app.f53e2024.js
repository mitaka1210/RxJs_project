(function(){"use strict";var t={6591:function(t,e,n){var a=n(3796);n(1703);class o{constructor(){(0,a.Z)(this,"_container",{})}resolveDependencies(t,e,n){for(let a=0;a<e.length;a++){let o=e[a];if(t[o])throw Error("Already registered dependency!");n?t.prototype[o]=this._container[o]:t[o]=this._container[o]}}register(t,e){if(!this._container[t])return this._container[t]=new e,this._container[t]}}const c=new o;var r=c,s=n(9669),i=n.n(s),l=n(8680);class u{constructor(){(0,a.Z)(this,"accountsData",new l.xQ),(0,a.Z)(this,"accountsDataAdditional",new l.xQ)}accountsDataObservable(){return i().get("http://localhost:5000/api/accountdata",{headers:{"Content-Type":"application/json"}}).then((t=>{this.accountsData.next(t.data)})),this.accountsData.asObservable()}accountsDataAdditionalObservable(){return i().get("http://localhost:5000/api/accountadditionaldata",{headers:{"Content-Type":"application/json"}}).then((t=>{this.accountsDataAdditional.next(t.data)})),this.accountsDataAdditional.asObservable()}addRoleToAccount(t){const e=new l.xQ;return i().post("http://localhost:5000/api/addroletoaccount",{role:t},{headers:{"Content-Type":"application/json"}}).then((t=>{e.next(t.data)})),e}}var d=n(6381),p=n(5709);class v{constructor(t){r.resolveDependencies(this,t)}}class h extends v{constructor(){super(["AccountsProvider"]),(0,a.Z)(this,"initialDataSubject",new l.xQ),(0,a.Z)(this,"init",!1),(0,a.Z)(this,"accountData",{roles:["admin"]})}getInitialData(){if(this.init)this.initialDataSubject.next(this.accountData);else{var t=this.AccountsProvider.accountsDataObservable().pipe((0,p.U)(((t,e)=>t))),e=this.AccountsProvider.accountsDataAdditionalObservable().pipe((0,p.U)(((t,e)=>t)));(0,d.$R)(t,e).subscribe((t=>{this.accountData={...this.accountData,...t[0],...t[1]},this.initialDataSubject.next(this.accountData)})),this.init=!0}return this.initialDataSubject.asObservable()}addRoleToAccount(t){this.AccountsProvider.addRoleToAccount(t).subscribe((e=>{e&&this.accountData.roles.push(t)}))}testMethodFromInject(){console.log("Success!")}}class m{async configure(){return new Promise((t=>{r.register("AccountsProvider",u),r.register("AccountsManager",h),t()}))}}var f=n(144),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("div",[t._v("Custom app")]),n("dash-board-component"),n("custom-data-visualizer-component")],1)],1)},_=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-btn",{on:{click:t.testBtn}},[t._v("Test btn")]),t._v(" "+t._s(t.testProp)+" "),null!=t.accountData?n("div",{staticStyle:{"background-color":"lime"}},[t._v(" "+t._s(t.accountData.roles)+" ")]):t._e(),n("account-summary-component"),n("account-register-component")],1)},D=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t._v(" Account summary "),null!=t.accountData?n("div",[n("div",[t._v("Email - "+t._s(t.accountData.emailAddress))]),n("div",[t._v("Username - "+t._s(t.accountData.username))]),n("div",[t._v("Roles - "+t._s(t.accountData.roles))])]):t._e(),n("account-details-component"),n("accounts-manager-component")],1)},x=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t._v(" Account details "),null!=t.accountDataAdditional?n("div",{staticClass:"balance-container"},[n("div",[t._v("Telephone - "+t._s(t.accountDataAdditional.telephone))]),n("div",[t._v("Balance - "+t._s(t.accountDataAdditional.balance))])]):t._e()])},y=[];class C extends v{constructor(){super(["AccountsManager"])}data(){return{accountDataAdditional:null}}mounted(){this.AccountsManager.getInitialData().subscribe((t=>{this.$data.accountDataAdditional=t}))}}var M=C,T=n(1001),V=n(3453),S=n.n(V),w=n(2255),O=(0,T.Z)(M,Z,y,!1,null,null,null),k=O.exports;S()(O,{VContainer:w.Z});var I,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticStyle:{border:"1px solid blue"}},[n("div",[t._v("Accounts manager")]),n("div",[t._v("Roles")]),null!=t.account?n("div",{staticStyle:{border:"1px solid crimson"}},[t._v(" "+t._s(t.account.balance)+" ")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.roleToAdd,expression:"roleToAdd"}],attrs:{type:"text"},domProps:{value:t.roleToAdd},on:{input:function(e){e.target.composing||(t.roleToAdd=e.target.value)}}}),n("v-btn",{on:{click:t.addRoleToAccount}},[t._v("Add role to account")])],1)])},j=[],R=n(5904);let $=(0,R.ZP)(I=class extends v{constructor(){super(["AccountsManager"])}data(){return{account:null,roleToAdd:""}}mounted(){this.AccountsManager.getInitialData().subscribe((t=>{this.$data.account=t}))}addRoleToAccount(){this.AccountsManager.addRoleToAccount(this.roleToAdd),this.roleToAdd=""}})||I;var E,F=$,B=n(680),L=(0,T.Z)(F,P,j,!1,null,null,null),N=L.exports;S()(L,{VBtn:B.Z,VContainer:w.Z});let Q=(0,R.ZP)(E=class extends v{constructor(){super(["AccountsManager"]),(0,a.Z)(this,"components",{AccountDetailsComponent:k,AccountsManagerComponent:N})}data(){return{accountData:null}}mounted(){this.AccountsManager.getInitialData().subscribe((t=>{this.$data.accountData=t}))}})||E;var U=Q,z=(0,T.Z)(U,A,x,!1,null,null,null),G=z.exports;S()(z,{VContainer:w.Z});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("Name of step 1")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v("Name of step 2")]),n("v-divider"),n("v-stepper-step",{attrs:{step:"3"}},[t._v(" Name of step 3 ")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[null!=t.accountData?n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("div",[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedRoleIdx,callback:function(e){t.selectedRoleIdx=e},expression:"selectedRoleIdx"}},t._l(t.accountData.roles,(function(e){return n("v-list-item",{key:e.key},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e))]),n("v-list-item-subtitle",[t._v("additional info ...")])],1)],1)})),1)],1),n("div",[t._v(" Selected role is: "+t._s(t.accountData.roles[t.selectedRoleIdx])+" ")])]):t._e(),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=2}}},[t._v("Continue")]),n("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=3}}},[t._v("Continue")]),n("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=1}}},[t._v("Continue")]),n("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1)],1)],1)],1)},q=[];class J extends v{constructor(){super(["AccountsManager"])}data(){return{accountData:null,e1:1,selectedRoleIdx:0}}mounted(){this.AccountsManager.getInitialData().subscribe((t=>{this.$data.accountData=t}))}}var K,W=J,X=n(26),Y=n(1418),tt=n(7620),et=n(2886),nt=n(6651),at=n(3446),ot=n(8937),ct=n(6189),rt=n(8975),st=(0,T.Z)(W,H,q,!1,null,"830a2956",null),it=st.exports;S()(st,{VBtn:B.Z,VCard:X.Z,VContainer:w.Z,VDivider:Y.Z,VListItem:tt.Z,VListItemContent:et.km,VListItemGroup:nt.Z,VListItemSubtitle:et.oZ,VListItemTitle:et.V9,VStepper:at.Z,VStepperContent:ot.Z,VStepperHeader:ct.Rp,VStepperItems:ct.gd,VStepperStep:rt.Z});let lt=(0,R.ZP)(K=class extends v{constructor(){super(["AccountsManager"]),(0,a.Z)(this,"components",{AccountsSummaryComponent:G,AccountRegisterComponent:it})}data(){return{testProp:5,accountData:null}}testBtn(){this.AccountsManager.testMethodFromInject()}mounted(){this.AccountsManager.getInitialData().subscribe((t=>{this.$data.accountData=t}))}})||K;var ut=lt,dt=(0,T.Z)(ut,g,D,!1,null,"4e42e34a",null),pt=dt.exports;S()(dt,{VBtn:B.Z,VContainer:w.Z});var vt,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Test "+t._s(t.property1)+" "),t.accountData?n("div",{staticClass:"custom-component-roles"},[t._v(" Roles in class based component - "+t._s(t.accountData.roles)+" "),n("v-btn",{on:{click:function(e){return t.testClick()}}},[t._v("click me for alert")])],1):t._e()])},mt=[];let ft=(0,R.ZP)(vt=class extends v{constructor(){super(["AccountsManager"])}data(){return{property1:5,accountData:null}}mounted(){console.log(this.goshko),this.AccountsManager.getInitialData().subscribe((t=>{this.$data.accountData=t})),console.log(this),console.log(this.AccountsManager)}testClick(){alert("5")}})||vt;var bt,_t=ft,gt=(0,T.Z)(_t,ht,mt,!1,null,"55830932",null),Dt=gt.exports;S()(gt,{VBtn:B.Z});let At=(0,R.ZP)(bt=class{constructor(){(0,a.Z)(this,"components",{DashBoardComponent:pt,CustomDataVisualizerComponent:Dt})}})||bt;var xt=At,Zt=n(7524),yt=n(1009),Ct=(0,T.Z)(xt,b,_,!1,null,null,null),Mt=Ct.exports;S()(Ct,{VApp:Zt.Z,VMain:yt.Z});var Tt=n(1910);f.Z.use(Tt.Z);var Vt=new Tt.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),St=n(2346),wt=n(1337);(new m).configure(),f.Z.use(St.Z,i()),f.Z.use(wt.Z),f.Z.config.productionTip=!1,new f.Z({vuetify:Vt,render:t=>t(Mt)}).$mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var c=e[a]={id:a,loaded:!1,exports:{}};return t[a](c,c.exports,n),c.loaded=!0,c.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,a,o,c){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],c=t[u][2];for(var s=!0,i=0;i<a.length;i++)(!1&c||r>=c)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(s=!1,c<r&&(r=c));if(s){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[a,o,c]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,c,r=a[0],s=a[1],i=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var u=i(n)}for(e&&e(a);l<r.length;l++)c=r[l],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(u)},a=self["webpackChunktest_app"]=self["webpackChunktest_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6591)}));a=n.O(a)})();
//# sourceMappingURL=app.f53e2024.js.map