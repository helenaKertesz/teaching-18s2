webpackJsonp([0],[,function(t,n,e){"use strict";function i(t){e(50)}var r=e(15),a=e(51),s=e(0),o=i,c=s(r.a,a.a,!1,o,null,null);n.a=c.exports},,function(t,n,e){"use strict";function i(t){e(34)}var r=e(10),a=e(35),s=e(0),o=i,c=s(r.a,a.a,!1,o,"data-v-8534403a",null);n.a=c.exports},function(t,n,e){"use strict";function i(t){return fetch(s+t).then(function(t){return t.json()}).catch(function(t){return console.error(t)})}function r(t){return fetch(s+t).then(function(t){return t.text()}).catch(function(t){return console.error(t)})}function a(t){var n=t.split("");return n[0]=n[0].toUpperCase(),n=n.join("")}n.b=i,n.a=r,n.c=a;var s="http://alhinds.com/teaching-18s1/static/"},,function(t,n,e){"use strict";var i=e(23),r=e(26);n.a={components:{SiteHeader:i.a,SiteFooter:r.a},name:"Teaching"}},function(t,n,e){"use strict";n.a={data:function(){return{courses:[{title:"COMP1511",link:"comp1511"},{title:"COMP1521",link:"comp1521"}]}}}},function(t,n,e){"use strict";n.a={data:function(){return{items:[{link:"https://github.com/DarkPurple141/teaching-18s1",name:"Source.",icon:"github"},{link:"mailto:a.hinds@unsw.edu.au",name:"Email.",icon:"envelope"}]}}}},function(t,n,e){"use strict";var i=e(3);n.a={name:"Home",components:{SectionHeader:i.a}}},function(t,n,e){"use strict";n.a={props:{name:String},computed:{longName:function(){return this.name.toUpperCase()}}}},function(t,n,e){"use strict";var i=e(3),r=e(4);n.a={components:{SectionHeader:i.a},props:{course:{type:String,required:!0}},data:function(){return{classes:[],copy:"I'll be putting anything worth announcing here. For class relevant labs and tute material click the above link."}},beforeMount:function(){var t=this;Object(r.b)(this.course+"/index.json").then(function(n){return n.classes.forEach(function(n){return t.classes.push({path:n,name:Object(r.c)(n)})})})}}},function(t,n,e){"use strict";var i=e(3),r=e(42),a=e(4);n.a={components:{SectionHeader:i.a,Card:r.a},props:{cls:{type:String,required:!0},course:{type:String,required:!0}},data:function(){return{labs:[],meta:{}}},beforeMount:function(){var t=this;Object(a.b)(this.course+"/"+this.cls+"/index.json").then(function(n){n.weeks.forEach(function(n){return t.labs.push({path:n,meta:{}})}),t.meta=n.meta}).then(function(){t.labs.forEach(function(n){Object(a.b)(t.course+"/"+t.cls+"/"+n.path+"/index.json").then(function(t){n.meta=t.meta})})})}}},function(t,n,e){"use strict";n.a={props:{link:String,meta:Object,number:Number}}},function(t,n,e){"use strict";var i=e(4),r=e(3),a=e(48),s=e.n(a);n.a={props:{cls:{type:String,required:!0},course:{type:String,required:!0},week:{type:String,required:!0}},components:{SectionHeader:r.a},data:function(){return{files:[]}},beforeMount:function(){var t=this;Object(i.b)(this.course+"/"+this.cls+"/"+this.week+"/index.json").then(function(n){n.files.forEach(function(n){return t.files.push({path:n,content:""})})}).then(function(){t.files.forEach(function(n){Object(i.a)(t.course+"/"+t.cls+"/"+t.week+"/"+n.path).then(function(t){n.content=t})})})},mounted:function(){setTimeout(function(){s.a.highlightAll()},1e3)}}},function(t,n,e){"use strict";function i(){return"fa-"+(a++).toString(16)}var r={};n.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in r||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,e=t.height;return Math.max(n,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,n={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,e){var r=i();return n[e]=r,' id="'+r+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,e,i,r){var a=e||r;return a&&n[a]?"#"+n[a]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=t.normalizedScale});var n=0,e=0;this.$children.forEach(function(t){n=Math.max(n,t.width),e=Math.max(e,t.height)}),this.childrenWidth=n,this.childrenHeight=e,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(e-t.height)/2})}},register:function(t){for(var n in t){var e=t[n];e.paths||(e.paths=[]),e.d&&e.paths.push({d:e.d}),e.polygons||(e.polygons=[]),e.points&&e.polygons.push({points:e.points}),r[n]=e}},icons:r};var a=870711},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(5),r=e(20),a=e(30),s=e(1),o=(e(52),e(58)),c=(e.n(o),e(59)),u=(e.n(c),e(60)),l=(e.n(u),e(61));e.n(l);i.a.component("icon",s.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:r.a}})},,,,function(t,n,e){"use strict";function i(t){e(21)}var r=e(6),a=e(29),s=e(0),o=i,c=s(r.a,a.a,!1,o,null,null);n.a=c.exports},function(t,n){},,function(t,n,e){"use strict";function i(t){e(24)}var r=e(7),a=e(25),s=e(0),o=i,c=s(r.a,a.a,!1,o,"data-v-63f3d5c7",null);n.a=c.exports},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("nav",[e("h1",{staticClass:"logo"},[e("router-link",{attrs:{to:{name:"Home"}}},[t._v("18s1")])],1),t._v(" "),e("ul",{staticClass:"nav"},t._l(t.courses,function(n){return e("li",{key:n.title},[e("router-link",{attrs:{to:{name:"Course",params:{course:n.link}}}},[t._v("\n              "+t._s(n.title)+"\n           ")])],1)}))])])},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";function i(t){e(27)}var r=e(8),a=e(28),s=e(0),o=i,c=s(r.a,a.a,!1,o,"data-v-b8719f6a",null);n.a=c.exports},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"section-footer"},[e("div",{staticClass:"footer-links"},t._l(t.items,function(t){return e("div",{staticClass:"footer-link"},[e("a",{attrs:{href:t.link}},[e("div",[e("icon",{attrs:{scale:"1.5",name:t.icon}})],1)])])})),t._v(" "),t._m(0)])},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"copyright"},[e("p",[t._v("Made by Alexander Hinds")]),t._v(" "),e("p",[t._v("© 2018")])])}],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("site-header"),t._v(" "),e("main",[e("router-view",{key:t.$route.path})],1),t._v(" "),e("site-footer")],1)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";var i=e(5),r=e(31),a=e(32),s=e(37),o=e(40),c=e(46);i.a.use(r.a),n.a=new r.a({routes:[{path:"/",name:"Home",component:a.a},{path:"/course/:course",name:"Course",component:s.a,props:function(t){return{course:t.params.course}}},{path:"/course/:course/:class",name:"Class",component:o.a,props:function(t){return{course:t.params.course,cls:t.params.class}}},{path:"/course/:course/:class/:week",name:"Lab",component:c.a,props:function(t){return{course:t.params.course,cls:t.params.class,week:t.params.week}}}]})},,function(t,n,e){"use strict";function i(t){e(33)}var r=e(9),a=e(36),s=e(0),o=i,c=s(r.a,a.a,!1,o,"data-v-4d3ddebf",null);n.a=c.exports},function(t,n){},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"section-header"},[e("h1",[t._v(t._s(t.longName))])])},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"content"},[e("section-header",{attrs:{name:"Yo."}}),t._v(" "),t._m(0)],1)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"content-body"},[e("p",[t._v("This site is for "),e("em",[t._v("you")]),t._v(". Anything I (Alex Hinds) went over in a tutorial or lab or anything I think might be useful should appear here.\n         This is the fifth straight semester I've tutored COMP1511 and the first I've done COMP1521.")]),e("br"),t._v(" "),e("p",[t._v("If you've got a question please send me an email, or better yet ask it in class.\n         This site is enitrely my own and is intended to support and complement the resources already provided on "),e("a",{attrs:{href:"https://webcms3.cse.unsw.edu.au/"}},[t._v("WebCMS3")]),t._v(".")])])}],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";function i(t){e(38)}var r=e(11),a=e(39),s=e(0),o=i,c=s(r.a,a.a,!1,o,"data-v-9783a978",null);n.a=c.exports},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"content"},[e("section-header",{attrs:{name:t.course}}),t._v(" "),t._l(t.classes,function(n){return e("div",[e("router-link",{attrs:{to:{name:"Class",params:{class:n.path}}}},[t._v("\n         "+t._s(n.name)+"\n      ")])],1)}),t._v(" "),e("article",{staticClass:"content-body"},[e("p",[t._v(t._s(t.copy))])])],2)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";function i(t){e(41)}var r=e(12),a=e(45),s=e(0),o=i,c=s(r.a,a.a,!1,o,"data-v-24d81358",null);n.a=c.exports},function(t,n){},function(t,n,e){"use strict";function i(t){e(43)}var r=e(13),a=e(44),s=e(0),o=i,c=s(r.a,a.a,!1,o,"data-v-1c0afa5e",null);n.a=c.exports},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("h4",[t._v("Week "+t._s(t.number+1))]),t._v(" "),e("p",[t._v(t._s(t.meta.description))]),t._v(" "),e("router-link",{attrs:{to:{name:"Lab",params:{week:this.link}}}},[t._v("More")])],1)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"labs"},[e("section-header",{attrs:{name:"labs"}}),t._v(" "),e("h3",[t._v(t._s(this.meta.description))]),t._v(" "),e("section",{staticClass:"lab-cards"},t._l(t.labs,function(t,n){return e("card",{key:t.path,attrs:{link:t.path,meta:t.meta,number:n}})}))],1)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";function i(t){e(47)}var r=e(14),a=e(49),s=e(0),o=i,c=s(r.a,a.a,!1,o,null,null);n.a=c.exports},function(t,n){},,function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"labs"},[e("section-header",{attrs:{name:t.week}}),t._v(" "),t._l(t.files,function(n){return e("article",[e("h3",[t._v(t._s(n.path))]),t._v(" "),e("pre",[e("code",{staticClass:"language-c"},[t._v(t._s(n.content))])])])})],2)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n){},function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n,i){return e("path",t._b({key:"path-"+i},"path",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n,i){return e("polygon",t._b({key:"polygon-"+i},"polygon",n,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[e("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},r=[],a={render:i,staticRenderFns:r};n.a=a},function(t,n,e){"use strict";e(53),e(54),e(55),e(56),e(57)},,,,,,function(t,n){}],[16]);
//# sourceMappingURL=app.b2c55b66419a303d9bd0.js.map