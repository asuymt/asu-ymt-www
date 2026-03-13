import os
import re

html_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"

def process_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    original_html = html

    # CSS Paths
    html = re.sub(r'href="\./globals\.css"', r'href="./assets/css/globals.css"', html)
    html = re.sub(r'href="\./style\.css"', r'href="./assets/css/style.css"', html)
    html = re.sub(r'href="\./theme\.css"', r'href="./assets/css/theme.css"', html)
    
    html = re.sub(r'href="\.\./\.\./globals\.css"', r'href="../../assets/css/globals.css"', html)
    html = re.sub(r'href="\.\./\.\./style\.css"', r'href="../../assets/css/style.css"', html)
    html = re.sub(r'href="\.\./\.\./theme\.css"', r'href="../../assets/css/theme.css"', html)

    # JS Paths
    html = re.sub(r'src="\./particles\.js"', r'src="./assets/js/particles.js"', html)
    html = re.sub(r'src="\.\./\.\./particles\.js"', r'src="../../assets/js/particles.js"', html)

    # Image Paths - index style
    html = re.sub(r'src="images/([^"]+)"', r'src="assets/images/\1"', html)
    html = re.sub(r'src="\./images/([^"]+)"', r'src="./assets/images/\1"', html)
    html = re.sub(r'href="/images/([^"]+)"', r'href="/assets/images/\1"', html)
    html = re.sub(r'url\(images/([^)]+)\)', r'url(assets/images/\1)', html)
    
    # Image Paths - subpage style
    html = re.sub(r'src="\.\./\.\./images/([^"]+)"', r'src="../../assets/images/\1"', html)
    html = re.sub(r'href="\.\./\.\./images/([^"]+)"', r'href="../../assets/images/\1"', html)

    if html != original_html:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Refactored paths in: {filepath}")

for root, dirs, files in os.walk(html_dir):
    # Process HTML Files
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            process_html_file(filepath)

# Separately process style.css to fix background-image URLs inside assets/css
style_path = os.path.join(html_dir, "assets", "css", "style.css")
if os.path.exists(style_path):
    with open(style_path, 'r', encoding='utf-8') as f:
        style_content = f.read()
    
    original_style = style_content
    # e.g url(images/ana_sayfa.jpeg) -> url(../images/ana_sayfa.jpeg)
    style_content = re.sub(r'url\(images/([^)]+)\)', r'url(../images/\1)', style_content)
    
    if style_content != original_style:
        with open(style_path, 'w', encoding='utf-8') as f:
            f.write(style_content)
        print("Refactored background URLs in style.css")
