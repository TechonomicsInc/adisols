define(["jquery","validate"],function(l){var u="hasError";l.fn.isInView=function(){var e=l(this).offset().top-71;return l(window).scrollTop()<=e},l.validator.addMethod("customEmail",function(e){var t=e.indexOf(" ")<0&&""!==e,r=e.match(/(.*)@/);return/([\u0600-\u06FF]+|\S+)@(\S+\.\S{2,})/.test(e)&&r[1].length<=64&&t},"Please, type correct email"),l.validator.addMethod("customPhone",function(e,t){var r=l(t).val();return r=r.replace(/[^\d+( )-]/g,""),l(t).val(r),/^([\d\+\-\s]*(\([\d\+\-\s]+\))?[\d\+\-\s]*)*$/.test(e)},"Type your correct phone number"),l.validator.addMethod("customPhoneWithCountryCode",function(e,t){var r=l(t).closest("form").find("#country"),o="";0<r.length&&(o=l("option:selected",r).attr("callingcode"));var n=!0;return e.substring(1,e.length)===o&&(n=!1),n},"Please enter phone number."),l.validator.addMethod("nowhitespace",function(e,t){return this.optional(t)||/\S/.test(e)},""),l.validator.addMethod("require_from_group",function(e,t,r){var o=parseInt(r[0]),n=r[1]||"."+t.classList[0],s=l(n,t.form),a=s.filter(function(){var e=l(this).val();return l(this).is(":checkbox")&&(e=l(this).is(":checked")),e});a.length&&s.removeClass(u);var i=s.not(a);return!(a.length<o&&i.has(t))},"Please fill out at least {0} of these fields."),l.validator.setDefaults({errorElement:"li",errorClass:u,ignore:".ignore",showMessages:!1,focusInvalid:!1,invalidHandler:function(e,t){if(t.numberOfInvalids()){var r=l(t.errorList[0].element),o=r.closest("form");o.isInView()?r.focus():l("html, body").animate({scrollTop:o.offset().top-80},1e3,function(){r.focus()})}},errorPlacement:function(e,t){if(this.showMessages){var r=l(e),o=l(t),n=o.parent().find(".errors");0==n.length&&(n=l("<ul/>",{"class":"errors"})).insertAfter(o),r.appendTo(n)}},success:function(e){l(e).closest(".errors").empty()},showErrors:function(e,t){this.defaultShowErrors()},submitHandler:function(){return!1}})});
//# sourceMappingURL=validate.addition.js.map