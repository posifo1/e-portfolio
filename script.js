// Footer year
(function(){ var node = document.getElementById('year'); if (node) node.textContent = new Date().getFullYear(); })();

// Scrollspy to underline TOC link for the visible section
(function(){
  var links = Array.from(document.querySelectorAll('.toc a'));
  var sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  var active;
  function setActive(id){ if (active===id) return; active=id; links.forEach(a => a.setAttribute('aria-current', a.getAttribute('href')==='#'+id ? 'true':'false')); }
  var obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting) setActive(e.target.id); }); }, { rootMargin:'0px 0px -70% 0px', threshold:0.1 });
  sections.forEach(sec => sec && obs.observe(sec));
})();

// Back to top button
(function(){
  var btn = document.getElementById('toTop');
  window.addEventListener('scroll', function(){ if (window.scrollY > 600) btn.classList.add('show'); else btn.classList.remove('show'); });
  btn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
})();
