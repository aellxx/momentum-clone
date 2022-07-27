(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var Z3a=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.AXa)("0",Math.max(0,b-c))+a},$3a=function(){return{F:"svg",
T:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},S:[{F:"path",T:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},a4a=function(){return{F:"svg",
T:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},S:[{F:"path",T:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},c4a=function(a){"number"===typeof a?(this.date=b4a(a,0,1),C6(this,1)):g.Ma(a)?(this.date=b4a(a.getFullYear(),a.getMonth(),a.getDate()),C6(this,a.getDate())):(this.date=new Date(g.Sa()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),C6(this,a))},b4a=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},C6=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},D6=function(a,b){g.$N.call(this,a,{F:"div",
L:"ytp-reminder-menu",T:{role:"menu",tabindex:"-1"},S:[{F:"div",L:"ytp-reminder-menu-contents",S:[{F:"div",L:"ytp-reminder-menu-items"}]}]},100,!0);this.buttonElement=b;this.j=[];this.menuPopupRenderer=void 0;this.items=this.ya("ytp-reminder-menu-items");this.hide()},e4a=function(a){var b=d4a(a),c=0,d={};
for(c=0;c<b.length;d={NE:d.NE},c++){var e=a.j[c];e||(e=new g.X({F:"div",L:"ytp-reminder-menu-item",T:{role:"menuitem",tabindex:"0"},S:[{F:"div",L:"ytp-reminder-menu-item-icon",Z:"{{icon}}"},{F:"div",L:"ytp-reminder-menu-item-label",Z:"{{text}}"}]}),d.NE=c,e.Ma("click",function(l){return function(){var m=l.NE;a.Ib();m=d4a(a)[m];a.X("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.xa(a.items),a.j[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=$3a();break;case "NOTIFICATIONS_NONE":h=a4a();break;case "NOTIFICATIONS_ACTIVE":h=g.LK()}f=f.text?g.fA(f.text):"";e.update({icon:h,text:f})}for(;c<a.j.length;)a.j.pop().dispose();0===c?a.Ib():a.ud(a.buttonElement)},d4a=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},E6=function(a){g.X.call(this,{F:"div",
S:[{F:"button",Ca:["ytp-offline-slate-button","ytp-button"],S:[{F:"div",L:"ytp-offline-slate-button-icon",Z:"{{icon}}"},{F:"div",L:"ytp-offline-slate-button-text",Z:"{{text}}"}]}]});this.G=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.j=null;(this.buttonElement=this.ya("ytp-offline-slate-button"))&&this.P(this.buttonElement,"click",this.D);this.hide()},f4a=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=
b.toggleButtonRenderer:b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);F6(a)},F6=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.fA(b.toggledText):"";a.update({text:c,icon:g4a(b.toggledIcon)})}else c=b.defaultText?g.fA(b.defaultText):"",a.update({text:c,icon:g4a(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=h4a(a))?(c=b.text?g.fA(b.text):"",a.update({text:c,icon:g4a(b.icon)}),a.show()):a.hide():a.hide()},j4a=function(a,b,c){a.C||(a.C=new g.$w(a.G.R().oi));
var d={context:g.dv(a.C.config_||g.cv())};g.iz()&&(d.context.clientScreenNonce=g.iz());d.params=c;g.ax(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){i4a(a)},
onTimeout:function(){i4a(a)}})},i4a=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,F6(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,F6(a))},g4a=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return $3a();case "NOTIFICATIONS_NONE":return a4a();case "NOTIFICATIONS_ACTIVE":return g.LK();default:return null}},h4a=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.r(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},k4a=function(a){g.X.call(this,{F:"div",
L:"ytp-offline-slate",S:[{F:"div",L:"ytp-offline-slate-background"},{F:"div",L:"ytp-offline-slate-bar",S:[{F:"span",L:"ytp-offline-slate-icon",S:[{F:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},S:[{F:"path",T:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{F:"circle",T:{cx:"12",cy:"12",r:"3"}}]}]},{F:"span",L:"ytp-offline-slate-messages",S:[{F:"div",L:"ytp-offline-slate-main-text",T:{"aria-label":"{{label}}"},Z:"{{mainText}}"},{F:"div",L:"ytp-offline-slate-subtitle-text",Z:"{{subtitleText}}"}]},{F:"span",L:"ytp-offline-slate-buttons"}]},{F:"button",Ca:["ytp-offline-slate-close-button","ytp-button"],S:[g.GK()]},{F:"button",Ca:["ytp-offline-slate-open-button","ytp-button"],S:[g.FK()]},{F:"div",L:"ytp-offline-slate-trailer-chip",Z:"Trailer"}]});var b=
this;this.api=a;this.j=this.u=null;this.background=this.ya("ytp-offline-slate-background");this.B=this.ya("ytp-offline-slate-bar");this.D=new g.Sn(function(){g.$n(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.I=!1;this.C=new g.Sn(function(){g.$n(b.element,"ytp-offline-slate-collapsed")},15E3);
g.M(this,this.C);g.M(this,this.D);this.countdownTimer=new g.Sn(this.aT,1E3,this);this.P(a,"presentingplayerstatechange",this.eT);this.P(a,"livestatedata",this.Fa);var c=this.ya("ytp-offline-slate-close-button");this.P(c,"click",function(){g.$n(b.element,"ytp-offline-slate-collapsed")});
c=this.ya("ytp-offline-slate-open-button");this.P(c,"click",function(){g.bo(b.element,"ytp-offline-slate-collapsed")});
this.hide();c=this.getVideoData();c.getPlayerResponse()&&(c=c.getPlayerResponse().playabilityStatus)&&this.Fa(c);c=8===this.api.getPresentingPlayerType()&&!this.getVideoData().lk;var d=8===this.api.getPresentingPlayerType();g.N(this.element,"ytp-offline-slate-premiere-trailer",c);g.N(this.element,"ytp-offline-slate-hide-background",d);a.K("web_rounded_containers")&&g.$n(this.B,"ytp-rounded-offline-slate")},l4a=function(a,b,c){if(b){var d=null!=b.subtitleText?g.fA(b.subtitleText):"";
c=c?c:null!=b.mainText?g.fA(b.mainText):"";var e,f,h,l;b=null!=(l=null==(e=b.mainText)?void 0:null==(f=e.accessibility)?void 0:null==(h=f.accessibilityData)?void 0:h.label)?l:c;a.update({mainText:c,subtitleText:d,label:b});g.N(a.element,"ytp-offline-slate-single-text-line",!d);g.N(a.B,"ytp-offline-slate-bar-hidden",!c&&!d)}},G6=function(a,b){var c=(0,g.U)();
this.trigger=a;this.j=b;this.B=c},t4a=function(a){g.oN.call(this,a);
var b=this;this.J=!1;this.N=0;this.D=!1;this.u=new g.Sn(function(){var e=b.player.R(),f=b.getVideoData();H6(b)&&(m4a(b)?n4a(b,e,f):(o4a(b),p4a(b,e,f)))},0);
this.j=this.heartbeatParams=null;this.C=!1;this.I=new g.Sh(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.W=new g.$w(void 0);this.V=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new c4a).getTimezoneOffset();this.B=new g.DD(this);g.M(this,this.u);g.M(this,this.B);o4a(this);q4a(this);this.B.P(a,"heartbeatparams",this.Jz);this.B.P(a,"presentingplayerstatechange",this.oU);this.B.P(a,"videoplayerreset",this.pU);this.B.P(a,g.aA("heartbeat"),this.onCueRangeEnter);this.C&&this.j&&
r4a(this,this.j);var c=new g.Zz(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.Zz(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.Zd([c,d]);s4a(this)},s4a=function(a){var b=a.getVideoData();
b.Di&&(b=b.botguardData)&&g.qM(b,a.player.R())},o4a=function(a){var b=a.getVideoData();
if(b.Di&&(b=new g.uGa(b),g.lM.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.Sa){var d=g.vGa(b);if(d){c={};var e={};d=d.split("&");d=g.r(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=u4a[Number(e.r1c)]);c.challenge=b.videoData.Sa}}a.attestationResponse=c||void 0}},m4a=function(a){var b=a.getVideoData();
if(!g.GH(a.getVideoData())||b.uL)return!1;if(b.useInnertubeDrmService()&&b.N){a="playready"===b.N.flavor&&b.K("html5_innertube_heartbeats_for_playready");var c="widevine"===b.N.flavor&&b.K("html5_innertube_heartbeats_for_widevine");b=g.wE(b.N)&&b.K("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},v4a=function(a){if(m4a(a))return!!a.heartbeatParams;
var b=a.player.R(),c=a.getVideoData();return b.K("html5_heartbeat_wait_for_drm_killswitch")||!g.GH(a.getVideoData())||!c.useInnertubeDrmService()||c.ih||c.XH?!!c.heartbeatToken:!1},I6=function(a,b){if(!a.u.isActive()&&a.J){var c=a.getVideoData();
if(v4a(a)||c.isLivePlayback){if(void 0===b)if(a.D)if(a.C)b=7500;else{var d;b=(null==(d=a.heartbeatParams)?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().sT||6E4}else b=1E3;a.u.start(b)}}},z4a=function(a,b,c){b.Ek&&(c=g.ki(c,{internalipoverride:b.Ek}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.tb&&(d.kpt=b.tb);c=g.ki(c,d);g.ju(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&H6(a)){a.I.reset();a.sequenceNumber++;e=e.responseText;var f=w4a(e);if(f){a.player.Ka("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(x4a))?"0"===h[1]?0:1:-1;y4a(a,f,e,h)}},
onError:function(e){H6(a)&&J6(a,!0,"net-"+e.status)},
onTimeout:function(){H6(a)&&J6(a,!0,"timeout")},
withCredentials:!0})},n4a=function(a,b,c){var d;
if(null!=(d=a.heartbeatParams)&&d.url){var e=g.ki(a.heartbeatParams.url,{request_id:g.lua()});c.Ha&&(e=g.ki(e,{vvt:c.Ha}),c.mdxEnvironment&&(e=g.ki(e,{mdx_environment:c.mdxEnvironment})));g.aG(b,c.oauthToken).then(function(f){f&&(e=g.ki(e,{access_token:f}));z4a(a,c,e)})}},H6=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.W(a.player.zb(a.getPlayerType()),4)?!1:v4a(a)||b.isLivePlayback?!0:(K6(a),!1)},p4a=function(a,b,c){var d,e={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!=(d=a.Y)?d:c.heartbeatServerData};a.V=a.attestationResponse;c.Di&&(e.attestationResponse=a.V);var f=g.vM(c),h;d=null!=(h=f.client)?h:{};d.utcOffsetMinutes=a.utcOffsetMinutes;e.context=f;e.cpn=c.clientPlaybackNonce;if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)d.timeZone=h;h={heartbeatChecks:[]};if(d=c.getPlayerResponse())c.heartbeatToken&&(e.heartbeatToken=c.heartbeatToken),(d=d.playabilityStatus)&&
(d=d.liveStreamability)&&d.liveStreamabilityRenderer&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.SF(b)){h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");f=A4a(a);d={};null!==f&&(d.clientPlayerPositionUtcMillis=f);var l,m;f=(null==(m=null==(l=a.player.jb())?void 0:g.DN(l))?void 0:m.freePreviewWatchedDuration)||0;0<f&&(d.freePreviewWatchedDuration={seconds:""+f});h.unpluggedParams=d}e.heartbeatRequestParams=
h;b.K("enable_linear_player_handling")&&c.isLivePlayback&&(l=A4a(a),null!==l&&(e.playbackState||(e.playbackState={}),e.playbackState.playbackPosition={utcTimeMillis:l}));var n={timeout:3E4,onSuccess:function(p){if(!a.u.isActive()&&H6(a)){var q=a.getVideoData(),u=q.Di&&null==a.V,w;q.Di=!(null==(w=p.heartbeatAttestationConfig)||!w.requiresAttestation)||u;u=p.playabilityStatus;w=JSON.stringify(u)||"{}";p.authenticationMismatch&&a.player.ma("authshear",{});var y=-1;var A=p.playabilityStatus;A&&(a.player.Ka("onHeartbeat",
A),"OK"===A.status?y=p.stopHeartbeat?2:0:"UNPLAYABLE"===A.status?y=1:"LIVE_STREAM_OFFLINE"===A.status&&(y=0));a.sequenceNumber&&-1===y||a.I.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.Y=p.heartbeatServerData);p.playerCueRanges&&0<p.playerCueRanges.length&&(q.cueRanges=p.playerCueRanges,q.X("dataupdated"));y4a(a,u,w,y)}},
onError:function(p){H6(a)&&J6(a,!0,"net-"+p.status)},
onTimeout:function(){H6(a)&&J6(a,!0,"timeout")}};
g.aG(b,g.YH(c)).then(function(p){p&&(n.AN="Bearer "+p);g.ax(a.W,"player/heartbeat",e,n)})},y4a=function(a,b,c,d){-1===d?(b="decode "+g.vc(c),J6(a,!1,b)):2===d?(K6(a),a.D=!0):(a.N=0,a.u.stop(),1===d?(a.D=!1,a.player.fg("heartbeat.stop",2,a.tf(c)),g.rv("heartbeatActionPlayerHalted",B4a(b))):(a.D=!0,c=0,a.C&&b&&(c=r4a(a,b),a.player.X("livestatedata",b)),c?I6(a,c):I6(a)))},r4a=function(a,b){var c=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,d=!(!c||!(c.switchStreamsImmediately||
c.transitionTiming&&"STREAM_TRANSITION_TIMING_IMMEDIATELY"===c.transitionTiming)),e=C4a(c),f=a.getVideoData(),h=a.player.zb(a.getPlayerType()),l=h.Mc()&&!g.MH(f)&&!a.player.isAtLiveHead(a.getPlayerType());
if(2<=f.R().V){var m,n=(null==(m=a.player.Md())?void 0:m.Ob())||{};n.status=b.status||"";n.dvr=""+ +l;n["switch"]=""+ +d;n.ended=""+ +!(!c||!c.displayEndscreen);a.player.ma("heartbeat",n)}if(l&&!d)return e;d=c&&c.streamTransitionEndpoint&&c.streamTransitionEndpoint.watchEndpoint;if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(c&&c.transitionTiming))a.getVideoData().transitionEndpointAtEndOfStream=d;else{if(l=d)(l=d&&d.videoId)?(a.player.Al(l,{autonav:"1"},void 0,!0,!0,d,g.YH(a.getVideoData())),a.aD("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
"HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",b),l=!0):l=!1;if(l)return e}if("OK"===b.status.toUpperCase()){d=c&&c.broadcastId;l=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;m=d!==l&&(null!=d||a.player.K("web_player_heartbeat_undefined_killswitch"));if(!f.hlsvp&&!f.gb||m){var p={video_id:f.videoId};f.RJ&&(p.is_live_destination="1");a.player.K("web_player_heartbeat_request_watch_next")||
(p.disable_watch_next=!0,p.raw_watch_next_response=f.watchNextResponse);p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;p.force_gvi=f.ji;p.Tj=f.Tj;c=void 0;f.hlsvp||f.gb?m&&(c=new G6("broadcastIdChanged",l+","+d),a.aD("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(d&&(c=new G6("formatsReceived",""+d)),a.aD("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b));a.player.loadVideoByPlayerVars(p,
void 0,void 0,void 0,c);return e}a.player.mf("heartbeat",a.getPlayerType())}c&&c.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.I=!0,a.rb&&a.api.ww()):g.LJ(h)&&(f=(null==(p=a.player.Md())?void 0:p.Ob())||{},a.player.ma("hbse",f,!0),a.player.ww(),a.player.Ka("onLiveMediaEnded",b)));return e},C4a=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},J6=function(a,b,c){var d=a.player.R();
if(!a.u.isActive()){a.u.stop();a.N++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.sL||b&&!g.GH(a.getVideoData())&&!v4a(a)&&f.isLivePlayback)f=!1;else{var h,l;(null==(l=a.heartbeatParams)?0:l.nw)?h=a.heartbeatParams.nw:h=f.tT||5;f=a.N>=h}f?(g.rv("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:B4a()),(b=a.getVideoData())&&b.isLivePlayback?a.player.fg(e,1,"Video playback interrupted. Please try again.",c):a.player.fg(e,1,"Sorry, there was an error licensing this video.",
c)):(d.K("html5_report_non_fatal_heartbeat_error")&&a.player.Lo(e,{msg:c}),I6(a,a.I.getValue()),g.Th(a.I))}},B4a=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},K6=function(a){a.N=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},q4a=function(a){var b=a.getVideoData(),c=a.player.R();
if(b.isLivePlayback)if(g.EE(c.j)){a.C=!0;a.J=!0;if(!g.HF(c)||g.SF(c))a.offlineSlate=new k4a(a.player),g.M(a,a.offlineSlate),g.$M(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;if("UNPLAYABLE"!==(null==(d=a.j)?void 0:d.status)||a.player.K("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.j?(d=C4a(a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?I6(a,d):I6(a,7500):I6(a,1E3)}else a.player.fg("html5.unsupportedlive",
2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else!c.K("html5_release_post_live_heartbeat_killswitch")&&g.Rb(b.W,"heartbeat")&&a.player.mf("heartbeat",a.getPlayerType())},A4a=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},w4a=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},u4a=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],D4a={cma:["BC","AD"],bma:["Before Christ","Anno Domini"],dDa:"JFMAMJJASOND".split(""),nQa:"JFMAMJJASOND".split(""),ABa:"January February March April May June July August September October November December".split(" "),mQa:"January February March April May June July August September October November December".split(" "),KMa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
pQa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),c_a:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),rQa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ENa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),qQa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),eDa:"SMTWTFS".split(""),oQa:"SMTWTFS".split(""),LMa:["Q1","Q2","Q3","Q4"],BKa:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Q8:["AM","PM"],Oja:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],
hTa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Pja:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],OT:6,d_a:[5,6],PT:5},E4a=D4a;E4a=D4a;g.k=c4a.prototype;g.k.xO=E4a.OT;g.k.yO=E4a.PT;g.k.clone=function(){var a=new c4a(this.date);a.xO=this.xO;a.yO=this.yO;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getYear=function(){return this.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCDay=function(){return this.date.getDay()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.setFullYear=function(a){this.date.setFullYear(a)};
g.k.setYear=function(a){this.setFullYear(a)};
g.k.setMonth=function(a){this.date.setMonth(a)};
g.k.setDate=function(a){this.date.setDate(a)};
g.k.setTime=function(a){this.date.setTime(a)};
g.k.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.k.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.k.setUTCDate=function(a){this.date.setUTCDate(a)};
g.k.add=function(a){if(a.u||a.j){var b=this.getMonth()+a.j+12*a.u,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),C6(this,a.getDate()))};
g.k.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.k.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+Z3a(Math.abs(a),b?6:4),Z3a(this.getMonth()+1,2),Z3a(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};var F4a=new g.So("addUpcomingEventReminderEndpoint");var G4a=new g.So("removeUpcomingEventReminderEndpoint");var H4a=new g.So("updateUpcomingEventReminderButtonStateCommand");g.v(D6,g.$N);D6.prototype.hide=function(){this.buttonElement&&this.buttonElement.removeAttribute("aria-haspopup");g.$N.prototype.hide.call(this)};
D6.prototype.show=function(){this.buttonElement&&this.buttonElement.setAttribute("aria-haspopup","true");g.$N.prototype.show.call(this)};
D6.prototype.ea=function(){g.bf(this.j);g.$N.prototype.ea.call(this)};g.v(E6,g.X);
E6.prototype.D=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;F6(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.rb)this.j.Ib();else{var b=h4a(this);b&&this.B(b.serviceEndpoint||b.command);b=(null==(a=g.Iu(null==b?void 0:b.command,g.hYa))?void 0:a.commands)||[];a:{a=g.r(b);for(var c=a.next();!c.done;c=a.next()){var d=b=void 0;if(c=null==(b=g.Iu(c.value,
g.lYa))?void 0:null==(d=b.popup)?void 0:d.menuPopupRenderer){a=c;break a}}a=void 0}this.j||(this.j=new D6(this.G,this.buttonElement),this.j.xa(this.element),g.M(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.B,this));b=this.j;b.menuPopupRenderer=a;e4a(b)}};
E6.prototype.B=function(a){var b=g.Iu(a,F4a),c=g.Iu(a,G4a);if(a&&(b||c)){if(b){var d=b;var e="notification/add_upcoming_event_reminder"}else c&&(d=c,e="notification/remove_upcoming_event_reminder");if(e&&d&&d.params)for(j4a(this,e,d.params),a=g.r(d.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&g.Iu(b,H4a)){this.u=g.Iu(b,H4a).state;F6(this);break}}};g.v(k4a,g.X);g.k=k4a.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Fa=function(a){var b,c,d=null==a?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:c.offlineSlate;if(d){this.u=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.aT():l4a(this,b);var e,f,h,l;if(c=null==a?void 0:null==(e=a.liveStreamability)?void 0:null==(f=e.liveStreamabilityRenderer)?void 0:null==(h=f.offlineSlate)?void 0:null==(l=h.liveStreamOfflineSlateRenderer)?void 0:l.thumbnail){e=0;f=null;h=c.thumbnails;for(l=0;l<h.length;l++)h[l].width>
e&&(e=h[l].width||0,f=h[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new E6(this.api),this.j.xa(this.ya("ytp-offline-slate-buttons")),g.M(this,this.j)),f4a(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&f4a(this.j,null,null);this.u=a}else this.u=null;this.eT()};
g.k.eT=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.zb(),d=this.getVideoData();b=d.isLivePlayback&&(g.LJ(c)||g.W(c,2)||g.W(c,64));var e=2===d.autonavState&&g.W(c,2);c=c.Mc()&&!g.MH(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.rb?(null==a?0:g.YI(a,2))&&!this.getVideoData().lk&&(g.bo(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.bo(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.X("offlineslatestatechange"),
this.I&&this.api.ww()):this.rb&&(this.hide(),this.api.X("offlineslatestatechange"))};
g.k.aT=function(){var a,b,c,d,e=null==(a=this.u)?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:null==(d=c.offlineSlate)?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.Sa()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?(l4a(this,e),this.countdownTimer.stop()):(l4a(this,e,g.zL(b-a)),g.Tn(this.countdownTimer)))};
g.k.ea=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.X.prototype.ea.call(this)};G6.prototype.u=function(a){return this.trigger&&a.trigger?this.trigger===a.trigger&&this.j===a.j:!1};
G6.prototype.isExpired=function(){return 6E4<(0,g.U)()-this.B};
G6.prototype.toString=function(){return"heartbeat:"+this.trigger+":"+this.j};g.v(t4a,g.oN);g.k=t4a.prototype;g.k.ea=function(){K6(this);this.player.yf("heartbeat");g.oN.prototype.ea.call(this)};
g.k.onCueRangeEnter=function(){this.J=!0;I6(this,2E3)};
g.k.Jz=function(a){this.heartbeatParams=a;I6(this,2E3)};
g.k.oU=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null==(b=this.j)?void 0:b.status)&&!this.player.K("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.W(a.state,2)||g.W(a.state,64)?(K6(this),this.C&&(this.J=!0,I6(this,1E3))):(g.W(a.state,1)||g.W(a.state,8))&&I6(this,2E3))};
g.k.pU=function(){3!==this.player.getPresentingPlayerType()&&I6(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.xj=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.aD=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.rv("heartbeatActionPlayerTransitioned",a)};
g.k.tf=function(a){var b="LICENSE",c=w4a(a);if(c)return c.reason||g.UN[b]||"";(a=a.match(x4a))&&(a=Number(a[1]))&&(b=g.$Ca(a));return g.UN[b]||""};
g.k.fz=function(){return!!this.offlineSlate&&this.offlineSlate.rb};
var x4a=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.nN("heartbeat",t4a);})(_yt_player);
