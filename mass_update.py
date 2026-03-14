import os
import re

root_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"

subs = {
    r'>Etkinliklerimiz</a>': r'>Etkinlikler</a>',
    r'>Eğitimlerimiz</a>': r'>Eğitimler</a>',
    r'>Projelerimiz</a>': r'>Projeler</a>',
    # Başlıklar için (h1 vb.)
    r'<h1>Etkinliklerimiz</h1>': r'<h1>Etkinlikler</h1>',
    r'<h1>Eğitimlerimiz</h1>': r'<h1>Eğitimler</h1>',
    r'<h1>Projelerimiz</h1>': r'<h1>Projeler</h1>',
}

def fix_content(content):
    for pattern, replacement in subs.items():
        content = content.replace(pattern, replacement)
    return content

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = fix_content(content)
            
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {filepath}")

# Alper Gezeravci CSS fix - let's check paths again
alper_path = os.path.join(root_dir, "duyurular", "alper-gezeravci", "index.html")
if os.path.exists(alper_path):
    with open(alper_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if paths are actually ../../
    # If the user says it opens without CSS, maybe it needs higher level or lower level?
    # root/duyurular/alper-gezeravci/index.html -> root is 2 levels up.
    print("Checking Alper Gezeravci page paths...")
