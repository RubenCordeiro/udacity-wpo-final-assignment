!function(){function t(t,e){return t.href=e}function e(t){se.set(t)}function n(t){if(100!=t.get(Ir)&&y(We(t,wr))%1e4>=100*Ye(t,Ir))throw"abort"}function r(t){if(Le(We(t,yr)))throw"abort"}function i(){var t=Ae[D][C];if("http:"!=t&&"https:"!=t)throw"abort"}function a(t){try{je.XMLHttpRequest&&"withCredentials"in new je.XMLHttpRequest?e(40):je.XDomainRequest&&e(41),je[re][K]&&e(42)}catch(n){}t.set(Zn,ue(t),!0),t.set(gn,Ye(t,gn)+1);var r=[];He.map(function(e,n){if(n.p){var i=t.get(e);void 0!=i&&i!=n[M]&&("boolean"==typeof i&&(i*=1),r[z](n.p+"="+we(""+i)))}}),r[z]("z="+Be()),t.set(ln,r[ie]("&"),!0)}function o(t){var e=We(t,Dr)||Oe()+"/collect",n=We(t,ln),r=t.get(hn),i=t.get(dn),r=r||me;if(i&&(i=r,je[re][K]&&je[re][K](e,n)?(i(),i=!0):i=!1),!i)if(2036>=n[Y])Ce(e,n,r);else{if(!(8192>=n[Y]))throw Ue("len",n[Y]),new Re(n[Y]);$e(e,n,r)||Ge(e,n,r)||Ce(e,n,r)}t.set(hn,me,!0)}function s(t){var e=je.gaData;e&&(e.expId&&t.set(Fn,e.expId),e.expVar&&t.set(Hn,e.expVar))}function c(){if(je[re]&&"preview"==je[re].loadPurpose)throw"abort"}function u(t){var e=je.gaDevIds;he(e)&&0!=e[Y]&&t.set("&did",e[ie](","),!0)}function f(t){if(!t.get(yr))throw"abort"}function v(t){var n=Ye(t,Kn);n>=500&&e(15);var r=We(t,vn);if("transaction"!=r&&"item"!=r){var r=Ye(t,Qn),i=(new Date)[N](),a=Ye(t,Jn);if(0==a&&t.set(Jn,i),a=S.round(2*(i-a)/1e3),a>0&&(r=S.min(r+a,20),t.set(Jn,i)),0>=r)throw"abort";t.set(Qn,--r)}t.set(Kn,++n)}function h(t,n,r,i){n[t]=function(){try{return i&&e(i),r[U](this,arguments)}catch(n){throw Ue("exc",t,n&&n[W]),n}}}function l(){var t,e,n;if((n=(n=je[re])?n.plugins:null)&&n[Y])for(var r=0;r<n[Y]&&!e;r++){var i=n[r];-1<i[W][H]("Shockwave Flash")&&(e=i.description)}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),e=t.GetVariable("$version")}catch(a){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",t.AllowScriptAccess="always",e=t.GetVariable("$version")}catch(o){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=t.GetVariable("$version")}catch(s){}return e&&(t=e[j](/[\d]+/g))&&3<=t[Y]&&(e=t[0]+"."+t[1]+" r"+t[2]),e||void 0}function d(t,e,n){"none"==e&&(e="");var r=[],i=Ie(t);t="__utma"==t?6:2;for(var a=0;a<i[Y];a++){var o=(""+i[a])[P](".");o[Y]>=t&&r[z]({hash:o[0],R:i[a],O:o})}return 0==r[Y]?void 0:1==r[Y]?r[0]:g(e,r)||g(n,r)||g(null,r)||r[0]}function g(t,e){var n,r;null==t?n=r=1:(n=y(t),r=y(de(t,".")?t[ne](1):"."+t));for(var i=0;i<e[Y];i++)if(e[i][q]==n||e[i][q]==r)return e[i]}function p(t){t=t.get(wr);var e=m(t,0);return"_ga=1."+we(e+"."+t)}function m(t,e){for(var n=new Date,r=je[re],i=r.plugins||[],n=[t,r.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],r=0;r<i[Y];++r)n[z](i[r].description);return y(n[ie]("."))}function w(t,e){if(e==Ae[D][O])return!1;for(var n=0;n<t[Y];n++)if(t[n]instanceof RegExp){if(t[n][B](e))return!0}else if(0<=e[H](t[n]))return!0;return!1}function b(t){return 0<=t[H](".")||0<=t[H](":")}function y(t){var e,n=1,r=0;if(t)for(n=0,e=t[Y]-1;e>=0;e--)r=t.charCodeAt(e),n=(n<<6&268435455)+r+(r<<14),r=266338304&n,n=0!=r?n^r>>21:n;return n}var k=encodeURIComponent,_=window,S=Math,x="replace",T="data",j="match",A="send",E="port",L="createElement",I="setAttribute",N="getTime",P="split",D="location",V="hasOwnProperty",O="hostname",R="search",C="protocol",G="href",$="action",U="apply",z="push",q="hash",B="test",X="slice",F="cookie",H="indexOf",M="defaultValue",W="name",Y="length",K="sendBeacon",J="prototype",Q="clientWidth",Z="target",te="call",ee="clientHeight",ne="substring",re="navigator",ie="join",ae="toLowerCase",oe=function(t){this.w=t||[]};oe[J].set=function(t){this.w[t]=!0},oe[J].encode=function(){for(var t=[],e=0;e<this.w[Y];e++)this.w[e]&&(t[S.floor(e/6)]=t[S.floor(e/6)]^1<<e%6);for(e=0;e<t[Y];e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t[ie]("")+"~"};var se=new oe,ce=function(t,e){var n=new oe(fe(t));n.set(e),t.set(tr,n.w)},ue=function(t){t=fe(t),t=new oe(t);for(var e=se.w[X](),n=0;n<t.w[Y];n++)e[n]=e[n]||t.w[n];return new oe(e).encode()},fe=function(t){return t=t.get(tr),he(t)||(t=[]),t},ve=function(t){return"function"==typeof t},he=function(t){return"[object Array]"==Object[J].toString[te](Object(t))},le=function(t){return void 0!=t&&-1<(t.constructor+"")[H]("String")},de=function(t,e){return 0==t[H](e)},ge=function(t){return t?t[x](/^[\s\xa0]+|[\s\xa0]+$/g,""):""},pe=function(t){var e=Ae[L]("img");return e.width=1,e.height=1,e.src=t,e},me=function(){},we=function(t){return k instanceof Function?k(t):(e(28),t)},be=function(t,n,r,i){try{t.addEventListener?t.addEventListener(n,r,!!i):t.attachEvent&&t.attachEvent("on"+n,r)}catch(a){e(27)}},ye=function(t,e){if(t){var n=Ae[L]("script");n.type="text/javascript",n.async=!0,n.src=t,e&&(n.id=e);var r=Ae.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}},ke=function(){return"https:"==Ae[D][C]},_e=function(){var t=""+Ae[D][O];return 0==t[H]("www.")?t[ne](4):t},Se=function(t){var e=Ae.referrer;if(/^https?:\/\//i[B](e)){if(t)return e;t="//"+Ae[D][O];var n=e[H](t);if((5==n||6==n)&&(t=e.charAt(n+t[Y]),"/"==t||"?"==t||""==t||":"==t))return;return e}},xe=function(t,e){if(1==e[Y]&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},r=S.min(t[Y]+1,e[Y]),i=0;r>i;i++){if("object"==typeof e[i]){for(var a in e[i])e[i][V](a)&&(n[a]=e[i][a]);break}i<t[Y]&&(n[t[i]]=e[i])}return n},Te=function(){this.keys=[],this.values={},this.m={}};Te[J].set=function(t,e,n){this.keys[z](t),n?this.m[":"+t]=e:this.values[":"+t]=e},Te[J].get=function(t){return this.m[V](":"+t)?this.m[":"+t]:this.values[":"+t]},Te[J].map=function(t){for(var e=0;e<this.keys[Y];e++){var n=this.keys[e],r=this.get(n);r&&t(n,r)}};var je=_,Ae=document,Ee=function(){for(var t=je[re].userAgent+(Ae[F]?Ae[F]:"")+(Ae.referrer?Ae.referrer:""),e=t[Y],n=je.history[Y];n>0;)t+=n--^e++;return y(t)},Le=function(t){var e=je._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===je["ga-disable-"+t])return!0;try{var n=je.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(r){}return!1},Ie=function(t){var e=[],n=Ae[F][P](";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var r=0;r<n[Y];r++){var i=n[r][j](t);i&&e[z](i[1])}return e},Ne=function(t,n,r,i,a,o){if(a=Le(a)?!1:Ve[B](Ae[D][O])||"/"==r&&De[B](i)?!1:!0,!a)return!1;if(n&&1200<n[Y]&&(n=n[ne](0,1200),e(24)),r=t+"="+n+"; path="+r+"; ",o&&(r+="expires="+new Date((new Date)[N]()+o).toGMTString()+"; "),i&&"none"!=i&&(r+="domain="+i+";"),i=Ae[F],Ae.cookie=r,!(i=i!=Ae[F]))t:{for(t=Ie(t),i=0;i<t[Y];i++)if(n==t[i]){i=!0;break t}i=!1}return i},Pe=function(t){return we(t)[x](/\(/g,"%28")[x](/\)/g,"%29")},De=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ve=/(^|\.)doubleclick\.net$/i,Oe=function(){return(on||ke()?"https:":"http:")+"//www.google-analytics.com"},Re=function(t){this.name="len",this.message=t+"-8192"},Ce=function(t,e,n){var r=pe(t+"?"+e);r.onload=r.onerror=function(){r.onload=null,r.onerror=null,n()}},Ge=function(t,e,n){var r;return(r=je.XDomainRequest)?(r=new r,r.open("POST",t),r.onerror=function(){n()},r.onload=n,r[A](e),!0):!1},$e=function(t,e,n){var r=je.XMLHttpRequest;if(!r)return!1;var i=new r;return"withCredentials"in i?(i.open("POST",t,!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onreadystatechange=function(){4==i.readyState&&(n(),i=null)},i[A](e),!0):!1},Ue=function(t,e,n){1<=100*S.random()||Le("?")||(t=["t=error","_e="+t,"_v=j33","sr=1"],e&&t[z]("_f="+e),n&&t[z]("_m="+we(n[ne](0,100))),t[z]("aip=1"),t[z]("z="+Xe()),Ce(Oe()+"/collect",t[ie]("&"),me))},ze=function(){this.t=[]};ze[J].add=function(t){this.t[z](t)},ze[J].D=function(t){try{for(var e=0;e<this.t[Y];e++){var n=t.get(this.t[e]);n&&ve(n)&&n[te](je,t)}}catch(r){}e=t.get(hn),e!=me&&ve(e)&&(t.set(hn,me,!0),setTimeout(e,10))};var qe=function(){return S.round(2147483647*S.random())},Be=function(){try{var t=new Uint32Array(1);return je.crypto.getRandomValues(t),2147483647&t[0]}catch(e){return qe()}},Xe=qe,Fe=function(){this.data=new Te},He=new Te,Me=[];Fe[J].get=function(t){var e=Qe(t),n=this[T].get(t);return e&&void 0==n&&(n=ve(e[M])?e[M]():e[M]),e&&e.n?e.n(this,t,n):n};var We=function(t,e){var n=t.get(e);return void 0==n?"":""+n},Ye=function(t,e){var n=t.get(e);return void 0==n||""===n?0:1*n};Fe[J].set=function(t,e,n){if(t)if("object"==typeof t)for(var r in t)t[V](r)&&Ke(this,r,t[r],n);else Ke(this,t,e,n)};var Ke=function(t,e,n,r){if(void 0!=n)switch(e){case yr:mi[B](n)}var i=Qe(e);i&&i.o?i.o(t,e,n,r):t[T].set(e,n,r)},Je=function(t,e,n,r,i){this.name=t,this.p=e,this.n=r,this.o=i,this.defaultValue=n},Qe=function(t){var e=He.get(t);if(!e)for(var n=0;n<Me[Y];n++){var r=Me[n],i=r[0].exec(t);if(i){e=r[1](i),He.set(e[W],e);break}}return e},Ze=function(t){var e;return He.map(function(n,r){r.p==t&&(e=r)}),e&&e[W]},tn=function(t,e,n,r,i){return t=new Je(t,e,n,r,i),He.set(t[W],t),t[W]},en=function(t,e){Me[z]([new RegExp("^"+t+"$"),e])},nn=function(t,e,n){return tn(t,e,n,void 0,rn)},rn=function(){},an=le(_.GoogleAnalyticsObject)&&ge(_.GoogleAnalyticsObject)||"ga",on=!1,sn=tn("_br"),cn=nn("apiVersion","v"),un=nn("clientVersion","_v");tn("anonymizeIp","aip");var fn=tn("adSenseId","a"),vn=tn("hitType","t"),hn=tn("hitCallback"),ln=tn("hitPayload");tn("nonInteraction","ni"),tn("currencyCode","cu");var dn=tn("useBeacon",void 0,!1);tn("dataSource","ds"),tn("sessionControl","sc",""),tn("sessionGroup","sg"),tn("queueTime","qt");var gn=tn("_s","_s");tn("screenName","cd");var pn=tn("location","dl",""),mn=tn("referrer","dr"),wn=tn("page","dp","");tn("hostname","dh");var bn=tn("language","ul"),yn=tn("encoding","de");tn("title","dt",function(){return Ae.title||void 0}),en("contentGroup([0-9]+)",function(t){return new Je(t[0],"cg"+t[1])});var kn=tn("screenColors","sd"),_n=tn("screenResolution","sr"),Sn=tn("viewportSize","vp"),xn=tn("javaEnabled","je"),Tn=tn("flashVersion","fl");tn("campaignId","ci"),tn("campaignName","cn"),tn("campaignSource","cs"),tn("campaignMedium","cm"),tn("campaignKeyword","ck"),tn("campaignContent","cc");var jn=tn("eventCategory","ec"),An=tn("eventAction","ea"),En=tn("eventLabel","el"),Ln=tn("eventValue","ev"),In=tn("socialNetwork","sn"),Nn=tn("socialAction","sa"),Pn=tn("socialTarget","st"),Dn=tn("l1","plt"),Vn=tn("l2","pdt"),On=tn("l3","dns"),Rn=tn("l4","rrt"),Cn=tn("l5","srt"),Gn=tn("l6","tcp"),$n=tn("l7","dit"),Un=tn("l8","clt"),zn=tn("timingCategory","utc"),qn=tn("timingVar","utv"),Bn=tn("timingLabel","utl"),Xn=tn("timingValue","utt");tn("appName","an"),tn("appVersion","av",""),tn("appId","aid",""),tn("appInstallerId","aiid",""),tn("exDescription","exd"),tn("exFatal","exf");var Fn=tn("expId","xid"),Hn=tn("expVar","xvar"),Mn=tn("_utma","_utma"),Wn=tn("_utmz","_utmz"),Yn=tn("_utmht","_utmht"),Kn=tn("_hc",void 0,0),Jn=tn("_ti",void 0,0),Qn=tn("_to",void 0,20);en("dimension([0-9]+)",function(t){return new Je(t[0],"cd"+t[1])}),en("metric([0-9]+)",function(t){return new Je(t[0],"cm"+t[1])}),tn("linkerParam",void 0,void 0,p,rn);var Zn=tn("usage","_u"),tr=tn("_um");tn("forceSSL",void 0,void 0,function(){return on},function(t,n,r){e(34),on=!!r});var er=tn("_j1","jid"),nr=tn("_j2","gjid");en("\\&(.*)",function(t){var e=new Je(t[0],t[1]),n=Ze(t[0][ne](1));return n&&(e.n=function(t){return t.get(n)},e.o=function(t,e,r,i){t.set(n,r,i)},e.p=void 0),e});var rr=nn("_oot"),ir=tn("previewTask"),ar=tn("checkProtocolTask"),or=tn("validationTask"),sr=tn("checkStorageTask"),cr=tn("historyImportTask"),ur=tn("samplerTask"),fr=nn("_rlt"),vr=tn("buildHitTask"),hr=tn("sendHitTask"),lr=tn("ceTask"),dr=tn("devIdTask"),gr=tn("timingTask"),pr=tn("displayFeaturesTask"),mr=nn("name"),wr=nn("clientId","cid"),br=tn("userId","uid"),yr=nn("trackingId","tid"),kr=nn("cookieName",void 0,"_ga"),_r=nn("cookieDomain"),Sr=nn("cookiePath",void 0,"/"),xr=nn("cookieExpires",void 0,63072e3),Tr=nn("legacyCookieDomain"),jr=nn("legacyHistoryImport",void 0,!0),Ar=nn("storage",void 0,"cookie"),Er=nn("allowLinker",void 0,!1),Lr=nn("allowAnchor",void 0,!0),Ir=nn("sampleRate","sf",100),Nr=nn("siteSpeedSampleRate",void 0,1),Pr=nn("alwaysSendReferrer",void 0,!1),Dr=tn("transportUrl"),Vr=tn("_r","_r"),Or=function(t,e,n){this.V=1e4,this.fa=t,this.$=!1,this.B=e,this.ea=n||1},Rr=function(t,e){var n;if(t.fa&&t.$)return 0;if(t.$=!0,e){if(t.B&&Ye(e,t.B))return Ye(e,t.B);if(0==e.get(Nr))return 0}return 0==t.V?0:(void 0===n&&(n=Be()),0==n%t.V?S.floor(n/t.V)%t.ea+1:0)},Cr=new Or(!0,sn,5),Gr=function(t){if(!ke()&&!on){var e=Rr(Cr,t);if(e&&(je[re][K]||!(e>=4))){var n=(new Date).getHours(),r=[Be(),Be(),Be()][ie](".");t=(3==e||5==e?"https:":"http:")+"//www.google-analytics.com/collect?z=br.",t+=[e,"A",n,r][ie](".");var i=1!=e&&4!=e?"https:":"http:",i=i+"//www.google-analytics.com/collect?z=br.",i=i+[e,"B",n,r][ie]("."),n=function(){e>=4?je[re][K](i,""):pe(i)};Be()%2?(pe(t),n()):(n(),pe(t))}}},$r=function(t,e){var n=S.min(Ye(t,Nr),100);if(!(y(We(t,wr))%100>=n)&&(n={},Ur(n)||zr(n))){var r=n[Dn];void 0==r||1/0==r||isNaN(r)||(r>0?(qr(n,On),qr(n,Gn),qr(n,Cn),qr(n,Vn),qr(n,Rn),qr(n,$n),qr(n,Un),e(n)):be(je,"load",function(){$r(t,e)},!1))}},Ur=function(t){var e=je.performance||je.webkitPerformance,e=e&&e.timing;if(!e)return!1;var n=e.navigationStart;return 0==n?!1:(t[Dn]=e.loadEventStart-n,t[On]=e.domainLookupEnd-e.domainLookupStart,t[Gn]=e.connectEnd-e.connectStart,t[Cn]=e.responseStart-e.requestStart,t[Vn]=e.responseEnd-e.responseStart,t[Rn]=e.fetchStart-n,t[$n]=e.domInteractive-n,t[Un]=e.domContentLoadedEventStart-n,!0)},zr=function(t){if(je.top!=je)return!1;var e=je.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),n>2147483648&&(n=void 0),n>0&&e.setPageReadyTime(),void 0==n?!1:(t[Dn]=n,!0)},qr=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0)},Br=function(t){return function(e){"pageview"!=e.get(vn)||t.I||(t.I=!0,$r(e,function(e){t[A]("timing",e)}))}},Xr=!1,Fr=function(t){if("cookie"==We(t,Ar)){var n=We(t,kr),r=Wr(t),i=Qr(We(t,Sr)),a=Kr(We(t,_r)),o=1e3*Ye(t,xr),s=We(t,yr);if("auto"!=a)Ne(n,r,i,a,s,o)&&(Xr=!0);else{e(32);var c;if(r=[],a=_e()[P]("."),4!=a[Y]||(c=a[a[Y]-1],parseInt(c,10)!=c)){for(c=a[Y]-2;c>=0;c--)r[z](a[X](c)[ie]("."));r[z]("none"),c=r}else c=["none"];for(var u=0;u<c[Y];u++)if(a=c[u],t[T].set(_r,a),r=Wr(t),Ne(n,r,i,a,s,o))return void(Xr=!0);t[T].set(_r,"auto")}}},Hr=function(t){if("cookie"==We(t,Ar)&&!Xr&&(Fr(t),!Xr))throw"abort"},Mr=function(t){if(t.get(jr)){var n=We(t,_r),r=We(t,Tr)||_e(),i=d("__utma",r,n);i&&(e(19),t.set(Yn,(new Date)[N](),!0),t.set(Mn,i.R),(n=d("__utmz",r,n))&&i[q]==n[q]&&t.set(Wn,n.R))}},Wr=function(t){var e=Pe(We(t,wr)),n=Jr(We(t,_r));return t=Zr(We(t,Sr)),t>1&&(n+="-"+t),["GA1",n,e][ie](".")},Yr=function(t,e,n){for(var r,i=[],a=[],o=0;o<t[Y];o++){var s=t[o];s.r[n]==e?i[z](s):void 0==r||s.r[n]<r?(a=[s],r=s.r[n]):s.r[n]==r&&a[z](s)}return 0<i[Y]?i:a},Kr=function(t){return 0==t[H](".")?t.substr(1):t},Jr=function(t){return Kr(t)[P](".")[Y]},Qr=function(t){return t?(1<t[Y]&&t.lastIndexOf("/")==t[Y]-1&&(t=t.substr(0,t[Y]-1)),0!=t[H]("/")&&(t="/"+t),t):"/"},Zr=function(t){return t=Qr(t),"/"==t?1:t[P]("/")[Y]},ti=new RegExp(/^https?:\/\/([^\/:]+)/),ei=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,ni=function(t){e(48),this.target=t,this.T=!1};ni[J].Q=function(e,n){if(e.tagName){if("a"==e.tagName[ae]())return void(e[G]&&t(e,ri(this,e[G],n)));if("form"==e.tagName[ae]())return ii(this,e)}return"string"==typeof e?ri(this,e,n):void 0};var ri=function(t,e,n){var r=ei.exec(e);r&&3<=r[Y]&&(e=r[1]+(r[3]?r[2]+r[3]:"")),t=t[Z].get("linkerParam");var i=e[H]("?"),r=e[H]("#");return n?e+=(-1==r?"#":"&")+t:(n=-1==i?"?":"&",e=-1==r?e+(n+t):e[ne](0,r)+n+t+e[ne](r)),e},ii=function(t,e){if(e&&e[$]){var n=t[Z].get("linkerParam")[P]("=")[1];if("get"==e.method[ae]()){for(var r=e.childNodes||[],i=0;i<r[Y];i++)if("_ga"==r[i][W])return void r[i][I]("value",n);r=Ae[L]("input"),r[I]("type","hidden"),r[I]("name","_ga"),r[I]("value",n),e.appendChild(r)}else"post"==e.method[ae]()&&(e.action=ri(t,e[$]))}};ni[J].S=function(n,r,i){function a(i){try{i=i||je.event;var a;t:{var s=i[Z]||i.srcElement;for(i=100;s&&i>0;){if(s[G]&&s.nodeName[j](/^a(?:rea)?$/i)){a=s;break t}s=s.parentNode,i--}a={}}("http:"==a[C]||"https:"==a[C])&&w(n,a[O]||"")&&a[G]&&t(a,ri(o,a[G],r))}catch(c){e(26)}}var o=this;if(this.T||(this.T=!0,be(Ae,"mousedown",a,!1),be(Ae,"touchstart",a,!1),be(Ae,"keyup",a,!1)),i){i=function(t){if(t=t||je.event,(t=t[Z]||t.srcElement)&&t[$]){var e=t[$][j](ti);e&&w(n,e[1])&&ii(o,t)}};for(var s=0;s<Ae.forms[Y];s++)be(Ae.forms[s],"submit",i)}};var ai,oi=function(t,e,n,r){this.U=e,this.aa=n,(e=r)||(e=(e=We(t,mr))&&"t0"!=e?vi[B](e)?"_gat_"+Pe(We(t,yr)):"_gat_"+Pe(e):"_gat"),this.Y=e},si=function(t,e){var n=e.get(vr);e.set(vr,function(e){ci(t,e);var r=n(e);return ui(t,e),r});var r=e.get(hr);e.set(hr,function(e){var n=r(e);return fi(t,e),n})},ci=function(t,e){e.get(t.U)||("1"==Ie(t.Y)[0]?e.set(t.U,"",!0):e.set(t.U,""+Xe(),!0))},ui=function(t,e){e.get(t.U)&&Ne(t.Y,"1",e.get(Sr),e.get(_r),e.get(yr),6e5)},fi=function(t,e){if(e.get(t.U)){var n=new Te,r=function(t){n.set(Qe(t).p,e.get(t))};r(cn),r(un),r(yr),r(wr),r(t.U),n.set(Qe(Zn).p,ue(e));var i=t.aa;n.map(function(t,e){i+=we(t)+"=",i+=we(""+e)+"&"}),i+="z="+Xe(),pe(i),e.set(t.U,"",!0)}},vi=/^gtm\d+$/,hi=function(t,e){var n=t.b;if(!n.get("dcLoaded")){ce(n,29),e=e||{};var r;e[kr]&&(r=Pe(e[kr])),r=new oi(n,er,"https://stats.g.doubleclick.net/collect?t=dc&aip=1&",r),si(r,n),n.set("dcLoaded",!0)}},li=function(t){var e;e=t.get("dcLoaded")?!1:"cookie"!=t.get(Ar)?!1:!0,e&&(ce(t,51),e=new oi(t,er),ci(e,t),ui(e,t),t.get(e.U)&&(t.set(Vr,1,!0),t.set(Dr,Oe()+"/r/collect",!0)))},di=function(t,e){var n=t.b;if(!n.get("_rlsaLoaded")){if(ce(n,38),e=e||{},e[kr])var r=Pe(e[kr]);r=new oi(n,nr,"https://www.google.com/ads/ga-audiences?t=sr&aip=1&",r),si(r,n),n.set("_rlsaLoaded",!0),Ei("displayfeatures",t,e)}},gi=function(){var t=je.gaGlobal=je.gaGlobal||{};return t.hid=t.hid||Xe()},pi=function(t,e,n){if(!ai){var r;r=Ae[D][q];var i=je[W],a=/^#?gaso=([^&]*)/;(i=(r=(r=r&&r[j](a)||i&&i[j](a))?r[1]:Ie("GASO")[0]||"")&&r[j](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(Ne("GASO",""+r,n,e,t,0),_._udo||(_._udo=e),_._utcp||(_._utcp=n),t=i[1],ye("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+Xe(),"_gasojs")),ai=!0}},mi=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,wi=function(t){function e(t,e){l.b[T].set(t,e)}function h(t,n){e(t,n),l.filters.add(t)}var l=this;this.b=new Fe,this.filters=new ze,e(mr,t[mr]),e(yr,ge(t[yr])),e(kr,t[kr]),e(_r,t[_r]||_e()),e(Sr,t[Sr]),e(xr,t[xr]),e(Tr,t[Tr]),e(jr,t[jr]),e(Er,t[Er]),e(Lr,t[Lr]),e(Ir,t[Ir]),e(Nr,t[Nr]),e(Pr,t[Pr]),e(Ar,t[Ar]),e(br,t[br]),e(cn,1),e(un,"j33"),h(rr,r),h(ir,c),h(ar,i),h(or,f),h(sr,Hr),h(cr,Mr),h(ur,n),h(fr,v),h(lr,s),h(dr,u),h(pr,li),h(vr,a),h(hr,o),h(gr,Br(this)),bi(this.b,t[wr]),yi(this.b),this.b.set(fn,gi()),pi(this.b.get(yr),this.b.get(_r),this.b.get(Sr))},bi=function(t,n){if("cookie"==We(t,Ar)){Xr=!1;var r;t:{var i=Ie(We(t,kr));if(i&&!(1>i[Y])){r=[];for(var a=0;a<i[Y];a++){var o;o=i[a][P](".");var s=o.shift();("GA1"==s||"1"==s)&&1<o[Y]?(s=o.shift()[P]("-"),1==s[Y]&&(s[1]="1"),s[0]*=1,s[1]*=1,o={r:s,s:o[ie](".")}):o=void 0,o&&r[z](o)}if(1==r[Y]){e(13),r=r[0].s;break t}if(0!=r[Y]){if(e(14),i=Jr(We(t,_r)),r=Yr(r,i,0),1==r[Y]){r=r[0].s;break t}i=Zr(We(t,Sr)),r=Yr(r,i,1),r=r[0]&&r[0].s;break t}e(12)}r=void 0}r||(r=We(t,_r),i=We(t,Tr)||_e(),r=d("__utma",i,r),void 0!=r?(e(10),r=r.O[1]+"."+r.O[2]):r=void 0),r&&(t[T].set(wr,r),Xr=!0)}r=t.get(Lr),(a=(r=Ae[D][r?"href":"search"][j]("(?:&|#|\\?)"+we("_ga")[x](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==r[Y]?r[1]:"")&&(t.get(Er)?(r=a[H]("."),-1==r?e(22):(i=a[ne](r+1),"1"!=a[ne](0,r)?e(22):(r=i[H]("."),-1==r?e(22):(a=i[ne](0,r),r=i[ne](r+1),a!=m(r,0)&&a!=m(r,-1)&&a!=m(r,-2)?e(23):(e(11),t[T].set(wr,r)))))):e(21)),n&&(e(9),t[T].set(wr,we(n))),t.get(wr)||((r=(r=je.gaGlobal&&je.gaGlobal.vid)&&-1!=r[R](/^(?:utma\.)?\d+\.\d+$/)?r:void 0)?(e(17),t[T].set(wr,r)):(e(8),t[T].set(wr,[Xe()^2147483647&Ee(),S.round((new Date)[N]()/1e3)][ie](".")))),Fr(t)},yi=function(t){var n=je[re],r=je.screen,i=Ae[D];if(t.set(mn,Se(t.get(Pr))),i){var a=i.pathname||"";"/"!=a.charAt(0)&&(e(31),a="/"+a),t.set(pn,i[C]+"//"+i[O]+a+i[R])}r&&t.set(_n,r.width+"x"+r.height),r&&t.set(kn,r.colorDepth+"-bit");var r=Ae.documentElement,o=(a=Ae.body)&&a[Q]&&a[ee],s=[];if(r&&r[Q]&&r[ee]&&("CSS1Compat"===Ae.compatMode||!o)?s=[r[Q],r[ee]]:o&&(s=[a[Q],a[ee]]),r=0>=s[0]||0>=s[1]?"":s[ie]("x"),t.set(Sn,r),t.set(Tn,l()),t.set(yn,Ae.characterSet||Ae.charset),t.set(xn,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),t.set(bn,(n&&(n.language||n.browserLanguage)||"")[ae]()),i&&t.get(Lr)&&(n=Ae[D][q])){for(n=n[P](/[?&#]+/),i=[],r=0;r<n[Y];++r)(de(n[r],"utm_id")||de(n[r],"utm_campaign")||de(n[r],"utm_source")||de(n[r],"utm_medium")||de(n[r],"utm_term")||de(n[r],"utm_content")||de(n[r],"gclid")||de(n[r],"dclid")||de(n[r],"gclsrc"))&&i[z](n[r]);0<i[Y]&&(n="#"+i[ie]("&"),t.set(pn,t.get(pn)+n))}};wi[J].get=function(t){return this.b.get(t)},wi[J].set=function(t,e){this.b.set(t,e)};var ki={pageview:[wn],event:[jn,An,En,Ln],social:[In,Nn,Pn],timing:[zn,qn,Xn,Bn]};wi[J].send=function(){if(!(1>arguments[Y])){var t,e;"string"==typeof arguments[0]?(t=arguments[0],e=[][X][te](arguments,1)):(t=arguments[0]&&arguments[0][vn],e=arguments),t&&(e=xe(ki[t]||[],e),e[vn]=t,this.b.set(e,void 0,!0),this.filters.D(this.b),this.b[T].m={},Gr(this.b))}};var _i,Si,xi,Ti=function(t){return"prerender"==Ae.visibilityState?!1:(t(),!0)},ji=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Ai=function(t){if(ve(t[0]))this.u=t[0];else{var e=ji.exec(t[0]);if(null!=e&&4==e[Y]&&(this.c=e[1]||"t0",this.e=e[2]||"",this.d=e[3],this.a=[][X][te](t,1),this.e||(this.A="create"==this.d,this.i="require"==this.d,this.g="provide"==this.d,this.ba="remove"==this.d),this.i&&(3<=this.a[Y]?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(le(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.d)throw"abort";if(this.i&&(!le(e)||""==e))throw"abort";if(this.g&&(!le(e)||""==e||!ve(t)))throw"abort";if(b(this.c)||b(this.e))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};_i=new Te,xi=new Te,Si={ec:45,ecommerce:46,linkid:47};var Ei=function(t,e,n){e==Ni||e.get(mr);var r=_i.get(t);return ve(r)?(e.plugins_=e.plugins_||new Te,e.plugins_.get(t)?!0:(e.plugins_.set(t,new r(e,n||{})),!0)):!1},Li=function(e){function n(t){var e=(t[O]||"")[P](":")[0][ae](),n=(t[C]||"")[ae](),n=1*t[E]||("http:"==n?80:"https:"==n?443:"");return t=t.pathname||"",de(t,"/")||(t="/"+t),[e,""+n,t]}var r=Ae[L]("a");t(r,Ae[D][G]);var i=(r[C]||"")[ae](),a=n(r),o=r[R]||"",s=i+"//"+a[0]+(a[1]?":"+a[1]:"");return de(e,"//")?e=i+e:de(e,"/")?e=s+e:!e||de(e,"?")?e=s+a[2]+(e||o):0>e[P]("/")[0][H](":")&&(e=s+a[2][ne](0,a[2].lastIndexOf("/"))+"/"+e),t(r,e),i=n(r),{protocol:(r[C]||"")[ae](),host:i[0],port:i[1],path:i[2],G:r[R]||"",url:e||""}},Ii={ga:function(){Ii.f=[]}};Ii.ga(),Ii.D=function(){var t=Ii.J[U](Ii,arguments),t=Ii.f.concat(t);for(Ii.f=[];0<t[Y]&&!Ii.v(t[0])&&(t.shift(),!(0<Ii.f[Y])););Ii.f=Ii.f.concat(t)},Ii.J=function(){for(var t=[],n=0;n<arguments[Y];n++)try{var r=new Ai(arguments[n]);if(r.g)_i.set(r.a[0],r.a[1]);else{if(r.i){var i=r,a=i.a[0];if(!ve(_i.get(a))&&!xi.get(a)){Si[V](a)&&e(Si[a]);var o=i.X;if(!o&&Si[V](a)?(e(39),o=a+".js"):e(43),o){o&&0<=o[H]("/")||(o=(on||ke()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+o);var s,c=Li(o),i=void 0,u=c[C],f=Ae[D][C],i="https:"==u||u==f?!0:"http:"!=u?!1:"http:"==f;if(s=i){var i=c,v=Li(Ae[D][G]);if(i.G||0<=i.url[H]("?")||0<=i.path[H]("://"))s=!1;else if(i.host==v.host&&i[E]==v[E])s=!0;else{var h="http:"==i[C]?80:443;s="www.google-analytics.com"==i.host&&(i[E]||h)==h&&de(i.path,"/plugins/")?!0:!1}}s&&(ye(c.url),xi.set(a,!0))}}}t[z](r)}}catch(l){}return t},Ii.v=function(t){try{if(t.u)t.u[te](je,Ni.j("t0"));else{var e=t.c==an?Ni:Ni.j(t.c);if(t.A)"t0"==t.c&&Ni.create[U](Ni,t.a);else if(t.ba)Ni.remove(t.c);else if(e)if(t.i){if(!Ei(t.a[0],e,t.W))return!0}else if(t.e){var n=t.d,r=t.a,i=e.plugins_.get(t.e);i[n][U](i,r)}else e[t.d][U](e,t.a)}}catch(a){}};var Ni=function(){e(1),Ii.D[U](Ii,[arguments])};Ni.h={},Ni.P=[],Ni.L=0,Ni.answer=42;var Pi=[yr,_r,mr];Ni.create=function(){var t=xe(Pi,[][X][te](arguments));t[mr]||(t[mr]="t0");var e=""+t[mr];return Ni.h[e]?Ni.h[e]:(t=new wi(t),Ni.h[e]=t,Ni.P[z](t),t)},Ni.remove=function(t){for(var e=0;e<Ni.P[Y];e++)if(Ni.P[e].get(mr)==t){Ni.P.splice(e,1),Ni.h[t]=null;break}},Ni.j=function(t){return Ni.h[t]},Ni.K=function(){return Ni.P[X](0)},Ni.N=function(){"ga"!=an&&e(49);var t=je[an];if(!t||42!=t.answer){Ni.L=t&&t.l,Ni.loaded=!0;var n=je[an]=Ni;if(h("create",n,n.create),h("remove",n,n.remove),h("getByName",n,n.j,5),h("getAll",n,n.K,6),n=wi[J],h("get",n,n.get,7),h("set",n,n.set,4),h("send",n,n[A]),n=Fe[J],h("get",n,n.get),h("set",n,n.set),!ke()&&!on){t:{for(var n=Ae.getElementsByTagName("script"),r=0;r<n[Y]&&100>r;r++){var i=n[r].src;if(i&&0==i[H]("https://www.google-analytics.com/analytics")){e(33),n=!0;break t}}n=!1}n&&(on=!0)}ke()||on||!Rr(new Or)||(e(36),on=!0),(je.gaplugins=je.gaplugins||{}).Linker=ni,n=ni[J],_i.set("linker",ni),h("decorate",n,n.Q,20),h("autoLink",n,n.S,25),_i.set("displayfeatures",hi),_i.set("adfeatures",di),t=t&&t.q,he(t)?Ii.D[U](Ni,t):e(50)}},Ni.k=function(){for(var t=Ni.K(),e=0;e<t[Y];e++)t[e].get(mr)},function(){var t=Ni.N;if(!Ti(t)){e(16);var n=!1,r=function(){if(!n&&Ti(t)){n=!0;var e=r,i=Ae;i.removeEventListener?i.removeEventListener("visibilitychange",e,!1):i.detachEvent&&i.detachEvent("onvisibilitychange",e)}};be(Ae,"visibilitychange",r)}}()}(window);