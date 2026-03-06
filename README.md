<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Zaigum Naseem — Developer Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #060810;
    --surface: #0d1117;
    --card: #111827;
    --border: rgba(255,255,255,0.07);
    --cyan: #00f7ff;
    --cyan-dim: rgba(0,247,255,0.12);
    --cyan-glow: rgba(0,247,255,0.35);
    --text: #e8eaf0;
    --muted: #6b7280;
    --accent: #ff6b6b;
    --green: #00ff88;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* ── GRID BACKGROUND ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,247,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,247,255,0.03) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── GLOW ORBS ── */
  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;
  }
  .orb-1 { width: 500px; height: 500px; background: rgba(0,247,255,0.06); top: -100px; right: -100px; }
  .orb-2 { width: 400px; height: 400px; background: rgba(255,107,107,0.05); bottom: 100px; left: -150px; }
  .orb-3 { width: 300px; height: 300px; background: rgba(0,255,136,0.04); top: 50%; left: 50%; transform: translate(-50%,-50%); }

  main { position: relative; z-index: 1; max-width: 860px; margin: 0 auto; padding: 0 24px 80px; }

  /* ── HERO ── */
  .hero {
    padding: 80px 0 60px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 48px;
    align-items: center;
    border-bottom: 1px solid var(--border);
  }

  .hero-label {
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .hero-label::before {
    content: '';
    display: inline-block;
    width: 24px; height: 1px;
    background: var(--cyan);
  }

  .hero-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 6vw, 58px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #fff;
  }
  .hero-name span {
    color: var(--cyan);
    text-shadow: 0 0 30px var(--cyan-glow);
  }

  .hero-roles {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .role-tag {
    font-size: 11px;
    padding: 4px 12px;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--muted);
    background: var(--card);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.2s;
  }
  .role-tag:hover { border-color: var(--cyan); color: var(--cyan); background: var(--cyan-dim); }

  .hero-desc {
    margin-top: 24px;
    color: var(--muted);
    max-width: 480px;
    font-size: 13px;
  }

  .hero-avatar {
    width: 120px; height: 120px;
    border-radius: 4px;
    border: 1px solid var(--border);
    background: var(--card);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-size: 40px;
    font-weight: 800;
    color: var(--cyan);
    text-shadow: 0 0 20px var(--cyan-glow);
    box-shadow: 0 0 40px rgba(0,247,255,0.1), inset 0 0 20px rgba(0,247,255,0.05);
    position: relative;
    flex-shrink: 0;
  }
  .hero-avatar::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 4px;
    background: linear-gradient(135deg, var(--cyan), transparent 60%);
    opacity: 0.3;
    pointer-events: none;
  }

  /* ── SECTION ── */
  section { margin-top: 60px; }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 28px;
  }
  .section-num {
    font-size: 11px;
    color: var(--cyan);
    letter-spacing: 0.2em;
  }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.01em;
  }
  .section-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* ── STATS ROW ── */
  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
  }
  .stat-cell {
    background: var(--card);
    padding: 20px;
    text-align: center;
  }
  .stat-val {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: var(--cyan);
    text-shadow: 0 0 20px var(--cyan-glow);
    display: block;
  }
  .stat-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--muted);
    margin-top: 4px;
  }

  /* ── SKILL GRID ── */
  .skill-category { margin-bottom: 32px; }
  .skill-cat-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--cyan);
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .skill-cat-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--cyan-dim);
  }

  .skill-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .chip {
    font-size: 12px;
    padding: 6px 14px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text);
    transition: all 0.2s;
    cursor: default;
  }
  .chip:hover {
    border-color: var(--cyan);
    color: var(--cyan);
    background: var(--cyan-dim);
    transform: translateY(-1px);
  }
  .chip.core {
    border-color: rgba(0,247,255,0.3);
    color: var(--cyan);
    background: var(--cyan-dim);
  }

  /* ── PROJECTS ── */
  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .project-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 20px;
    text-decoration: none;
    color: inherit;
    display: block;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
  }
  .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--cyan), transparent);
    opacity: 0;
    transition: opacity 0.25s;
  }
  .project-card:hover {
    border-color: rgba(0,247,255,0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,247,255,0.1);
  }
  .project-card:hover::before { opacity: 1; }

  .project-icon { font-size: 20px; margin-bottom: 10px; display: block; }
  .project-name {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
  }
  .project-url {
    font-size: 11px;
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .project-url::after {
    content: '↗';
    color: var(--cyan);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .project-card:hover .project-url::after { opacity: 1; }

  /* ── CONNECT ── */
  .connect-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .connect-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    color: var(--text);
    text-decoration: none;
    font-size: 13px;
    transition: all 0.2s;
  }
  .connect-btn:hover {
    border-color: var(--cyan);
    color: var(--cyan);
    background: var(--cyan-dim);
  }
  .connect-btn svg { width: 16px; height: 16px; fill: currentColor; flex-shrink: 0; }

  .location-line {
    margin-top: 20px;
    font-size: 12px;
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* ── FOOTER ── */
  footer {
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: gap;
    gap: 12px;
  }
  .footer-left {
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.1em;
  }
  .footer-right {
    font-size: 11px;
    color: var(--cyan);
    letter-spacing: 0.1em;
  }

  /* ── STATUS DOT ── */
  .status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: var(--green);
    background: rgba(0,255,136,0.08);
    border: 1px solid rgba(0,255,136,0.2);
    padding: 4px 10px;
    border-radius: 2px;
    margin-top: 20px;
  }
  .status-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%,100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* ── ANIMATIONS ── */
  .fade-in {
    opacity: 0;
    transform: translateY(16px);
    animation: fadeUp 0.5s ease forwards;
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
  .delay-5 { animation-delay: 0.5s; }

  /* ── TERMINAL BLOCK ── */
  .terminal {
    background: #0a0e17;
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    margin-top: 32px;
  }
  .terminal-bar {
    background: #111827;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid var(--border);
  }
  .dot-r { width: 10px; height: 10px; border-radius: 50%; background: #ff5f57; }
  .dot-y { width: 10px; height: 10px; border-radius: 50%; background: #febc2e; }
  .dot-g { width: 10px; height: 10px; border-radius: 50%; background: #28c840; }
  .terminal-filename { font-size: 11px; color: var(--muted); margin-left: 8px; letter-spacing: 0.05em; }
  .terminal-body { padding: 20px; font-size: 12.5px; line-height: 1.9; }
  .t-comment { color: #4b5563; }
  .t-key { color: var(--cyan); }
  .t-val { color: #a5f3fc; }
  .t-str { color: #86efac; }
  .t-num { color: #fca5a5; }

  @media (max-width: 640px) {
    .hero { grid-template-columns: 1fr; }
    .hero-avatar { width: 80px; height: 80px; font-size: 28px; }
    .stats-row { grid-template-columns: repeat(2,1fr); }
    .project-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<main>

  <!-- HERO -->
  <div class="hero fade-in">
    <div>
      <div class="hero-label">Full Stack Developer</div>
      <h1 class="hero-name">Zaigum<br/><span>Naseem</span></h1>
      <div class="hero-roles">
        <span class="role-tag">.NET Expert</span>
        <span class="role-tag">React Dev</span>
        <span class="role-tag">ASP.NET Core</span>
        <span class="role-tag">TypeScript</span>
      </div>
      <p class="hero-desc">Passionate developer with 2+ years building scalable, high-performance web applications. Clean code. Sharp UI. Solid architecture.</p>
      <div class="status"><span class="status-dot"></span>Available for opportunities</div>
    </div>
    <div class="hero-avatar">ZN</div>
  </div>

  <!-- STATS -->
  <section class="fade-in delay-1">
    <div class="section-header">
      <span class="section-num">01</span>
      <span class="section-title">At a Glance</span>
      <div class="section-line"></div>
    </div>
    <div class="stats-row">
      <div class="stat-cell"><span class="stat-val">2+</span><span class="stat-label">Years Exp.</span></div>
      <div class="stat-cell"><span class="stat-val">6</span><span class="stat-label">Live Projects</span></div>
      <div class="stat-cell"><span class="stat-val">20+</span><span class="stat-label">Technologies</span></div>
      <div class="stat-cell"><span class="stat-val">∞</span><span class="stat-label">Commits</span></div>
    </div>
  </section>

  <!-- TERMINAL CARD -->
  <div class="terminal fade-in delay-2">
    <div class="terminal-bar">
      <span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span>
      <span class="terminal-filename">zaigum.json</span>
    </div>
    <div class="terminal-body">
      <span class="t-comment">// developer profile</span><br/>
      {<br/>
      &nbsp;&nbsp;<span class="t-key">"name"</span>: <span class="t-str">"Zaigum Naseem"</span>,<br/>
      &nbsp;&nbsp;<span class="t-key">"location"</span>: <span class="t-str">"Lahore, Pakistan"</span>,<br/>
      &nbsp;&nbsp;<span class="t-key">"role"</span>: <span class="t-str">"Full Stack Developer"</span>,<br/>
      &nbsp;&nbsp;<span class="t-key">"experience"</span>: <span class="t-num">2</span>,<br/>
      &nbsp;&nbsp;<span class="t-key">"focus"</span>: [<span class="t-str">"React"</span>, <span class="t-str">".NET"</span>, <span class="t-str">"ASP.NET Core"</span>],<br/>
      &nbsp;&nbsp;<span class="t-key">"email"</span>: <span class="t-str">"infozaigum@gmail.com"</span>,<br/>
      &nbsp;&nbsp;<span class="t-key">"openToWork"</span>: <span class="t-val">true</span><br/>
      }
    </div>
  </div>

  <!-- SKILLS -->
  <section class="fade-in delay-2">
    <div class="section-header">
      <span class="section-num">02</span>
      <span class="section-title">Tech Stack</span>
      <div class="section-line"></div>
    </div>

    <div class="skill-category">
      <div class="skill-cat-title">Frontend</div>
      <div class="skill-chips">
        <span class="chip core">React.js</span>
        <span class="chip core">TypeScript</span>
        <span class="chip core">Next.js</span>
        <span class="chip">JavaScript ES6+</span>
        <span class="chip">Redux</span>
        <span class="chip">Tailwind CSS</span>
        <span class="chip">HTML5</span>
        <span class="chip">CSS3 / SASS</span>
        <span class="chip">Bootstrap</span>
        <span class="chip">Material UI</span>
        <span class="chip">Ant Design</span>
        <span class="chip">Framer Motion</span>
      </div>
    </div>

    <div class="skill-category">
      <div class="skill-cat-title">Backend (.NET Ecosystem)</div>
      <div class="skill-chips">
        <span class="chip core">ASP.NET Core</span>
        <span class="chip core">C#</span>
        <span class="chip">ASP.NET MVC</span>
        <span class="chip">Web API</span>
        <span class="chip">Entity Framework</span>
        <span class="chip">LINQ</span>
        <span class="chip">.NET Framework</span>
      </div>
    </div>

    <div class="skill-category">
      <div class="skill-cat-title">Database & Tools</div>
      <div class="skill-chips">
        <span class="chip">SQL Server</span>
        <span class="chip">Firebase</span>
        <span class="chip">MySQL</span>
        <span class="chip">Git</span>
        <span class="chip">GitHub</span>
        <span class="chip">VS Code</span>
        <span class="chip">Visual Studio</span>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="fade-in delay-3">
    <div class="section-header">
      <span class="section-num">03</span>
      <span class="section-title">Featured Projects</span>
      <div class="section-line"></div>
    </div>

    <div class="project-grid">
      <a href="https://modern-webiste.netlify.app/" target="_blank" class="project-card">
        <span class="project-icon">🎨</span>
        <div class="project-name">Modern Website</div>
        <div class="project-url">modern-webiste.netlify.app</div>
      </a>
      <a href="https://agency-website1122.netlify.app/" target="_blank" class="project-card">
        <span class="project-icon">🏢</span>
        <div class="project-name">Agency Website</div>
        <div class="project-url">agency-website1122.netlify.app</div>
      </a>
      <a href="https://dashboard1122.netlify.app/" target="_blank" class="project-card">
        <span class="project-icon">📊</span>
        <div class="project-name">Dashboard (Firebase)</div>
        <div class="project-url">dashboard1122.netlify.app</div>
      </a>
      <a href="https://3d-website2211.netlify.app/" target="_blank" class="project-card">
        <span class="project-icon">🌐</span>
        <div class="project-name">3D Interactive Website</div>
        <div class="project-url">3d-website2211.netlify.app</div>
      </a>
      <a href="https://video-screenshot.netlify.app/" target="_blank" class="project-card">
        <span class="project-icon">🎬</span>
        <div class="project-name">Video Screenshot Tool</div>
        <div class="project-url">video-screenshot.netlify.app</div>
      </a>
      <a href="https://fit-connect007.netlify.app/" target="_blank" class="project-card">
        <span class="project-icon">💪</span>
        <div class="project-name">Fit-Connect Platform</div>
        <div class="project-url">fit-connect007.netlify.app</div>
      </a>
    </div>
  </section>

  <!-- CONNECT -->
  <section class="fade-in delay-4">
    <div class="section-header">
      <span class="section-num">04</span>
      <span class="section-title">Connect</span>
      <div class="section-line"></div>
    </div>

    <div class="connect-row">
      <a href="mailto:infozaigum@gmail.com" class="connect-btn">
        <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        infozaigum@gmail.com
      </a>
      <a href="https://github.com/zaigum" target="_blank" class="connect-btn">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
        github.com/zaigum
      </a>
    </div>

    <div class="location-line">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      Lahore, Pakistan
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="fade-in delay-5">
    <span class="footer-left">ZAIGUM NASEEM © 2025</span>
    <span class="footer-right">⭐ Star my repositories on GitHub</span>
  </footer>

</main>
</body>
</html>
