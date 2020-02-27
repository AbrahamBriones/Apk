(function framework7ComponentLoader(a,e){void 0===e&&(e=!0);document;var s=window,d=a.$,t=(a.Template7,a.utils),l=(a.device,a.support,a.Class,a.Modal,a.ConstructorMethods,a.ModalMethods,{destroy:function(a){var e=d(a).closest(".page");e.length&&e[0].f7LazyDestroy&&e[0].f7LazyDestroy()},create:function(a){var e=this,t=d(a).closest(".page").eq(0),l=t.find(".lazy");if(0!==l.length||t.hasClass("lazy")){var o=e.params.lazy.placeholder;!1!==o&&l.each(function(a,e){d(e).attr("data-src")&&!d(e).attr("src")&&d(e).attr("src",o)});var n=[],r=!1;t[0].f7LazyDestroy||(t[0].f7LazyDestroy=function(){t[0].f7LazyAttached=!1,delete t[0].f7LazyAttached,t.off("lazy",i),t.off("scroll",i,!0),t.find(".tab").off("tab:mounted tab:show",i),e.off("resize",i)}),t[0].f7LazyAttached||(t[0].f7LazyAttached=!0,t.on("lazy",i),t.on("scroll",i,!0),t.find(".tab").on("tab:mounted tab:show",i),e.on("resize",i)),i()}function s(a){0<=n.indexOf(a)&&n.splice(n.indexOf(a),1),r=!1,e.params.lazy.sequential&&0<n.length&&(r=!0,e.lazy.loadImage(n[0],s))}function i(){e.lazy.load(t,function(a){e.params.lazy.sequential&&r?n.indexOf(a)<0&&n.push(a):(r=!0,e.lazy.loadImage(a,s))})}},isInViewport:function(a){var e=this,t=a.getBoundingClientRect(),l=e.params.lazy.threshold||0;return t.top>=0-l&&t.left>=0-l&&t.top<=e.height+l&&t.left<=e.width+l},loadImage:function(a,e){var t=this,l=d(a),o=l.attr("data-background"),n=o||l.attr("data-src");if(n){var r=new s.Image;r.onload=function(){l.removeClass("lazy").addClass("lazy-loaded"),o?l.css("background-image","url("+n+")"):l.attr("src",n),e&&e(a),l.trigger("lazy:loaded"),t.emit("lazyLoaded",l[0])},r.onerror=function(){l.removeClass("lazy").addClass("lazy-loaded"),o?l.css("background-image","url("+(t.params.lazy.placeholder||"")+")"):l.attr("src",t.params.lazy.placeholder||""),e&&e(a),l.trigger("lazy:error"),t.emit("lazyError",l[0])},r.src=n,l.removeAttr("data-src").removeAttr("data-background"),l.trigger("lazy:load"),t.emit("lazyLoad",l[0])}},load:function(a,t){var l=this,e=d(a);e.hasClass("page")||(e=e.parents(".page").eq(0)),0!==e.length&&e.find(".lazy").each(function(a,e){0<d(e).parents(".tab:not(.tab-active)").length||l.lazy.isInViewport(e)&&(t?t(e):l.lazy.loadImage(e))})}}),o={name:"lazy",params:{lazy:{placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",threshold:0,sequential:!0}},create:function(){var a=this;t.extend(a,{lazy:{create:l.create.bind(a),destroy:l.destroy.bind(a),loadImage:l.loadImage.bind(a),load:l.load.bind(a),isInViewport:l.isInViewport.bind(a)}})},on:{pageInit:function(a){(0<a.$el.find(".lazy").length||a.$el.hasClass("lazy"))&&this.lazy.create(a.$el)},pageAfterIn:function(a){(0<a.$el.find(".lazy").length||a.$el.hasClass("lazy"))&&this.lazy.create(a.$el)},pageBeforeRemove:function(a){(0<a.$el.find(".lazy").length||a.$el.hasClass("lazy"))&&this.lazy.destroy(a.$el)},tabMounted:function(a){var e=d(a);(0<e.find(".lazy").length||e.hasClass("lazy"))&&this.lazy.create(e)},tabBeforeRemove:function(a){var e=d(a);(0<e.find(".lazy").length||e.hasClass("lazy"))&&this.lazy.destroy(e)}}};if(e){if(a.prototype.modules&&a.prototype.modules[o.name])return;a.use(o),a.instance&&(a.instance.useModuleParams(o,a.instance.params),a.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))