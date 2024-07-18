(function(e){function t(t){for(var n,o,l=t[0],r=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,l=1;l<s.length;l++){var r=s[l];0!==i[r]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={onboarding:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;a.push([6,"chunk-vendors","chunk-common"]),s()})({"1cd0":function(e,t,s){},6:function(e,t,s){e.exports=s("cd98")},cd98:function(e,t,s){"use strict";s.r(t);var n=s("a026"),i=s("003c"),a=(s("1cd0"),s("918d")),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userfeedback-onboarding"},[t("div",{staticClass:"userfeedback-onboarding-bar"},[t("div",{staticClass:"userfeedback-onboarding-bar__container"},[t("button",{attrs:{disabled:!e.promisesResolved||e.installingPlugins.length>0},on:{click:e.exitOnboarding}},[e.promisesResolved&&0===e.installingPlugins.length?t("span",{directives:[{name:"icon",rawName:"v-icon:close",arg:"close"}]}):e._e(),e.promisesResolved&&0===e.installingPlugins.length?t("span",[e._v(e._s(e.texts.exit))]):e._e(),!e.promisesResolved||e.installingPlugins.length>0?t("span",[e._v(e._s(e.texts.wait))]):e._e()])])]),t("header",{staticClass:"userfeedback-onboarding-head"},[t("figure",{staticClass:"userfeedback-onboarding-head__logo"},[t("img",{attrs:{src:e.$uf.assets+"/img/user-feedback-logo-full.svg",alt:""}})])]),t("main",{staticClass:"userfeedback-onboarding-wrapper"},[t("user-feedback-onboarding-progress"),t("section",{staticClass:"userfeedback-onboarding-card"},[e.currentStepIndex>0?t("span",{staticClass:"userfeedback-onboarding-step-count"},[e._v(e._s(e.texts.stepCount))]):e._e(),t("onboarding-step-"+e.currentStep.key,{tag:"component",class:"step-"+e.currentStep.key}),t("user-feedback-onboarding-nav")],1),"features"===e.currentStep.key?t("section",{staticClass:"userfeedback-onboarding-help"},[e.showPluginsText.length>0?t("p",[t("span",[e._v(e._s(e.texts.installText))]),t("span",[e._v(e._s(e.showPluginsText.join(", ")))])]):e._e()]):e._e()],1)])},l=[],r=(s("14d9"),s("561c")),c=s("2f62"),u=s("a878"),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"onboarding-progress"},e._l(e.steps,(function(s,n){return t("span",{key:s.key,staticClass:"onboarding-step-indicator",class:{"is-current":n===e.currentStepIndex,"is-complete":n<e.currentStepIndex}},[t("span",{staticClass:"onboarding-step-indicator__mark"},[t("span",{directives:[{name:"icon",rawName:"v-icon:check",arg:"check"}]})])])})),0)},p=[],b={name:"UserFeedbackOnboardingProgress",computed:{...Object(c["e"])("onboarding",["steps","currentStepIndex"])}},g=b,m=s("2877"),h=Object(m["a"])(g,d,p,!1,null,null,null),f=h.exports,x=function(){var e=this,t=e._self._c;return t("footer",{staticClass:"userfeedback-onboarding-nav"},[t("div",{staticClass:"userfeedback-onboarding-nav__start"},[e.currentStepIndex>0&&!e.hidePrevButton?t("button",{staticClass:"button user-feedback-button is-secondary",attrs:{type:"button"},on:{click:e.goBack}},[t("span",{directives:[{name:"icon",rawName:"v-icon:chevron-left",arg:"chevron-left"}]}),t("span",[e._v(e._s(e.texts.back))])]):e._e()]),t("div",{staticClass:"userfeedback-onboarding-nav__end"},[e.currentStep.skippable?t("button",{staticClass:"button user-feedback-button is-link",attrs:{type:"button"}},[e._v(e._s(e.texts.skip))]):e._e(),e.nextStep?t("button",{staticClass:"button user-feedback-button",attrs:{type:"button",disabled:!e.canContinue},on:{click:e.advance}},[e.currentStepIndex>0?t("span",[e._v(e._s(e.texts.nextStep)+e._s(e.nextStep.label))]):t("span",[e._v(e._s(e.texts.start))]),t("span",{directives:[{name:"icon",rawName:"v-icon:chevron-right",arg:"chevron-right"}]})]):t("button",{staticClass:"button user-feedback-button",attrs:{type:"button",disabled:!e.canExitToDashboard},on:{click:e.completeOnboarding}},[e._v(e._s(e.texts.exitToDashboard))])])])},k=[],v={name:"UserFeedbackOnboardingNav",computed:{...Object(c["e"])("onboarding",["currentStepIndex","steps"]),...Object(c["c"])("onboarding",["currentStep","nextStep","canContinue","canExitToDashboard"]),texts(){return{back:Object(r["a"])("Back",this.$textDomain),start:Object(r["a"])("Start",this.$textDomain),skip:Object(r["a"])("Skip for now",this.$textDomain),nextStep:Object(r["a"])("Next Step: ",this.$textDomain),exitToDashboard:Object(r["a"])("Exit to dashboard",this.$textDomain)}},hidePrevButton(){return this.currentStepIndex===this.steps.length-1}},methods:{...Object(c["b"])("onboarding",["advance","goBack","completeOnboarding"])}},O=v,_=Object(m["a"])(O,x,k,!1,null,null,null),y=_.exports,j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userfeedback-onboarding-step"},[t("header",{staticClass:"userfeedback-onboarding-step__header"},[t("h1",{staticClass:"title"},[e._v(e._s(e.texts.title))]),t("p",[e._v(e._s(e.texts.intro))])]),t("section",{staticClass:"userfeedback-onboarding-step__block"},[t("p",[t("b",[e._v(e._s(e.texts.blockTitle))])]),t("ul",{staticClass:"icon-list is-success"},e._l(e.texts.listItems,(function(s,n){return t("li",{key:n},[t("span",{staticClass:"icon-list__item-icon"},[t("span",{directives:[{name:"icon",rawName:"v-icon:check",arg:"check"}]})]),t("span",[e._v(e._s(s))])])})),0)])])},w=[],P={name:"OnboardingStepWelcome",computed:{texts(){return{title:Object(r["a"])("Welcome to UserFeedback! 🎉 ",this.$textDomain),intro:Object(r["a"])("This setup process should only take a couple of minutes.",this.$textDomain),blockTitle:Object(r["a"])("With UserFeedback, you can easily gather actionable feedback to unlock more sales and traffic opportunities from your WordPress site.",this.$textDomain),listItems:[Object(r["a"])("Create an unlimited number of UserFeedback surveys anywhere on your website",this.$textDomain),Object(r["a"])("Easily use different types of questions including multiple choice, checkbox, freeform, or star ratings",this.$textDomain),Object(r["a"])("Collect feedback for things like content suggestions, product feedback, or design ideas to increase engagement and sales",this.$textDomain)]}}}},$=P,S=Object(m["a"])($,j,w,!1,null,null,null),I=S.exports,D=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userfeedback-onboarding-step"},[t("header",{staticClass:"userfeedback-onboarding-step__header"},[t("h1",{staticClass:"title"},[e._v(e._s(e.texts.title))]),t("p",[e._v(e._s(e.texts.intro))])]),t("section",{staticClass:"userfeedback-onboarding-step__block"},[t("p",[t("b",[e._v(e._s(e.texts.blockTitle))])]),t("div",{staticClass:"onboarding-inner-block"},[e._l(e.predefinedQuestions,(function(s,n){return t("div",{key:n,staticClass:"field"},[t("radio",{attrs:{"input-value":n,name:"first_question"},model:{value:e.selectedQuestionIndex,callback:function(t){e.selectedQuestionIndex=t},expression:"selectedQuestionIndex"}},[e._v(" "+e._s(s)+" ")])],1)})),t("div",{staticClass:"field"},[t("radio",{attrs:{"input-value":-1,name:"first_question"},model:{value:e.selectedQuestionIndex,callback:function(t){e.selectedQuestionIndex=t},expression:"selectedQuestionIndex"}},[e._v(" "+e._s(e.texts.createYourOwn)+" ")]),t("div",{staticClass:"subfield"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.customQuestion,expression:"customQuestion"}],staticClass:"input",attrs:{type:"text",disabled:e.selectedQuestionIndex>-1},domProps:{value:e.customQuestion},on:{input:function(t){t.target.composing||(e.customQuestion=t.target.value)}}})])],1)],2),e.newSurvey?t("div",{staticClass:"userfeedback-onboarding-preview"},[t("user-feedback-widget",{attrs:{"use-survey":e.newSurvey,"hide-logo":e.addLogo,"is-preview":""}})],1):e._e(),t("div",{staticClass:"field"},[t("br"),t("checkbox",{model:{value:e.addLogo,callback:function(t){e.addLogo=t},expression:"addLogo"}},[e._v(e._s(e.texts.addUFLogo))])],1)])])},C=[],T=s("cd4d"),U=s("9849"),F=s("d4a7"),N={name:"OnboardingStepFirstSurvey",components:{Radio:T["default"],Checkbox:U["default"],UserFeedbackWidget:F["a"]},data(){return{selectedQuestionIndex:0,customQuestion:""}},computed:{...Object(c["e"])("onboarding",["newSurvey","currentStepIndex","addUFLogoToSurveys"]),addLogo:{get(){return this.addUFLogoToSurveys},set(e){this.setAddUFLogo(e)}},selectedQuestionTitle(){return this.selectedQuestionIndex>-1?this.predefinedQuestions[this.selectedQuestionIndex]:this.customQuestion},predefinedQuestions(){return[Object(r["a"])("What do you like about this page?",this.$textDomain),Object(r["a"])("What would make this website better?",this.$textDomain),Object(r["a"])("Did you find the information you were looking for on this page? ",this.$textDomain)]},texts(){return{title:Object(r["a"])("Build your first UserFeedback survey",this.$textDomain),intro:Object(r["a"])("You can easily change or customize these settings later.",this.$textDomain),blockTitle:Object(r["a"])("What question do you want to ask your website visitors?",this.$textDomain),createYourOwn:Object(r["a"])("Create your own",this.$textDomain),addUFLogo:Object(r["a"])("Add the UserFeedback logo to my surveys.",this.$textDomain)}}},methods:{...Object(c["d"])("onboarding",["createSurvey","updateSurvey","setAddUFLogo"]),updateWidgetQuestionTitle(e){if(!this.newSurvey||!this.newSurvey.questions.length)return;const t={...this.newSurvey};t.questions[0].title=e,this.updateSurvey(t)}},beforeMount(){if(!this.newSurvey)return this.createSurvey({title:Object(r["a"])("First Survey",this.$textDomain),status:"publish",notifications:{email:{addresses:this.$uf.admin_email}}}),void this.updateWidgetQuestionTitle(this.selectedQuestionTitle);const{questions:e,settings:{theming:t}}=this.newSurvey,s=this.predefinedQuestions.findIndex(t=>t===e[0].title);this.selectedQuestionIndex=s,-1===s&&(this.customQuestion=e[0].title),this.addUFLogo=t.show_logo},watch:{selectedQuestionTitle(e){this.updateWidgetQuestionTitle(e)}}},A=N,Q=Object(m["a"])(A,D,C,!1,null,null,null),E=Q.exports,W=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userfeedback-onboarding-step"},[t("header",{staticClass:"userfeedback-onboarding-step__header"},[t("h1",{staticClass:"title"},[e._v(e._s(e.texts.title))]),t("p",[e._v(e._s(e.texts.intro))])]),t("section",{staticClass:"userfeedback-onboarding-step__block"},e._l(e.features,(function(s,n){return t("article",{key:n,staticClass:"userfeedback-onboarding-feature"},[t("div",{staticClass:"userfeedback-onboarding-feature__content"},[t("p",{staticClass:"userfeedback-onboarding-feature__title"},[t("span",[e._v(e._s(s.title))]),s.isPro?t("span",{staticClass:"feature-tag"},[e._v(e._s(e.texts.pro))]):e._e()]),t("p",[e._v(e._s(s.description))]),s.checked&&s.installText?t("p",{staticClass:"userfeedback-onboarding-feature__install-text"},[e._v(" "+e._s(s.disabled?s.installedText:s.installText)+" ")]):e._e()]),t("label",{staticClass:"feature-indicator",class:{"is-default":s.installedByDefault}},[t("input",{attrs:{type:"checkbox",disabled:s.disabled||s.installedByDefault},domProps:{checked:s.checked},on:{change:t=>{e.onRadioToggle(t,s)}}}),t("span",{staticClass:"feature-indicator__skin"},[t("span",{directives:[{name:"icon",rawName:"v-icon:check",arg:"check"}]})])])])})),0)])},B=[],L={name:"OnboardingStepFeatures",computed:{...Object(c["e"])("onboarding",["enableNotifications","installAioseo","installUncanny"]),features(){return[{title:Object(r["a"])("UserFeedback Widget",this.$textDomain),description:Object(r["a"])("Create an unlimited number of widgets anywhere on your website.",this.$textDomain),installedByDefault:!0,checked:!0,isPro:!1},{title:Object(r["a"])("Responses and Reporting",this.$textDomain),description:Object(r["a"])("View responses in realtime and track feedback trends.",this.$textDomain),installedByDefault:!0,checked:!0,isPro:!1},{title:Object(r["a"])("Google Analytics Integration",this.$textDomain),description:Object(r["a"])("Easily segment and track which users are responding to your questions with automatic analytics event tracking.",this.$textDomain),installedByDefault:!0,checked:!0,isPro:!1},{title:Object(r["a"])("Email Notifications",this.$textDomain),description:Object(r["a"])("Ensure you receive feedback instantly with proper email setup and configured from your website.",this.$textDomain),isPro:!1,onToggle:e=>{this.setNotificationsActive(e)},checked:this.enableNotifications||this.isSmtpInstalled,disabled:this.isSmtpInstalled,installText:Object(r["a"])("Installs WP Mail SMTP",this.$textDomain),installedText:Object(r["a"])("WP Mail SMTP is already installed",this.$textDomain)},{title:Object(r["a"])("All In One SEO Toolkit",this.$textDomain),description:Object(r["a"])("The best WordPress SEO plugin that works with MonsterInsights to boost your rankings.",this.$textDomain),isPro:!1,onToggle:e=>{this.setInstallAioseo(e)},checked:this.installAioseo||this.isAioseoInstalled,disabled:this.isAioseoInstalled,installText:Object(r["a"])("Installs All In One SEO Toolkit",this.$textDomain),installedText:Object(r["a"])("All In One SEO Toolkit is already installed",this.$textDomain)},{title:Object(r["a"])("Survey Feedback Automations",this.$textDomain),description:Object(r["a"])("Uncanny Automator is the best free no-code way to send your UserFeedback responses to anywhere like Google Sheets, Zapier, HubSpot, and more.",this.$textDomain),isPro:!1,onToggle:e=>{this.setInstallUncanny(e)},checked:this.installUncanny||this.isUncannyInstalled,disabled:this.isUncannyInstalled,installText:Object(r["a"])("Installs Uncanny Automator",this.$textDomain),installedText:Object(r["a"])("Uncanny Automator is already installed",this.$textDomain)},{title:Object(r["a"])("Customizable Widget",this.$textDomain),description:Object(r["a"])("Tweak the UserFeedback widget to match the look and feel of your website with custom colors and branding.",this.$textDomain),checked:!1,isPro:!0},{title:Object(r["a"])("Additional Question Types",this.$textDomain),description:Object(r["a"])("Use stars, NPS, Comment Boxes, and make certain questions required in your UserFeedback widgets to increase the quality of feedback you receive.",this.$textDomain),checked:!1,isPro:!0},{title:Object(r["a"])("Feedback Export and Full History",this.$textDomain),description:Object(r["a"])("Analyze your responses over time and export them into a spreadsheet for in-depth analysis and decision making.",this.$textDomain),checked:!1,isPro:!0},{title:Object(r["a"])("Advanced Page-Level Targeting",this.$textDomain),description:Object(r["a"])("Show UserFeedback questions only on certain pages, or if a user has been on the page for a certain amount of time or is using a particular device.",this.$textDomain),checked:!1,isPro:!0},{title:Object(r["a"])("20+ Templates",this.$textDomain),description:Object(r["a"])("Get up and running in seconds with premade feedback templates for all types of websites including eCommerce stores, B2B websites, membership sites, customer service, and more.",this.$textDomain),checked:!1,isPro:!0}]},texts(){return{title:Object(r["a"])("Which UserFeedback features would you like to enable?",this.$textDomain),intro:Object(r["a"])("We’ve already selected our recommended features. ",this.$textDomain),pro:Object(r["a"])("Pro",this.$textDomain)}},isSmtpInstalled(){return this.$uf.integrations["wp-mail-smtp"]&&this.$uf.integrations["wp-mail-smtp"].is_installed},isAioseoInstalled(){return this.$uf.integrations["all-in-one-seo-pack"]&&this.$uf.integrations["all-in-one-seo-pack"].is_installed},isUncannyInstalled(){return this.$uf.integrations["uncanny-automator"]&&this.$uf.integrations["uncanny-automator"].is_installed}},methods:{...Object(c["d"])("onboarding",["setNotificationsActive","setInstallAioseo","setInstallUncanny"]),onRadioToggle(e,t){t.hasOwnProperty("onToggle")&&"function"===typeof t.onToggle&&t.onToggle(e.target.checked)}}},R=L,M=Object(m["a"])(R,W,B,!1,null,null,null),q=M.exports,H=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userfeedback-onboarding-step"},[t("header",{staticClass:"userfeedback-onboarding-step__header"},[t("h1",{staticClass:"title"},[e._v(e._s(e.texts.title))]),t("p",[e._v(e._s(e.texts.intro))])]),t("section",{staticClass:"userfeedback-onboarding-step__block"},[t("div",{staticClass:"field"},[t("label",{staticClass:"title",attrs:{for:"email"}},[e._v(e._s(e.texts.intro))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"text",id:"email",placeholder:e.texts.inputPlaceholder},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),t("div",{staticClass:"field"},[t("checkbox",{attrs:{id:"newsletter_opt_in",name:"newsletter_opt_in"},model:{value:e.commsOptIn,callback:function(t){e.commsOptIn=t},expression:"commsOptIn"}},[e._v(e._s(e.texts.commsOptIn))])],1),t("div",{staticClass:"field"},[t("checkbox",{attrs:{id:"allow_usage_tracking",name:"allow_usage_tracking"},scopedSlots:e._u([{key:"after-label",fn:function(){return[t("user-feedback-icon-tooltip",{attrs:{content:e.texts.allowUsageDocHelp}})]},proxy:!0}]),model:{value:e.trackOptIn,callback:function(t){e.trackOptIn=t},expression:"trackOptIn"}},[e._v(" "+e._s(e.texts.trackingOptIn)+" ")])],1)])])},z=[],G=s("008f"),V={name:"OnboardingStepNotifications",components:{Checkbox:U["default"],UserFeedbackIconTooltip:G["a"]},computed:{...Object(c["e"])({adminEmail:e=>e.$uf.admin_email}),...Object(c["e"])("onboarding",["emailForNotifications","newsletterOptIn","trackingOptIn"]),email:{get(){return this.emailForNotifications},set(e){this.updateEmailForNotifications(e)}},commsOptIn:{get(){return this.newsletterOptIn},set(e){this.setNewsletterOptIn(e)}},trackOptIn:{get(){return this.trackingOptIn},set(e){this.setTrackingOptIn(e)}},texts(){return{title:Object(r["a"])("Customize your notifications",this.$textDomain),intro:Object(r["a"])("Where should we send UserFeedback answers?",this.$textDomain),inputPlaceholder:Object(r["a"])("email@example.com",this.$textDomain),commsOptIn:Object(r["a"])("I agree to receive important communications from UserFeedback",this.$textDomain),trackingOptIn:Object(r["a"])("Help us better understand our users and their website needs",this.$textDomain),allowUsageDocHelp:Object(r["d"])(Object(r["a"])("By allowing us to track usage data we can better help you because we know which WordPress configurations, themes, and plugins we should test. Complete documentation is available %shere%s.",this.$textDomain),`<a target="_blank" rel="noopener" href="${this.$getUrl("settings-panel","usage-tracking","https://www.userfeedback.com/docs/usage-tracking/")}">`,"</a>")}}},methods:{...Object(c["d"])("onboarding",["updateEmailForNotifications","setNewsletterOptIn","setTrackingOptIn"])},beforeMount(){this.email=this.adminEmail}},Y=V,J=Object(m["a"])(Y,H,z,!1,null,null,null),Z=J.exports,K=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userfeedback-onboarding-step"},[t("header",{staticClass:"userfeedback-onboarding-step__header"},[t("h1",{staticClass:"title"},[e._v(e._s(e.texts.title))])]),t("section",{staticClass:"userfeedback-onboarding-step__block"},e._l(e.installItems,(function(s,n){return t("user-feedback-install-item",{key:n,attrs:{skip:s.skip,"is-pro":s.isPro,faux:!s.hasOwnProperty("action"),action:s.action},on:{"plugin-install-error":e.onPluginInstallError}},[e._v(" "+e._s(s.content)+" ")])})),1),e.$uf.is_pro?e._e():t("section",{staticClass:"userfeedback-onboarding-step__block"},[t("div",{staticClass:"userfeedback-upsell-box"},[t("h2",{staticClass:"title",domProps:{innerHTML:e._s(e.texts.upsellBoxTitle)}}),t("p",[e._v(e._s(e.texts.upsellBoxIntro))]),t("ul",{staticClass:"unstyled-list"},e._l(e.texts.upsellChecklist,(function(s,n){return t("li",{key:n},[t("span",{directives:[{name:"icon",rawName:"v-icon:check",arg:"check"}]}),t("span",[e._v(e._s(s))])])})),0),t("a",{staticClass:"button user-feedback-button is-large",attrs:{href:e.$getUpgradeUrl("onboarding","upgrade-button"),target:"_blank",rel:"noopener"}},[e._v(e._s(e.texts.upsellCTA))])])])])},X=[],ee=function(){var e=this,t=e._self._c;return t("article",{staticClass:"userfeedback-feature-install"},[t("div",{staticClass:"userfeedback-feature-install__name"},[e._t("default")],2),t("div",{staticClass:"userfeedback-feature-install__status"},[!e.$uf.is_pro&&e.isPro?[e.isPro?t("span",{staticClass:"feature-tag"},[e._v(e._s(e.texts.pro))]):e._e()]:e.skip?[t("span",{staticClass:"userfeedback-feature-install__status-installing"},[t("small",[t("i",[e._v(e._s(e.texts.skipped))])])])]:[e.isComplete?t("span",{staticClass:"userfeedback-feature-install__status-success"},[t("span",[e._v(e._s(e.texts.successful))]),t("span",{directives:[{name:"icon",rawName:"v-icon:check",arg:"check"}]})]):e.isErrored?t("span",{staticClass:"userfeedback-feature-install__status-error"},[t("span",[e._v(e._s(e.texts.errored))]),t("span",{directives:[{name:"icon",rawName:"v-icon:close",arg:"close"}]})]):t("span",{staticClass:"userfeedback-feature-install__status-installing"},[t("span",[e._v(e._s(e.texts.installing))]),t("span",{staticClass:"userfeedback-loader is-inline"})])]],2)])},te=[],se=s("1268"),ne={name:"UserFeedbackInstallItem",props:{action:{type:Function},faux:{type:Boolean,default:!0},isPro:{type:Boolean,default:!1},skip:{type:Boolean,default:!1}},data(){return{isComplete:!1,isErrored:!1}},computed:{texts(){return{successful:Object(r["a"])("Successful",this.$textDomain),installing:Object(r["a"])("Installing...",this.$textDomain),errored:Object(r["a"])("Error...",this.$textDomain),skipped:Object(r["a"])("Skipped",this.$textDomain),pro:Object(r["a"])("Pro",this.$textDomain)}},delay(){return Object(se["b"])(500,2e3)}},mounted(){this.skip||(this.faux?setTimeout(()=>{this.isComplete=!0},this.delay):this.action&&"function"===typeof this.action&&this.action().then(()=>{this.isComplete=!0}).catch(()=>{this.isErrored=!0,this.$emit("plugin-install-error")}))}},ie=ne,ae=Object(m["a"])(ie,ee,te,!1,null,null,null),oe=ae.exports,le={name:"OnboardingStepInstallComplete",components:{UserFeedbackInstallItem:oe},computed:{...Object(c["e"])("onboarding",["enableNotifications","installAioseo","installUncanny","promisesResolved"]),installItems(){return[{content:Object(r["a"])("UserFeedback Widget",this.$textDomain),action:this.saveNotificationSettings},{content:Object(r["a"])("Responses and Reporting",this.$textDomain)},{content:Object(r["a"])("Google Analytics Integration",this.$textDomain)},{content:Object(r["a"])("Email notifications integration",this.$textDomain),skip:!this.enableNotifications,action:this.installWPSmtpPlugin},{content:Object(r["a"])("All In One SEO Toolkit",this.$textDomain),skip:!this.installAioseo,action:this.installAioseoPlugin},{content:Object(r["a"])("Survey Feedback Automations",this.$textDomain),skip:!this.installUncanny,action:this.installUncannyPlugin},{content:Object(r["a"])("Customizable Widget",this.$textDomain),isPro:!0},{content:Object(r["a"])("Additional Question Types",this.$textDomain),isPro:!0},{content:Object(r["a"])("Feedback Export and Full History",this.$textDomain),isPro:!0},{content:Object(r["a"])("Advanced Page-Level Targeting",this.$textDomain),isPro:!0},{content:Object(r["a"])("20+ Templates",this.$textDomain),isPro:!0}]},texts(){return{title:Object(r["a"])("Great! UserFeedback is almost ready to start ",this.$textDomain),upsellBoxTitle:Object(r["d"])(Object(r["a"])("%sUpgrade Now%s to Unlock These Extra Features!",this.$textDomain),`<span class="styled-underline" style="background-image: url('${this.$uf.assets}/img/onboarding/underline.png')">`,"</span>"),upsellBoxIntro:Object(r["a"])("To unlock your selected features, upgrade to UserFeedback Pro",this.$textDomain),upsellChecklist:[Object(r["a"])("Additional Question Types",this.$textDomain),Object(r["a"])("Customized notifications and confirmations",this.$textDomain),Object(r["a"])("Advanced Page and Device Targeting",this.$textDomain),Object(r["a"])("More Question Templates",this.$textDomain),Object(r["a"])("View all responses and export to CSV",this.$textDomain)],upsellCTA:Object(r["a"])("Upgrade Now & Save 50% →",this.$textDomain)}}},methods:{...Object(c["b"])("onboarding",["saveNotificationSettings","installWPSmtpPlugin","installAioseoPlugin","installUncannyPlugin"]),...Object(c["d"])("onboarding",["completeInstallingPlugins"]),onPluginInstallError(){this.completeInstallingPlugins()}}},re=le,ce=Object(m["a"])(re,K,X,!1,null,null,null),ue=ce.exports,de=s("4279");const pe=()=>Object(de["a"])({action:"userfeedback_vue_onboarding_complete"}),be=e=>Object(de["a"])({action:"userfeedback_vue_onboarding_drip_opt_in",email:e}),ge=e=>Object(de["a"])({action:"userfeedback_vue_onboarding_step",step:e});var me={name:"UserFeedbackOnboarding",components:{UserFeedbackOnboardingProgress:f,UserFeedbackOnboardingNav:y,OnboardingStepWelcome:I,OnboardingStepFirstSurvey:E,OnboardingStepFeatures:q,OnboardingStepNotifications:Z,OnboardingStepInstallComplete:ue},computed:{...Object(c["e"])("onboarding",["currentStepIndex","steps","enableNotifications","installAioseo","installUncanny","promisesResolved","installingPlugins"]),...Object(c["c"])("onboarding",["currentStep","totalSteps"]),texts(){return{stepCount:Object(r["d"])(Object(r["a"])("Step %s of %s",this.$textDomain),this.currentStepIndex+1,this.totalSteps),exit:Object(r["a"])("Exit Setup",this.$textDomain),wait:Object(r["a"])("Please wait",this.$textDomain),installText:Object(r["a"])("This will install: ",this.$textDomain)}},showPluginsText(){const e=[];return!this.enableNotifications||this.$uf.integrations["wp-mail-smtp"]&&this.$uf.integrations["wp-mail-smtp"].is_installed||e.push(Object(r["a"])("WP Mail SMTP",this.$textDomain)),this.installAioseo&&!this.isPluginInstalled("all-in-one-seo-pack")&&e.push(Object(r["a"])("All In One SEO Toolkit",this.$textDomain)),this.installUncanny&&!this.isPluginInstalled("uncanny-automator")&&e.push(Object(r["a"])("Uncanny Automator",this.$textDomain)),e}},watch:{currentStep:{handler:function(e){ge(e.key)},deep:!0,immediate:!0}},methods:{exitOnboarding(){location.replace(Object(u["a"])("surveys"))},isPluginInstalled(e){return!!this.$uf.integrations[e]&&this.$uf.integrations[e].is_installed}}},he=me,fe=Object(m["a"])(he,o,l,!1,null,null,null),xe=fe.exports,ke=s("bf14"),ve=s("0b5f"),Oe=s("0792"),_e=s("7c9b"),ye=s("5464"),je=s("ab89");const we={namespaced:!0,state:()=>({newSurvey:null,enableNotifications:!0,emailForNotifications:"",installAioseo:!0,installUncanny:!0,newsletterOptIn:!0,trackingOptIn:!1,addUFLogoToSurveys:!1,featurePromises:[],promisesResolved:!0,installingPlugins:[],steps:[{key:"welcome"},{key:"first-survey",label:Object(r["a"])("First Survey",n["a"].prototype.$textDomain)},{key:"features",label:Object(r["a"])("Features",n["a"].prototype.$textDomain)},{key:"notifications",label:Object(r["a"])("Notifications",n["a"].prototype.$textDomain)},{key:"install-complete",label:Object(r["a"])("Publish",n["a"].prototype.$textDomain)}],currentStepIndex:0}),getters:{currentStep(e){return e.steps[e.currentStepIndex]},totalSteps(e){const{steps:t}=e;return t.length},nextStep(e){return e.steps[e.currentStepIndex+1]},canContinue(e,t){return!("notifications"===t.currentStep.key&&!Object(ye["a"])(e.emailForNotifications,!1))},canExitToDashboard(e){return e.promisesResolved&&0===e.installingPlugins.length}},mutations:{setNotificationsActive(e,t){e.enableNotifications=t},setAddUFLogo(e,t){e.addUFLogoToSurveys=t},updateEmailForNotifications(e,t){e.emailForNotifications=t},setNewsletterOptIn(e,t){e.newsletterOptIn=t},setTrackingOptIn(e,t){e.trackingOptIn=t},setInstallAioseo(e,t){e.installAioseo=t},setInstallUncanny(e,t){e.installUncanny=t},createSurvey(e,t={}){const s=Object(_e["a"])(Object(ke["b"])(),t),n=Object(ve["a"])("long-text");s.questions.push(n),e.newSurvey=s},updateSurvey(e,t){e.newSurvey=t},goBack(e,t=1){0!==e.currentStepIndex&&(e.currentStepIndex=e.currentStepIndex-t,window.scrollTo({left:0,top:0,behavior:"smooth"}))},advance(e,t=1){e.currentStepIndex!==e.steps.length-1&&(e.currentStepIndex=e.currentStepIndex+t,window.scrollTo({left:0,top:0,behavior:"smooth"}))},setInstallingPlugins(e,t){e.installingPlugins=t},addFeaturePromises(e,t){Array.isArray(t)||(t=[t]),e.featurePromises=[...e.featurePromises,...t],e.promisesResolved=!1,Promise.all(e.featurePromises).finally(()=>{e.promisesResolved=!0})}},actions:{goBack({state:e,getters:t,commit:s}){s("goBack")},completeInstallingPlugins(e,t,s){s("setInstallingPlugins",[])},advance({state:e,getters:t,commit:s}){"first-survey"===t.currentStep.key&&Object(Oe["i"])(e.newSurvey).then(e=>{s("updateSurvey",e)}),s("advance")},saveNotificationSettings({state:e,commit:t}){const s=e.newSurvey;if(!s.title)return;s.notifications.email.addresses=e.emailForNotifications;const n=[Object(je["g"])({notifications_recipients:e.emailForNotifications,widget_show_logo:e.addUFLogoToSurveys,allow_usage_tracking:e.trackingOptIn}),Object(Oe["i"])(s)];return e.newsletterOptIn&&n.push(be(e.emailForNotifications)),t("addFeaturePromises",n),Promise.all(n)},installWPSmtpPlugin({state:e,commit:t}){if(e.installingPlugins.push("wp-mail-smtp"),e.enableNotifications){if(!n["a"].prototype.$uf.integrations["wp-mail-smtp"].is_installed)return Object(je["f"])({slug:"wp-mail-smtp"},!0).then(t=>{if(t.success){const t=n["a"].prototype.$uf.integrations;return Object(je["a"])({basename:t["wp-mail-smtp"].basename}).then(()=>{const t=e.installingPlugins.indexOf("wp-mail-smtp");t>-1&&e.installingPlugins.splice(t,1)})}{const t=e.installingPlugins.indexOf("wp-mail-smtp");t>-1&&e.installingPlugins.splice(t,1)}}).finally(()=>{const t=e.installingPlugins.indexOf("wp-mail-smtp");t>-1&&e.installingPlugins.splice(t,1)});{const t=e.installingPlugins.indexOf("wp-mail-smtp");t>-1&&e.installingPlugins.splice(t,1)}}return!0},installAioseoPlugin({state:e,commit:t}){if(e.installingPlugins.push("all-in-one-seo-pack"),e.installAioseo){if(!n["a"].prototype.$uf.integrations["all-in-one-seo-pack"].is_installed)return Object(je["f"])({slug:"all-in-one-seo-pack"},!0).then(t=>{if(t.success){const t=n["a"].prototype.$uf.integrations;return Object(je["a"])({basename:t["all-in-one-seo-pack"].basename}).then(()=>{const t=e.installingPlugins.indexOf("all-in-one-seo-pack");t>-1&&e.installingPlugins.splice(t,1)})}{const t=e.installingPlugins.indexOf("all-in-one-seo-pack");t>-1&&e.installingPlugins.splice(t,1)}}).finally(()=>{const t=e.installingPlugins.indexOf("all-in-one-seo-pack");t>-1&&e.installingPlugins.splice(t,1)});{const t=e.installingPlugins.indexOf("all-in-one-seo-pack");t>-1&&e.installingPlugins.splice(t,1)}}return!0},installUncannyPlugin({state:e,commit:t}){if(e.installingPlugins.push("uncanny-automator"),e.installUncanny){if(!n["a"].prototype.$uf.integrations["uncanny-automator"].is_installed)return Object(je["f"])({slug:"uncanny-automator"},!0).then(t=>{if(t.success){const t=n["a"].prototype.$uf.integrations;return Object(je["a"])({basename:t["uncanny-automator"].basename}).then(()=>{const t=e.installingPlugins.indexOf("uncanny-automator");t>-1&&e.installingPlugins.splice(t,1)})}{const t=e.installingPlugins.indexOf("uncanny-automator");t>-1&&e.installingPlugins.splice(t,1)}}).finally(()=>{const t=e.installingPlugins.indexOf("uncanny-automator");t>-1&&e.installingPlugins.splice(t,1)});{const t=e.installingPlugins.indexOf("uncanny-automator");t>-1&&e.installingPlugins.splice(t,1)}}return!0},async completeOnboarding(){await pe(),location.replace(Object(u["a"])("surveys"))}}};var Pe=s("6b96");n["a"].use(c["a"]);const $e=new c["a"].Store({modules:{onboarding:we,widget:Pe["a"]}});(()=>{const e=document.getElementById("userfeedback-onboarding");e&&(n["a"].use(i["a"],{themes:{uf:{$extend:"tooltip",autoHide:!0,hideTriggers:["click"]}}}),n["a"].use(a["a"],{store:$e}),new n["a"]({store:$e,render:e=>e(xe)}).$mount(e))})()}});