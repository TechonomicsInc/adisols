define(["jquery"],function(){function n(e){var d=e.elem,o=80,s=44,f=$(d).find("a[name]"),l="text-highlighted";$(d).on("click",function(e){!function r(){var e=$(d).find(".a-service-cards_content-expand-text"),n=$(d).find(".a-service-cards_content-expand-title"),t=$("."+l),i=$(d).find(".a-service-cards_content-header").text();e.slideDown(1e3),f.length&&t.length&&function a(e){$([document.documentElement,document.body]).animate({scrollTop:e.offset().top-s-o/2},1500)}(t),n.css("color","#ffffff").removeClass("btn-arrow-down"),function c(e){if("undefined"!=typeof _paq){var n=["trackEvent","Editable: Wide-service-cards","Editable: Wide-service-cards: click","Editable: Wide-service-cards: expand:"+e];_paq.push(n)}}(i)}()}),f.length&&$.each(f,function(e,n){$(n).parent().hasClass(l)&&$(d).trigger("click"),new MutationObserver(function(){$(n).parent().hasClass(l)&&$(d).trigger("click")}).observe($(n).parent()[0],{attributes:!0})}),function n(){var e=$(d).find(".a-service-cards_content-link a").attr("href");$(d).find(".a-service-cards_content-link-wrap").attr("href",e)}()}return function(e){n(e)}});