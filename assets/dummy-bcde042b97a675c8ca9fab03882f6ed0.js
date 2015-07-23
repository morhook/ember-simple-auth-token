define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](i,r["default"].modulePrefix),e["default"]=i}),define("dummy/controllers/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({sessionData:t["default"].computed("session.secure",function(){return JSON.stringify(this.get("session.secure"),null,"	")}),tokenData:t["default"].computed("session.secure",function(){var e=this.container.lookup("simple-auth-authenticator:jwt"),n=this.get("session.secure"),a={};return t["default"].keys(n).length>0&&(a=e.getTokenData(n.token)),JSON.stringify(a,null,"	")})})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/login",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({identification:"admin",password:"abc123",actions:{authenticate:function(){var e=this.getProperties("identification","password"),t="simple-auth-authenticator:jwt";this.get("session").authenticate(t,e)}}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(e,a){if(n["default"].exportApplicationGlobal!==!1){var r,i=n["default"].exportApplicationGlobal;r="string"==typeof i?i:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=a,a.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/simple-auth-token",["exports","simple-auth-token/authenticators/token","simple-auth-token/authenticators/jwt","simple-auth-token/authorizers/token","simple-auth-token/configuration","dummy/config/environment"],function(e,t,n,a,r,i){"use strict";e["default"]={name:"simple-auth-token",before:"simple-auth",initialize:function(e){r["default"].load(e,i["default"]["simple-auth-token"]||{}),e.register("simple-auth-authorizer:token",a["default"]),e.register("simple-auth-authenticator:token",t["default"]),e.register("simple-auth-authenticator:jwt",n["default"])}}}),define("dummy/initializers/simple-auth",["exports","simple-auth/configuration","simple-auth/setup","dummy/config/environment"],function(e,t,n,a){"use strict";e["default"]={name:"simple-auth",initialize:function(e,r){t["default"].load(e,a["default"]["simple-auth"]||{}),n["default"](e,r)}}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var i=a(e.toString());n["default"].libraries.register(i,t["default"].APP.version),r=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("login")}),e["default"]=a}),define("dummy/routes/application",["exports","ember","simple-auth/mixins/application-route-mixin"],function(e,t,n){"use strict";e["default"]=t["default"].Route.extend(n["default"],{actions:{invalidateSession:function(){this.get("session").invalidate()}}})}),define("dummy/routes/index",["exports","ember","simple-auth/mixins/authenticated-route-mixin","dummy/config/environment"],function(e,t,n,a){"use strict";e["default"]=t["default"].Route.extend(n["default"],{model:function(){return t["default"].$.getJSON((a["default"].API_URL||"")+"/api/users/")}})}),define("dummy/routes/login",["exports","ember","simple-auth/mixins/unauthenticated-route-mixin"],function(e,t,n){"use strict";e["default"]=t["default"].Route.extend(n["default"])}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"style","cursor: pointer");var a=e.createTextNode("Protected Page");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:7,column:2},end:{line:11,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("li"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("a"),r=e.createTextNode("Logout");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1,1]),r=new Array(1);return r[0]=e.createElementMorph(a),r},statements:[["element","action",["invalidateSession"],[],["loc",[null,[9,9],[9,41]]]]],locals:[],templates:[]}}(),n=function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:12,column:4},end:{line:14,column:4}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"style","cursor: pointer");var a=e.createTextNode("Login");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:11,column:2},end:{line:15,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["login"],["tagName","li"],0,null,["loc",[null,[12,4],[14,16]]]]],locals:[],templates:[e]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:38,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("Demo: simple-auth-token");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("ul"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Settings");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("pre"),a=e.createTextNode("\n  ENV['simple-auth-token'] = {\n    serverTokenEndpoint: '/api/api-token-auth/',\n    serverTokenRefreshEndpoint: '/api/api-token-refresh/',\n    timeFactor: 1000,\n    refreshLeeway: 5\n  };\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Session Contents:");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("pre"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Token Contents:");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("pre"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(5);return r[0]=e.createMorphAt(a,1,1),r[1]=e.createMorphAt(a,2,2),r[2]=e.createMorphAt(t,4,4,n),r[3]=e.createMorphAt(e.childAt(t,[14]),0,0),r[4]=e.createMorphAt(e.childAt(t,[18]),0,0),r},statements:[["block","link-to",["index"],["tagName","li"],0,null,["loc",[null,[4,2],[6,14]]]],["block","if",[["get","session.isAuthenticated",["loc",[null,[7,8],[7,31]]]]],[],1,2,["loc",[null,[7,2],[15,9]]]],["content","outlet",["loc",[null,[18,0],[18,10]]]],["content","sessionData",["loc",[null,[33,5],[33,20]]]],["content","tokenData",["loc",[null,[36,5],[36,18]]]]],locals:[],templates:[e,t,n]}}())}),define("dummy/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),a=e.createTextNode("This is a protected page only visible to authenticated users!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/login",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"dummy/templates/login.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("form"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("label");e.setAttribute(a,"for","identification");var r=e.createTextNode("Login");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("label");e.setAttribute(a,"for","password");var r=e.createTextNode("Password");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("button");e.setAttribute(a,"type","submit");var r=e.createTextNode("Login");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=new Array(3);return r[0]=e.createElementMorph(a),r[1]=e.createMorphAt(a,3,3),r[2]=e.createMorphAt(a,7,7),r},statements:[["element","action",["authenticate"],["on","submit"],["loc",[null,[1,6],[1,43]]]],["inline","input",[],["id","identification","placeholder","Enter Login","value",["subexpr","@mut",[["get","identification",["loc",[null,[3,62],[3,76]]]]],[],[]]],["loc",[null,[3,2],[3,78]]]],["inline","input",[],["id","password","placeholder","Enter Password","type","password","value",["subexpr","@mut",[["get","password",["loc",[null,[5,75],[5,83]]]]],[],[]]],["loc",[null,[5,2],[5,85]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-simple-auth-token",version:"0.7.3+8ce8f58b"});