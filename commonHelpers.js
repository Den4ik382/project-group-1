(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();const n=document.querySelector("[data-burger]"),d=document.querySelectorAll("[data-burger-link]"),l=document.querySelectorAll("[data-social-link]"),c=document.querySelector("[data-burger-open]"),i=document.querySelector("[data-burger-close]");c.addEventListener("click",()=>{c.classList.add("btn-hidden"),i.classList.remove("btn-hidden"),n.classList.add("header-burger-active"),setTimeout(()=>{d.forEach((t,s)=>{setTimeout(()=>{t.classList.add("header-burger-item-active")},s*200)})},300),setTimeout(()=>{l.forEach((t,s)=>{setTimeout(()=>{t.classList.add("header-burger-social-active")},s*200)})},1e3)});i.addEventListener("click",()=>{i.classList.add("btn-hidden"),c.classList.remove("btn-hidden"),n.classList.remove("header-burger-active"),d.forEach(t=>{t.classList.remove("header-burger-item-active")}),l.forEach(t=>{t.classList.remove("header-burger-social-active")})});
//# sourceMappingURL=commonHelpers.js.map
