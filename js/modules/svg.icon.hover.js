define(["jquery"],function(){return function(n){!function u(i){var n=i.elem,t=i.options.colorActive,o=i.options.colorPassive,c=a(n),e=l.bind(n,c,t),s=l.bind(n,c,o);function a(n){var t=$(n).find(".a-tabs-icons__svg")[0].contentDocument;return $(t).find("#Fill-2")}function l(n,t){$(this).hasClass("active")&&(t=i.options.colorActive),n.attr("fill",t)}a(n),$(n).hasClass("active")?e():s(),$(n).on({mouseenter:function(){e()},mouseleave:function(){s()},click:function(){$(".a-tabs-icons__tabs-label").each(function(n,t){a(t).attr("fill",o)}),e()}})}(n)}});
//# sourceMappingURL=svg.icon.hover.js.map