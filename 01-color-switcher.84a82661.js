!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),r=null;function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor="".concat(t)}e.setAttribute("disabled",!0),t.addEventListener("click",(function(){r=setInterval((function(){o()}),1e3),t.setAttribute("disabled",!0),e.hasAttribute("disabled")&&e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.84a82661.js.map