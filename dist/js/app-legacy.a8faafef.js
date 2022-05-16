(function(){"use strict";var t={6591:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var a=e(6198),o=e(6133),r=e(2751),c=(e(5666),e(1539),e(3796)),i=(e(1703),function(){function t(){(0,o.Z)(this,t),(0,c.Z)(this,"_container",{})}return(0,r.Z)(t,[{key:"resolveDependencies",value:function(t,n,e){for(var a=0;a<n.length;a++){var o=n[a];if(t[o])throw Error("Already registered dependency!");e?t.prototype[o]=this._container[o]:t[o]=this._container[o]}}},{key:"register",value:function(t,n){if(!this._container[t])return this._container[t]=new n,this._container[t]}}]),t}()),u=new i,s=u,l=e(9669),v=e.n(l),d=e(8680),p=function(){function t(){(0,o.Z)(this,t),(0,c.Z)(this,"accountsData",new d.xQ),(0,c.Z)(this,"accountsDataAdditional",new d.xQ)}return(0,r.Z)(t,[{key:"accountsDataObservable",value:function(){var t=this;return v().get("http://localhost:5000/api/accountdata",{headers:{"Content-Type":"application/json"}}).then((function(n){t.accountsData.next(n.data)})),this.accountsData.asObservable()}},{key:"accountsDataAdditionalObservable",value:function(){var t=this;return v().get("http://localhost:5000/api/accountadditionaldata",{headers:{"Content-Type":"application/json"}}).then((function(n){t.accountsDataAdditional.next(n.data)})),this.accountsDataAdditional.asObservable()}},{key:"addRoleToAccount",value:function(t){var n=new d.xQ;return v().post("http://localhost:5000/api/addroletoaccount",{role:t},{headers:{"Content-Type":"application/json"}}).then((function(t){n.next(t.data)})),n}}]),t}(),f=e(4367),h=e(3263),m=e(796),Z=e(6035),b=e(6381),g=e(5709),_=(0,r.Z)((function t(n){(0,o.Z)(this,t),s.resolveDependencies(this,n)})),y=function(t){(0,m.Z)(e,t);var n=(0,Z.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.call(this,["AccountsProvider"]),(0,c.Z)((0,h.Z)(t),"initialDataSubject",new d.xQ),(0,c.Z)((0,h.Z)(t),"init",!1),(0,c.Z)((0,h.Z)(t),"accountData",{roles:["admin"]}),t}return(0,r.Z)(e,[{key:"getInitialData",value:function(){var t=this;if(this.init)this.initialDataSubject.next(this.accountData);else{var n=this.AccountsProvider.accountsDataObservable().pipe((0,g.U)((function(t,n){return t}))),e=this.AccountsProvider.accountsDataAdditionalObservable().pipe((0,g.U)((function(t,n){return t})));(0,b.$R)(n,e).subscribe((function(n){t.accountData=(0,f.Z)((0,f.Z)((0,f.Z)({},t.accountData),n[0]),n[1]),t.initialDataSubject.next(t.accountData)})),this.init=!0}return this.initialDataSubject.asObservable()}},{key:"addRoleToAccount",value:function(t){var n=this;this.AccountsProvider.addRoleToAccount(t).subscribe((function(e){e&&n.accountData.roles.push(t)}))}},{key:"testMethodFromInject",value:function(){console.log("Success!")}}]),e}(_),D=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,[{key:"configure",value:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){s.register("AccountsProvider",p),s.register("AccountsManager",y),t()})));case 1:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}]),t}(),A=e(144),k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-main",[e("div",[t._v("Custom app")]),e("dash-board-component"),e("custom-data-visualizer-component")],1)],1)},x=[],C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-btn",{on:{click:t.testBtn}},[t._v("Test btn")]),t._v(" "+t._s(t.testProp)+" "),null!=t.accountData?e("div",{staticStyle:{"background-color":"lime"}},[t._v(" "+t._s(t.accountData.roles)+" ")]):t._e(),e("account-summary-component"),e("account-register-component")],1)},w=[],M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[t._v(" Account summary "),null!=t.accountData?e("div",[e("div",[t._v("Email - "+t._s(t.accountData.emailAddress))]),e("div",[t._v("Username - "+t._s(t.accountData.username))]),e("div",[t._v("Roles - "+t._s(t.accountData.roles))])]):t._e(),e("account-details-component"),e("accounts-manager-component")],1)},T=[],V=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[t._v(" Account details "),null!=t.accountDataAdditional?e("div",{staticClass:"balance-container"},[e("div",[t._v("Telephone - "+t._s(t.accountDataAdditional.telephone))]),e("div",[t._v("Balance - "+t._s(t.accountDataAdditional.balance))])]):t._e()])},S=[],O=function(t){(0,m.Z)(e,t);var n=(0,Z.Z)(e);function e(){return(0,o.Z)(this,e),n.call(this,["AccountsManager"])}return(0,r.Z)(e,[{key:"data",value:function(){return{accountDataAdditional:null}}},{key:"mounted",value:function(){var t=this;this.AccountsManager.getInitialData().subscribe((function(n){t.$data.accountDataAdditional=n}))}}]),e}(_),I=O,P=e(1001),j=e(3453),R=e.n(j),$=e(2255),E=(0,P.Z)(I,V,S,!1,null,null,null),F=E.exports;R()(E,{VContainer:$.Z});var B,L,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("div",{staticStyle:{border:"1px solid blue"}},[e("div",[t._v("Accounts manager")]),e("div",[t._v("Roles")]),null!=t.account?e("div",{staticStyle:{border:"1px solid crimson"}},[t._v(" "+t._s(t.account.balance)+" ")]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.roleToAdd,expression:"roleToAdd"}],attrs:{type:"text"},domProps:{value:t.roleToAdd},on:{input:function(n){n.target.composing||(t.roleToAdd=n.target.value)}}}),e("v-btn",{on:{click:t.addRoleToAccount}},[t._v("Add role to account")])],1)])},Q=[],U=e(5904),z=(0,U.ZP)(B=function(t){(0,m.Z)(e,t);var n=(0,Z.Z)(e);function e(){return(0,o.Z)(this,e),n.call(this,["AccountsManager"])}return(0,r.Z)(e,[{key:"data",value:function(){return{account:null,roleToAdd:""}}},{key:"mounted",value:function(){var t=this;this.AccountsManager.getInitialData().subscribe((function(n){t.$data.account=n}))}},{key:"addRoleToAccount",value:function(){this.AccountsManager.addRoleToAccount(this.roleToAdd),this.roleToAdd=""}}]),e}(_))||B,G=z,H=e(680),q=(0,P.Z)(G,N,Q,!1,null,null,null),J=q.exports;R()(q,{VBtn:H.Z,VContainer:$.Z});var K=(0,U.ZP)(L=function(t){(0,m.Z)(e,t);var n=(0,Z.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.call(this,["AccountsManager"]),(0,c.Z)((0,h.Z)(t),"components",{AccountDetailsComponent:F,AccountsManagerComponent:J}),t}return(0,r.Z)(e,[{key:"data",value:function(){return{accountData:null}}},{key:"mounted",value:function(){var t=this;this.AccountsManager.getInitialData().subscribe((function(n){t.$data.accountData=n}))}}]),e}(_))||L,W=K,X=(0,P.Z)(W,M,T,!1,null,null,null),Y=X.exports;R()(X,{VContainer:$.Z});var tt,nt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-stepper",{model:{value:t.e1,callback:function(n){t.e1=n},expression:"e1"}},[e("v-stepper-header",[e("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("Name of step 1")]),e("v-divider"),e("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v("Name of step 2")]),e("v-divider"),e("v-stepper-step",{attrs:{step:"3"}},[t._v(" Name of step 3 ")])],1),e("v-stepper-items",[e("v-stepper-content",{attrs:{step:"1"}},[null!=t.accountData?e("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[e("div",[e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedRoleIdx,callback:function(n){t.selectedRoleIdx=n},expression:"selectedRoleIdx"}},t._l(t.accountData.roles,(function(n){return e("v-list-item",{key:n.key},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n))]),e("v-list-item-subtitle",[t._v("additional info ...")])],1)],1)})),1)],1),e("div",[t._v(" Selected role is: "+t._s(t.accountData.roles[t.selectedRoleIdx])+" ")])]):t._e(),e("v-btn",{attrs:{color:"primary"},on:{click:function(n){t.e1=2}}},[t._v("Continue")]),e("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1),e("v-stepper-content",{attrs:{step:"2"}},[e("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),e("v-btn",{attrs:{color:"primary"},on:{click:function(n){t.e1=3}}},[t._v("Continue")]),e("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1),e("v-stepper-content",{attrs:{step:"3"}},[e("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),e("v-btn",{attrs:{color:"primary"},on:{click:function(n){t.e1=1}}},[t._v("Continue")]),e("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1)],1)],1)],1)},et=[],at=function(t){(0,m.Z)(e,t);var n=(0,Z.Z)(e);function e(){return(0,o.Z)(this,e),n.call(this,["AccountsManager"])}return(0,r.Z)(e,[{key:"data",value:function(){return{accountData:null,e1:1,selectedRoleIdx:0}}},{key:"mounted",value:function(){var t=this;this.AccountsManager.getInitialData().subscribe((function(n){t.$data.accountData=n}))}}]),e}(_),ot=at,rt=e(26),ct=e(1418),it=e(7620),ut=e(2886),st=e(6651),lt=e(3446),vt=e(8937),dt=e(6189),pt=e(8975),ft=(0,P.Z)(ot,nt,et,!1,null,"830a2956",null),ht=ft.exports;R()(ft,{VBtn:H.Z,VCard:rt.Z,VContainer:$.Z,VDivider:ct.Z,VListItem:it.Z,VListItemContent:ut.km,VListItemGroup:st.Z,VListItemSubtitle:ut.oZ,VListItemTitle:ut.V9,VStepper:lt.Z,VStepperContent:vt.Z,VStepperHeader:dt.Rp,VStepperItems:dt.gd,VStepperStep:pt.Z});var mt=(0,U.ZP)(tt=function(t){(0,m.Z)(e,t);var n=(0,Z.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.call(this,["AccountsManager"]),(0,c.Z)((0,h.Z)(t),"components",{AccountsSummaryComponent:Y,AccountRegisterComponent:ht}),t}return(0,r.Z)(e,[{key:"data",value:function(){return{testProp:5,accountData:null}}},{key:"testBtn",value:function(){this.AccountsManager.testMethodFromInject()}},{key:"mounted",value:function(){var t=this;this.AccountsManager.getInitialData().subscribe((function(n){t.$data.accountData=n}))}}]),e}(_))||tt,Zt=mt,bt=(0,P.Z)(Zt,C,w,!1,null,"4e42e34a",null),gt=bt.exports;R()(bt,{VBtn:H.Z,VContainer:$.Z});var _t,yt,Dt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" Test "+t._s(t.property1)+" "),t.accountData?e("div",{staticClass:"custom-component-roles"},[t._v(" Roles in class based component - "+t._s(t.accountData.roles)+" "),e("v-btn",{on:{click:function(n){return t.testClick()}}},[t._v("click me for alert")])],1):t._e()])},At=[],kt=(0,U.ZP)(_t=function(t){(0,m.Z)(e,t);var n=(0,Z.Z)(e);function e(){return(0,o.Z)(this,e),n.call(this,["AccountsManager"])}return(0,r.Z)(e,[{key:"data",value:function(){return{property1:5,accountData:null}}},{key:"mounted",value:function(){var t=this;console.log(this.goshko),this.AccountsManager.getInitialData().subscribe((function(n){t.$data.accountData=n})),console.log(this),console.log(this.AccountsManager)}},{key:"testClick",value:function(){alert("5")}}]),e}(_))||_t,xt=kt,Ct=(0,P.Z)(xt,Dt,At,!1,null,"55830932",null),wt=Ct.exports;R()(Ct,{VBtn:H.Z});var Mt=(0,U.ZP)(yt=(0,r.Z)((function t(){(0,o.Z)(this,t),(0,c.Z)(this,"components",{DashBoardComponent:gt,CustomDataVisualizerComponent:wt})})))||yt,Tt=Mt,Vt=e(7524),St=e(1009),Ot=(0,P.Z)(Tt,k,x,!1,null,null,null),It=Ot.exports;R()(Ot,{VApp:Vt.Z,VMain:St.Z});var Pt=e(5613);A.Z.use(Pt.Z);var jt=new Pt.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),Rt=e(2346),$t=e(1337);(new D).configure(),A.Z.use(Rt.Z,v()),A.Z.use($t.Z),A.Z.config.productionTip=!1,new A.Z({vuetify:jt,render:function(t){return t(It)}}).$mount("#app")}},n={};function e(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,loaded:!1,exports:{}};return t[a](r,r.exports,e),r.loaded=!0,r.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(n,a,o,r){if(!a){var c=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],r=t[l][2];for(var i=!0,u=0;u<a.length;u++)(!1&r||c>=r)&&Object.keys(e.O).every((function(t){return e.O[t](a[u])}))?a.splice(u--,1):(i=!1,r<c&&(c=r));if(i){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[a,o,r]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var o,r,c=a[0],i=a[1],u=a[2],s=0;if(c.some((function(n){return 0!==t[n]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(u)var l=u(e)}for(n&&n(a);s<c.length;s++)r=c[s],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(l)},a=self["webpackChunktest_app"]=self["webpackChunktest_app"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(6591)}));a=e.O(a)})();
//# sourceMappingURL=app-legacy.a8faafef.js.map