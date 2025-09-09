
// Opt-in analytics stub. To enable, set window.GREENTIC_ANALYTICS = true and define a collector URL.
(function(){
  if(!window.GREENTIC_ANALYTICS) return;
  const payload = {
    ts: Date.now(),
    path: location.pathname,
    referrer: document.referrer || null,
    ua: navigator.userAgent
  };
  // Example: fetch('https://analytics.greentic.ai/collect', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(payload)});
  console.debug('Analytics event (stub):', payload);
})();
