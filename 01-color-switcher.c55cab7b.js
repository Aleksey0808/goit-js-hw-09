!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")},e=null;t.start.addEventListener("click",(function(){t.start.setAttribute("disabled","disabled"),t.stop.removeAttribute("disabled","disabled"),e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled","disabled"),t.stop.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.c55cab7b.js.map