import os, re
html_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"
for root, _, files in os.walk(html_dir):
    for f in files:
        if f.endswith('.html'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                c = file.read()
            
            # Remove old inline scripts defining particles
            c = re.sub(r'// Particle System.*?animateParticles\(\);.*?(?=\s*</script>)', '', c, flags=re.DOTALL)
            c = re.sub(r'<canvas id="particleCanvas".*?></canvas>\s*\n', '', c, flags=re.DOTALL)
            
            # Remove any injected particles script to reset
            c = re.sub(r'<script src=".*?particles\.js"></script>\s*\n', '', c)

            # Inject new canvas right after body
            if '<canvas id="particleCanvas"' not in c:
               c = re.sub(r'<body[^>]*>', lambda m: f'{m.group(0)}\n  <canvas id="particleCanvas" style="position:fixed; top:0; left:0; width:100%; height:100%; z-index:-3; pointer-events:none;"></canvas>', c)
            
            if 'src="particles.js"' not in c and 'src="../particles.js"' not in c:
               rel_path = os.path.relpath(p, html_dir)
               depth = rel_path.count(os.sep)
               if depth > 0:
                   # if it's in a subdirectory like duyurular/alper-gezeravci/index.html
                   prefix = '../' * depth
               else:
                   prefix = './'
               
               c = c.replace('</body>', f'<script src="{prefix}particles.js"></script>\n</body>')
               
            with open(p, 'w', encoding='utf-8') as file:
                file.write(c)
            print(f"Injected particles to {p}")
