import os
import re

html_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"

def process_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    original_html = html

    # Replace <div class="box-2" style="..."> with <div class="subpage-container"><div class="subpage-glass-card card-tilt animate__animated animate__fadeInUp">
    box_2_pattern = re.compile(r'<div class="box-2"[^>]*>')
    detail_container_pattern = re.compile(r'<div class="detail-container">')
    detail_section_pattern = re.compile(r'<div class="detail-section[^"]*">')
    
    html = re.sub(r'<div class="box-2"[^>]*>', r'<div class="subpage-container">\n        <div class="subpage-glass-card card-tilt animate__animated animate__fadeInUp">', html)
    html = re.sub(r'<div class="detail-container">', r'<div class="subpage-container">', html)
    html = re.sub(r'<div class="detail-section[^"]*">', r'<div class="subpage-glass-card card-tilt animate__animated animate__fadeInUp">', html)

    # Convert <h1> and <h2> titles
    html = re.sub(r'<h1[^>]*style="[^"]*"[^>]*>(.*?)</h1>', r'<h1 class="subpage-title">\1</h1>', html, flags=re.DOTALL)
    # The detail pages might use h2 for main title, let's keep it but add subpage-title
    html = re.sub(r'<h2[^>]*><i class="fab fa-python"></i>(.*?)</h2>', r'<h2 class="subpage-title"><i class="fab fa-python"></i>\1</h2>', html, flags=re.DOTALL)
    html = re.sub(r'<h2[^>]*><i class="fab fa-html5"></i>(.*?)</h2>', r'<h2 class="subpage-title"><i class="fab fa-html5"></i>\1</h2>', html, flags=re.DOTALL)

    # Clean up inline p styles
    html = re.sub(r'<p\s+style="color:\s*var\(--text-secondary\);\s*font-size:\s*1\.6rem;\s*line-height:\s*1\.8;\s*margin-bottom:\s*2rem;"(.*?)>', r'<p class="subpage-description"\1>', html)
    html = re.sub(r'<p\s+style="color:\s*var\(--text-secondary\);\s*font-size:\s*1\.6rem;\s*line-height:\s*1\.8;\s*margin-bottom:\s*1\.5rem;"(.*?)>', r'<p class="subpage-description"\1>', html)

    # Clean up inline ul styles in duyurular
    html = re.sub(r'<ul\s+style="color:\s*var\(--text-secondary\);\s*font-size:\s*1\.5rem;\s*line-height:\s*2\.4;\s*margin-bottom:\s*3rem;\s*padding-left:\s*2rem;"(.*?)>', r'<ul class="subpage-list"\1>', html)

    # Replace the wrapping div for the content if it was an old layout
    html = re.sub(r'<div\s+style="background:\s*var\(--bg-card\);\s*padding:\s*3rem;\s*border-radius:\s*var\(--radius\);\s*border:\s*1px\s*solid\s*var\(--border-subtle\);\s*backdrop-filter:\s*blur\(10px\);"(.*?)>', r'<div\1>', html)

    # Ensure vanilla-tilt is added
    if 'vanilla-tilt.min.js' not in html:
        html = html.replace('</body>', '  <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"></script>\n  <script>VanillaTilt.init(document.querySelectorAll(".card-tilt"), { max: 5, speed: 400, glare: true, "max-glare": 0.2 });</script>\n</body>')

    if html != original_html:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Refactored: {filepath}")

for root, dirs, files in os.walk(html_dir):
    if "duyurular" in root or "egitimler" in root:
        for file in files:
            if file.endswith('.html') and file != "duyurular.html" and file != "egitimler.html":
                filepath = os.path.join(root, file)
                # Ensure we only target subdirectories
                if os.path.basename(root) != "asu-ymt-www":
                    process_html_file(filepath)
