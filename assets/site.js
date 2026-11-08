
(() => {
  const tabs = [...document.querySelectorAll('.ptabs a')]; if (!tabs.length) return;
  const secs = tabs.map(a => document.querySelector(a.getAttribute('href')));
  const on = (i) => { tabs.forEach((a, j) => a.classList.toggle('on', i === j)); tabs[i]?.scrollIntoView({ inline: 'center', block: 'nearest' }); };
  const io = new IntersectionObserver((es) => { es.forEach(e => { if (e.isIntersecting) on(secs.indexOf(e.target)); }); }, { rootMargin: '-35% 0px -60% 0px' });
  secs.forEach(s => s && io.observe(s));
})();
(() => {
  const bs = [...document.querySelectorAll('.filters button')]; if (!bs.length) return;
  bs.forEach(b => b.onclick = () => {
    bs.forEach(x => x.classList.toggle('on', x === b)); const f = b.dataset.f;
    document.querySelectorAll('#toolgrid .tool').forEach(t => t.hidden = f !== 'all' && t.dataset.cat !== f);
    document.querySelectorAll('#toolgrid .pbreak').forEach(p => {
      let n = p.nextElementSibling, any = false;
      while (n && !n.classList.contains('pbreak')) { if (!n.hidden) any = true; n = n.nextElementSibling; }
      p.hidden = !any;
    });
  });
})();
document.querySelectorAll('[data-copy]').forEach(b => b.onclick = () => {
  navigator.clipboard?.writeText(b.dataset.copy).then(() => { b.classList.add('ok'); setTimeout(() => b.classList.remove('ok'), 1200); }, () => {});
});
