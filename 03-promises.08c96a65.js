!function(){var e=document.querySelector("[name=delay]"),t=document.querySelector("[name=step]"),n=(document.querySelector("[name=amount]"),document.querySelector("button")),o=parseInt(t.textContent),c=parseInt(e.textContent),r=parseInt(t.textContent);function a(e,t){var n=Math.random()>.3;return new Promise((function(o,c){n?o("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):c("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))})).then(console.log).catch(console.error)}n.addEventListener("click",(function(){a(1,c),function(){for(var e=2;e<=o;e++)a(e,r)}()}))}();
//# sourceMappingURL=03-promises.08c96a65.js.map
