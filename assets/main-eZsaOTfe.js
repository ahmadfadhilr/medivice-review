(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();function B(){const e=document.querySelector(".nav__toggle"),o=document.querySelector(".nav__links"),a=document.querySelector(".nav");if(!a)return;e&&o&&(e.addEventListener("click",()=>{const t=o.classList.toggle("nav__links--open");e.setAttribute("aria-expanded",String(t))}),o.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{o.classList.remove("nav__links--open"),e.setAttribute("aria-expanded","false")})}));const r=()=>{a.classList.toggle("nav--scrolled",window.scrollY>8)};r(),window.addEventListener("scroll",r,{passive:!0})}function j(){const e=document.querySelectorAll(".fade-in");if(!e.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){e.forEach(t=>t.classList.add("fade-in--visible"));return}let a=!1;const r=new IntersectionObserver(t=>{a=!0,t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("fade-in--visible"),r.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});e.forEach(t=>r.observe(t)),setTimeout(()=>{a||(r.disconnect(),e.forEach(t=>t.classList.add("fade-in--visible")))},2e3)}function F(){const e=(()=>{if(window.self===window.top)return null;try{return window.top.scrollY,window.frameElement}catch{return null}})();document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",a=>{const r=o.getAttribute("href");if(!r||r==="#")return;const t=document.querySelector(r);if(t){if(a.preventDefault(),t.querySelectorAll("details.svc-more").forEach(n=>{n.open=!0}),e){const l=e.getBoundingClientRect().top+window.top.scrollY+t.getBoundingClientRect().top+window.scrollY-88;window.top.scrollTo({top:l,behavior:"smooth"})}else{const n=t.getBoundingClientRect().top+window.scrollY-88;window.scrollTo({top:n,behavior:"smooth"})}history.replaceState(null,"",r)}})})}function O(){if(window.self===window.top)return;let e;try{e=window.top.document}catch{return}if(!e)return;const o=[...e.querySelectorAll("form")].find(n=>n.querySelector('button[type="submit"], input[type="submit"]'));if(!o)return;if(!e.getElementById("mv-gaya-formulir")){const n=e.createElement("style");n.id="mv-gaya-formulir",n.textContent=`
      .form__control {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0,0,0,.05), 0 10px 15px rgba(0,0,0,.1);
      }
      .form__control .input__label {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.8125rem;
        color: #1A202C;
      }
      .form__control .input__component {
        font-family: 'Open Sans', sans-serif;
        font-size: 0.9375rem;
        color: #1A202C;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        padding: 0.75rem 1rem;
        transition: border-color .18s ease, box-shadow .18s ease;
      }
      .form__control .input__component:focus {
        outline: none;
        border-color: #3F6DA3;
        box-shadow: 0 0 0 3px rgba(63,109,163,.15);
      }
      .form__control .grid-button--primary,
      .form__control .form__button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.9375rem;
        background: #3F6DA3;
        border-radius: 8px;
        padding: 0.875rem 2rem;
        transition: background-color .18s ease;
      }
      .form__control .grid-button--primary:hover,
      .form__control .form__button:hover { background: #31557F; }
      .form__control .input__component::placeholder { color: #94A3B8; }
      /* Dua kolom untuk empat isian pertama, seperti formulir yang disetujui
         klien pada 3 September: Name bersama Company, lalu Email bersama
         Phone. Hostinger menumpuk semuanya ke bawah. Anak formulirnya urut
         dan stabil — enam pembungkus .input lalu tombolnya — jadi urutan itu
         yang dipakai, bukan nama isian. */
      @media (min-width: 720px) {
        .form__control { display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 1rem; }
        .form__control > * { grid-column: 1 / -1; }
        .form__control > .input:nth-child(-n+4) { grid-column: auto; }
        /* Tombolnya jangan ikut melebar sepanjang dua kolom. */
        .form__control > .grid-button { justify-self: center; width: auto; }
      }
      /* Jarak antar isian. Bawaannya rapat, dan enam pilihan Subject membuat
         formulirnya terbaca seperti satu blok panjang tanpa jeda. */
      .form__control .input { margin-bottom: 1.25rem; }
      .form__control input[type="radio"],
      .form__control input[type="checkbox"] {
        accent-color: #3F6DA3;
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
      .form__control label:has(input[type="radio"]),
      .form__control label:has(input[type="checkbox"]) {
        display: flex;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
        font-size: 0.9375rem;
        color: #1A202C;
        padding: 0.375rem 0;
        cursor: pointer;
      }
    `,(e.head||e.documentElement).appendChild(n)}const a=(()=>{try{return sessionStorage.getItem("mv-evidence-check")}catch{return null}})();if(!a)return;const r=n=>{const l=n.id&&e.querySelector('label[for="'+CSS.escape(n.id)+'"]')||n.closest("label");return(l?l.textContent:"").replace(/\*/g,"").trim().toLowerCase()},t=(n,l)=>{const g=n.tagName==="TEXTAREA"?window.top.HTMLTextAreaElement:window.top.HTMLInputElement;Object.getOwnPropertyDescriptor(g.prototype,"value").set.call(n,l),n.dispatchEvent(new window.top.Event("input",{bubbles:!0})),n.dispatchEvent(new window.top.Event("change",{bubbles:!0}))};try{const n=o.querySelector("textarea");if(!n)return;n.value.trim()||t(n,a);const l="clinical evaluation",c=[...o.querySelectorAll('input[type="radio"], input[type="checkbox"]')].find(d=>r(d).startsWith(l));c&&!c.checked&&c.click();const p=o.querySelector("select");if(p){const d=[...p.options].find(E=>E.textContent.toLowerCase().includes(l));d&&(p.value=d.value,p.dispatchEvent(new window.top.Event("change",{bubbles:!0})))}o.scrollIntoView({block:"center",behavior:"smooth"});try{sessionStorage.removeItem("mv-evidence-check")}catch{}}catch{}}function T(){const e=document.querySelector(".contact-form"),o=document.getElementById("handoff");if(!e||!o)return;const a="contact@medivice-cro.com",r="6281959551644",t=document.getElementById("handoff-preview"),n=document.getElementById("handoff-wa"),l=document.getElementById("handoff-mail"),g=document.getElementById("handoff-copy"),c=document.getElementById("handoff-back"),p=/^[126]\./,d=1400;let E=!1;const w=(s,h)=>{const u=[];return s.querySelectorAll("input, select, textarea").forEach(i=>{if(h&&i.closest(".rfp-sub"))return;if(i.type==="checkbox"){i.checked&&u.push("- "+i.value);return}const m=(i.value||"").trim();if(!m)return;const y=s.querySelector('label[for="'+i.id+'"]')||document.querySelector('label[for="'+i.id+'"]'),b=y?y.textContent.replace("*","").trim():i.name;u.push(b+": "+m)}),u},q=s=>{const h=[];return e.querySelectorAll(".rfp-sec").forEach(u=>{if(u.hidden)return;const i=u.dataset.sec||"";if(s&&!p.test(i))return;const m=[],y=w(u,!0);y.length&&m.push(y.join(`
`)),u.querySelectorAll(".rfp-sub").forEach(b=>{const v=w(b,!1);if(!v.length)return;const I=b.querySelector(".rfp-sub__num").textContent.trim(),A=b.querySelector(".rfp-sub__title").textContent.trim();m.push("-- "+I+" "+A+`
`+v.join(`
`))}),m.length&&h.push(i.toUpperCase()+`
`+m.join(`

`))}),h.join(`

`)},C=s=>{if(e.classList.contains("rfp-form")){const v=(s.get("company")||"").trim();return{subject:"Proposal request"+(v?" — "+v:""),body:q(!1),shortBody:q(!0)}}const u="Website enquiry — "+(s.get("subject")||"Other"),i=["Name: "+(s.get("name")||"")];s.get("title")&&i.push("Job title: "+s.get("title")),i.push("Company: "+(s.get("company")||"")),s.get("country")&&i.push("Country: "+s.get("country")),i.push("Email: "+(s.get("email")||"")),s.get("phone")&&i.push("Phone: "+s.get("phone"));const m=s.getAll("services");m.length&&i.push("","Services requested:",...m.map(v=>"- "+v)),i.push("",String(s.get("message")||""));const y=[s.get("nda"),s.get("call")].filter(Boolean);y.length&&i.push("",...y.map(v=>"Note: "+v));const b=i.join(`
`);return{subject:u,body:b,shortBody:b}},S=document.getElementById("rfp-section-4"),_=e.querySelector('input[name="services"][value="Clinical Investigation"]');if(S&&_){const s=()=>{S.hidden=!_.checked};_.addEventListener("change",s),s()}e.addEventListener("submit",s=>{if(s.preventDefault(),!e.reportValidity())return;const{subject:h,body:u,shortBody:i}=C(new FormData(e));t.textContent=`${h}

${u}`;const m=u.length>d,y=m?i+`

[The rest of the completed form has been copied to your clipboard. Please paste it below this line.]`:u;E=m;const b=document.getElementById("handoff-long");b&&(b.hidden=!m),n.href=`https://wa.me/${r}?text=${encodeURIComponent(h+`

`+y)}`,l.href=`mailto:${a}?subject=${encodeURIComponent(h)}&body=${encodeURIComponent(y)}`,e.hidden=!0,o.hidden=!1,o.scrollIntoView({block:"start",behavior:"smooth"}),o.querySelector(".handoff__title").setAttribute("tabindex","-1"),o.querySelector(".handoff__title").focus()});const f=g.textContent,x=async()=>{const s=t.textContent,h=()=>{g.textContent="Copied",setTimeout(()=>{g.textContent=f},2200)};try{await navigator.clipboard.writeText(s),h()}catch{const i=document.createElement("textarea");i.value=s,i.style.cssText="position:fixed;top:-1000px",document.body.appendChild(i),i.select();try{document.execCommand("copy"),h()}catch{i.select()}i.remove()}};g.addEventListener("click",x);const k=()=>{E&&x()};l.addEventListener("click",k),n.addEventListener("click",k),c.addEventListener("click",()=>{o.hidden=!0,e.hidden=!1,e.scrollIntoView({block:"start",behavior:"smooth"})})}function P(){const e=document.querySelectorAll(".reglife__row--design .reglife__stage");e.length&&e.forEach(o=>{o.addEventListener("click",()=>{const a=document.getElementById(o.getAttribute("aria-controls")),r=o.getAttribute("aria-expanded")==="true";e.forEach(t=>{t.setAttribute("aria-expanded","false"),t.querySelector(".reglife__stage-note").textContent="Select",document.getElementById(t.getAttribute("aria-controls")).classList.remove("reglife__detail--open")}),r||(o.setAttribute("aria-expanded","true"),o.querySelector(".reglife__stage-note").textContent="Open",a.classList.add("reglife__detail--open"))})})}function N(){document.querySelectorAll("details.svc-more").forEach(e=>{e.addEventListener("toggle",()=>{e.open&&e.querySelectorAll(".fade-in").forEach(o=>o.classList.add("fade-in--visible"))})})}function R(){const e=document.getElementById("ec-form"),o=document.getElementById("ec-result");if(!e||!o)return;const a={nonconformity:{title:"Notified body has raised clinical non-conformities",lead:"You have an open finding. That is the most time-critical of the four, because the clock is somebody else's.",todo:"Root-cause review of the finding, response strategy, rewritten sections, and supporting evidence assembly to close the file."},equivalence:{title:"Equivalence claim is unlikely to survive review",lead:"Your evidence leans on equivalence. Reviewers now apply real scepticism to it, so the question is what happens when it does not hold.",todo:"Honest re-assessment, alternative evidence routes, and a scoped PMCF study or investigation to close the residual gap."},legacy:{title:"CER predates current MDR expectations",lead:"Your clinical evaluation is behind where reviewers now start. That is ordinary, and it is fixable before anyone asks.",todo:"Gap analysis against the current state of the art, restructured CEP/CER, and a remediation plan with realistic effort estimates."},newdevice:{title:"New device with no clinical history",lead:"You are starting from nothing, which is the cheapest place to plan evidence from — provided the planning happens now.",todo:"Clinical development plan, first-in-human or pilot design, and staged evidence generation aligned to the intended submission."}},r=c=>c.q4==="open"?"nonconformity":c.q1==="none"||c.q2==="never"?"newdevice":c.q3==="mainly"||c.q3==="partly"?"equivalence":(c.q2==="old"||c.q5==="no"||c.q5==="partly"||c.q2==="unsure"||c.q5==="unsure"||c.q3==="unsure","legacy"),t={q1:"Where the device is today",q2:"Clinical evaluation last updated",q3:"Rests on an equivalence claim",q4:"Finding raised by a notified body or authority",q5:"Every IFU claim traced to evidence",q6:"Next market"},n=(c,p)=>{const d=e.querySelector('input[name="'+c+'"][value="'+p+'"]');return d?d.parentElement.querySelector("span").textContent.trim():p},l=document.getElementById("ec-progress"),g=()=>{const c=["q1","q2","q3","q4","q5","q6"].filter(p=>e.querySelector('input[name="'+p+'"]:checked')).length;l.textContent=c+" of 6 answered"};e.addEventListener("change",g),g(),e.addEventListener("submit",c=>{if(c.preventDefault(),!e.reportValidity())return;const p=new FormData(e),d={};["q1","q2","q3","q4","q5","q6"].forEach(f=>{d[f]=p.get(f)});const E=r(d),w=a[E];document.getElementById("ec-result-title").textContent=w.title,document.getElementById("ec-result-lead").textContent=w.lead,document.getElementById("ec-result-do").textContent=w.todo;const q=document.getElementById("ec-result-answers");q.textContent="",Object.keys(t).forEach(f=>{const x=document.createElement("li"),k=document.createElement("strong");k.textContent=t[f]+": ",x.appendChild(k),x.appendChild(document.createTextNode(n(f,d[f]))),q.appendChild(x)});const C=Object.keys(t).map(f=>t[f]+": "+n(f,d[f])),S="Evidence Gap Check result: "+w.title+`

`+C.join(`
`);try{sessionStorage.setItem("mv-evidence-check",S)}catch{}e.hidden=!0,o.hidden=!1,o.scrollIntoView({block:"start",behavior:"smooth"});const _=document.getElementById("ec-result-title");_.setAttribute("tabindex","-1"),_.focus()}),document.getElementById("ec-restart").addEventListener("click",()=>{e.reset(),g(),o.hidden=!0,e.hidden=!1,e.scrollIntoView({block:"start",behavior:"smooth"})})}document.documentElement.classList.add("js");function D(){if(window.self===window.top)return;let e;try{window.top.document,e=window.frameElement}catch{return}if(!e)return;const o=()=>{try{const r=window.top.innerHeight,t=document.documentElement.style;t.setProperty("--tinggi-hero",Math.round(r*.86)+"px"),t.setProperty("--tinggi-notfound",Math.round(r*.7)+"px")}catch{}},a=()=>{o();try{e.style.marginLeft="0px",e.style.width="",e.style.maxWidth="";const r=e.getBoundingClientRect(),t=window.top.document.documentElement.clientWidth;if(r.left<=0||r.width>=t)return;e.style.maxWidth="none",e.style.width=t+"px",e.style.marginLeft=-r.left+"px"}catch{}};a(),window.top.addEventListener("resize",a)}function L(){D(),B(),j(),F(),T(),P(),N(),R(),O()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L();
