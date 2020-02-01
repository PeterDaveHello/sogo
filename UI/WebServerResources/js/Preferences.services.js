!function(){"use strict";function d(){var e,a,t,r=this;if(this.defaults={},this.settings={Mail:{}},e=d.$document[0].getElementById("UserDefaults")){try{t=angular.fromJson(e.textContent||e.innerHTML)}catch(e){d.$log.error("Can't parse user's defaults: "+e.message),t={}}t.SOGoMailLabelsColorsKeys=[],t.SOGoMailLabelsColorsValues=[],_.forEach(t.SOGoMailLabelsColors,function(e,a){t.SOGoMailLabelsColorsKeys.push(a),t.SOGoMailLabelsColorsValues.push(e),"$"==a.charAt(0)&&(Object.defineProperty(t.SOGoMailLabelsColors,"_"+a,Object.getOwnPropertyDescriptor(t.SOGoMailLabelsColors,a)),delete t.SOGoMailLabelsColors[a])}),_.forEach(t.SOGoSieveFilters,function(e){_.forEach(e.actions,function(e){"addflag"==e.method&&"$"==e.argument.charAt(0)&&(e.argument="_"+e.argument)})}),t.SOGoRememberLastModule&&(t.SOGoLoginModule="Last"),t.SOGoMailAutoSave=parseInt(t.SOGoMailAutoSave)||0,t.SOGoMailComposeWindowEnabled=angular.isDefined(t.SOGoMailComposeWindow),t.SOGoMailComposeFontSizeEnabled=0<parseInt(t.SOGoMailComposeFontSize),window.CKEDITOR&&t.SOGoMailComposeFontSizeEnabled&&(window.CKEDITOR.config.fontSize_defaultLabel=t.SOGoMailComposeFontSize,window.CKEDITOR.addCss(".cke_editable { font-size: "+t.SOGoMailComposeFontSize+"px; }")),_.forEach(t.AuxiliaryMailAccounts,function(e){isNaN(parseInt(e.port))&&(e.port=null)}),t.Vacation?(t.Vacation.startDate?t.Vacation.startDate=new Date(1e3*parseInt(t.Vacation.startDate)):(t.Vacation.startDateEnabled=0,t.Vacation.startDate=new Date,t.Vacation.startDate=t.Vacation.startDate.beginOfDay(),t.Vacation.startDate.addDays(1)),t.Vacation.endDate?t.Vacation.endDate=new Date(1e3*parseInt(t.Vacation.endDate)):(t.Vacation.endDateEnabled=0,t.Vacation.endDate=new Date(t.Vacation.startDate.getTime()),t.Vacation.endDate.addDays(1)),t.Vacation.autoReplyEmailAddresses&&angular.isArray(t.Vacation.autoReplyEmailAddresses)&&t.Vacation.autoReplyEmailAddresses.length?t.Vacation.autoReplyEmailAddresses=t.Vacation.autoReplyEmailAddresses.join(","):delete t.Vacation.autoReplyEmailAddresses):t.Vacation={},angular.isUndefined(t.Vacation.autoReplyEmailAddresses)&&angular.isDefined(window.defaultEmailAddresses)&&(t.Vacation.autoReplyEmailAddresses=window.defaultEmailAddresses),angular.isUndefined(t.Vacation.daysBetweenResponse)&&(t.Vacation.daysBetweenResponse=7),angular.isUndefined(t.Vacation.startDate)&&(t.Vacation.startDateEnabled=0,t.Vacation.startDate=new Date),angular.isUndefined(t.Vacation.endDate)&&(t.Vacation.endDateEnabled=0,t.Vacation.endDate=new Date),t.Forward&&t.Forward.forwardAddress&&angular.isArray(t.Forward.forwardAddress)&&(t.Forward.forwardAddress=t.Forward.forwardAddress.join(",")),angular.isUndefined(t.SOGoCalendarCategories)&&(t.SOGoCalendarCategories=[]),t.SOGoCalendarCategoriesColorsValues=[],_.forEach(t.SOGoCalendarCategories,function(e){t.SOGoCalendarCategoriesColorsValues.push(t.SOGoCalendarCategoriesColors[e])}),angular.isUndefined(t.SOGoContactsCategories)?t.SOGoContactsCategories=[]:t.SOGoContactsCategories=_.compact(t.SOGoContactsCategories),angular.extend(r.defaults,t),r.$mdDateLocaleProvider=d.$mdDateLocaleProvider,angular.extend(r.$mdDateLocaleProvider,t.locale),angular.extend(r.$mdDateLocaleProvider,{firstDayOfWeek:t.SOGoFirstDayOfWeek,firstWeekOfYear:t.SOGoFirstWeekOfYear}),r.$mdDateLocaleProvider.firstDayOfWeek=parseInt(t.SOGoFirstDayOfWeek),r.$mdDateLocaleProvider.weekNumberFormatter=function(e){return l("Week %d",e)},r.$mdDateLocaleProvider.msgCalendar=l("Calendar"),r.$mdDateLocaleProvider.msgOpenCalendar=l("Open Calendar"),r.$mdDateLocaleProvider.parseDate=function(e){return e?e.parseDate(r.$mdDateLocaleProvider,r.defaults.SOGoShortDateFormat):new Date(NaN)},r.$mdDateLocaleProvider.formatDate=function(e){return e?e.format(r.$mdDateLocaleProvider,e.$dateFormat||r.defaults.SOGoShortDateFormat):""},r.$mdDateLocaleProvider.parseTime=function(e){return e?e.parseDate(r.$mdDateLocaleProvider,r.defaults.SOGoTimeFormat):new Date(NaN)},r.$mdDateLocaleProvider.formatTime=function(e){return e?e.format(r.$mdDateLocaleProvider,r.defaults.SOGoTimeFormat):""},r.$mdDateLocaleProvider.isDateComplete=function(e){e=e.trim();return/^((([a-zA-Z]|[^\x00-\x7F]){2,}|[0-9]{1,4})([ .,]+|[/-])){2}(([a-zA-Z]|[^\x00-\x7F]){3,}|[0-9]{1,4})$/.test(e)}}if(a=d.$document[0].getElementById("UserSettings")){try{t=angular.fromJson(a.textContent||a.innerHTML)}catch(e){d.$log.error("Can't parse user's settings: "+e.message),t={}}t.Calendar&&(t.Calendar.PreventInvitationsWhitelist?t.Calendar.PreventInvitationsWhitelist=_.map(t.Calendar.PreventInvitationsWhitelist,function(e,a){var t=/^(.+)\s<(\S+)>$/.exec(e),o=new d.$User({uid:a,cn:t[1],c_email:t[2]});return o.$$image||(o.$$image=r.avatar(o.c_email,32,{no_404:!0})),o}):t.Calendar.PreventInvitationsWhitelist=[]),angular.extend(r.settings,t)}}d.$factory=["$document","$q","$timeout","$log","$mdDateLocale","sgSettings","Gravatar","Resource","User",function(e,a,t,o,r,s,n,i,l){return angular.extend(d,{$document:e,$q:a,$timeout:t,$log:o,$mdDateLocaleProvider:r,$gravatar:n,$$resource:new i(s.activeUser("folderURL"),s.activeUser()),$resourcesURL:s.resourcesURL(),$User:l}),new d}];try{angular.module("SOGo.PreferencesUI")}catch(e){angular.module("SOGo.PreferencesUI",["SOGo.Common"])}angular.module("SOGo.PreferencesUI").factory("Preferences",d.$factory),d.prototype.ready=function(){return d.$log.warn("Preferences.ready is deprecated -- access settings/defaults directly."),d.$q.when(!0)},d.prototype.avatar=function(e,a,t){var o,r=this.defaults.SOGoAlternateAvatar;return o=this.defaults.SOGoGravatarEnabled?d.$gravatar(e,a,r,t):[d.$resourcesURL,"img","ic_person_grey_24px.svg"].join("/"),t&&t.dstObject&&t.dstAttr&&(t.dstObject[t.dstAttr]=o),o},d.prototype.hasActiveExternalSieveScripts=function(e){var a=this;if(void 0!==e)this.defaults.hasActiveExternalSieveScripts=e;else{if(void 0!==this.defaults.hasActiveExternalSieveScripts)return this.defaults.hasActiveExternalSieveScripts;this.defaults.hasActiveExternalSieveScripts=!1,d.$$resource.quietFetch("activeExternalSieveScripts").then(function(){a.defaults.hasActiveExternalSieveScripts=!0},function(e){if(a.defaults.hasActiveExternalSieveScripts=!1,404===e.status)return d.$q.resolve(!0)})}},d.prototype.$save=function(){return d.$$resource.save("Preferences",this.$omit(!0)).then(function(e){return e})},d.prototype.$omit=function(t){var o,a;return o={},a={},angular.forEach(this,function(e,a){"constructor"!=a&&"$"!=a[0]&&(o[a]=t?angular.copy(e):e)}),o.defaults.SOGoMailLabelsColors={},_.forEach(o.defaults.SOGoMailLabelsColorsKeys,function(e,a){o.defaults.SOGoMailLabelsColors[e]=o.defaults.SOGoMailLabelsColorsValues[a]}),delete o.defaults.SOGoMailLabelsColorsKeys,delete o.defaults.SOGoMailLabelsColorsValues,_.forEach(o.defaults.SOGoSieveFilters,function(e){_.forEach(e.actions,function(e){"addflag"==e.method&&"_"==e.argument.charAt(0)&&"$"==e.argument.charAt(1)&&(e.argument=e.argument.substring(1))})}),o.defaults.SOGoMailComposeWindowEnabled||delete o.defaults.SOGoMailComposeWindow,delete o.defaults.SOGoMailComposeWindowEnabled,o.defaults.SOGoMailComposeFontSizeEnabled||(o.defaults.SOGoMailComposeFontSize=0),delete o.defaults.SOGoMailComposeFontSizeEnabled,o.defaults.Vacation&&(o.defaults.Vacation.startDateEnabled?o.defaults.Vacation.startDate=o.defaults.Vacation.startDate.getTime()/1e3:(delete o.defaults.Vacation.startDateEnabled,o.defaults.Vacation.startDate=0),o.defaults.Vacation.endDateEnabled?o.defaults.Vacation.endDate=o.defaults.Vacation.endDate.getTime()/1e3:(delete o.defaults.Vacation.endDateEnabled,o.defaults.Vacation.endDate=0),o.defaults.Vacation.autoReplyEmailAddresses?o.defaults.Vacation.autoReplyEmailAddresses=_.filter(o.defaults.Vacation.autoReplyEmailAddresses.split(","),function(e){return e.length}):o.defaults.Vacation.autoReplyEmailAddresses=[]),o.defaults.Forward&&o.defaults.Forward.forwardAddress&&(o.defaults.Forward.forwardAddress=o.defaults.Forward.forwardAddress.split(",")),o.defaults.SOGoCalendarCategoriesColors={},_.forEach(o.defaults.SOGoCalendarCategories,function(e,a){o.defaults.SOGoCalendarCategoriesColors[e]=o.defaults.SOGoCalendarCategoriesColorsValues[a]}),delete o.defaults.SOGoCalendarCategoriesColorsValues,o.settings.Calendar&&o.settings.Calendar.PreventInvitationsWhitelist&&(_.forEach(o.settings.Calendar.PreventInvitationsWhitelist,function(e){a[e.uid]=e.$shortFormat()}),o.settings.Calendar.PreventInvitationsWhitelist=a),o}}();
//# sourceMappingURL=Preferences.services.js.map