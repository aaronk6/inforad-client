define("inforad-client/app",["exports","ember","ember/resolver","ember/load-initializers","inforad-client/config/environment"],function(e,t,a,r,n){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](i,n["default"].modulePrefix),e["default"]=i}),define("inforad-client/controllers/bitcoin",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({})}),define("inforad-client/controllers/clock",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({model:t["default"].Object.create({currentDate:new Date}),init:function(){var e=this;return window.setInterval(function(){e.set("model.currentDate",new Date)},500),this._super()}})}),define("inforad-client/controllers/tram",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({init:function(){var e=this;return window.setInterval(function(){e.set("model.currentDate",new Date)},1e3),this._super()}})}),define("inforad-client/helpers/currency",["exports","ember"],function(e,t){"use strict";function a(e){return e[0]?Math.round(100*e[0])/100+(e[1]?" "+e[1]:""):"–"}e.currency=a,e["default"]=t["default"].HTMLBars.makeBoundHelper(a)}),define("inforad-client/initializers/app-version",["exports","inforad-client/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!n){var d=r(i.toString());a["default"].libraries.register(d,t["default"].APP.version),n=!0}}}}),define("inforad-client/initializers/ember-cli-auto-register-helpers",["exports","ember","inforad-client/config/environment"],function(e,t,a){"use strict";var r=function(){var e=new RegExp(a["default"].modulePrefix+"/helpers/.*");t["default"].A(t["default"].keys(window.require.entries)).filter(function(t){return e.test(t)}).forEach(function(e){var r=e.replace(a["default"].modulePrefix+"/helpers/","");t["default"].Handlebars.registerHelper(r,window.require(e)["default"])})};e["default"]={name:"ember-cli-auto-register-helpers",initialize:r},e.initialize=r}),define("inforad-client/initializers/ember-moment",["exports","ember-moment/helpers/moment","ember-moment/helpers/ago","ember-moment/helpers/duration","ember"],function(e,t,a,r,n){"use strict";var i=function(){var e;e=n["default"].HTMLBars?function(e,t){n["default"].HTMLBars._registerHelper(e,n["default"].HTMLBars.makeBoundHelper(t))}:n["default"].Handlebars.helper,e("moment",t["default"]),e("ago",a["default"]),e("duration",r["default"])};e["default"]={name:"ember-moment",initialize:i},e.initialize=i}),define("inforad-client/initializers/export-application-global",["exports","ember","inforad-client/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("inforad-client/models/bitcoin-price",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({sourceData:null,valueEurBinding:t["default"].Binding.oneWay("sourceData.value_eur"),lastUpdate:function(){return new Date(this.get("sourceData.last_update"))}.property("sourceData")})}),define("inforad-client/models/tram-schedule",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({currentDate:new Date,sourceData:null,schedule:function(){var e,t,a,r,n,i,d;if(!(e=this.get("sourceData.schedule")))return null;t=[],r=new Date;for(var c=0;c<e.length;c++)a=e[c],n=new Date(a.departure),i=n.getTime()-r.getTime(),i+1e3*a.delay*60<0||(d=Math.max(0,Math.round(i/1e3/60)),t.push({train:a.train,minutesLeft:d,departure:n,longTimeAway:d>90,delay:a.delay,delayed:a.delay>0,destination:a.destination}));return t}.property("sourceData","currentDate")})}),define("inforad-client/router",["exports","ember","inforad-client/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});e["default"]=r.map(function(){})}),define("inforad-client/routes/index",["exports","ember","inforad-client/models/bitcoin-price","inforad-client/models/tram-schedule"],function(e,t,a,r){"use strict";e["default"]=t["default"].Route.extend({default_endpoint:"http://localhost:4567",refresh_interval:5e3,setupController:function(){function e(){t["default"].$.getJSON(n+"/dashboard").then(function(e){(i=e.dashboard)&&(d.controllerFor("tram").set("model",r["default"].create({sourceData:i.items.tram_schedule})),d.controllerFor("bitcoin").set("model",a["default"].create({sourceData:i.items.bitcoin_price})))})}var n,i,d=this;n=window.CLIENT_CONFIG&&window.CLIENT_CONFIG.SERVER?window.CLIENT_CONFIG.SERVER:this.get("default_endpoint"),e(),window.setInterval(e,3e4)},renderTemplate:function(){this.render("bitcoin",{into:"application",outlet:"bitcoin",controller:"bitcoin"}),this.render("tram",{into:"application",outlet:"tram",controller:"tram"}),this.render("clock",{into:"application",outlet:"clock",controller:"clock"})}})}),define("inforad-client/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"id","dashboard");var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.inline;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.childAt(d,[0]),l=r.createMorphAt(c,1,1),o=r.createMorphAt(c,3,3),s=r.createMorphAt(c,5,5);return i(t,l,e,"outlet",["bitcoin"],{}),i(t,o,e,"outlet",["tram"],{}),i(t,s,e,"outlet",["clock"],{}),d}}}())}),define("inforad-client/templates/bitcoin",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","symbol");var r=e.createTextNode("฿");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","value");var r=e.createComment("");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","updated");var r=e.createTextNode("(updated ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(")");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.inline;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var l=r.createMorphAt(r.childAt(c,[2]),0,0),o=r.createMorphAt(r.childAt(c,[4]),1,1);return d(t,l,e,"currency",[i(t,e,"model.valueEur"),"€"],{}),d(t,o,e,"ago",[i(t,e,"model.lastUpdate")],{}),c}}}())}),define("inforad-client/templates/clock",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","outer_face");var r=e.createTextNode("\n\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker oneseven"),e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker twoeight"),e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker fourten"),e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","marker fiveeleven"),e.appendChild(a,r);var r=e.createTextNode("\n\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","inner_face");var n=e.createTextNode("\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","hand hour"),e.appendChild(r,n);var n=e.createTextNode("\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","hand minute"),e.appendChild(r,n);var n=e.createTextNode("\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","hand second"),e.appendChild(r,n);var n=e.createTextNode("\n	");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","date");var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.inline;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var l=r.createMorphAt(r.childAt(c,[2]),1,1);return d(t,l,e,"moment",[i(t,e,"model.currentDate"),"DD.MM.YYYY"],{}),c}}}())}),define("inforad-client/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.createMorphAt(d,0,0,a);return r.insertBoundary(d,0),i(t,c,e,"outlet"),d}}}())}),define("inforad-client/templates/tram",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("					+");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.createMorphAt(d,1,1,a);return i(t,c,e,"item.delay"),d}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("				");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","departure absolute");var r=e.createTextNode("\n					");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n				");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.inline;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var l=r.createMorphAt(r.childAt(c,[1]),1,1);return d(t,l,e,"moment",[i(t,e,"item.departure"),"HH:mm"],{}),c}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("				");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","departure relative");var r=e.createTextNode("\n					");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n				");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var c=r.createMorphAt(r.childAt(d,[1]),1,1);return i(t,c,e,"item.minutesLeft"),d}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("		");e.appendChild(t,a);var a=e.createElement("tr"),r=e.createTextNode("\n			");e.appendChild(a,r);var r=e.createElement("td");e.setAttribute(r,"class","train");var n=e.createTextNode("\n				");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n			");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n			");e.appendChild(a,r);var r=e.createElement("td");e.setAttribute(r,"class","destination");var n=e.createTextNode("\n				");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n			");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n			");e.appendChild(a,r);var r=e.createElement("td");e.setAttribute(r,"class","delay");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("			");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("		");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(r,n,i){var d=n.dom,c=n.hooks,l=c.content,o=c.get,s=c.block;d.detectNamespace(i);var u;n.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(u=this.build(d),this.hasRendered?this.cachedFragment=u:this.hasRendered=!0),this.cachedFragment&&(u=d.cloneNode(this.cachedFragment,!0))):u=this.build(d);var h=d.childAt(u,[1]),m=d.createMorphAt(d.childAt(h,[1]),1,1),p=d.createMorphAt(d.childAt(h,[3]),1,1),f=d.createMorphAt(d.childAt(h,[5]),1,1),v=d.createMorphAt(h,7,7);return l(n,m,r,"item.train"),l(n,p,r,"item.destination"),s(n,f,r,"if",[o(n,r,"item.delayed")],{},e,null),s(n,v,r,"if",[o(n,r,"item.longTimeAway")],{},t,a),u}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("	");e.appendChild(t,a);var a=e.createElement("table"),r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("	");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var l;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(l=this.build(n),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=n.cloneNode(this.cachedFragment,!0))):l=this.build(n);var o=n.createMorphAt(n.childAt(l,[1]),1,1);return c(a,o,t,"each",[d(a,t,"model.schedule")],{keyword:"item"},e,null),l}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","schedule");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,c=i.block;n.detectNamespace(r);var l;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(l=this.build(n),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=n.cloneNode(this.cachedFragment,!0))):l=this.build(n);var o=n.createMorphAt(n.childAt(l,[0]),1,1);return c(a,o,t,"if",[d(a,t,"model.schedule.length")],{},e,null),l}}}())}),define("inforad-client/views/bitcoin",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({templateName:"bitcoin",classNames:"bitcoin-view dashboard-item".w()})}),define("inforad-client/views/clock",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({templateName:"clock",classNames:"clock-view dashboard-item",elements:{},currentDateDidChange:function(e,t){var a,r,n,i,d;a=e.get(t),r=this.get("elements"),n=(a.getHours()+a.getMinutes()/60)/12*360,i=a.getMinutes()/60*360,d=a.getSeconds()/60*360,r.hour.css({transform:"rotate("+n+"deg)"}),r.minute.css({transform:"rotate("+i+"deg)"}),r.second.css({transform:"rotate("+d+"deg)"})}.observes("controller.model.currentDate"),didInsertElement:function(){this.set("elements",{hour:this.$(".inner_face .hour"),minute:this.$(".inner_face .minute"),second:this.$(".inner_face .second")})}})}),define("inforad-client/views/tram",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({templateName:"tram",classNames:"tram-view dashboard-item"})}),define("inforad-client/config/environment",["ember"],function(e){var t="inforad-client";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("inforad-client/tests/test-helper"):require("inforad-client/app")["default"].create({name:"inforad-client",version:"0.0.0.47eef68d"});