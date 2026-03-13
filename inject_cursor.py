import os
import re

html_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"

cursor_html = """
  <!-- Manyetik İmleç -->
  <div class="cursor-dot" data-cursor-dot></div>
  <div class="cursor-outline" data-cursor-outline></div>
"""

cursor_js = """
  <!-- Özel Manyetik İmleç (Custom Magnetic Cursor) -->
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // Check if cursor already exists to avoid dupes in re-injected pages
      if(window.customCursorInitialized) return;
      window.customCursorInitialized = true;

      const cursorDot = document.querySelector("[data-cursor-dot]");
      const cursorOutline = document.querySelector("[data-cursor-outline]");
      if(!cursorDot || !cursorOutline) return;

      let mouseX = 0, mouseY = 0;
      let outlineX = 0, outlineY = 0;
      let firstMove = false;

      // Saniyede bir kere veya event fire olana kadar görünmez yap
      cursorDot.style.opacity = "0";
      cursorOutline.style.opacity = "0";

      window.addEventListener("mousemove", function (e) {
        updatePosition(e.clientX, e.clientY);
      });

      window.addEventListener("touchstart", function (e) {
        if (e.touches && e.touches[0]) {
          updatePosition(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });

      window.addEventListener("touchmove", function (e) {
        if (e.touches && e.touches[0]) {
          updatePosition(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });

      function updatePosition(x, y) {
        mouseX = x;
        mouseY = y;
        
        if (!firstMove) {
          outlineX = mouseX;
          outlineY = mouseY;
          cursorDot.style.opacity = "1";
          cursorOutline.style.opacity = "1";
          firstMove = true;
        }

        document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
        document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
      }

      const renderCursor = () => {
        if (firstMove) {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            document.documentElement.style.setProperty('--outline-x', outlineX + 'px');
            document.documentElement.style.setProperty('--outline-y', outlineY + 'px');
        }
        requestAnimationFrame(renderCursor);
      };
      requestAnimationFrame(renderCursor);

      const interactiveElements = document.querySelectorAll("a, button, .gallery-list-item");
      interactiveElements.forEach(attachCursorEvents);
      
      // MutationObserver to attach events to newly added nodes (like mobile menus)
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if(node.nodeType === 1) { // ELEMENT_NODE
              const links = node.querySelectorAll ? node.querySelectorAll("a, button, .gallery-list-item") : [];
              if(node.matches && node.matches("a, button, .gallery-list-item")) {
                 attachCursorEvents(node);
              }
              links.forEach(attachCursorEvents);
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });

      function attachCursorEvents(link) {
        link.addEventListener("mouseenter", () => {
          cursorOutline.classList.add("hover-active");
          cursorDot.classList.add("hover-active");
        });
        link.addEventListener("mouseleave", () => {
          cursorOutline.classList.remove("hover-active");
          cursorDot.classList.remove("hover-active");
        });
      }

      // 📱 Global Mobile Optimization: Disable heavy tilt on small screens
      if (window.innerWidth < 768) {
        const tiltElements = document.querySelectorAll("[data-tilt]");
        tiltElements.forEach(el => {
           if (el.vanillaTilt) el.vanillaTilt.destroy();
           el.removeAttribute("data-tilt");
        });
      }

    });
  </script>
"""

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Always strip out the old cursor scripts before injecting new one
    content = re.sub(r'\s*<!-- Özel Manyetik İmleç \(Custom Magnetic Cursor\) -->.*?<\/script>\s*', '\n', content, flags=re.DOTALL)
    
    # Inject HTML right after <body>
    if '<div class="cursor-dot"' not in content:
        content = re.sub(r'<body[^>]*>', lambda m: f"{m.group(0)}\n{cursor_html}", content)
    
    # Inject the script block
    content = content.replace('</body>', f'{cursor_js}\n</body>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {filepath}")

for root, dirs, files in os.walk(html_dir):
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))
