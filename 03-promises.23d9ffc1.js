const e=document.querySelector("[name=delay]"),t=document.querySelector("[name=step]"),n=(document.querySelector("[name=amount]"),document.querySelector("button")),o=parseInt(t.textContent),r=parseInt(e.textContent),c=parseInt(t.textContent);function m(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{n?o(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)})).then(console.log).catch(console.error)}n.addEventListener("click",(()=>{m(1,r),function(){for(let e=2;e<=o;e++)m(e,c)}()}));
//# sourceMappingURL=03-promises.23d9ffc1.js.map
