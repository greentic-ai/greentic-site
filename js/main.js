
// reduced-motion respectful reveal
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Tabs
function initTabs(){
  document.querySelectorAll('.tabs').forEach(group => {
    const tabs = group.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('aria-controls');
        // deactivate siblings
        tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
        tab.classList.add('active'); tab.setAttribute('aria-selected','true');
        const panels = group.parentElement.querySelectorAll('[role="tabpanel"]');
        panels.forEach(p => p.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
      });
    });
  });
}

// Accordion
function initAccordion(){
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const isOpen = panel.style.display === 'block';
      panel.style.display = isOpen ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

// Pricing toggle (stub, could switch prices with data attributes)
const toggle = document.getElementById('toggle-billing');
if(toggle){
  toggle.addEventListener('click', () => {
    const pressed = toggle.getAttribute('aria-pressed') === 'true';
    toggle.setAttribute('aria-pressed', String(!pressed));
    toggle.textContent = pressed ? 'Monthly' : 'Annual (save 15%)';
  });
}

// Cookie banner
(function(){
  const key = 'greentic_cookies';
  const banner = document.getElementById('cookie-banner');
  if(!localStorage.getItem(key) && banner){
    banner.classList.remove('hidden');
  }
  banner?.querySelector('[data-accept-cookies]')?.addEventListener('click', () => {
    localStorage.setItem(key, 'accepted'); banner.classList.add('hidden');
  });
  banner?.querySelector('[data-decline-cookies]')?.addEventListener('click', () => {
    localStorage.setItem(key, 'declined'); banner.classList.add('hidden');
  });
})();

// Integrations grid data
const integrations = [
  'email','teams','whatsapp','github','servicenow','stripe','slack','google','aws','azure','snowflake','postgres','mysql','jira','confluence','zoom','twilio','okta','workday','sap','netsuite','salesforce','hubspot','zendesk'
];
const grid = document.getElementById('integrations-grid');
if(grid){
  const render = (q='') => {
    grid.innerHTML = '';
    integrations.filter(n => n.includes(q.toLowerCase())).forEach(n => {
      const el = document.createElement('div');
      el.className = 'pill'; el.textContent = n.toUpperCase();
      grid.appendChild(el);
    });
    const more = document.createElement('div');
    more.className = 'pill opacity-70'; more.textContent = '+ more (coming soon)';
    grid.appendChild(more);
  };
  render();
  const search = document.getElementById('integrations-search');
  search?.addEventListener('input', (e)=>render(e.target.value));
}

// Contact form JS fallback
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try{
      const data = new FormData(form);
      const resp = await fetch(form.action, { method:'POST', body: data });
      if(resp.ok){
        form.innerHTML = '<p class="text-emerald-700">Thanks! We will reach out shortly.</p>';
      }else{
        window.location.href = 'mailto:hello@greentic.ai';
      }
    }catch{
      window.location.href = 'mailto:hello@greentic.ai';
    }
  });
}

initTabs(); initAccordion();
