import os
import re

root_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"

nav_subs = {
    r'Etkinliklerimiz</a>': r'Etkinlikler</a>',
    r'Eğitimlerimiz</a>': r'Eğitimler</a>',
    r'Projelerimiz</a>': r'Projeler</a>',
    r'<h1>Etkinliklerimiz</h1>': r'<h1>Etkinlikler</h1>',
    r'<h1>Eğitimlerimiz</h1>': r'<h1>Eğitimler</h1>',
    r'<h1>Projelerimiz</h1>': r'<h1>Projeler</h1>',
}

def get_rel_prefix(depth):
    return "../" * depth

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, root_dir)
            depth = rel_path.count(os.sep)
            
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            # 1. Navbar renames
            for old, new in nav_subs.items():
                content = content.replace(old, new)
            
            prefix = get_rel_prefix(depth)
            
            # 2. Fix Assets Paths
            # Matches src="assets/...", href="../../assets/...", etc.
            content = re.sub(r'(src|href)=["\'](\.?\.?/)*assets/', rf'\1="{prefix}assets/', content)
            # Catch leading slash /assets/
            content = re.sub(r'(src|href)=["\']/assets/', rf'\1="{prefix}assets/', content)

            # 3. Fix Internal Links (for non-root files)
            if depth > 0:
                root_files = [
                    "index.html", "duyurular.html", "etkinlikler.html", 
                    "egitimler.html", "projeler.html", "iletisim.html", 
                    "galeri.html", "asu-topluluklar.html"
                ]
                for rf in root_files:
                    # Match href="index.html", href="./index.html", href="../../index.html" etc.
                    # but only if it's NOT already correct (to avoid breaking things)
                    # Use a safer regex
                    content = re.sub(rf'href=["\'](\.?\.?/)*{rf}', f'href="{prefix}{rf}', content)

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Standardized: {filepath}")
