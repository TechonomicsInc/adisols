define(["jquery"],function(r){function t(i){var n=r(i.elem),e=n.find(".j-sc-dynamic-more"),c=n.find(".j-sc-dynamic-list"),t=c.data("cs-list");t&&c.html(t);var o=c.find(".js-cs-dynamic-item"),s=+c.data("per-page"),a=o.length,d=0,f=function(t){d!==(t=a<t?a:t)&&(o.each(function(i,n){var e=i+1,c=r(n);e<=t?c.fadeIn():c.hide()}),(d=t)===a&&e.hide())};f(s),c.show(),e.on("click",function(){if("undefined"!=typeof _paq){var i=d+1+"-"+(a<d+s?a:d+s);_paq.push(["trackEvent","More case studies","More case studies: click","More case studies: click: "+i])}f(d+s)})}return function(i){if(r(i.elem).find(".j-sc-dynamic-list").data("cs-list")){var n=r(i.elem).find(".j-sc-dynamic-bottom"),e=!1;c()?t(i):r(window).on("scroll",function(){!e&&c()&&(e=!0,t(i))})}else t(i);function c(){return n.position().top-(r(window).scrollTop()+r(window).height())<300}}});