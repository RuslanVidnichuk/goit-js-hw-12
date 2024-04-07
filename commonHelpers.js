import{S as w,i as y,a as L}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const v=document.querySelector(".search-form"),f=document.querySelector(".pictures-list"),u=document.querySelector(".loader"),r=document.querySelector(".button-load"),i=new w(".gallery-card a.gallary-card-link",{captionsData:"alt",captionDelay:250});let d=null,m=0;v.addEventListener("submit",o=>{o.preventDefault(),d=o.target.elements.input.value,n=1,d.trim("")!==""&&(u.style.display="flex",i&&(i.close(),f.innerHTML=""),setTimeout(()=>{g().then(e=>{m=e.totalHits,b(e.hits),i.refresh(),e.hits.length===0?(y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),r.disabled=!0,r.style.display="none",r.style.opacity=0,r.style.overflow="hidden"):(r.disabled=!1,r.style.display="flex",r.style.opacity=1,r.style.overflow="visible"),e.hits.length<p&&(r.style.display="none")}).catch(e=>{console.error("Помилка отримання зображень:",e)}).finally(()=>{u.style.display="none"})},500),h(),o.target.reset())});let n=1,p=15;r.addEventListener("click",async()=>{n+=1;const o=await g();b(o.hits),i.refresh(),h(),document.querySelectorAll(".gallery-card").forEach(e=>{const l=e.getBoundingClientRect();window.scrollBy({top:l.height*1.36,behavior:"smooth"})})});async function g(){const o="42193842-675e74ed987999787d4b57f5e",a=new URLSearchParams({key:o,per_page:p,page:n,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await L.get(`https://pixabay.com/api/?${a}`)).data}catch(e){throw console.error("Помилка отримання зображень:",e),e}}function h(){const o=Math.ceil(m/p);n===o&&(y.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#add8e6",messageColor:"white"}),r.disabled=!0,r.style.display="none",r.style.opacity=0,r.style.overflow="hidden")}function b(o){const a=o.map(e=>`<li class="gallery-card">
    <a class="gallary-card-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
    <ul class="image-info">
            <li class="image-item-info">
            <p>Likes</p>
            <p>${e.likes}</p>
        </li>
        <li class="image-item-info">
            <p>Views</p>
            <p>${e.views}</p>
        </li>
        <li class="image-item-info">
            <p>Comments</p>
            <p>${e.comments}</p>
        </li>
        <li class="image-item-info">
            <p>Downloads</p>
            <p>${e.downloads}</p>
        </li>
    </ul>
    </a>
</li>`).join("");f.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=commonHelpers.js.map
