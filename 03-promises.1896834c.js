!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),a=document.querySelector("form");a.addEventListener("submit",(function(n){n.preventDefault();var t=1,o=a.elements.amount.value,i=Number(a.elements.step.value),l=Number(a.elements.delay.value),u=setInterval((function(){var n,a;t>o?clearInterval(u):((n=t,a=l,new Promise((function(e,t){var o=Math.random()>.3;setTimeout((function(){o&&e({position:n,delay:a}),t({position:n,delay:a})}),a)}))).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=1,l+=i)}),i)}))}();
//# sourceMappingURL=03-promises.1896834c.js.map
