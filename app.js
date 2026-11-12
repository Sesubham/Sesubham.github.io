(() => {
 const p=window.PORTFOLIO_PROFILE||{}, projects=Array.isArray(window.PORTFOLIO_PROJECTS)?window.PORTFOLIO_PROJECTS:[];
 const set=(id,value)=>{const el=document.getElementById(id);if(el&&value)el.textContent=value};
 set("name",p.name||"Your Name");set("username","@"+(p.username||"your-username"));set("bio",p.bio||"Add your bio in profile.js.");set("location",p.location||"Add your location in profile.js");
 set("email",p.email||"Add your email in profile.js");set("avatar",(p.name||"?").trim().charAt(0).toUpperCase());
 [["github-nav",p.github],["github-button",p.github],["website",p.website]].forEach(([id,url])=>{const e=document.getElementById(id);if(url){e.href=url}else{e.hidden=true}});
 const list=document.getElementById("project-list"),empty=document.getElementById("empty-state"),count=document.getElementById("repo-count"),search=document.getElementById("search"),filter=document.getElementById("language-filter");
 const techs=[...new Set(projects.flatMap(x=>x.technologies||[]))].sort();techs.forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;filter.append(o)});
 const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 function render(){const q=search.value.toLowerCase(),tech=filter.value;const rows=projects.filter(x=>(`${x.name} ${x.description} ${(x.technologies||[]).join(" ")}`).toLowerCase().includes(q)&&(!tech||(x.technologies||[]).includes(tech)));
 list.innerHTML=rows.map(x=>`<article class="project-card"><a class="project-title" href="${esc(x.url||"#")}" target="_blank" rel="noreferrer">${esc(x.name)}</a><span class="visibility">${esc(x.visibility||"Public")}</span><p class="project-description">${esc(x.description||"")}</p><div class="project-footer">${x.language?`<span><i class="language-dot"></i>${esc(x.language)}</span>`:""}${(x.technologies||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join("")}${x.updated?`<span>Updated ${esc(x.updated)}</span>`:""}${x.readme?`<a href="${esc(x.readme)}" target="_blank" rel="noreferrer">README ↗</a>`:""}</div></article>`).join("");
 empty.hidden=rows.length>0;list.hidden=rows.length===0;count.textContent=`${projects.length} ${projects.length===1?"repository":"repositories"}`;
 }
 search.addEventListener("input",render);filter.addEventListener("change",render);render();
})();