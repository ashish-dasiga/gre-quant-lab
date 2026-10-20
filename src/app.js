/* ===== GRE Quant Lab — app logic ===== */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TMAP = {}; TOPICS.forEach((t, i) => { t.idx = i; TMAP[t.id] = t; });
  const LET = 'ABCDEFGH';

  /* ---------------- TeX-lite renderer (offline, no CDN) ---------------- */
  const SYM = { pm: '±', mp: '∓', times: '×', div: '÷', cdot: '·', le: '≤', leq: '≤', ge: '≥', geq: '≥', ne: '≠', neq: '≠', approx: '≈',
    pi: 'π', theta: 'θ', alpha: 'α', beta: 'β', sigma: 'σ', mu: 'μ', Delta: 'Δ', infty: '∞', Rightarrow: '⇒', Leftrightarrow: '⇔',
    to: '→', rightarrow: '→', angle: '∠', triangle: '△', perp: '⊥', parallel: '∥', circ: '°', cup: '∪', cap: '∩', dots: '…', ldots: '…',
    cdots: '⋯', therefore: '∴', in: '∈', quad: '\u2003', qquad: '\u2003\u2003', ',': '\u2009', ' ': '\u00a0', ';': '\u2005', '%': '%', '$': '$',
    '{': '{', '}': '}', '|': '|', '#': '#', '&': '&amp;', square: '□', checkmark: '✓', lt: '&lt;', gt: '&gt;' };
  const OPS = new Set(['=', '+', '−', '×', '÷', '±', '≤', '≥', '&lt;', '&gt;', '≠', '≈', '⇒', '⇔', '→', '·', '∓']);
  const BREAK = new Set(['=', '⇒', '⇔', '≤', '≥', '&lt;', '&gt;', '≠', '≈']);
  const opSpan = s => `<span class="o">${s}</span>${BREAK.has(s) ? '<wbr>' : ''}`;
  function tex(src) {
    let i = 0;
    const group = () => {
      while (src[i] === ' ') i++;
      if (src[i] === '{') { i++; const h = seq('}'); i++; return h; }
      return atom();
    };
    const rawGroup = () => {
      if (src[i] !== '{') return esc(src[i++] || '');
      let d = 1, j = i + 1;
      while (j < src.length && d) { if (src[j] === '{') d++; else if (src[j] === '}') d--; j++; }
      const t = src.slice(i + 1, j - 1); i = j; return t;
    };
    const unary = () => { let k = i - 2; while (k >= 0 && src[k] === ' ') k--; return k < 0 || '([{=,:<>^_'.includes(src[k]); };
    function atom() {
      const c = src[i];
      if (c === '\\') {
        i++;
        let name = '';
        if (/[a-zA-Z]/.test(src[i] || '')) { while (i < src.length && /[a-zA-Z]/.test(src[i])) name += src[i++]; }
        else name = src[i++] || '';
        if (name === 'frac' || name === 'dfrac') { const a = group(), b = group(); return `<span class="fr"><span class="fn">${a}</span><span class="fd">${b}</span></span>`; }
        if (name === 'sqrt') {
          let idx = '';
          if (src[i] === '[') { const j = src.indexOf(']', i); idx = src.slice(i + 1, j); i = j + 1; }
          const a = group();
          return `<span class="sq">${idx ? `<span class="ri">${esc(idx)}</span>` : ''}√<span class="sqc">${a}</span></span>`;
        }
        if (name === 'text' || name === 'mathrm') return `<span class="txt">${rawGroup()}</span>`;
        if (name === 'overline') return `<span style="text-decoration:overline">${group()}</span>`;
        if (name === 'bold' || name === 'mathbf') return `<b>${group()}</b>`;
        const s = SYM[name];
        if (s !== undefined) return OPS.has(s) ? opSpan(s) : s;
        return esc(name);
      }
      i++;
      if (c === '{') { const h = seq('}'); i++; return h; }
      if (/[a-zA-Z]/.test(c)) return `<i>${c}</i>`;
      if (c === '-') return unary() ? '−' : opSpan('−');
      if (c === '*') return opSpan('×');
      if (c === '<') return opSpan('&lt;');
      if (c === '>') return opSpan('&gt;');
      if (c === '&') return '&amp;';
      if (c === '=' || c === '+') return opSpan(c);
      if (c === "'") return '′';
      if (c === ' ') return '';
      return c;
    }
    function seq(stop) {
      let out = '';
      while (i < src.length && src[i] !== stop) {
        if (src[i] === '^' || src[i] === '_') { const t = src[i] === '^' ? 'sup' : 'sub'; i++; out += `<${t}>${group()}</${t}>`; continue; }
        out += atom();
      }
      return out;
    }
    return seq(undefined);
  }
  function md(s) {
    return String(s)
      .replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => `<div class="big"><span class="m">${tex(m)}</span></div>`)
      .replace(/\\\(([\s\S]+?)\\\)/g, (_, m) => `<span class="m">${tex(m)}</span>`);
  }
  function expand(h) {
    return h
      .replace(/<F t="([^"]*)">/g, '<div class="box formula"><div class="box-t">📐 $1</div>').replace(/<\/F>/g, '</div>')
      .replace(/<TIP>/g, '<div class="box tip"><div class="box-t">💡 Tip</div>').replace(/<\/TIP>/g, '</div>')
      .replace(/<NOTE>/g, '<div class="box note"><div class="box-t">📝 Note</div>').replace(/<\/NOTE>/g, '</div>')
      .replace(/<EX t="([^"]*)">/g, '<details class="ex"><summary><span class="ex-t">$1</span><span class="ex-q">')
      .replace(/<SOL>/g, '</span><span class="ex-btn">Solution</span></summary><div class="ex-s">').replace(/<\/EX>/g, '</div></details>')
      .replace(/<BIG>/g, '<div class="big">').replace(/<\/BIG>/g, '</div>');
  }
  const R2 = h => md(expand(h));

  /* ---------------- State / persistence ---------------- */
  const KEY = 'greql_v1';
  let storageOK = true;
  try { localStorage.setItem('greql_test', '1'); localStorage.removeItem('greql_test'); } catch (e) { storageOK = false; }
  const fresh = () => ({ v: 1, topics: {}, days: [], last: '', theme: 'dark' });
  let S = (() => { try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) return Object.assign(fresh(), s); } catch (e) { } return fresh(); })();
  function save() {
    if (!storageOK) return;
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('⚠️ Could not save progress — storage is full or blocked'); }
  }
  const tp = id => S.topics[id] || (S.topics[id] = { read: false, ans: {}, cur: 0, best: null, att: 0 });
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  function markDay() { const d = today(); if (S.days[S.days.length - 1] !== d) { S.days.push(d); if (S.days.length > 500) S.days = S.days.slice(-500); } }
  function streak() {
    const set = new Set(S.days); let n = 0; const d = new Date();
    if (!set.has(today())) d.setDate(d.getDate() - 1);
    for (;;) {
      const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      if (set.has(k)) { n++; d.setDate(d.getDate() - 1); } else break;
    }
    return n;
  }
  function stats(t) {
    const P = S.topics[t.id]; const total = t.quiz.length;
    if (!P) return { total, answered: 0, correct: 0, read: false, best: null };
    const v = Object.entries(P.ans).filter(([k]) => +k < total).map(e => e[1]);
    return { total, answered: v.length, correct: v.filter(a => a.ok).length, read: P.read, best: P.best };
  }
  const applyTheme = () => {
    document.documentElement.dataset.theme = S.theme;
    const m = $('meta[name="theme-color"]'); if (m) m.content = S.theme === 'light' ? '#f4f5fb' : '#070914';
  };

  /* ---------------- Quiz helpers ---------------- */
  function hash(s) { let h = 2166136261; for (let k = 0; k < s.length; k++) { h ^= s.charCodeAt(k); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const numOf = s => { const c = String(s).replace(/\\\(|\\\)/g, '').replace(/[\s,$%]/g, '').replace(/^−/, '-'); return /^-?\d*\.?\d+$/.test(c) ? parseFloat(c) : null; };
  function optOrder(t, idx) {
    const q = t.quiz[idx], ix = q.o.map((_, k) => k);
    if (q.fix) return ix;
    const nums = q.o.map(numOf);
    if (nums.every(v => v !== null)) return ix.sort((a, b) => nums[a] - nums[b]);
    const r = rng(hash(t.id + ':' + idx));
    for (let k = ix.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [ix[k], ix[j]] = [ix[j], ix[k]]; }
    return ix;
  }
  const correctIdx = q => q.fix ? q.a : 0;
  function parseNum(s) {
    s = String(s).trim().replace(/[,\s$%]/g, '').replace(/[−–]/g, '-');
    let m;
    if ((m = s.match(/^(-?\d*\.?\d+)\/(-?\d*\.?\d+)$/))) { const b = parseFloat(m[2]); return b === 0 ? null : parseFloat(m[1]) / b; }
    return /^-?\d*\.?\d+$/.test(s) ? parseFloat(s) : null;
  }
  function numEq(input, target) {
    const x = parseNum(input), t = parseNum(target);
    if (x === null || t === null) return false;
    const tol = Number.isInteger(t) ? 1e-9 : Math.max(0.006, Math.abs(t) * 1e-6);
    return Math.abs(x - t) <= tol;
  }

  /* ---------------- UI helpers ---------------- */
  const view = () => $('#view');
  let toastTimer;
  function toast(msg, action, fn, ms = 2800) {
    const el = $('#toast'); el.innerHTML = `<span>${msg}</span>${action ? `<button id="toastAct">${action}</button>` : ''}`;
    el.classList.add('show'); clearTimeout(toastTimer);
    if (action) $('#toastAct').onclick = () => { el.classList.remove('show'); fn(); };
    toastTimer = setTimeout(() => el.classList.remove('show'), action ? 5000 : ms);
  }
  function ring(pct, label, sub) {
    const C = 2 * Math.PI * 54;
    return `<div class="ring"><svg viewBox="0 0 128 128"><circle class="track" cx="64" cy="64" r="54" stroke-width="10"/>
      <circle class="bar" cx="64" cy="64" r="54" stroke-width="10" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - pct / 100)}"/></svg>
      <div class="ring-label"><div><b>${label}</b><br><span>${sub}</span></div></div></div>`;
  }
  const animateRings = () => requestAnimationFrame(() => requestAnimationFrame(() => $$('.ring .bar').forEach(b => b.style.strokeDashoffset = b.dataset.off)));
  const animateBars = () => requestAnimationFrame(() => requestAnimationFrame(() => $$('.pbar i[data-w]').forEach(b => b.style.width = b.dataset.w)));
  function confetti() {
    const c = document.createElement('canvas'); c.id = 'confetti'; document.body.appendChild(c);
    const x = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
    const cols = ['#4f46e5', '#3b82f6', '#10b981', '#f59e0b', '#64748b'];
    const P = Array.from({ length: 160 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35, vx: (Math.random() - .5) * 14, vy: Math.random() * -14 - 4, s: Math.random() * 7 + 4, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[Math.random() * 5 | 0] }));
    const t0 = performance.now();
    (function f(t) {
      x.clearRect(0, 0, c.width, c.height);
      P.forEach(p => { p.vy += .35; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.r += p.vr; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore(); });
      if (t - t0 < 3200) requestAnimationFrame(f); else c.remove();
    })(t0);
  }

  /* ---------------- Router ---------------- */
  let QV = { id: null, idx: 0, review: false, sel: null };
  function route() {
    const h = location.hash.replace(/^#\/?/, '').split('/');
    if (h[0] === 't' && TMAP[h[1]]) {
      const t = TMAP[h[1]], mode = h[2] === 'quiz' ? 'quiz' : 'learn';
      renderTopic(t, mode); S.last = location.hash; save(); WB.setKey(t.id);
    } else if (h[0] === 'formulas') { renderFormulas(); WB.setKey('home'); }
    else { renderHome(); WB.setKey('home'); }
    window.scrollTo(0, 0);
  }

  /* ---------------- Home ---------------- */
  function renderHome() {
    let tot = 0, cor = 0, ans = 0, done = 0, read = 0;
    TOPICS.forEach(t => { const s = stats(t); tot += s.total; cor += s.correct; ans += s.answered; if (s.answered === s.total) done++; if (s.read) read++; });
    const pct = tot ? Math.round(ans / tot * 100) : 0, acc = ans ? Math.round(cor / ans * 100) : 0;
    const next = TOPICS.find(t => stats(t).answered < t.quiz.length) || TOPICS[0];
    const cont = S.last && S.last.startsWith('#/t/') ? S.last : `#/t/${next.id}/learn`;
    const lastT = TMAP[(S.last.split('/')[2]) || ''];
    let html = `<section class="card hero fade-in">${ring(pct, pct + '%', 'complete')}
      <div><h1>Master GRE Quant, one topic at a time.</h1>
      <p>Learn each formula with worked examples, then lock it in with a topic quiz. Use the rough-work board anytime — everything is saved on this device.</p>
      <div class="stats"><div class="stat"><b>${done}/${TOPICS.length}</b>topics done</div><div class="stat"><b>${ans}/${tot}</b>answered</div>
      <div class="stat"><b>${acc}%</b>accuracy</div><div class="stat"><b>🔥 ${streak()}</b>day streak</div></div>
      <div class="btn-row"><a class="btn btn-primary" id="contBtn" href="${cont}">${ans || read ? 'Continue' : 'Start learning'}${lastT && (ans || read) ? ' · ' + esc(lastT.title) : ''} →</a>
      <a class="btn btn-ghost" href="#/formulas" id="fsBtn">📐 Formula sheet</a></div></div></section>`;
    let n = 0;
    CHAPTERS.forEach(ch => {
      const ts = TOPICS.filter(t => t.ch === ch.id); if (!ts.length) return;
      html += `<div class="chapter"><h2>${ch.name}</h2><span>${ch.sub}</span></div><div class="grid">`;
      ts.forEach(t => {
        const s = stats(t), full = s.answered === s.total, w = Math.round(s.answered / s.total * 100);
        const badge = full ? (s.correct === s.total ? '<span class="badge ok">★ Mastered</span>' : `<span class="badge ok">✓ ${s.correct}/${s.total}</span>`)
          : s.answered ? `<span class="badge go">In progress</span>` : s.read ? '<span class="badge go">Read</span>' : '<span class="badge">New</span>';
        html += `<a class="card tcard fade-in ${full ? 'done-glow' : ''}" id="topic-${t.id}" style="animation-delay:${Math.min(n++ * 30, 600)}ms" href="#/t/${t.id}/${s.read ? 'quiz' : 'learn'}">
          <div class="tcard-top"><div class="ticon">${t.icon}</div><div><div class="num">Topic ${t.idx + 1}</div><h3>${esc(t.title)}</h3></div></div>
          <p>${esc(t.desc)}</p><div class="pbar"><i style="width:0" data-w="${w}%"></i></div>
          <div class="tmeta"><span>${s.answered}/${s.total} questions${s.answered ? ` · ${s.correct} correct` : ''}</span>${badge}</div></a>`;
      });
      html += '</div>';
    });
    html += `<p class="footer">Built from your GRE notes · ${TOPICS.length} topics · ${tot} questions · Works offline</p>`;
    view().innerHTML = html; animateRings(); animateBars();
    document.title = 'GRE Quant Lab — Formulas, Lessons & Topic Quizzes';
  }

  /* ---------------- Topic ---------------- */
  function renderTopic(t, mode) {
    const s = stats(t);
    document.title = `${t.title} — ${mode === 'quiz' ? 'Quiz' : 'Learn'} · GRE Quant Lab`;
    view().innerHTML = `<div class="thead fade-in"><a class="crumb" href="#/" id="backHome">← All topics</a>
      <h1><span class="ticon">${t.icon}</span>${esc(t.title)}</h1>
      <nav class="tabs"><a class="tab ${mode === 'learn' ? 'active' : ''}" id="tabLearn" href="#/t/${t.id}/learn">📖 Learn ${s.read ? '<small>✓</small>' : ''}</a>
      <a class="tab ${mode === 'quiz' ? 'active' : ''}" id="tabQuiz" href="#/t/${t.id}/quiz">✏️ Quiz <small>${s.answered}/${s.total}</small></a></nav></div><div id="pane"></div>`;
    if (mode === 'learn') renderLearn(t); else { if (QV.id !== t.id) { const P = tp(t.id); QV = { id: t.id, idx: Math.min(P.cur || 0, t.quiz.length - 1), review: false, sel: null }; } renderQuiz(t); }
  }
  function topicNav(t) {
    const p = TOPICS[t.idx - 1], n = TOPICS[t.idx + 1];
    return `<div class="btn-row">${p ? `<a class="btn btn-ghost" href="#/t/${p.id}/learn">← ${esc(p.title)}</a>` : ''}${n ? `<a class="btn btn-ghost" href="#/t/${n.id}/learn">${esc(n.title)} →</a>` : ''}</div>`;
  }
  function renderLearn(t) {
    $('#pane').innerHTML = `<article class="card lesson fade-in">${R2(t.learn)}
      <div class="lesson-end"><span style="color:var(--muted);font-size:.9rem">Ready? ${t.quiz.length} questions on this topic.</span>
      <button class="btn btn-primary" id="startQuiz">${tp(t.id).read ? 'Go to quiz' : 'Mark as read & start quiz'} →</button></div></article>
      <div style="margin-top:16px">${topicNav(t)}</div>`;
    $('#startQuiz').onclick = () => { tp(t.id).read = true; markDay(); save(); location.hash = `#/t/${t.id}/quiz`; };
  }

  /* ---------------- Quiz ---------------- */
  function renderQuiz(t, anim) {
    const P = tp(t.id), n = t.quiz.length, answered = Object.keys(P.ans).filter(k => +k < n).length;
    if (answered === n && !QV.review) return renderResults(t);
    const idx = QV.idx, q = t.quiz[idx], A = P.ans[idx], ci = q.o ? correctIdx(q) : null;
    const dots = t.quiz.map((_, k) => { const a = P.ans[k]; return `<button class="dot ${a ? (a.ok ? 'ok' : 'no') : ''} ${k === idx ? 'cur' : ''}" data-k="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`; }).join('');
    let body;
    if (q.o) {
      body = '<div class="opts">' + optOrder(t, idx).map((oi, pos) => {
        let cls = '';
        if (A) { if (oi === ci) cls = 'right'; else if (oi === A.v) cls = 'wrong'; }
        else if (QV.sel === oi) cls = 'sel';
        return `<button class="opt ${cls}" id="opt-${pos}" data-o="${oi}" ${A ? 'disabled' : ''}><span class="L">${LET[pos]}</span><span>${md(q.o[oi])}</span></button>`;
      }).join('') + '</div>';
    } else {
      body = `<div class="numin"><input id="numIn" inputmode="decimal" autocomplete="off" placeholder="Your answer" value="${A ? esc(A.v) : ''}" class="${A ? (A.ok ? 'right' : 'wrong') : ''}" ${A ? 'disabled' : ''}>
        <span class="hint">Numeric entry — type an integer, decimal (round to 2 places if needed) or a fraction like 3/4.</span></div>`;
    }
    let verdict = '';
    if (A) {
      const ans = q.o ? md(q.o[ci]) : md(q.show || q.n);
      verdict = `<div class="verdict ${A.ok ? 'ok' : 'no'}"><h4>${A.ok ? '✅ Correct!' : '❌ Not quite'}${A.ok ? '' : ` <span style="font-weight:500;color:var(--text)">— answer: ${ans}</span>`}</h4>
        <div class="exp">${md(q.e || '')}</div></div>`;
    }
    const unanswered = t.quiz.map((_, k) => k).filter(k => !P.ans[k]);
    let act;
    if (!A) act = `<button class="btn btn-primary" id="qAct" data-act="check" ${q.o && QV.sel === null ? 'disabled' : ''}>Check answer</button>`;
    else if (!unanswered.length) act = `<button class="btn btn-good" id="qAct" data-act="results">See results 🏁</button>`;
    else act = `<button class="btn btn-primary" id="qAct" data-act="next">Next question →</button>`;
    $('#pane').innerHTML = `<div class="qwrap">
      <div class="qhead">
        <span class="count">Question ${idx + 1} <small>of ${n}</small></span>
        <button class="btn btn-ghost" id="qWbBtn" style="padding:4px 10px;font-size:0.8rem;gap:6px;display:inline-flex;align-items:center;border-radius:6px">✏️ Rough work</button>
        <span class="spacer"></span>
        <span class="chip">✅ ${Object.values(P.ans).filter(a => a.ok).length} correct</span>
      </div>
      <div class="dots">${dots}</div>
      <div class="card qcard ${anim || 'fade-in'}" id="qcard"><div class="q-tag">${q.o ? 'Multiple choice' : 'Numeric entry'}${q.src ? ' · ' + esc(q.src) : ''}</div>
        <div class="q-body">${md(q.q)}</div>${body}${verdict}
        <div class="qnav"><button class="btn btn-ghost" id="qPrev" ${idx === 0 ? 'disabled' : ''}>← Prev</button>${act}</div></div>
      <p class="kbd-hint">Tip: tap ✏️ Rough work to scribble. Keys: A–E select · Enter check/next</p></div>`;
    const qwb = $('#qWbBtn'); if (qwb) qwb.onclick = WB.open;
    $$('.dot').forEach(d => d.onclick = () => { QV.idx = +d.dataset.k; QV.sel = null; QV.review = true; renderQuiz(t); });
    $$('.opt').forEach(b => b.onclick = () => { QV.sel = +b.dataset.o; $$('.opt').forEach(x => x.classList.toggle('sel', x === b)); $('#qAct').disabled = false; });
    $('#qPrev').onclick = () => { QV.idx = Math.max(0, idx - 1); QV.sel = null; renderQuiz(t); };
    const ni = $('#numIn'); if (ni && !A) { ni.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); check(t); } }; }
    $('#qAct').onclick = () => {
      const a = $('#qAct').dataset.act;
      if (a === 'check') check(t);
      else if (a === 'results') { QV.review = false; renderQuiz(t); window.scrollTo(0, 0); }
      else { const nx = unanswered.find(k => k > idx); QV.idx = nx !== undefined ? nx : unanswered[0]; QV.sel = null; tp(t.id).cur = QV.idx; save(); renderQuiz(t); scrollQ(); }
    };
  }
  const scrollQ = () => { const h = $('.qhead'); if (h && h.getBoundingClientRect().top < 0) h.scrollIntoView({ behavior: 'smooth' }); };
  function check(t) {
    const P = tp(t.id), idx = QV.idx, q = t.quiz[idx];
    let rec;
    if (q.o) { if (QV.sel === null) return; rec = { v: QV.sel, ok: QV.sel === correctIdx(q) }; }
    else {
      const v = $('#numIn').value.trim();
      if (parseNum(v) === null) { const c = $('#qcard'); c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake'); toast('Enter a number like 12, -3.5 or 3/4'); return; }
      rec = { v, ok: numEq(v, q.n) };
    }
    P.ans[idx] = rec; P.cur = idx; QV.sel = null; markDay();
    const n = t.quiz.length, all = Object.keys(P.ans).filter(k => +k < n);
    if (all.length === n) { const sc = all.filter(k => P.ans[k].ok).length; P.att = (P.att || 0) + 1; P.best = Math.max(P.best || 0, sc); }
    save();
    renderQuiz(t, rec.ok ? 'pop' : 'shake');
    const tq = $('#tabQuiz small'); if (tq) tq.textContent = `${all.length}/${n}`;
    const v = $('.verdict'); if (v) setTimeout(() => { const r = v.getBoundingClientRect(); if (r.bottom > innerHeight - (document.body.classList.contains('wb-open') && innerWidth < 1024 ? innerHeight * .5 : 0)) v.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 60);
  }
  function renderResults(t) {
    const P = tp(t.id), n = t.quiz.length, sc = t.quiz.filter((_, k) => P.ans[k] && P.ans[k].ok).length, pct = Math.round(sc / n * 100);
    const msg = pct === 100 ? 'Perfect score — topic mastered! 🎉' : pct >= 80 ? 'Excellent work! Review the misses and you\'re there.' : pct >= 50 ? 'Good progress. Re-read the formulas and retry the misses.' : 'Keep going — revisit the lesson, then retry.';
    const nx = TOPICS[t.idx + 1];
    $('#pane').innerHTML = `<div class="card results fade-in">${ring(pct, `${sc}/${n}`, 'score')}<h2>${msg}</h2>
      <p>Best: ${P.best ?? sc}/${n} · Attempts: ${P.att || 1}</p>
      <div class="dots" style="justify-content:center">${t.quiz.map((_, k) => `<button class="dot ${P.ans[k].ok ? 'ok' : 'no'}" data-k="${k}">${k + 1}</button>`).join('')}</div>
      <div class="btn-row" style="justify-content:center">
        ${sc < n ? '<button class="btn btn-primary" id="retryWrong">↻ Retry incorrect</button>' : ''}
        <button class="btn btn-ghost" id="reviewBtn">🔍 Review answers</button>
        <button class="btn btn-ghost" id="restartBtn">⟲ Restart quiz</button>
        ${nx ? `<a class="btn ${sc === n ? 'btn-primary' : 'btn-ghost'}" href="#/t/${nx.id}/learn" id="nextTopic">Next: ${esc(nx.title)} →</a>` : '<a class="btn btn-ghost" href="#/">🏠 Home</a>'}
      </div></div>`;
    animateRings();
    if (pct === 100 && !P.celebrated) { P.celebrated = 1; save(); confetti(); }
    $$('.results .dot').forEach(d => d.onclick = () => { QV.idx = +d.dataset.k; QV.review = true; renderQuiz(t); });
    $('#reviewBtn').onclick = () => { QV.idx = 0; QV.review = true; renderQuiz(t); };
    const rw = $('#retryWrong');
    if (rw) rw.onclick = () => { const w = t.quiz.map((_, k) => k).filter(k => !P.ans[k].ok); w.forEach(k => delete P.ans[k]); P.cur = w[0]; QV = { id: t.id, idx: w[0], review: false, sel: null }; save(); renderTopic(t, 'quiz'); };
    $('#restartBtn').onclick = () => { if (!confirm('Clear all answers for this topic and start again?')) return; P.ans = {}; P.cur = 0; P.celebrated = 0; QV = { id: t.id, idx: 0, review: false, sel: null }; save(); renderTopic(t, 'quiz'); };
  }

  /* ---------------- Formula sheet ---------------- */
  function renderFormulas() {
    document.title = 'Formula Sheet · GRE Quant Lab';
    let html = `<div class="thead fade-in"><a class="crumb" href="#/">← All topics</a><h1><span class="ticon">📐</span>Formula Sheet</h1>
      <p style="color:var(--muted)">Every formula box from every lesson, in one place — perfect for last-minute revision.</p></div>`;
    CHAPTERS.forEach(ch => {
      const ts = TOPICS.filter(t => t.ch === ch.id); if (!ts.length) return;
      html += `<div class="chapter"><h2>${ch.name}</h2></div>`;
      ts.forEach(t => {
        const boxes = t.learn.match(/<F t="[^"]*">[\s\S]*?<\/F>/g) || [];
        if (!boxes.length) return;
        html += `<section class="card fs-topic fade-in"><h3><span>${t.icon} ${esc(t.title)}</span><a href="#/t/${t.id}/learn">Open lesson →</a></h3>${R2(boxes.join(''))}</section>`;
      });
    });
    view().innerHTML = html;
  }

  /* ---------------- Settings modal ---------------- */
  function closeModal() { const m = $('.modal-bg'); if (m) m.remove(); }
  function openSettings() {
    closeModal();
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
    const bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = `<div class="card modal" role="dialog" aria-label="Settings"><h2>Settings & progress</h2>
      <p>Progress is saved automatically in this browser on this device${storageOK ? '' : ' — <b style="color:var(--bad)">but storage is blocked here, so it will not persist. Open the file in Chrome/Safari directly.</b>'}.</p>
      <div class="switch-row"><span>Light theme</span><button class="btn btn-ghost" id="themeT">${S.theme === 'light' ? 'On' : 'Off'}</button></div>
      <h4>📤 Backup / move progress</h4><p>Copy this code and paste it into the app on another device (e.g. your phone) to carry your progress over.</p>
      <textarea id="expCode" readonly>${code}</textarea><div class="btn-row" style="margin-top:8px"><button class="btn btn-ghost" id="copyCode">Copy code</button></div>
      <h4>📥 Restore from code</h4><textarea id="impCode" placeholder="Paste a backup code here"></textarea>
      <div class="btn-row" style="margin-top:8px"><button class="btn btn-primary" id="impBtn">Restore</button></div>
      <h4>📱 Using it on your phone</h4><p><b>Android:</b> send the HTML file to yourself, download it, then open it with Chrome (Files → tap → Open with Chrome). <b>iPhone:</b> the Files preview can't save progress — upload the file to any free static host (e.g. Netlify Drop, GitHub Pages) and open the link in Safari; "Add to Home Screen" makes it feel like an app.</p>
      <h4 style="color:var(--bad)">Danger zone</h4><div class="btn-row"><button class="btn btn-ghost" id="resetAll">Reset all progress</button><button class="btn btn-ghost" id="clearBoards">Clear all whiteboards</button></div>
      <div class="btn-row" style="margin-top:20px;justify-content:flex-end"><button class="btn btn-primary" id="closeM">Done</button></div></div>`;
    document.body.appendChild(bg);
    bg.onclick = e => { if (e.target === bg) closeModal(); };
    $('#closeM').onclick = closeModal;
    $('#themeT').onclick = () => { S.theme = S.theme === 'light' ? 'dark' : 'light'; applyTheme(); save(); $('#themeT').textContent = S.theme === 'light' ? 'On' : 'Off'; WB.redraw(); };
    $('#copyCode').onclick = () => { const ta = $('#expCode'); ta.select(); (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.reject()).then(() => toast('Backup code copied'), () => { document.execCommand('copy'); toast('Backup code copied'); }); };
    $('#impBtn').onclick = () => {
      try { const s = JSON.parse(decodeURIComponent(escape(atob($('#impCode').value.trim())))); if (!s || s.v !== 1) throw 0; S = Object.assign(fresh(), s); save(); applyTheme(); closeModal(); QV.id = null; route(); toast('✅ Progress restored'); }
      catch (e) { toast('That code is not valid'); }
    };
    $('#resetAll').onclick = () => { if (!confirm('Erase ALL quiz progress? This cannot be undone.')) return; const th = S.theme; S = fresh(); S.theme = th; save(); QV.id = null; closeModal(); route(); toast('Progress reset'); };
    $('#clearBoards').onclick = () => { if (!confirm('Erase every whiteboard drawing?')) return; WB.clearAll(); toast('All whiteboards cleared'); };
  }

  /* ---------------- Whiteboard ---------------- */
  const WB = (() => {
    const COLORS = ['ink', '#818cf8', '#38bdf8', '#34d399', '#fbbf24', '#f87171', '#94a3b8'];
    const PK = 'greql_wbpref', BK = 'greql_wb_';
    let pref = { tool: 'pen', color: 'ink', pen: 3, eraser: 28, paper: false, h: 60, big: false };
    try { Object.assign(pref, JSON.parse(localStorage.getItem(PK) || '{}')); } catch (e) { }
    if (typeof pref.h !== 'number' || isNaN(pref.h) || pref.h < 30 || pref.h > 95) {
      pref.h = 60;
    }
    let el, stage, cv, ctx, dpr = 1, W = 0, H = 0, key = null, strokes = [], redoS = [], cur = null;
    let isDrawing = false, activeId = null, isOpen = false, lastCleared = null;
    const savePref = () => { try { localStorage.setItem(PK, JSON.stringify(pref)); } catch (e) { } };
    const ink = c => c === 'ink' ? (pref.paper ? '#1b1f3a' : '#f1f3ff') : c;
    const icon = {
      pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
      eraser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3a1 1 0 0 1 0-1.4l10-10a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4L11 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>',
      undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>',
      redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/></svg>',
      trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
      paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>',
      expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
      close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>'
    };
    function build() {
      el = $('#wb');
      el.innerHTML = `<div class="wb-handle" id="wbHandle" title="Drag to resize"><i></i></div>
        <div class="wb-bar">
          <button class="tool" id="wbClose" title="Close board (Esc)">${icon.close}</button>
          <div class="wb-title">✏️ Rough work <small id="wbName"></small></div><span class="wb-sep"></span>
          <button class="tool" id="wbPen" title="Pen">${icon.pen}</button><button class="tool" id="wbEraser" title="Eraser">${icon.eraser}</button>
          <span class="wb-sep"></span>
          ${COLORS.map((c, k) => `<button class="swatch" id="wbC${k}" data-c="${c}" title="Ink colour" style="background:${c === 'ink' ? 'linear-gradient(135deg,#f1f3ff 50%,#1b1f3a 50%)' : c}"></button>`).join('')}
          <span class="wb-sep"></span>
          <label class="size-ctl" title="Size"><span class="size-prev"><i id="wbPrev"></i></span><input type="range" id="wbSize" min="1" max="40" aria-label="Ink size"><span class="size-val" id="wbVal"></span></label>
          <span class="wb-sep"></span>
          <button class="tool" id="wbUndo" title="Undo">${icon.undo}</button><button class="tool" id="wbRedo" title="Redo">${icon.redo}</button>
          <button class="tool" id="wbClear" title="Clear board">${icon.trash}</button>
          <button class="tool" id="wbPaper" title="Dark / paper background">${icon.paper}</button><button class="tool" id="wbBig" title="Bigger board">${icon.expand}</button>
        </div>
        <div class="wb-stage" id="wbStage"><canvas id="wbCanvas"></canvas><div class="wb-empty" id="wbEmpty">Scribble your rough work here ✍️<br>Pick pen size & colour above · use the eraser to fix mistakes</div></div>`;
      stage = $('#wbStage'); cv = $('#wbCanvas'); ctx = cv.getContext('2d');
      $('#wbClose').onclick = close;
      $('#wbPen').onclick = () => setTool('pen'); $('#wbEraser').onclick = () => setTool('eraser');
      $$('.swatch', el).forEach(s => s.onclick = () => { pref.color = s.dataset.c; setTool('pen'); });
      $('#wbSize').oninput = e => { pref[pref.tool] = +e.target.value; syncUI(); savePref(); };
      $('#wbUndo').onclick = undo; $('#wbRedo').onclick = redo;
      $('#wbClear').onclick = () => { if (!strokes.length) return; lastCleared = strokes; strokes = []; redoS = []; persist(); redraw(); toast('Board cleared', 'Undo', () => { strokes = lastCleared; persist(); redraw(); }); };
      $('#wbPaper').onclick = () => { pref.paper = !pref.paper; savePref(); syncUI(); redraw(); };
      $('#wbBig').onclick = () => { pref.big = !pref.big; savePref(); applySize(); setTimeout(fit, 100); };
      
      // Pointer events for modern touch & mouse
      cv.addEventListener('pointerdown', down);
      window.addEventListener('pointermove', move, { passive: false });
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', cancel);

      // Dedicated TouchEvent fallbacks with { passive: false } to guarantee prevention of mobile gestures
      cv.addEventListener('touchstart', e => {
        if (!window.PointerEvent) down(e);
      }, { passive: false });
      cv.addEventListener('touchmove', e => {
        e.preventDefault(); // Prevents page scrolling behind whiteboard during mobile touch
        if (!window.PointerEvent) move(e);
      }, { passive: false });
      cv.addEventListener('touchend', e => {
        if (!window.PointerEvent) up(e);
      });
      cv.addEventListener('touchcancel', e => {
        if (!window.PointerEvent) cancel(e);
      });

      if (window.ResizeObserver) {
        new ResizeObserver(() => requestAnimationFrame(fit)).observe(stage);
      }
      window.addEventListener('resize', () => { applySize(); fit(); });
      window.addEventListener('orientationchange', () => { setTimeout(() => { applySize(); fit(); }, 200); });

      // drag-to-resize (mobile bottom sheet handle)
      const hd = $('#wbHandle');
      if (hd) {
        const startDrag = e => {
          if (e.cancelable) e.preventDefault();
          el.classList.add('dragging');
          const getY = ev => (ev.touches && ev.touches[0]) ? ev.touches[0].clientY : ev.clientY;
          const mv = ev => {
            const cy = getY(ev);
            if (typeof cy === 'number') {
              const vh = Math.max(26, Math.min(92, ((window.innerHeight - cy) / window.innerHeight) * 100));
              pref.h = Math.round(vh);
              pref.big = false;
              applySize();
            }
          };
          const end = () => {
            el.classList.remove('dragging');
            window.removeEventListener('pointermove', mv);
            window.removeEventListener('pointerup', end);
            window.removeEventListener('touchmove', mv);
            window.removeEventListener('touchend', end);
            savePref();
            setTimeout(fit, 40);
          };
          window.addEventListener('pointermove', mv, { passive: false });
          window.addEventListener('pointerup', end);
          window.addEventListener('touchmove', mv, { passive: false });
          window.addEventListener('touchend', end);
        };
        hd.addEventListener('pointerdown', startDrag);
        hd.addEventListener('touchstart', startDrag, { passive: false });
      }
      applySize(); syncUI();
    }
    function applySize() {
      if (el) {
        el.classList.toggle('expanded', !!pref.big);
        el.style.height = pref.big ? '94vh' : (window.innerWidth < 768 ? '85vh' : '82vh');
      }
      const bigBtn = $('#wbBig');
      if (bigBtn) bigBtn.classList.toggle('active', !!pref.big);
      setTimeout(fit, 60);
    }
    function setTool(t) { pref.tool = t; savePref(); syncUI(); }
    function syncUI() {
      $('#wbPen').classList.toggle('active', pref.tool === 'pen'); $('#wbEraser').classList.toggle('active', pref.tool === 'eraser');
      $$('.swatch', el).forEach(s => s.classList.toggle('active', pref.tool === 'pen' && s.dataset.c === pref.color));
      const sz = $('#wbSize'), er = pref.tool === 'eraser';
      sz.min = er ? 6 : 1; sz.max = er ? 80 : 30; sz.value = pref[pref.tool];
      $('#wbVal').textContent = pref[pref.tool];
      const d = Math.min(28, pref[pref.tool]), p = $('#wbPrev');
      p.style.width = p.style.height = d + 'px';
      p.style.background = er ? 'transparent' : (pref.color === 'ink' ? '#f1f3ff' : pref.color);
      p.style.border = er ? '1.5px dashed var(--muted)' : 'none';
      stage.classList.toggle('paper', pref.paper); stage.classList.toggle('dark', !pref.paper); stage.classList.toggle('erasing', er);
      $('#wbPaper').classList.toggle('active', pref.paper);
      $('#wbUndo').disabled = !strokes.length; $('#wbRedo').disabled = !redoS.length;
      $('#wbUndo').style.opacity = strokes.length ? 1 : .4; $('#wbRedo').style.opacity = redoS.length ? 1 : .4;
      $('#wbEmpty').style.opacity = strokes.length || cur ? 0 : 1;
    }
    function fit() {
      if (!stage || !cv) return;
      const newW = stage.clientWidth, newH = stage.clientHeight;
      if (!newW || !newH) return;
      const newDpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const targetW = Math.round(newW * newDpr);
      const targetH = Math.round(newH * newDpr);
      if (cv.width === targetW && cv.height === targetH && W === newW && H === newH && dpr === newDpr) {
        return; // Size hasn't changed; avoid clearing canvas bitmap
      }
      W = newW; H = newH; dpr = newDpr;
      cv.width = targetW; cv.height = targetH;
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      redraw();
    }
    function style(s) {
      ctx.globalCompositeOperation = s.t === 'e' ? 'destination-out' : 'source-over';
      ctx.strokeStyle = ctx.fillStyle = s.t === 'e' ? '#000' : ink(s.c);
      ctx.lineWidth = s.s; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    }
    function drawStroke(s) {
      const p = s.p; style(s); ctx.beginPath();
      if (p.length <= 2) { ctx.arc(p[0], p[1], s.s / 2, 0, Math.PI * 2); ctx.fill(); return; }
      ctx.moveTo(p[0], p[1]);
      for (let k = 2; k < p.length - 2; k += 2) ctx.quadraticCurveTo(p[k], p[k + 1], (p[k] + p[k + 2]) / 2, (p[k + 1] + p[k + 3]) / 2);
      ctx.lineTo(p[p.length - 2], p[p.length - 1]); ctx.stroke();
    }
    function redraw() {
      if (!ctx || !cv.width || !cv.height) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'source-over'; ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      strokes.forEach(drawStroke); if (cur) drawStroke(cur);
      syncUI();
    }
    const pos = e => {
      const r = cv.getBoundingClientRect();
      let cx, cy;
      if (e.touches && e.touches.length > 0) {
        cx = e.touches[0].clientX; cy = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        cx = e.changedTouches[0].clientX; cy = e.changedTouches[0].clientY;
      } else {
        cx = e.clientX; cy = e.clientY;
      }
      return [
        Math.round((cx - r.left) * 10) / 10,
        Math.round((cy - r.top) * 10) / 10
      ];
    };
    function down(e) {
      if (isDrawing) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.cancelable) e.preventDefault();
      isDrawing = true;
      activeId = e.pointerId !== undefined ? e.pointerId : (e.touches && e.touches[0] ? e.touches[0].identifier : 'touch');
      try { if (e.pointerId !== undefined && cv.setPointerCapture) cv.setPointerCapture(e.pointerId); } catch (er) { }
      const er = pref.tool === 'eraser', [x, y] = pos(e);
      cur = { t: er ? 'e' : 'p', c: pref.color, s: pref[pref.tool], p: [x, y] };
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); drawStroke(cur); $('#wbEmpty').style.opacity = '0';
    }
    function move(e) {
      if (!isDrawing || !cur) return;
      if (activeId !== 'touch' && e.pointerId !== undefined && e.pointerId !== activeId) return;
      if (e.cancelable) e.preventDefault();
      const evs = (e.getCoalescedEvents && typeof e.getCoalescedEvents === 'function') ? e.getCoalescedEvents() : [e];
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); style(cur);
      for (const ev of (evs.length ? evs : [e])) {
        const [x, y] = pos(ev), p = cur.p, lx = p[p.length - 2], ly = p[p.length - 1];
        if (Math.abs(x - lx) + Math.abs(y - ly) < 1.2) continue;
        ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(x, y); ctx.stroke();
        p.push(x, y);
      }
    }
    function up(e) {
      if (!isDrawing) return;
      if (activeId !== 'touch' && e && e.pointerId !== undefined && e.pointerId !== activeId) return;
      try { if (e && e.pointerId !== undefined && cv.releasePointerCapture) cv.releasePointerCapture(e.pointerId); } catch (er) { }
      if (cur && cur.p && cur.p.length >= 2) {
        strokes.push(cur);
        redoS = [];
        persist();
      }
      cur = null;
      isDrawing = false;
      activeId = null;
      redraw();
    }
    function cancel(e) {
      if (!isDrawing) return;
      try { if (e && e.pointerId !== undefined && cv.releasePointerCapture) cv.releasePointerCapture(e.pointerId); } catch (er) { }
      cur = null;
      isDrawing = false;
      activeId = null;
      redraw();
    }
    function undo() { if (!strokes.length) return; redoS.push(strokes.pop()); persist(); redraw(); }
    function redo() { if (!redoS.length) return; strokes.push(redoS.pop()); persist(); redraw(); }
    function persist() {
      if (!key) return;
      try { if (strokes.length) localStorage.setItem(BK + key, JSON.stringify(strokes)); else localStorage.removeItem(BK + key); }
      catch (e) { toast('⚠️ Whiteboard storage full — clear an old board'); }
    }
    function setKey(k) {
      if (k === key) return;
      key = k; redoS = []; cur = null; isDrawing = false; activeId = null;
      try { strokes = JSON.parse(localStorage.getItem(BK + k) || '[]'); } catch (e) { strokes = []; }
      $('#wbName').textContent = '· ' + (k === 'home' ? 'General' : TMAP[k].title);
      redraw();
    }
    function open() {
      isOpen = true;
      document.body.classList.add('wb-open');
      applySize();
      requestAnimationFrame(() => {
        fit();
        setTimeout(fit, 60);
        setTimeout(fit, 200);
        setTimeout(fit, 450);
      });
    }
    function close() {
      isOpen = false;
      document.body.classList.remove('wb-open');
    }
    function clearAll() { Object.keys(localStorage).filter(k => k.startsWith(BK)).forEach(k => localStorage.removeItem(k)); strokes = []; redoS = []; redraw(); }
    return { build, open, close, toggle: () => isOpen ? close() : open(), setKey, redraw, clearAll, get isOpen() { return isOpen; }, undo, redo, setTool };
  })();

  /* ---------------- Boot ---------------- */
  function boot() {
    applyTheme(); WB.build();
    $('#fab').onclick = WB.open;
    const topWb = $('#topbarWbBtn'); if (topWb) topWb.onclick = WB.toggle;
    const bdrop = $('#wbBackdrop'); if (bdrop) bdrop.onclick = WB.close;
    $('#settingsBtn').onclick = openSettings;
    $('#themeBtn').onclick = () => { S.theme = S.theme === 'light' ? 'dark' : 'light'; applyTheme(); save(); WB.redraw(); };
    document.addEventListener('keydown', e => {
      if ($('.modal-bg')) { if (e.key === 'Escape') closeModal(); return; }
      const tag = (e.target.tagName || '').toLowerCase();
      if (e.key === 'Escape' && WB.isOpen) { WB.close(); return; }
      if (WB.isOpen && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? WB.redo() : WB.undo(); return; }
      if (tag === 'input' || tag === 'textarea' || e.ctrlKey || e.metaKey || e.altKey) return;
      if (!$('#qcard')) return;
      const k = e.key.toLowerCase(), pos = LET.toLowerCase().indexOf(k) >= 0 ? LET.toLowerCase().indexOf(k) : (/^[1-8]$/.test(k) ? +k - 1 : -1);
      if (pos >= 0) { const b = $('#opt-' + pos); if (b && !b.disabled) { b.click(); e.preventDefault(); } }
      else if (e.key === 'Enter') { const a = $('#qAct'); if (a && !a.disabled) { a.click(); e.preventDefault(); } }
    });
    window.addEventListener('hashchange', route);
    route();
    if (!storageOK) setTimeout(() => toast('⚠️ This viewer blocks storage — progress will not be saved. Open the file in Chrome or Safari.', null, null, 7000), 600);
  }
  boot();
})();
