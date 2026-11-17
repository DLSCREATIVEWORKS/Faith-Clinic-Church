// @ts-nocheck
'use client'

import { useEffect } from 'react'

/* Countdown to the next service, scroll reveals, the signup preview and the hero sunrise. */
export default function HomeEffects() {
  useEffect(() => {
    let alive = true
    const timers: ReturnType<typeof setInterval>[] = []
    const _setInterval = window.setInterval.bind(window)
    const setInterval = (fn: () => void, ms: number) => {
      const id = _setInterval(fn, ms)
      timers.push(id as unknown as ReturnType<typeof globalThis.setInterval>)
      return id
    }
    const _raf = window.requestAnimationFrame.bind(window)
    const requestAnimationFrame = (fn: FrameRequestCallback) => (alive ? _raf(fn) : 0)
    void setInterval
    void requestAnimationFrame
    

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('yr').textContent = new Date().getFullYear();

  /* ---- Countdown to the next service, in Amarillo (Central) time ---- */
  var SERVICES = [
    {at: 0*86400 + 11*3600, name: 'Sunday Worship, 11:00 AM Central'},
    {at: 3*86400 + 19*3600, name: 'Wednesday Bible Study, 7:00 PM Central'}
  ];
  var WEEK = 604800, DAYS = {Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
  var fmt;
  try { fmt = new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',weekday:'short',hour:'numeric',minute:'numeric',second:'numeric',hour12:false}); } catch(e){ fmt = null; }
  function pad(n){ return (n<10?'0':'')+n; }
  function tick(){
    if(!fmt) return;
    var o = {};
    fmt.formatToParts(new Date()).forEach(function(p){ o[p.type]=p.value; });
    var now = DAYS[o.weekday]*86400 + (parseInt(o.hour,10)%24)*3600 + parseInt(o.minute,10)*60 + parseInt(o.second,10);
    var best = null, live = null;
    SERVICES.forEach(function(s){
      var since = (now - s.at + WEEK) % WEEK;
      if(since < 5400) live = s;                 /* first 90 minutes: in progress */
      var until = (s.at - now + WEEK) % WEEK;
      if(best === null || until < best.until) best = {until: until, s: s};
    });
    var label = document.getElementById('next-label'), which = document.getElementById('next-which');
    if(live){
      label.textContent = 'Happening right now';
      which.textContent = live.name + '. Join us in person or online.';
    } else {
      label.textContent = 'Next service starts in';
      which.textContent = best.s.name;
    }
    var u = best.until;
    document.getElementById('cd-d').textContent = Math.floor(u/86400);
    document.getElementById('cd-h').textContent = pad(Math.floor(u%86400/3600));
    document.getElementById('cd-m').textContent = pad(Math.floor(u%3600/60));
    document.getElementById('cd-s').textContent = pad(u%60);
  }
  tick(); setInterval(tick, 1000);

  /* ---- Scroll reveals: content is readable before it animates ---- */
  var items = [].slice.call(document.querySelectorAll('.reveal'));
  if(!reduce && 'IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.remove('wait'); io.unobserve(e.target); } });
    }, {threshold:.12});
    items.forEach(function(el, i){
      if(el.getBoundingClientRect().top > window.innerHeight){
        el.classList.add('wait');
        el.style.transitionDelay = (i % 4) * 80 + 'ms';
        io.observe(el);
      }
    });
  }

  /* ---- Signup form (preview only) ---- */
  document.getElementById('signup').addEventListener('submit', function(ev){
    ev.preventDefault();
    var email = document.getElementById('su-email').value.trim();
    var msg = document.getElementById('su-msg');
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
      msg.textContent = 'Please enter a valid email address so we know where to send the book.';
      return;
    }
    msg.textContent = 'Preview only: nothing was sent. On the live site this form sends the book through MailerLite.';
  });
  document.getElementById('give-btn').addEventListener('click', function(ev){
    ev.preventDefault();
    document.getElementById('give-note').textContent = 'Preview only: the giving link is not connected yet.';
  });

  /* ---- Hero: sunrise over the Panhandle horizon ---- */
  var cv = document.getElementById('dawn'), cx = cv.getContext('2d'), W, H, motes = [], t0 = performance.now();
  function size(){
    var r = cv.parentNode.getBoundingClientRect(), d = Math.min(window.devicePixelRatio||1, 2);
    W = r.width; H = r.height; cv.width = W*d; cv.height = H*d; cx.setTransform(d,0,0,d,0,0);
    motes = [];
    for(var i=0;i<70;i++) motes.push({x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.5+.4, v:Math.random()*.25+.06, p:Math.random()*6.28});
  }
  function draw(now){
    var t = (now - t0)/1000;
    var hz = H - Math.max(70, H*.16);            /* horizon line */
    var sx = W*.72, sy = hz + 10 - Math.min(26, t*4); /* sun eases up at load */
    var g = cx.createLinearGradient(0,0,0,hz);
    g.addColorStop(0,'#0B1529'); g.addColorStop(.55,'#172C54'); g.addColorStop(.86,'#3A4672'); g.addColorStop(1,'#8C6A3A');
    cx.fillStyle = g; cx.fillRect(0,0,W,hz);
    /* rays */
    cx.save(); cx.translate(sx,sy); cx.rotate(t*.02);
    for(var i=0;i<18;i++){
      cx.rotate(Math.PI*2/18);
      var rg = cx.createLinearGradient(0,0,0,-Math.max(W,H));
      rg.addColorStop(0,'rgba(240,194,75,.20)'); rg.addColorStop(.5,'rgba(240,194,75,.04)'); rg.addColorStop(1,'rgba(240,194,75,0)');
      cx.fillStyle = rg; cx.beginPath(); cx.moveTo(0,0); cx.lineTo(-26,-Math.max(W,H)); cx.lineTo(26,-Math.max(W,H)); cx.closePath(); cx.fill();
    }
    cx.restore();
    /* glow + sun */
    var pulse = 1 + Math.sin(t*.8)*.04;
    var gl = cx.createRadialGradient(sx,sy,0,sx,sy,Math.min(W,620)*.6*pulse);
    gl.addColorStop(0,'rgba(255,224,140,.95)'); gl.addColorStop(.12,'rgba(240,194,75,.6)'); gl.addColorStop(.45,'rgba(240,194,75,.12)'); gl.addColorStop(1,'rgba(240,194,75,0)');
    cx.fillStyle = gl; cx.fillRect(0,0,W,hz);
    /* motes */
    for(var j=0;j<motes.length;j++){
      var m = motes[j];
      if(!reduce){ m.y -= m.v; m.x += Math.sin(t*.5+m.p)*.12; if(m.y < -4){ m.y = hz; m.x = Math.random()*W; } }
      if(m.y < hz){ cx.globalAlpha = .25 + .45*Math.abs(Math.sin(t*.9+m.p)); cx.fillStyle = '#F8DE9A'; cx.beginPath(); cx.arc(m.x,m.y,m.r,0,6.28); cx.fill(); }
    }
    cx.globalAlpha = 1;
    /* land */
    cx.fillStyle = '#081020'; cx.fillRect(0,hz,W,H-hz);
    cx.fillStyle = 'rgba(240,194,75,.55)'; cx.fillRect(0,hz-1,W,1.5);
    /* small church on the plain */
    var bx = Math.min(W*.86, W-90), b = hz;
    cx.fillStyle = '#081020';
    cx.fillRect(bx,b-22,44,22);
    cx.beginPath(); cx.moveTo(bx-4,b-22); cx.lineTo(bx+22,b-38); cx.lineTo(bx+48,b-22); cx.closePath(); cx.fill();
    cx.fillRect(bx+17,b-58,10,26);
    cx.beginPath(); cx.moveTo(bx+15,b-58); cx.lineTo(bx+22,b-72); cx.lineTo(bx+29,b-58); cx.closePath(); cx.fill();
    cx.fillRect(bx+21,b-84,2,13); cx.fillRect(bx+17,b-80,10,2);
    cx.fillStyle = 'rgba(240,194,75,.9)'; cx.fillRect(bx+8,b-14,6,9); cx.fillRect(bx+30,b-14,6,9);
    if(!reduce) requestAnimationFrame(draw);
  }
  size(); requestAnimationFrame(draw);
  var rt; window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(function(){ size(); if(reduce) draw(performance.now()); }, 120); });

    return () => {
      alive = false
      timers.forEach((t) => window.clearInterval(t as unknown as number))
    }
  }, [])
  return null
}
