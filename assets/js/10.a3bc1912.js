(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{392:function(e,t,n){var i=n(1),s=n(3),r=n(121),a=[].slice,c=function(e){return function(t,n){var i=arguments.length>2,s=i?a.call(arguments,2):void 0;return e(i?function(){("function"==typeof t?t:Function(t)).apply(this,s)}:t,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:c(s.setTimeout),setInterval:c(s.setInterval)})},394:function(e,t,n){"use strict";var i=n(9),s=n(3),r=n(122),a=n(14),c=n(7),o=n(23),l=n(398),u=n(58),d=n(4),h=n(40),f=n(86).f,p=n(31).f,v=n(10).f,m=n(397).trim,I=s.Number,g=I.prototype,x="Number"==o(h(g)),S=function(e){var t,n,i,s,r,a,c,o,l=u(e,!1);if("string"==typeof l&&l.length>2)if(43===(t=(l=m(l)).charCodeAt(0))||45===t){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(a=(r=l.slice(2)).length,c=0;c<a;c++)if((o=r.charCodeAt(c))<48||o>s)return NaN;return parseInt(r,i)}return+l};if(r("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var y,T=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof T&&(x?d((function(){g.valueOf.call(n)})):"Number"!=o(n))?l(new I(S(t)),n,T):S(t)},_=i?f(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;_.length>b;b++)c(I,y=_[b])&&!c(T,y)&&v(T,y,p(I,y));T.prototype=g,g.constructor=T,a(s,"Number",T)}},396:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},397:function(e,t,n){var i=n(30),s="["+n(396)+"]",r=RegExp("^"+s+s+"*"),a=RegExp(s+s+"*$"),c=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(r,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},398:function(e,t,n){var i=n(5),s=n(123);e.exports=function(e,t,n){var r,a;return s&&"function"==typeof(r=t.constructor)&&r!==n&&i(a=r.prototype)&&a!==n.prototype&&s(e,a),e}},411:function(e,t,n){},412:function(e,t,n){},438:function(e,t,n){"use strict";var i=n(1),s=n(42),r=[].reverse,a=[1,2];i({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r.call(this)}})},439:function(e,t,n){"use strict";var i=n(411);n.n(i).a},440:function(e,t,n){"use strict";var i=n(412);n.n(i).a},443:function(e,t,n){"use strict";n(219),n(87),n(438),n(85),n(394),n(392);var i={name:"GuluCarousel",props:{selected:{type:String},autoPlay:{type:Boolean,default:!0},delay:{type:Number,default:3e3}},data:function(){return{player:null,lastSelectedIndex:-1,children:[],startTouch:null}},computed:{names:function(){return this.children.map((function(e){return e.name}))},selectedIndex:function(){return this.selected?this.names.indexOf(this.selected):0},lastIndex:function(){return this.children.length-1}},mounted:function(){this.initSelected(),this.autoPlay&&this.autoUpdateSelected()},updated:function(){this.autoChangeItem()},methods:{initSelected:function(){this.children=this.$children,this.selected||this.$emit("update:selected",this.children[0].name)},onClick:function(e){this.selectedIndex!==e&&(this.autoPlay&&this.stop(),this.manuallyUpdateSelected(e))},manuallyUpdateSelected:function(e){this.lastSelectedIndex=this.selectedIndex;var t=this.names[e];this.$emit("update:selected",t)},onMouseover:function(){this.autoPlay&&this.stop()},onMouseLeave:function(){this.autoPlay&&this.autoUpdateSelected()},onTouchstart:function(e){this.autoPlay&&this.stop();var t=e.touches;this.startTouch=t[0]},onTouchend:function(e){var t=this.startTouch,n=t.clientX,i=t.clientY,s=e.changedTouches[0],r=s.clientX,a=s.clientY;if(Math.sqrt(Math.pow(r-n,2)+Math.pow(a-i,2))/Math.abs(a-i)>=2)if(n-r>=0){var c=this.getNextIndex();this.manuallyUpdateSelected(c)}else{var o=this.getPrevIndex();this.manuallyUpdateSelected(o)}},getNextIndex:function(){return this.selectedIndex+1===this.children.length?0:this.selectedIndex+1},getPrevIndex:function(){return this.selectedIndex-1==-1?this.lastIndex:this.selectedIndex-1},autoUpdateSelected:function(){var e=this;if(!this.player){!function t(){e.player=setTimeout((function(){var n=e.getNextIndex();e.$emit("update:selected",e.children[n].name),t()}),e.delay)}()}},fromFirstToEnd:function(){return 0===this.lastSelectedIndex&&this.selectedIndex===this.lastIndex},fromBigToSmall:function(){return this.lastSelectedIndex>this.selectedIndex},fromEndToFirst:function(){return this.lastSelectedIndex===this.lastIndex&&0===this.selectedIndex},checkTransitionsDirection:function(){var e=this.fromFirstToEnd()||this.fromBigToSmall()&&!this.fromEndToFirst();this.children[this.lastSelectedIndex].reverse=e,this.children[this.selectedIndex].reverse=e},transitions:function(){this.lastSelectedIndex>=0&&this.children[this.lastSelectedIndex].triggerItem(),this.children[this.selectedIndex].triggerItem(),this.lastSelectedIndex=this.selectedIndex},autoChangeItem:function(){var e=this;this.lastSelectedIndex>=0&&this.checkTransitionsDirection(),this.$nextTick((function(){e.transitions(),e.autoPlay&&e.autoUpdateSelected()}))},stop:function(){clearTimeout(this.player),this.player=null}}},s=(n(439),n(57)),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-carousel",on:{mouseover:e.onMouseover,mouseleave:e.onMouseLeave}},[n("div",{ref:"itemsContainer",staticClass:"g-carousel-items-container",on:{touchstart:e.onTouchstart,touchend:e.onTouchend}},[e._t("default")],2),e._v(" "),n("div",{staticClass:"g-carousel-subscript"},e._l(e.children.length,(function(t){return n("span",{key:t-1,class:["g-carousel-subscript-item",{active:e.selectedIndex===t-1}],attrs:{"data-index":t-1},on:{click:function(n){return e.onClick(t-1)}}},[e._v(e._s(t-1))])})),0)])}),[],!1,null,"4d767e28",null);t.a=r.exports},444:function(e,t,n){"use strict";var i={name:"GuluCarouselItem",props:{name:{type:String,required:!0}},data:function(){return{visible:!1,reverse:!1,animationEnabled:!1}},updated:function(){var e=this;this.$nextTick((function(){e.animationEnabled=!0}))},methods:{triggerItem:function(){this.visible=!this.visible}}},s=(n(440),n(57)),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-carousel-item--wrapper"},[e.animationEnabled?[n("transition",{attrs:{name:"slide"}},[e.visible?n("div",{class:["g-carousel-item",{reverse:e.reverse}]},[e._t("default")],2):e._e()])]:[e.visible?n("div",{class:["g-carousel-item",{reverse:e.reverse}]},[e._t("default")],2):e._e()]],2)}),[],!1,null,"0e4c7639",null);t.a=r.exports},466:function(e,t,n){},545:function(e,t,n){"use strict";var i=n(466);n.n(i).a},597:function(e,t,n){"use strict";n.r(t);var i=n(443),s=n(444),r={components:{"g-carousel":i.a,"g-carousel-item":s.a},data:function(){return{carouselSelected:""}}},a=(n(545),n(57)),c=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{margin:"20px 0"}},[n("g-carousel",{attrs:{selected:e.carouselSelected,"auto-play":!1},on:{"update:selected":function(t){e.carouselSelected=t}}},[n("g-carousel-item",{attrs:{name:"1"}},[e._v("1")]),e._v(" "),n("g-carousel-item",{attrs:{name:"2"}},[e._v("2")]),e._v(" "),n("g-carousel-item",{attrs:{name:"3"}},[e._v("3")])],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);