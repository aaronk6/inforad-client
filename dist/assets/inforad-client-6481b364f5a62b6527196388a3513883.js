define("inforad-client/app",["exports","ember","ember/resolver","ember/load-initializers","inforad-client/config/environment"],function(e,t,a,r,n){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](i,n["default"].modulePrefix),e["default"]=i}),define("inforad-client/controllers/bitcoin-price",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({})}),define("inforad-client/controllers/clock",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({model:t["default"].Object.create({currentDate:new Date}),init:function(){var e=this;return window.setInterval(function(){e.set("model.currentDate",new Date)},500),this._super()}})}),define("inforad-client/controllers/connection-status",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({})}),define("inforad-client/controllers/currently-playing",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({})}),define("inforad-client/controllers/giphy-trending",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({SLIDE_INTERVAL:15,_currentInterval:null,modelDidChange:function(e,t){function a(){r.get("currentIndex")<n.length-1?r.incrementProperty("currentIndex"):r.set("currentIndex",0)}var r,n,i=this;r=e.get(t),this.get("_currentInterval")&&window.clearInterval(this.get("_currentInterval")),r&&(n=r.get("sourceData.items"))&&(this.set("_currentInterval",window.setInterval(function(){a()},1e3*i.SLIDE_INTERVAL)),a())}.observes("model")})}),define("inforad-client/controllers/rain-forecast",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({})}),define("inforad-client/controllers/tram-schedule",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({init:function(){var e=this;return window.setInterval(function(){e.get("model")&&e.set("model.currentDate",new Date)},1e3),this._super()}})}),define("inforad-client/controllers/weather",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({})}),define("inforad-client/helpers/currency",["exports","ember"],function(e,t){"use strict";function a(e){return e[0]?(Math.round(100*e[0])/100).toFixed(2)+(e[1]?" "+e[1]:""):"–"}e.currency=a,e["default"]=t["default"].HTMLBars.makeBoundHelper(a)}),define("inforad-client/helpers/fa-icon",["exports","ember"],function(e,t){"use strict";var a=/^fa\-.+/,r=t["default"].Logger.warn,n=function(e,n){if("string"!==t["default"].typeOf(e)){var i="fa-icon: no icon specified";return r(i),t["default"].String.htmlSafe(i)}var d=n.hash,c=[],o="";c.push("fa"),e.match(a)||(e="fa-"+e),c.push(e),d.spin&&c.push("fa-spin"),d.flip&&c.push("fa-flip-"+d.flip),d.rotate&&c.push("fa-rotate-"+d.rotate),d.lg&&(r("fa-icon: the 'lg' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"lg\"}}"),c.push("fa-lg")),d.x&&(r("fa-icon: the 'x' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\""+d.x+'"}}'),c.push("fa-"+d.x+"x")),d.size&&("string"===t["default"].typeOf(d.size)&&d.size.match(/\d+/)&&(d.size=Number(d.size)),c.push("number"===t["default"].typeOf(d.size)?"fa-"+d.size+"x":"fa-"+d.size)),d.fixedWidth&&c.push("fa-fw"),d.listItem&&c.push("fa-li"),d.pull&&c.push("pull-"+d.pull),d.border&&c.push("fa-border"),d.classNames&&!t["default"].isArray(d.classNames)&&(d.classNames=[d.classNames]),t["default"].isEmpty(d.classNames)||Array.prototype.push.apply(c,d.classNames),o+="<";var s=d.tagName||"i";return o+=s,o+=" class='"+c.join(" ")+"'",d.title&&(o+=" title='"+d.title+"'"),(void 0===d.ariaHidden||d.ariaHidden)&&(o+=' aria-hidden="true"'),o+="></"+s+">",t["default"].String.htmlSafe(o)};e["default"]=t["default"].Handlebars.makeBoundHelper(n),e.faIcon=n}),define("inforad-client/initializers/app-version",["exports","inforad-client/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!n){var d=r(i.toString());a["default"].libraries.register(d,t["default"].APP.version),n=!0}}}}),define("inforad-client/initializers/ember-cli-auto-register-helpers",["exports","ember","inforad-client/config/environment"],function(e,t,a){"use strict";var r=function(){var e=new RegExp(a["default"].modulePrefix+"/helpers/.*");t["default"].A(t["default"].keys(window.require.entries)).filter(function(t){return e.test(t)}).forEach(function(e){var r=e.replace(a["default"].modulePrefix+"/helpers/","");t["default"].Handlebars.registerHelper(r,window.require(e)["default"])})};e["default"]={name:"ember-cli-auto-register-helpers",initialize:r},e.initialize=r}),define("inforad-client/initializers/ember-moment",["exports","ember-moment/helpers/moment","ember-moment/helpers/ago","ember-moment/helpers/duration","ember"],function(e,t,a,r,n){"use strict";var i=function(){var e;e=n["default"].HTMLBars?function(e,t){n["default"].HTMLBars._registerHelper(e,n["default"].HTMLBars.makeBoundHelper(t))}:n["default"].Handlebars.helper,e("moment",t["default"]),e("ago",a["default"]),e("duration",r["default"])};e["default"]={name:"ember-moment",initialize:i},e.initialize=i}),define("inforad-client/initializers/export-application-global",["exports","ember","inforad-client/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("inforad-client/models/bitcoin-price",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({sourceData:null,valueEurBinding:t["default"].Binding.oneWay("sourceData.value_eur"),lastUpdate:function(){return new Date(this.get("sourceData.last_update"))}.property("sourceData")})}),define("inforad-client/models/currently-playing",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({sourceData:null})}),define("inforad-client/models/giphy-trending",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({currentIndex:-1,currentItem:null,sourceData:null,isImage:function(){var e=this.get("sourceData");return e&&"gif"===e.format||"webp"===e.format}.property("sourceData"),isVideo:function(){var e=this.get("sourceData");return e&&"mp4"===e.format}.property("sourceData"),currentIndexDidChange:function(e,a){this.get("sourceData")&&this.get("sourceData").items&&this.set("currentItem",t["default"].Object.create(this.get("sourceData").items[e.get(a)]))}.observes("currentIndex")})}),define("inforad-client/models/rain-forecast",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({sourceData:null})}),define("inforad-client/models/tram-schedule",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({currentDate:new Date,sourceData:null,maxItems:9,schedule:function(){var e,t,a,r,n,i,d;if(!(e=this.get("sourceData.schedule")))return null;t=[],r=new Date;for(var c=0;c<Math.min(e.length,this.get("maxItems"));c++)a=e[c],n=new Date(a.departure),i=n.getTime()-r.getTime(),i+1e3*a.delay*60<0||(d=Math.max(0,Math.round(i/1e3/60)),t.push({train:a.train,minutesLeft:d,departure:n,longTimeAway:d>90,delay:a.delay,delayed:a.delay>0,destination:a.destination}));return t}.property("sourceData","currentDate")})}),define("inforad-client/models/weather",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({sourceData:null})}),define("inforad-client/router",["exports","ember","inforad-client/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});e["default"]=r.map(function(){})}),define("inforad-client/routes/index",["exports","ember","inforad-client/models/bitcoin-price","inforad-client/models/tram-schedule","inforad-client/models/weather","inforad-client/models/rain-forecast","inforad-client/models/currently-playing","inforad-client/models/giphy-trending","inforad-client/config/environment"],function(e,t,a,r,n,i,d,c,o){"use strict";var s="status-connecting",l="status-connected",u="status-disconnected";e["default"]=t["default"].Route.extend({defaultHost:"localhost",defaultPort:80,enabledWidgets:{clock:null,"tram-schedule":r["default"],"bitcoin-price":a["default"],weather:n["default"],"rain-forecast":i["default"],"currently-playing":d["default"],"giphy-trending":c["default"]},setConnectionStatus:function(e){this.controllerFor("connection-status").set("model",t["default"].Object.create({status:e}))},setupController:function(){function e(e,r){function n(){var n,d;d="ws://%@:%@".fmt(e||"localhost",r||80),t["default"].debug("Trying to connect to %@".fmt(d)),n=new ReconnectingWebSocket(d),n.onconnecting=function(){i.setConnectionStatus(s)},n.onopen=function(){t["default"].Logger.info("Connected to %@".fmt(d)),i.setConnectionStatus(l)},n.onclose=function(){i.setConnectionStatus(u)},n.onmessage=function(e){var r;try{r=JSON.parse(e.data)}catch(n){t["default"].Logger.error("Failed to parse message: ",e.data)}r&&a(r)}}n()}function a(e){var a,r,n,d;e&&e.widget&&"string"==typeof e.widget.name&&(a=e.widget.name.dasherize(),(r=i.enabledWidgets[a])&&(t["default"].debug("Updating %@".fmt(a)),n=i.controllerFor(a),d=e.widget.data,n.get("model")?n.get("model").set("sourceData",d):n.set("model",r.create({sourceData:d}))))}var r,n,i=this;i.setConnectionStatus(u),o["default"]&&o["default"].BACKEND?(r=o["default"].BACKEND.HOST,n=o["default"].BACKEND.PORT):window.ENV&&window.ENV.BACKEND&&(r=window.ENV.BACKEND.HOST,n=window.ENV.BACKEND.PORT),e(r||this.get("defaultHost"),n||this.get("defaultPort"))},renderTemplate:function(){var e,t,a;e=this,e.render("connection-status",{into:"application",outlet:"connection-status",controller:"connection-status"}),t=e.enabledWidgets;for(a in t)t.hasOwnProperty(a)&&e.render(a,{into:"application",outlet:a,controller:a})}})}),define("inforad-client/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"id","dashboard");var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.inline;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.childAt(d,[0]),o=r.createMorphAt(c,1,1),s=r.createMorphAt(c,3,3),l=r.createMorphAt(c,5,5),u=r.createMorphAt(c,7,7),h=r.createMorphAt(c,9,9),m=r.createMorphAt(c,11,11),p=r.createMorphAt(c,13,13),f=r.createMorphAt(c,15,15);return i(t,o,e,"outlet",["connection-status"],{}),i(t,s,e,"outlet",["bitcoin-price"],{}),i(t,l,e,"outlet",["tram-schedule"],{}),i(t,u,e,"outlet",["clock"],{}),i(t,h,e,"outlet",["weather"],{}),i(t,m,e,"outlet",["rain-forecast"],{}),i(t,p,e,"outlet",["giphy-trending"],{}),i(t,f,e,"outlet",["currently-playing"],{}),d}}}())}),define("inforad-client/templates/bitcoin-price",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","symbol");var r=e.createComment("");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","value");var r=e.createComment("");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","updated");var r=e.createTextNode("(updated ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(")");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.inline,d=n.get;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var o=r.createMorphAt(r.childAt(c,[0]),0,0),s=r.createMorphAt(r.childAt(c,[2]),0,0),l=r.createMorphAt(r.childAt(c,[4]),1,1);return i(t,o,e,"fa-icon",["btc"],{}),i(t,s,e,"currency",[d(t,e,"model.valueEur"),"€"],{}),i(t,l,e,"ago",[d(t,e,"model.lastUpdate")],{}),c}}}())}),define("inforad-client/templates/clock",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","outer_face");var r=e.createTextNode("\n\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker oneseven"),e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker twoeight"),e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker fourten"),e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker fiveeleven"),e.appendChild(a,r);var r=e.createTextNode("\n\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","inner_face");var n=e.createTextNode("\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","hand hour"),e.appendChild(r,n);var n=e.createTextNode("\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","hand minute"),e.appendChild(r,n);var n=e.createTextNode("\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","hand second"),e.appendChild(r,n);var n=e.createTextNode("\n	");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","date");var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.inline;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var o=r.createMorphAt(r.childAt(c,[2]),1,1);return d(t,o,e,"moment",[i(t,e,"model.currentDate"),"DD.MM.YYYY"],{}),c}}}())}),define("inforad-client/templates/currently-playing",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("		");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.inline,d=n.content;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var o=r.createMorphAt(c,1,1,a),s=r.createMorphAt(c,3,3,a);return i(t,o,e,"fa-icon",["play"],{}),d(t,s,e,"model.sourceData.calendar"),c}}}(),t=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("			");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.inline,d=n.content;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var o=r.createMorphAt(c,1,1,a),s=r.createMorphAt(c,3,3,a);return i(t,o,e,"fa-icon",["play"],{}),d(t,s,e,"model.sourceData.info"),c}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var s=n.createMorphAt(o,0,0,r);return n.insertBoundary(o,null),n.insertBoundary(o,0),c(a,s,t,"if",[d(a,t,"model.sourceData.info")],{},e,null),o}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","display-container");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(a,r,n){var i=r.dom,d=r.hooks,c=d.get,o=d.block;i.detectNamespace(n);var s;r.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(s=this.build(i),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=i.cloneNode(this.cachedFragment,!0))):s=this.build(i);var l=i.createMorphAt(i.childAt(s,[0]),1,1);return o(r,l,a,"if",[c(r,a,"model.sourceData.calendar")],{},e,t),s}}}())}),define("inforad-client/templates/giphy-trending",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("		");e.appendChild(t,a);var a=e.createElement("img");e.setAttribute(a,"alt",""),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.concat,c=n.attribute;r.detectNamespace(a);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var s=r.childAt(o,[1]),l=r.createAttrMorph(s,"src");return c(t,l,s,"src",d(t,[i(t,e,"model.currentItem.url")])),o}}}(),t=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("			");e.appendChild(t,a);var a=e.createElement("video");e.setAttribute(a,"autoplay",""),e.setAttribute(a,"loop",""),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.concat,c=n.attribute;r.detectNamespace(a);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var s=r.childAt(o,[1]),l=r.createAttrMorph(s,"src");return c(t,l,s,"src",d(t,[i(t,e,"model.currentItem.url")])),o}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var s=n.createMorphAt(o,0,0,r);return n.insertBoundary(o,null),n.insertBoundary(o,0),c(a,s,t,"if",[d(a,t,"model.isVideo")],{},e,null),o}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(a,r,n){var i=r.dom,d=r.hooks,c=d.get,o=d.block;i.detectNamespace(n);var s;r.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(s=this.build(i),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=i.cloneNode(this.cachedFragment,!0))):s=this.build(i);var l=i.createMorphAt(s,1,1,n);return o(r,l,a,"if",[c(r,a,"model.isImage")],{},e,t),s}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("	");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","status");var r=e.createTextNode("(no data)");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom;r.detectNamespace(a);var n;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(n=this.build(r),this.hasRendered?this.cachedFragment=n:this.hasRendered=!0),this.cachedFragment&&(n=r.cloneNode(this.cachedFragment,!0))):n=this.build(r),n}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","animation");var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(a,r,n){var i=r.dom,d=r.hooks,c=d.get,o=d.concat,s=d.attribute,l=d.block;i.detectNamespace(n);var u;r.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(u=this.build(i),this.hasRendered?this.cachedFragment=u:this.hasRendered=!0),this.cachedFragment&&(u=i.cloneNode(this.cachedFragment,!0))):u=this.build(i);var h=i.childAt(u,[0]),m=i.createMorphAt(h,1,1),p=i.createAttrMorph(h,"data-image-idx");return s(r,p,h,"data-image-idx",o(r,[c(r,a,"model.currentIndex")])),l(r,m,a,"if",[c(r,a,"model.currentItem.url")],{},e,t),u}}}())}),define("inforad-client/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.createMorphAt(d,0,0,a);return r.insertBoundary(d,0),i(t,c,e,"outlet"),d}}}())}),define("inforad-client/templates/rain-forecast",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("			");e.appendChild(t,a);var a=e.createElement("img");e.setAttribute(a,"class","animation"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.concat,c=n.attribute;r.detectNamespace(a);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var s=r.childAt(o,[1]),l=r.createAttrMorph(s,"src");return c(t,l,s,"src",d(t,[i(t,e,"data.animation_url")])),o}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n	");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","animation-container");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("	");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(t,a,r,n){var i=a.dom,d=a.hooks,c=d.set,o=d.get,s=d.block;i.detectNamespace(r);var l;a.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(l=this.build(i),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=i.cloneNode(this.cachedFragment,!0))):l=this.build(i);var u=i.createMorphAt(i.childAt(l,[1]),1,1);return c(a,t,"data",n[0]),s(a,u,t,"if",[o(a,t,"data.animation_url")],{},e,null),l}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var s=n.createMorphAt(o,0,0,r);return n.insertBoundary(o,null),n.insertBoundary(o,0),c(a,s,t,"with",[d(a,t,"model.sourceData")],{},e,null),o}}}())}),define("inforad-client/templates/tram-schedule",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("					+");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.createMorphAt(d,1,1,a);return i(t,c,e,"item.delay"),d}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("				");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","departure absolute");var r=e.createTextNode("\n					");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n				");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.inline;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var o=r.createMorphAt(r.childAt(c,[1]),1,1);return d(t,o,e,"moment",[i(t,e,"item.departure"),"HH:mm"],{}),c}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("				");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","departure relative");var r=e.createTextNode("\n					");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n				");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.createMorphAt(r.childAt(d,[1]),1,1);return i(t,c,e,"item.minutesLeft"),d}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("		");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createTextNode("\n			");e.appendChild(a,r);var r=e.createElement("td");e.setAttribute(r,"class","train");var n=e.createTextNode("\n				");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n			");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n			");e.appendChild(a,r);var r=e.createElement("td");e.setAttribute(r,"class","destination");var n=e.createTextNode("\n				");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n			");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n			");e.appendChild(a,r);var r=e.createElement("td");e.setAttribute(r,"class","delay");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("			");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("		");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(r,n,i){var d=n.dom,c=n.hooks,o=c.content,s=c.get,l=c.block;d.detectNamespace(i);var u;n.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(u=this.build(d),this.hasRendered?this.cachedFragment=u:this.hasRendered=!0),this.cachedFragment&&(u=d.cloneNode(this.cachedFragment,!0))):u=this.build(d);var h=d.childAt(u,[1]),m=d.createMorphAt(d.childAt(h,[1]),1,1),p=d.createMorphAt(d.childAt(h,[3]),1,1),f=d.createMorphAt(d.childAt(h,[5]),1,1),v=d.createMorphAt(h,7,7);return o(n,m,r,"item.train"),o(n,p,r,"item.destination"),l(n,f,r,"if",[s(n,r,"item.delayed")],{},e,null),l(n,v,r,"if",[s(n,r,"item.longTimeAway")],{},t,a),u}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("	");e.appendChild(t,a);var a=e.createElement("table"),r=e.createTextNode("\n");e.appendChild(a,r);
var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("	");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var s=n.createMorphAt(n.childAt(o,[1]),1,1);return c(a,s,t,"each",[d(a,t,"model.schedule")],{keyword:"item"},e,null),o}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","schedule");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var s=n.createMorphAt(n.childAt(o,[0]),1,1);return c(a,s,t,"if",[d(a,t,"model.schedule.length")],{},e,null),o}}}())}),define("inforad-client/templates/weather",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","weather-desc");var r=e.createComment("");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","temperature");var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(" °C");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","observation-time-location");var r=e.createTextNode("(measured ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(" in ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(")");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a,r){var n=t.dom,i=t.hooks,d=i.set,c=i.get,o=i.concat,s=i.attribute,l=i.content,u=i.inline;n.detectNamespace(a);var h;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(h=this.build(n),this.hasRendered?this.cachedFragment=h:this.hasRendered=!0),this.cachedFragment&&(h=n.cloneNode(this.cachedFragment,!0))):h=this.build(n);var m=n.childAt(h,[0]),p=n.childAt(h,[6]),f=n.createAttrMorph(m,"class"),v=n.createMorphAt(n.childAt(h,[2]),0,0),g=n.createMorphAt(n.childAt(h,[4]),0,0),b=n.createMorphAt(p,1,1),C=n.createMorphAt(p,3,3);return d(t,e,"data",r[0]),s(t,f,m,"class",o(t,["weather-icon icon-",c(t,e,"data.icon")])),l(t,v,e,"data.weather"),l(t,g,e,"data.temp_c"),u(t,b,e,"ago",[c(t,e,"data.observation_time")],{}),l(t,C,e,"data.observation_location"),h}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var s=n.createMorphAt(o,0,0,r);return n.insertBoundary(o,null),n.insertBoundary(o,0),c(a,s,t,"with",[d(a,t,"model.sourceData")],{},e,null),o}}}())}),define("inforad-client/views/bitcoin-price",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"bitcoin-view dashboard-item".w()})}),define("inforad-client/views/clock",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"clock-view dashboard-item",elements:{},currentDateDidChange:function(e,t){var a,r,n,i,d;a=e.get(t),r=this.get("elements"),n=(a.getHours()+a.getMinutes()/60)/12*360,i=a.getMinutes()/60*360,d=a.getSeconds()/60*360,r.hour.css({transform:"rotate("+n+"deg)"}),r.minute.css({transform:"rotate("+i+"deg)"}),r.second.css({transform:"rotate("+d+"deg)"})}.observes("controller.model.currentDate"),didInsertElement:function(){this.set("elements",{hour:this.$(".inner_face .hour"),minute:this.$(".inner_face .minute"),second:this.$(".inner_face .second")})}})}),define("inforad-client/views/connection-status",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"connection-status-view",classNameBindings:["controller.model.status"]})}),define("inforad-client/views/currently-playing",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"currently-playing-view dashboard-item"})}),define("inforad-client/views/giphy-trending",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"giphy-trending-view dashboard-item"})}),define("inforad-client/views/rain-forecast",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"rain-forecast-view dashboard-item"})}),define("inforad-client/views/tram-schedule",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"tram-view dashboard-item"})}),define("inforad-client/views/weather",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:"weather-view dashboard-item"})}),define("inforad-client/config/environment",["ember"],function(e){var t="inforad-client";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("inforad-client/tests/test-helper"):require("inforad-client/app")["default"].create({name:"inforad-client",version:"0.0.0.0c523543"});