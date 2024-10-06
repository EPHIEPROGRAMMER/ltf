"use strict";window.theme={},function(t,i){t=t||{};function n(t,e){return this.initialize(t,e)}var s="__animate";n.defaults={accX:0,accY:-150,delay:1},n.prototype={initialize:function(t,e){return t.data(s)||(this.$el=t,this.setData().setOptions(e).build()),this},setData:function(){return this.$el.data(s,this),this},setOptions:function(t){return this.options=i.extend(!0,{},n.defaults,t,{wrapper:this.$el}),this},build:function(){var t=this,e=this.options.wrapper,n=0;return e.addClass("appear-animation"),!i("html").hasClass("no-csstransitions")&&767<i(window).width()?e.appear(function(){1<(n=e.attr("data-appear-animation-delay")?e.attr("data-appear-animation-delay"):t.options.delay)&&e.css("animation-delay",n+"ms"),e.addClass(e.attr("data-appear-animation")),setTimeout(function(){e.addClass("appear-animation-visible")},n)},{accX:t.options.accX,accY:t.options.accY}):e.addClass("appear-animation-visible"),this}},i.extend(t,{PluginAnimate:n}),i.fn.themePluginAnimate=function(e){return this.map(function(){var t=i(this);return t.data(s)?t.data(s):new n(t,e)})}}.apply(void 0,[window.theme,jQuery]),function(t,n){t=t||{};function i(t,e){return this.initialize(t,e)}var s="__lazyload";i.defaults={effect:"fadeIn"},i.prototype={initialize:function(t,e){return t.data(s)||(this.$el=t,this.setData().setOptions(e).build()),this},setData:function(){return this.$el.data(s,this),this},setOptions:function(t){return this.options=n.extend(!0,{},i.defaults,t,{wrapper:this.$el}),this},build:function(){if(!n.isFunction(n.fn.lazyload))return this;return this.options.wrapper.lazyload(this.options),this}},n.extend(t,{PluginLazyLoad:i}),n.fn.themePluginLazyLoad=function(e){return this.map(function(){var t=n(this);return t.data(s)?t.data(s):new i(t,e)})}}.apply(void 0,[window.theme,jQuery]),function(t,e){t=t||{},e.extend(t,{PluginParallax:{defaults:{itemsSelector:".parallax",responsive:!0,horizontalScrolling:!1},initialize:function(t){return this.setOptions(t).build(),this},setOptions:function(t){return this.options=e.extend(!0,{},this.defaults,t),this},build:function(){if(!e(this.options.itemsSelector).get(0)||!e.isFunction(e.fn.stellar)||void 0===Modernizr.touch)return this;return e.browser.mobile?e(this.options.itemsSelector).addClass("parallax-disabled"):e.stellar(this.options),this}}})}.apply(void 0,[window.theme,jQuery]),function(t,n){t=t||{};n.extend(t,{PluginScrollToTop:{defaults:{wrapper:n("body"),offset:150,buttonClass:"scroll-to-top",iconClass:"fa fa-chevron-up",delay:1e3,visibleMobile:!1,label:!1,easing:"easeOutBack"},initialize:function(t){return this.setOptions(t).build().events(),this},setOptions:function(t){return this.options=n.extend(!0,{},this.defaults,t),this},build:function(){var t,e=this;return t=n("<a />").addClass(e.options.buttonClass).attr({href:"#"}).append(n("<i />").addClass(e.options.iconClass)),e.options.visibleMobile||t.addClass("hidden-mobile"),e.options.label&&t.append(n("<span />").html(e.options.label)),this.options.wrapper.append(t),this.$el=t,this},events:function(){var e=this,t=!1;return e.$el.on("click",function(t){return t.preventDefault(),n("body, html").animate({scrollTop:0},e.options.delay,e.options.easing),!1}),n(window).scroll(function(){t||(t=!0,t=(n(window).scrollTop()>e.options.offset?e.$el.stop(!0,!0).addClass("visible"):e.$el.stop(!0,!0).removeClass("visible"),!1))}),this}}})}.apply(void 0,[window.theme,jQuery]),function(t,n){t=t||{};function i(t,e){return this.initialize(t,e)}var s="__sticky";i.defaults={minWidth:991,activeClass:"sticky-active"},i.prototype={initialize:function(t,e){return t.data(s)||(this.$el=t,this.setData().setOptions(e).build()),this},setData:function(){return this.$el.data(s,this),this},setOptions:function(t){return this.options=n.extend(!0,{},i.defaults,t,{wrapper:this.$el}),this},build:function(){return n.isFunction(n.fn.pin)&&this.options.wrapper.pin(this.options),this}},n.extend(t,{PluginSticky:i}),n.fn.themePluginSticky=function(e){return this.map(function(){var t=n(this);return t.data(s)?t.data(s):new i(t,e)})}}.apply(void 0,[window.theme,jQuery]),function(t,c){t=t||{};function n(t,e){return this.initialize(t,e)}var i="__toggle";n.defaults={duration:350,isAccordion:!1},n.prototype={initialize:function(t,e){return t.data(i)||(this.$el=t,this.setData().setOptions(e).build()),this},setData:function(){return this.$el.data(i,this),this},setOptions:function(t){return this.options=c.extend(!0,{},n.defaults,t,{wrapper:this.$el}),this},build:function(){var t=this,e=this.options.wrapper.find(".toggle"),n=null;return e.each(function(){(n=c(this)).hasClass("active")&&(n.find("> p").addClass("preview-active"),n.find("> .toggle-content").slideDown(t.options.duration)),t.events(n)}),t.options.isAccordion&&(t.options.duration=t.options.duration/2),this},events:function(t){var o=this,r=0,l=0,d=null;t.find("> label").click(function(t){var e=c(this),n=e.parent(),i=e.parents(".toggle"),s=null,a=null;o.options.isAccordion&&void 0!==t.originalEvent&&(a=i.find(".toggle.active > label"))[0]==e[0]||(n.toggleClass("active"),n.find("> p").get(0)&&(s=n.find("> p"),r=s.css("height"),s.css("height","auto"),l=s.css("height"),s.css("height",r)),d=n.find("> .toggle-content"),n.hasClass("active")?(c(s).animate({height:l},o.options.duration,function(){c(this).addClass("preview-active")}),d.slideDown(o.options.duration,function(){a&&a.trigger("click")})):(c(s).animate({height:0},o.options.duration,function(){c(this).removeClass("preview-active")}),d.slideUp(o.options.duration)))})}},c.extend(t,{PluginToggle:n}),c.fn.themePluginToggle=function(e){return this.map(function(){var t=c(this);return t.data(i)?t.data(i):new n(t,e)})}}.apply(void 0,[window.theme,jQuery]),function(t,p){t=t||{};var n=!1;p.extend(t,{StickyHeader:{defaults:{wrapper:p("#header"),headerBody:p("#header .header-body"),stickyEnabled:!0,stickyEnableOnBoxed:!0,stickyEnableOnMobile:!0,stickyStartAt:0,stickyStartAtElement:!1,stickySetTop:0,stickyChangeLogo:!1,stickyChangeLogoWrapper:!0},initialize:function(t,e){return n||(n=!0,this.$wrapper=t||this.defaults.wrapper,this.setOptions(e).build().events()),this},setOptions:function(t){return this.options=p.extend(!0,{},this.defaults,t,this.$wrapper.data("plugin-options")),this},build:function(){if(!this.options.stickyEnableOnBoxed&&p("html").hasClass("boxed")||!this.options.stickyEnabled)return this;var t=this,e=p("html"),n=p(window),i=e.hasClass("side-header");if(e.addClass("sticky-header-enabled"),parseInt(t.options.stickySetTop)<0&&e.addClass("sticky-header-negative"),t.options.stickyStartAtElement){var s=p(t.options.stickyStartAtElement);p(window).on("scroll resize",function(){t.options.stickyStartAt=s.offset().top}),p(window).trigger("resize")}if(e.hasClass("boxed")&&0==parseInt(t.options.stickyStartAt)&&991<n.width()&&(t.options.stickyStartAt=30),t.options.wrapper.css("min-height",t.options.wrapper.height()),t.checkStickyHeader=function(){n.scrollTop()>=parseInt(t.options.stickyStartAt)?t.activateStickyHeader():t.deactivateStickyHeader()},t.activateStickyHeader=function(){if(n.width()<992){if(!t.options.stickyEnableOnMobile)return void t.deactivateStickyHeader()}else if(i)return void t.deactivateStickyHeader();e.addClass("sticky-header-active"),t.options.headerBody.css("top",t.options.stickySetTop),t.options.stickyChangeLogo&&t.changeLogo(!0),p.event.trigger({type:"stickyHeader.activate"})},t.deactivateStickyHeader=function(){e.removeClass("sticky-header-active"),t.options.headerBody.css("top",0),t.options.stickyChangeLogo&&t.changeLogo(!1),p.event.trigger({type:"stickyHeader.deactivate"})},parseInt(t.options.stickyStartAt)<=0&&t.activateStickyHeader(),t.options.stickyChangeLogo){var a=t.options.wrapper.find(".header-logo"),o=a.find("img"),r=p(".mobile-menu-link"),l=p(".header-nav-mobile li.header-phone-link-wrap"),d=p(".lite-15year"),c=p(".lite-15year img");t.options.stickyChangeLogoWrapper&&a.css({height:o.outerHeight(!0)}),t.changeLogo=function(t){t?(r.css({top:48}),o.css({top:37,height:44,width:150}),l.css({display:"none"}),d.css({top:65,left:180}),c.css({height:40,width:29})):(r.css({top:25}),o.css({top:0,height:62,width:212}),l.css({display:"block"}),d.css({top:35,left:240}),c.css({height:62,width:45}))}}return this},events:function(){var t=this;return!this.options.stickyEnableOnBoxed&&p("body").hasClass("boxed")||!this.options.stickyEnabled||(t.options.alwaysStickyEnabled?t.activateStickyHeader():p(window).on("scroll resize",function(){t.checkStickyHeader()})),this}}})}.apply(void 0,[window.theme,jQuery]),function(t){void 0!==theme.PluginScrollToTop&&theme.PluginScrollToTop.initialize(),void 0!==theme.PluginParallax&&theme.PluginParallax.initialize()}.apply(void 0,[jQuery]),function(i){i.isFunction(i.fn.themePluginAnimate)&&i(function(){i("[data-plugin-animate], [data-appear-animation]").each(function(){var t,e=i(this),n=e.data("plugin-options");n&&(t=n),e.themePluginAnimate(t)})})}.apply(void 0,[jQuery]),function(i){i.isFunction(i.fn.themePluginSticky)&&i(function(){i("[data-plugin-sticky]:not(.manual)").each(function(){var t,e=i(this),n=e.data("plugin-options");n&&(t=n),e.themePluginSticky(t)})})}.apply(void 0,[jQuery]),function(t){void 0!==theme.StickyHeader&&theme.StickyHeader.initialize(),void 0!==theme.Nav&&theme.Nav.initialize()}.apply(void 0,[jQuery]),function(d){var c,p,a,t,h="mmenu";d[h]&&"5.7.2"<d[h].version||(d[h]=function(t,e,n){this.$menu=t,this._api=["bind","initPanels","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=e,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var i=this.$pnls.children();return this._initAddons(),this.initPanels(i),"function"==typeof this.___debug&&this.___debug(),this},d[h].version="5.7.2",d[h].addons={},d[h].uniqueId=0,d[h].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},d[h].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},d[h].prototype={init:function(t){this.initPanels(t)},initPanels:function(t){t=t.not("."+c.nopanel),t=this._initPanels(t),this.opts.initPanels.call(this,t),this.trigger("initPanels",t),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(t){this.$menu.find("."+c.listview).children().removeClass(c.selected),t.addClass(c.selected),this.trigger("setSelected",t)},openPanel:function(t){var e=t.parent(),n=this;if(e.hasClass(c.vertical)){var i=e.parents("."+c.subopened);if(i.length)return void this.openPanel(i.first());e.addClass(c.opened),this.trigger("openPanel",t),this.trigger("openingPanel",t),this.trigger("openedPanel",t)}else{if(t.hasClass(c.current))return;var s=this.$pnls.children("."+c.panel),a=s.filter("."+c.current);s.removeClass(c.highest).removeClass(c.current).not(t).not(a).not("."+c.vertical).addClass(c.hidden),d[h].support.csstransitions||a.addClass(c.hidden),t.hasClass(c.opened)?t.nextAll("."+c.opened).addClass(c.highest).removeClass(c.opened).removeClass(c.subopened):(t.addClass(c.highest),a.addClass(c.subopened)),t.removeClass(c.hidden).addClass(c.current),n.trigger("openPanel",t),setTimeout(function(){t.removeClass(c.subopened).addClass(c.opened),n.trigger("openingPanel",t),n.__transitionend(t,function(){n.trigger("openedPanel",t)},n.conf.transitionDuration)},this.conf.openingInterval)}},closePanel:function(t){var e=t.parent();e.hasClass(c.vertical)&&(e.removeClass(c.opened),this.trigger("closePanel",t),this.trigger("closingPanel",t),this.trigger("closedPanel",t))},closeAllPanels:function(){this.$menu.find("."+c.listview).children().removeClass(c.selected).filter("."+c.vertical).removeClass(c.opened);var t=this.$pnls.children("."+c.panel).first();this.$pnls.children("."+c.panel).not(t).removeClass(c.subopened).removeClass(c.opened).removeClass(c.current).removeClass(c.highest).addClass(c.hidden),this.openPanel(t)},togglePanel:function(t){var e=t.parent();e.hasClass(c.vertical)&&this[e.hasClass(c.opened)?"closePanel":"openPanel"](t)},getInstance:function(){return this},bind:function(t,e){t="init"==t?"initPanels":t,this.cbck[t]=this.cbck[t]||[],this.cbck[t].push(e)},trigger:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(e="init"==e?"initPanels":e,this.cbck[e])for(var n=0,i=this.cbck[e].length;n<i;n++)this.cbck[e][n].apply(this,t)},_initMenu:function(){this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){d(this).attr("id",c.mm(d(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=d('<div class="'+c.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(c.wrapper);var t=[c.menu];this.opts.slidingSubmenus||t.push(c.vertical),this.opts.extensions=this.opts.extensions.length?"lf-"+this.opts.extensions.join(" lf-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" "))},_initPanels:function(t){var l=this,e=this.__findAddBack(t,"ul, ol");this.__refactorClass(e,this.conf.classNames.inset,"inset").addClass(c.nolistview+" "+c.nopanel),e.not("."+c.nolistview).addClass(c.listview);var n=this.__findAddBack(t,"."+c.listview).children();this.__refactorClass(n,this.conf.classNames.selected,"selected"),this.__refactorClass(n,this.conf.classNames.divider,"divider"),this.__refactorClass(n,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var i=d(),s=t.add(t.find("."+c.panel)).add(this.__findAddBack(t,"."+c.listview).children().children(this.conf.panelNodetype)).not("."+c.nopanel);this.__refactorClass(s,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||s.addClass(c.vertical),s.each(function(){var t=d(this),e=t;t.is("ul, ol")?(t.wrap('<div class="'+c.panel+'" />'),e=t.parent()):e.addClass(c.panel);var n=t.attr("id");t.removeAttr("id"),e.attr("id",n||l.__getUniqueId()),t.hasClass(c.vertical)&&(t.removeClass(l.conf.classNames.vertical),e.add(e.parent()).addClass(c.vertical)),i=i.add(e)});var a=d("."+c.panel,this.$menu);$("#lf-menu ul.dropdown-mega-sub-nav").contents().unwrap(),$("#lf-menu div.sub-container").contents().unwrap(),$("#lf-menu div.menu-container").contents().unwrap(),$("#lf-menu div.row").contents().unwrap(),$("#lf-menu div.dropdown-mega-content").contents().unwrap(),i.each(function(t){var e,n,i=d(this),s=i.parent(),a=s.children("a, span").first();if(s.is("."+c.panels)||(s.data(p.child,i),i.data(p.parent,s)),s.children("."+c.next).length||s.parent().is("."+c.listview)&&(e=i.attr("id"),n=d('<a class="'+c.next+'" href="#'+e+'" data-target="#'+e+'" />').insertBefore(a),a.is("span")&&n.addClass(c.fullsubopen)),!i.children("."+c.navbar).length&&!s.hasClass(c.vertical)){s=s.parent().is("."+c.listview)?s.closest("."+c.panel):(a=s.closest("."+c.panel).find('a[href="#'+i.attr("id")+'"]').first()).closest("."+c.panel);var o=!1,r=d('<div class="'+c.navbar+'" />');if(l.opts.navbar.add&&i.addClass(c.hasnavbar),s.length){switch(e=s.attr("id"),l.opts.navbar.titleLink){case"anchor":o=a.attr("href");break;case"panel":case"parent":o="#"+e;break;default:o=!1}r.append('<a class="'+c.btn+" "+c.prev+'" href="#'+e+'" data-target="#'+e+'" />').append(d('<a class="'+c.title+'"'+(o?' href="'+o+'"':"")+" />").text(a.text())).prependTo(i)}else l.opts.navbar.title&&r.append('<a class="'+c.title+'">'+l.opts.navbar.title+"</a>").prependTo(i)}});var o=this.__findAddBack(t,"."+c.listview).children("."+c.selected).removeClass(c.selected).last().addClass(c.selected);o.add(o.parentsUntil("."+c.menu,"li")).filter("."+c.vertical).addClass(c.opened).end().each(function(){d(this).parentsUntil("."+c.menu,"."+c.panel).not("."+c.vertical).first().addClass(c.opened).parentsUntil("."+c.menu,"."+c.panel).not("."+c.vertical).first().addClass(c.opened).addClass(c.subopened)}),o.children("."+c.panel).not("."+c.vertical).addClass(c.opened).parentsUntil("."+c.menu,"."+c.panel).not("."+c.vertical).first().addClass(c.opened).addClass(c.subopened);var r=a.filter("."+c.opened);return r.length||(r=i.first()),r.addClass(c.opened).last().addClass(c.current),i.not("."+c.vertical).not(r.last()).addClass(c.hidden).end().filter(function(){return!d(this).parent().hasClass(c.panels)}).appendTo(this.$pnls),i},_initAnchors:function(){var l=this;t.$body.on(a.click+"-oncanvas","a[href]",function(t){var e=d(this),n=!1,i=l.$menu.find(e).length;for(var s in d[h].addons)if(d[h].addons[s].clickAnchor.call(l,e,i)){n=!0;break}var a=e.attr("href");if(!n&&i&&1<a.length&&"#"==a.slice(0,1))try{var o=d(a,l.$menu);o.is("."+c.panel)&&(n=!0,l[e.parent().hasClass(c.vertical)?"togglePanel":"openPanel"](o))}catch(t){}if(n&&t.preventDefault(),!n&&i&&e.is("."+c.listview+" > li > a")&&!e.is('[rel="external"]')&&!e.is('[target="_blank"]')){l.__valueOrFn(l.opts.onClick.setSelected,e)&&l.setSelected(d(t.target).parent());var r=l.__valueOrFn(l.opts.onClick.preventDefault,e,"#"==a.slice(0,1));r&&t.preventDefault(),l.__valueOrFn(l.opts.onClick.close,e,r)&&l.close()}})},_initAddons:function(){var t;for(t in d[h].addons)d[h].addons[t].add.call(this),d[h].addons[t].add=function(){};for(t in d[h].addons)d[h].addons[t].setup.call(this)},_getOriginalMenuId:function(){var t=this.$menu.attr("id");return t&&t.length&&this.conf.clone&&(t=c.umm(t)),t},__api:function(){var n=this,i={};return d.each(this._api,function(t){var e=this;i[e]=function(){var t=n[e].apply(n,arguments);return void 0===t?i:t}}),i},__valueOrFn:function(t,e,n){return"function"==typeof t?t.call(e[0]):void 0===t&&void 0!==n?n:t},__refactorClass:function(t,e,n){return t.filter("."+e).removeClass(e).addClass(c[n])},__findAddBack:function(t,e){return t.find(e).add(t.filter(e))},__filterListItems:function(t){return t.not("."+c.divider).not("."+c.hidden)},__transitionend:function(e,n,t){function i(t){if(void 0!==t){if(!d(t.target).is(e))return!1;e.unbind(a.transitionend),e.unbind(a.webkitTransitionEnd)}s||n.call(e[0]),s=!0}var s=!1;e.on(a.transitionend,i),e.on(a.webkitTransitionEnd,i),setTimeout(i,1.1*t)},__getUniqueId:function(){return c.mm(d[h].uniqueId++)}},d.fn[h]=function(n,i){return d[h].glbl||(t={$wndw:d(window),$docu:d(document),$html:d("html"),$body:d("body")},c={},p={},a={},d.each([c,p,a],function(t,i){i.add=function(t){for(var e=0,n=(t=t.split(" ")).length;e<n;e++)i[t[e]]=i.mm(t[e])}}),c.mm=function(t){return"lf-"+t},c.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),c.umm=function(t){return"lf-"==t.slice(0,3)&&(t=t.slice(3)),t},p.mm=function(t){return"lf-"+t},p.add("parent child"),a.mm=function(t){return t+".mm"},a.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"),d[h]._c=c,d[h]._d=p,d[h]._e=a,d[h].glbl=t),n=d.extend(!0,{},d[h].defaults,n),i=d.extend(!0,{},d[h].configuration,i),this.each(function(){var t=d(this);if(!t.data(h)){var e=new d[h](t,n,i);e.$menu.data(h,e.__api())}})},d[h].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){if("undefined"!=typeof Modernizr&&void 0!==Modernizr.csstransitions)return Modernizr.csstransitions;var t=(document.body||document.documentElement).style,e="transition";if("string"==typeof t[e])return!0;var n=["Moz","webkit","Webkit","Khtml","O","ms"];e=e.charAt(0).toUpperCase()+e.substr(1);for(var i=0;i<n.length;i++)if("string"==typeof t[n[i]+e])return!0;return!1}(),csstransforms:"undefined"==typeof Modernizr||void 0===Modernizr.csstransforms||Modernizr.csstransforms,csstransforms3d:"undefined"==typeof Modernizr||void 0===Modernizr.csstransforms3d||Modernizr.csstransforms3d})}(jQuery),function(a){var o,i,s,r,l="mmenu",d="offCanvas";a[l].addons[d]={setup:function(){if(this.opts[d]){var t=this.opts[d],e=this.conf[d];r=a[l].glbl,this._api=a.merge(this._api,["open","close","setPage"]),"top"!=t.position&&"bottom"!=t.position||(t.zposition="front"),"string"!=typeof e.pageSelector&&(e.pageSelector="> "+e.pageNodetype),r.$allMenus=(r.$allMenus||a()).add(this.$menu),this.vars.opened=!1;var n=[o.offcanvas];"left"!=t.position&&n.push(o.mm(t.position)),"back"!=t.zposition&&n.push(o.mm(t.zposition)),this.$menu.addClass(n.join(" ")).parent().removeClass(o.wrapper),a[l].support.csstransforms||this.$menu.addClass(o["no-csstransforms"]),a[l].support.csstransforms3d||this.$menu.addClass(o["no-csstransforms3d"]),this.setPage(r.$page),this._initBlocker(),this["_initWindow_"+d](),this.$menu[e.menuInjectMethod+"To"](e.menuWrapperSelector);var i=window.location.hash;if(i){var s=this._getOriginalMenuId();s&&s==i.slice(1)&&this.open()}}},add:function(){o=a[l]._c,i=a[l]._d,s=a[l]._e,o.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),i.add("style"),s.add("resize")},clickAnchor:function(t){if(!this.opts[d])return!1;var e=this._getOriginalMenuId();return e&&t.is('[href="#'+e+'"]')?(this.open(),!0):r.$page?!(!(e=r.$page.first().attr("id"))||!t.is('[href="#'+e+'"]'))&&(this.close(),!0):void 0}},a[l].defaults[d]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},a[l].configuration[d]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},a[l].prototype.open=function(){if(!this.vars.opened){var t=this;this._openSetup(),setTimeout(function(){t._openFinish()},this.conf.openingInterval),this.trigger("open")}},a[l].prototype._openSetup=function(){var t=this,e=this.opts[d];this.closeAllOthers(),r.$page.each(function(){a(this).data(i.style,a(this).attr("style")||"")}),r.$wndw.trigger(s.resize+"-"+d,[!0]);var n=[o.opened];e.blockUI&&n.push(o.blocking),"modal"==e.blockUI&&n.push(o.modal),e.moveBackground&&n.push(o.background),"left"!=e.position&&n.push(o.mm(this.opts[d].position)),"back"!=e.zposition&&n.push(o.mm(this.opts[d].zposition)),this.opts.extensions&&n.push(this.opts.extensions),r.$html.addClass(n.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(o.current+" "+o.opened)},a[l].prototype._openFinish=function(){var t=this;this.__transitionend(r.$page.first(),function(){t.trigger("opened")},this.conf.transitionDuration),r.$html.addClass(o.opening),this.trigger("opening")},a[l].prototype.close=function(){if(this.vars.opened){var t=this;this.__transitionend(r.$page.first(),function(){t.$menu.removeClass(o.current).removeClass(o.opened),r.$html.removeClass(o.opened).removeClass(o.blocking).removeClass(o.modal).removeClass(o.background).removeClass(o.mm(t.opts[d].position)).removeClass(o.mm(t.opts[d].zposition)),t.opts.extensions&&r.$html.removeClass(t.opts.extensions),r.$page.each(function(){a(this).attr("style",a(this).data(i.style))}),t.vars.opened=!1,t.trigger("closed")},this.conf.transitionDuration),r.$html.removeClass(o.opening),this.trigger("close"),this.trigger("closing")}},a[l].prototype.closeAllOthers=function(){r.$allMenus.not(this.$menu).each(function(){var t=a(this).data(l);t&&t.close&&t.close()})},a[l].prototype.setPage=function(t){var e=this,n=this.conf[d];t&&t.length||(t=r.$body.find(n.pageSelector),n.noPageSelector.length&&(t=t.not(n.noPageSelector.join(", "))),1<t.length&&n.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[d].pageNodetype+" />").parent())),t.each(function(){a(this).attr("id",a(this).attr("id")||e.__getUniqueId())}),t.addClass(o.page+" "+o.slideout),r.$page=t,this.trigger("setPage",t)},a[l].prototype["_initWindow_"+d]=function(){r.$wndw.off(s.keydown+"-"+d).on(s.keydown+"-"+d,function(t){return r.$html.hasClass(o.opened)&&9==t.keyCode?(t.preventDefault(),!1):void 0});var i=0;r.$wndw.off(s.resize+"-"+d).on(s.resize+"-"+d,function(t,e){if(1==r.$page.length&&(e||r.$html.hasClass(o.opened))){var n=r.$wndw.height();!e&&n==i||(i=n,r.$page.css("minHeight",n))}})},a[l].prototype._initBlocker=function(){var e=this;this.opts[d].blockUI&&(r.$blck||(r.$blck=a('<div id="'+o.blocker+'" class="'+o.slideout+'" />')),r.$blck.appendTo(r.$body).off(s.touchstart+"-"+d+" "+s.touchmove+"-"+d).on(s.touchstart+"-"+d+" "+s.touchmove+"-"+d,function(t){t.preventDefault(),t.stopPropagation(),r.$blck.trigger(s.mousedown+"-"+d)}).off(s.mousedown+"-"+d).on(s.mousedown+"-"+d,function(t){t.preventDefault(),r.$html.hasClass(o.modal)||(e.closeAllOthers(),e.close())}))}}(jQuery),function(n){var t,i,s="mmenu",a="fixedElements";n[s].addons[a]={setup:function(){if(this.opts.offCanvas){var t=this.opts[a];this.conf[a],i=n[s].glbl,t=this.opts[a]=n.extend(!0,{},n[s].defaults[a],t);var e=function(t){var e=this.conf.classNames[a].fixed;this.__refactorClass(t.find("."+e),e,"slideout").appendTo(i.$body)};e.call(this,i.$page),this.bind("setPage",e)}},add:function(){t=n[s]._c,n[s]._d,n[s]._e,t.add("fixed")},clickAnchor:function(){}},n[s].configuration.classNames[a]={fixed:"Fixed"}}(jQuery),function(t){var e="";switch(t("html").attr("lang")){case"ar":e="القائمة";break;case"de":e="Menü";break;case"es":e="Menú";break;case"fr":case"id":case"it":e="Menu";break;case"ka":e="მენიუ";break;case"ms":case"pl":case"pt":e="Menu";break;case"ru":e="Меню";break;case"th":e="เมนู";break;case"vi":e="Menu";break;case"zh":e="选单";break;case"fa":e="منو";break;default:e="Menu"}t("#menu").mmenu({offCanvas:{position:"right"},navbar:{title:e+' <a class="close-menu" href="#">&#x2716;</a>'},navbars:{position:"top"},scrollBugFix:{fix:!0},fixedElements:{fixed:"header"},extensions:["border-full"]},{clone:!0});var n=t("#lf-menu").data("mmenu");t(".close-menu").click(function(){n.close()}),t("#lf-menu .nav-pills").removeClass("nav-pills"),t("#lf-menu").find(".dropdown-menu").removeClass("dropdown-menu")}(window.jQuery);$(document).ready(function(){var notEu=!0;var isRtl=!1;if($('.header-body').hasClass('header-eu')){notEu=!1}var attr=$('body').attr('dir');if(typeof attr!=='undefined'&&attr=='rtl'){isRtl=!0}function setHeaderMenu(){var windowSize=$(window).width();var topLeftPart=$('.top-logo-part').width();var topRightPart=$('.top-info-part').width();var topHeaderMenu=$('.topmenu-block #mainNav').width();var insideSize=windowSize-topLeftPart-topRightPart-topHeaderMenu-50;var topRightPartLength;if(insideSize>0&&windowSize>991&&notEu==!0){if(!$('.new-header-site').hasClass('inTop')){topRightPartLength=topRightPart+30;$('.new-header-site').addClass('inTop');if(isRtl==!0){$('.topmenu-block').css('left',topRightPartLength+'px')}else{$('.topmenu-block').css('right',topRightPartLength+'px')}}}else{if($('.new-header-site').hasClass('inTop')){$('.new-header-site').removeClass('inTop');$('.topmenu-block').removeAttr('style')}}}$(window).resize(function(){setHeaderMenu()});setHeaderMenu()})