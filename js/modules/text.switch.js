define(["jquery"],function(a){return function(n){!function f(n){var o=n.elem,t=n.options.messagePrimary,e=n.options.messageSecondary,i=n.options.switchEvent,s=n.options.resetEvent;function c(){o.text(t)}function r(){o.text(e)}c(),function u(){a("body").on(i,r),a("body").on(s,c)}()}(n)}});
//# sourceMappingURL=text.switch.js.map