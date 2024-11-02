/* empty css                      */import{S as f,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="46842310-1eff6901abe3b896058131b9e",d="https://pixabay.com/api/";async function m(s){const t=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=await fetch(`${d}?${t}`);if(!o.ok)throw new Error("Network response was not ok");return o.json()}function p({webformatURL:s,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:n}){return`
    <a href="${t}" class="gallery-item">
      <div class="gallery-card">
        <img src="${s}" alt="${o}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${i}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${e}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${r}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${n}
          </p>
        </div>
      </div>
    </a>
  `}function h(s,t){const o=s.map(p).join("");t.innerHTML=o}const y=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader-container");let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}y.addEventListener("submit",async s=>{s.preventDefault();const t=s.currentTarget,o=t.elements.searchQuery.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}try{b(),c.innerHTML="";const i=await m(o);if(i.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits,c),g.refresh()}catch{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{L(),t.reset()}});
//# sourceMappingURL=index.js.map
