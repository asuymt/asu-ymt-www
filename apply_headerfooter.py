import os
import re

root_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"

def inject_to_file(filepath):
    rel_path = os.path.relpath(filepath, root_dir)
    depth = 0 if rel_path == "index.html" else rel_path.count(os.sep)
    prefix = "../" * depth
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Add script tag if not present
    script_tag = f'<script src="{prefix}assets/js/headerfooter.js"></script>'
    if 'headerfooter.js' not in content:
        content = content.replace('</body>', f'{script_tag}\n</body>')

    # 2. Extract Navbar and Footer to "Empty" placeholders to avoid duplication if JS fails?
    # No, better just keep the existing HTML as fallback but wrap it or just leave it for now.
    # Actually, the requirement is "js will automatically create them".
    
    # Let's remove the hardcoded navbar and footer to prove it works
    # Navbar cleanup (find from <div class="navbar"> to corresponding </div>)
    # This is tricky with regex if there are nested divs. 
    # But our structure is quite standard.
    
    # Alternative: My JS script already removes them. 
    # To avoid FOUC, I can add a style that hides them initially if possible, 
    # but let's just keep it simple for now.

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Injected headerfooter.js to {rel_path}")

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            inject_to_file(os.path.join(root, file))
