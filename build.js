const fs = require('fs');
const path = require('path');

const root = __dirname;
const src = path.join(root, 'src');

console.log('Reading source files...');
const css = fs.readFileSync(path.join(src, 'styles.css'), 'utf8');
const coreJs = fs.readFileSync(path.join(src, 'core.js'), 'utf8');
const algJs = fs.readFileSync(path.join(src, 'data_alg.js'), 'utf8');
const ariJs = fs.readFileSync(path.join(src, 'data_ari.js'), 'utf8');
const wpJs = fs.readFileSync(path.join(src, 'data_wp.js'), 'utf8');
const daJs = fs.readFileSync(path.join(src, 'data_da.js'), 'utf8');
const geoJs = fs.readFileSync(path.join(src, 'data_geo.js'), 'utf8');
const appJs = fs.readFileSync(path.join(src, 'app.js'), 'utf8');

const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="theme-color" content="#070914">
  <meta name="description" content="GRE Quantitative Reasoning self-study lab with topic-by-topic formula lessons, practice quizzes, and an integrated rough-work whiteboard.">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="GRE Quant">
  <link rel="manifest" href='data:application/manifest+json,{"name":"GRE Quant Lab","short_name":"GRE Quant","start_url":".","display":"standalone","background_color":"#070914","theme_color":"#070914"}'>
  <title>GRE Quant Lab — Formulas, Lessons & Topic Quizzes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&family=STIX+Two+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
  <style>
${css}
  </style>
</head>
<body>
  <div class="app">
    <!-- Sticky top navigation bar -->
    <header class="topbar">
      <a class="brand" href="#/" title="GRE Quant Lab Home">
        <div class="brand-logo">∑</div>
        <div>
          GRE Quant Lab
          <small>Topic-wise prep</small>
        </div>
      </a>
      <span class="spacer"></span>
      <button class="topbar-wb-btn" id="topbarWbBtn" title="Rough work whiteboard" aria-label="Rough work whiteboard">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
        </svg>
        <span>Rough work</span>
      </button>
      <button class="icon-btn" id="themeBtn" title="Toggle dark/light theme" aria-label="Toggle theme">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </button>
      <button class="icon-btn" id="settingsBtn" title="Settings, backup & mobile sync" aria-label="Settings">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>
    </header>

    <!-- Main dynamic view container -->
    <main id="view"></main>
  </div>

  <!-- Floating action button for whiteboard -->
  <button class="fab" id="fab" title="Open rough work whiteboard" aria-label="Open rough work whiteboard">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
    <span>Rough work</span>
  </button>

  <!-- Whiteboard Overlay Modal (Guaranteed Viewport Container) -->
  <div class="wb-overlay" id="wbOverlay" role="dialog" aria-modal="true" aria-label="Rough work whiteboard">
    <div class="wb-backdrop" id="wbBackdrop"></div>
    <aside class="wb" id="wb"></aside>
  </div>

  <!-- Toast notification -->
  <div class="toast" id="toast" role="status" aria-live="polite"></div>

  <!-- Self-contained app scripts -->
  <script>
${coreJs}

${algJs}

${ariJs}

${wpJs}

${daJs}

${geoJs}

${appJs}
  </script>
</body>
</html>
`;

const outPath = path.join(root, 'index.html');
fs.writeFileSync(outPath, html, 'utf8');
const stats = fs.statSync(outPath);
console.log('Successfully bundled standalone index.html (' + stats.size + ' bytes)!');

// Also copy to android assets folder for Android APK build
const androidAssets = path.join(root, 'android', 'app', 'src', 'main', 'assets');
try {
  fs.mkdirSync(androidAssets, { recursive: true });
  fs.writeFileSync(path.join(androidAssets, 'index.html'), html, 'utf8');
  console.log('Synced to Android APK assets folder!');
} catch (e) { }
