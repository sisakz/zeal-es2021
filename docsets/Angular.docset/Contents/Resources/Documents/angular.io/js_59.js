"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[842],{1555:(b,E,c)=>{c.d(E,{be:()=>I,KL:()=>i,u6:()=>d,B8:()=>S,U5:()=>P,st:()=>T,po:()=>A,gx:()=>v});var _=c(5664),m=c(3191),e=c(1159),h=c(9808),r=c(5e3),k=c(925),M=c(8929),y=c(1086),f=c(1059),x=c(7625),C=c(226);function D(s,l){1&s&&r.Hsn(0)}const O=["*"];let i=(()=>{class s{constructor(t){this._elementRef=t}focus(){this._elementRef.nativeElement.focus()}}return s.\u0275fac=function(t){return new(t||s)(r.Y36(r.SBq))},s.\u0275dir=r.lG2({type:s,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]}),s})(),d=(()=>{class s{constructor(t){this.template=t}}return s.\u0275fac=function(t){return new(t||s)(r.Y36(r.Rgc))},s.\u0275dir=r.lG2({type:s,selectors:[["","cdkStepLabel",""]]}),s})(),o=0;const v=new r.OlP("STEPPER_GLOBAL_OPTIONS");let I=(()=>{class s{constructor(t,n){this._stepper=t,this.interacted=!1,this.interactedStream=new r.vpe,this._editable=!0,this._optional=!1,this._completedOverride=null,this._customError=null,this._stepperOptions=n||{},this._displayDefaultIndicatorType=!1!==this._stepperOptions.displayDefaultIndicatorType}get editable(){return this._editable}set editable(t){this._editable=(0,m.Ig)(t)}get optional(){return this._optional}set optional(t){this._optional=(0,m.Ig)(t)}get completed(){return null==this._completedOverride?this._getDefaultCompleted():this._completedOverride}set completed(t){this._completedOverride=(0,m.Ig)(t)}_getDefaultCompleted(){return this.stepControl?this.stepControl.valid&&this.interacted:this.interacted}get hasError(){return null==this._customError?this._getDefaultError():this._customError}set hasError(t){this._customError=(0,m.Ig)(t)}_getDefaultError(){return this.stepControl&&this.stepControl.invalid&&this.interacted}select(){this._stepper.selected=this}reset(){this.interacted=!1,null!=this._completedOverride&&(this._completedOverride=!1),null!=this._customError&&(this._customError=!1),this.stepControl&&this.stepControl.reset()}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this.interacted||(this.interacted=!0,this.interactedStream.emit(this))}_showError(){var t;return null!==(t=this._stepperOptions.showError)&&void 0!==t?t:null!=this._customError}}return s.\u0275fac=function(t){return new(t||s)(r.Y36((0,r.Gpc)(()=>S)),r.Y36(v,8))},s.\u0275cmp=r.Xpm({type:s,selectors:[["cdk-step"]],contentQueries:function(t,n,a){if(1&t&&r.Suo(a,d,5),2&t){let u;r.iGM(u=r.CRH())&&(n.stepLabel=u.first)}},viewQuery:function(t,n){if(1&t&&r.Gf(r.Rgc,7),2&t){let a;r.iGM(a=r.CRH())&&(n.content=a.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],state:"state",editable:"editable",optional:"optional",completed:"completed",hasError:"hasError"},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[r.TTD],ngContentSelectors:O,decls:1,vars:0,template:function(t,n){1&t&&(r.F$t(),r.YNc(0,D,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),s})(),S=(()=>{class s{constructor(t,n,a,u){this._dir=t,this._changeDetectorRef=n,this._elementRef=a,this._destroyed=new M.xQ,this.steps=new r.n_E,this._sortedHeaders=new r.n_E,this._linear=!1,this._selectedIndex=0,this.selectionChange=new r.vpe,this._orientation="horizontal",this._groupId=o++}get linear(){return this._linear}set linear(t){this._linear=(0,m.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){var n;const a=(0,m.su)(t);this.steps&&this._steps?(this._isValidIndex(a),null===(n=this.selected)||void 0===n||n._markAsInteracted(),this._selectedIndex!==a&&!this._anyControlsInvalidOrPending(a)&&(a>=this._selectedIndex||this.steps.toArray()[a].editable)&&this._updateSelectedItemIndex(a)):this._selectedIndex=a}get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(t){this.selectedIndex=t&&this.steps?this.steps.toArray().indexOf(t):-1}get orientation(){return this._orientation}set orientation(t){this._orientation=t,this._keyManager&&this._keyManager.withVerticalOrientation("vertical"===t)}ngAfterContentInit(){this._steps.changes.pipe((0,f.O)(this._steps),(0,x.R)(this._destroyed)).subscribe(t=>{this.steps.reset(t.filter(n=>n._stepper===this)),this.steps.notifyOnChanges()})}ngAfterViewInit(){this._stepHeader.changes.pipe((0,f.O)(this._stepHeader),(0,x.R)(this._destroyed)).subscribe(t=>{this._sortedHeaders.reset(t.toArray().sort((n,a)=>n._elementRef.nativeElement.compareDocumentPosition(a._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new _.Em(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation("vertical"===this._orientation),(this._dir?this._dir.change:(0,y.of)()).pipe((0,f.O)(this._layoutDirection()),(0,x.R)(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t)),this._keyManager.updateActiveItem(this._selectedIndex),this.steps.changes.subscribe(()=>{this.selected||(this._selectedIndex=Math.max(this._selectedIndex-1,0))}),this._isValidIndex(this._selectedIndex)||(this._selectedIndex=0)}ngOnDestroy(){this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(t=>t.reset()),this._stateChanged()}_getStepLabelId(t){return`cdk-step-label-${this._groupId}-${t}`}_getStepContentId(t){return`cdk-step-content-${this._groupId}-${t}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(t){const n=t-this._selectedIndex;return n<0?"rtl"===this._layoutDirection()?"next":"previous":n>0?"rtl"===this._layoutDirection()?"previous":"next":"current"}_getIndicatorType(t,n="number"){const a=this.steps.toArray()[t],u=this._isCurrentStep(t);return a._displayDefaultIndicatorType?this._getDefaultIndicatorLogic(a,u):this._getGuidelineLogic(a,u,n)}_getDefaultIndicatorLogic(t,n){return t._showError()&&t.hasError&&!n?"error":!t.completed||n?"number":t.editable?"edit":"done"}_getGuidelineLogic(t,n,a="number"){return t._showError()&&t.hasError&&!n?"error":t.completed&&!n?"done":t.completed&&n?a:t.editable&&n?"edit":a}_isCurrentStep(t){return this._selectedIndex===t}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex}_updateSelectedItemIndex(t){const n=this.steps.toArray();this.selectionChange.emit({selectedIndex:t,previouslySelectedIndex:this._selectedIndex,selectedStep:n[t],previouslySelectedStep:n[this._selectedIndex]}),this._containsFocus()?this._keyManager.setActiveItem(t):this._keyManager.updateActiveItem(t),this._selectedIndex=t,this._stateChanged()}_onKeydown(t){const n=(0,e.Vb)(t),a=t.keyCode,u=this._keyManager;null==u.activeItemIndex||n||a!==e.L_&&a!==e.K5?u.onKeydown(t):(this.selectedIndex=u.activeItemIndex,t.preventDefault())}_anyControlsInvalidOrPending(t){return!!(this._linear&&t>=0)&&this.steps.toArray().slice(0,t).some(n=>{const a=n.stepControl;return(a?a.invalid||a.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride})}_layoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_containsFocus(){const t=this._elementRef.nativeElement,n=(0,k.ht)();return t===n||t.contains(n)}_isValidIndex(t){return t>-1&&(!this.steps||t<this.steps.length)}}return s.\u0275fac=function(t){return new(t||s)(r.Y36(C.Is,8),r.Y36(r.sBO),r.Y36(r.SBq),r.Y36(h.K0))},s.\u0275dir=r.lG2({type:s,selectors:[["","cdkStepper",""]],contentQueries:function(t,n,a){if(1&t&&(r.Suo(a,I,5),r.Suo(a,i,5)),2&t){let u;r.iGM(u=r.CRH())&&(n._steps=u),r.iGM(u=r.CRH())&&(n._stepHeader=u)}},inputs:{linear:"linear",selectedIndex:"selectedIndex",selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange"},exportAs:["cdkStepper"]}),s})(),T=(()=>{class s{constructor(t){this._stepper=t,this.type="submit"}}return s.\u0275fac=function(t){return new(t||s)(r.Y36(S))},s.\u0275dir=r.lG2({type:s,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,n){1&t&&r.NdJ("click",function(){return n._stepper.next()}),2&t&&r.Ikx("type",n.type)},inputs:{type:"type"}}),s})(),A=(()=>{class s{constructor(t){this._stepper=t,this.type="button"}}return s.\u0275fac=function(t){return new(t||s)(r.Y36(S))},s.\u0275dir=r.lG2({type:s,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,n){1&t&&r.NdJ("click",function(){return n._stepper.previous()}),2&t&&r.Ikx("type",n.type)},inputs:{type:"type"}}),s})(),P=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[C.vT]]}),s})()},842:(b,E,c)=>{c.r(E),c.d(E,{CdkCustomStepperWithoutFormExample:()=>y,CdkLinearStepperWithFormExample:()=>x,CdkStepperExamplesModule:()=>O,CustomLinearStepper:()=>C,CustomStepper:()=>f});var _=c(1555),m=c(9808),e=c(5e3),h=c(3075);function r(i,d){if(1&i){const o=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const v=e.CHM(o).index;return e.oxw().selectStepByIndex(v)}),e._uU(1),e.qZA()}if(2&i){const o=d.index,p=e.oxw();e.ekj("example-active",p.selectedIndex===o),e.xp6(1),e.hij(" Step ",o+1," ")}}function k(i,d){if(1&i){const o=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const v=e.CHM(o).index;return e.oxw().selectStepByIndex(v)}),e._uU(1),e.qZA()}if(2&i){const o=d.index,p=e.oxw();e.ekj("example-active",p.selectedIndex===o),e.xp6(1),e.hij(" Step ",o+1," ")}}let y=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["cdk-custom-stepper-without-form-example"]],decls:7,vars:0,template:function(o,p){1&o&&(e.TgZ(0,"example-custom-stepper"),e.TgZ(1,"cdk-step"),e.TgZ(2,"p"),e._uU(3,'This is any content of "Step 1"'),e.qZA(),e.qZA(),e.TgZ(4,"cdk-step"),e.TgZ(5,"p"),e._uU(6,'This is any content of "Step 2"'),e.qZA(),e.qZA(),e.qZA())},directives:function(){return[f,_.be]},styles:[""]}),i})(),f=(()=>{class i extends _.B8{selectStepByIndex(o){this.selectedIndex=o}}return i.\u0275fac=function(){let d;return function(p){return(d||(d=e.n5z(i)))(p||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["example-custom-stepper"]],features:[e._Bn([{provide:_.B8,useExisting:i}]),e.qOj],decls:11,vars:4,consts:[[1,"example-container"],[3,"ngTemplateOutlet"],[1,"example-step-navigation-bar"],["cdkStepperPrevious","",1,"example-nav-button"],["class","example-step",3,"example-active","click",4,"ngFor","ngForOf"],["cdkStepperNext","",1,"example-nav-button"],[1,"example-step",3,"click"]],template:function(o,p){1&o&&(e.TgZ(0,"section",0),e.TgZ(1,"header"),e.TgZ(2,"h2"),e._uU(3),e.qZA(),e.qZA(),e._UZ(4,"div",1),e.TgZ(5,"footer",2),e.TgZ(6,"button",3),e._uU(7,"\u2190"),e.qZA(),e.YNc(8,r,2,3,"button",4),e.TgZ(9,"button",5),e._uU(10,"\u2192"),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.AsE("Step ",p.selectedIndex+1,"/",p.steps.length,""),e.xp6(1),e.Q6J("ngTemplateOutlet",p.selected?p.selected.content:null),e.xp6(4),e.Q6J("ngForOf",p.steps))},directives:[m.tP,_.po,m.sg,_.st],styles:[".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"]}),i})(),x=(()=>{class i{constructor(o){this._formBuilder=o,this.isLinear=!0,this.firstFormGroup=this._formBuilder.group({firstControl:["",h.kI.required]}),this.secondFormGroup=this._formBuilder.group({secondControl:["",h.kI.required]})}toggleLinearity(){this.isLinear=!this.isLinear}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(h.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["cdk-linear-stepper-with-form-example"]],decls:13,vars:6,consts:[[3,"linear"],[3,"stepControl"],["for","stepOneInput"],[3,"formGroup"],["placeholder","Input","formControlName","firstControl","id","stepOneInput","required",""],["for","stepTwoInput"],["placeholder","Input","formControlName","secondControl","id","stepTwoInput","required",""],[1,"example-toggle-linear-button",3,"click"]],template:function(o,p){1&o&&(e.TgZ(0,"example-custom-linear-stepper",0),e.TgZ(1,"cdk-step",1),e.TgZ(2,"label",2),e._uU(3,"Step 1 input"),e.qZA(),e.TgZ(4,"form",3),e._UZ(5,"input",4),e.qZA(),e.qZA(),e.TgZ(6,"cdk-step",1),e.TgZ(7,"label",5),e._uU(8,"Step 2 input"),e.qZA(),e.TgZ(9,"form",3),e._UZ(10,"input",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"button",7),e.NdJ("click",function(){return p.toggleLinearity()}),e._uU(12),e.qZA()),2&o&&(e.Q6J("linear",p.isLinear),e.xp6(1),e.Q6J("stepControl",p.firstFormGroup),e.xp6(3),e.Q6J("formGroup",p.firstFormGroup),e.xp6(2),e.Q6J("stepControl",p.secondFormGroup),e.xp6(3),e.Q6J("formGroup",p.secondFormGroup),e.xp6(3),e.hij(" ",p.isLinear?"Disable linear mode":"Enable linear mode","\n"))},directives:function(){return[C,_.be,h._Y,h.JL,h.sg,h.Fj,h.JJ,h.u,h.Q7]},styles:[".example-toggle-linear-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"]}),i})(),C=(()=>{class i extends _.B8{selectStepByIndex(o){this.selectedIndex=o}}return i.\u0275fac=function(){let d;return function(p){return(d||(d=e.n5z(i)))(p||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["example-custom-linear-stepper"]],features:[e._Bn([{provide:_.B8,useExisting:i}]),e.qOj],decls:11,vars:4,consts:[[1,"example-container"],[3,"ngTemplateOutlet"],[1,"example-step-navigation-bar"],["cdkStepperPrevious","",1,"example-nav-button"],["class","example-step",3,"example-active","click",4,"ngFor","ngForOf"],["cdkStepperNext","",1,"example-nav-button"],[1,"example-step",3,"click"]],template:function(o,p){1&o&&(e.TgZ(0,"section",0),e.TgZ(1,"header"),e.TgZ(2,"h2"),e._uU(3),e.qZA(),e.qZA(),e._UZ(4,"div",1),e.TgZ(5,"footer",2),e.TgZ(6,"button",3),e._uU(7,"\u2190"),e.qZA(),e.YNc(8,k,2,3,"button",4),e.TgZ(9,"button",5),e._uU(10,"\u2192"),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.AsE("Step ",p.selectedIndex+1,"/",p.steps.length,""),e.xp6(1),e.Q6J("ngTemplateOutlet",p.selected?p.selected.content:null),e.xp6(4),e.Q6J("ngForOf",p.steps))},directives:[m.tP,_.po,m.sg,_.st],styles:[".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[_.U5,m.ez,h.UX]]}),i})()}}]);