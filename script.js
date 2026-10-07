function toggleNav(){const n=document.getElementById("nav");if(n)n.classList.toggle("open")}
function filterCards(){
 const q=(document.getElementById("search")?.value||"").toLowerCase();
 document.querySelectorAll("[data-search]").forEach(x=>{
   x.style.display=x.dataset.search.toLowerCase().includes(q)?"":"none";
 });
}
