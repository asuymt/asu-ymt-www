import os
import re

html_dir = r"c:\Users\MTB\Masaüstü\antigravity\asu-ymt-www"

cursor_js = """
  <!-- The Amazing Cursor -->
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      if(window.amazingCursorInitialized) return;
      window.amazingCursorInitialized = true;

      // Hybrid cihazlarda (örneğin laptoplarda) dokunmatik ekran olsa da 
      // fareyi gizlememesi için sadece (pointer: fine) kontrolü yapıyoruz.
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      if (!hasFinePointer) return;

      const cursorDot = document.createElement('div');
      cursorDot.id = 'cursor-dot';
      
      const cursorCircleOuter = document.createElement('div');
      cursorCircleOuter.id = 'cursor-circle-outer';
      const cursorCircleInner = document.createElement('div');
      cursorCircleInner.id = 'cursor-circle-inner';
      cursorCircleOuter.appendChild(cursorCircleInner);

      document.body.appendChild(cursorDot);
      document.body.appendChild(cursorCircleOuter);

      let mouseX = 0;
      let mouseY = 0;
      let circleX = 0;
      let circleY = 0;
      let isVisible = false;
      let firstMove = false;

      const evaluateHoverState = (target) => {
        if (!target) return;
        const interactiveElement = target.closest('a, button, [onclick], input, select, textarea, .gallery-list-item');
        if (interactiveElement || window.getComputedStyle(target).cursor === 'pointer') {
            document.body.classList.add('cursor-hover');
        } else {
            document.body.classList.remove('cursor-hover');
        }
      };

      window.addEventListener('mousemove', (e) => {
        if (!firstMove) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            circleX = e.clientX;
            circleY = e.clientY;
            firstMove = true;
            cursorCircleOuter.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
            evaluateHoverState(document.elementFromPoint(mouseX, mouseY));
        }
        
        if (!isVisible) {
          document.body.classList.add('cursor-visible');
          isVisible = true;
        }
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      });

      const updateCircle = () => {
        if (isVisible && firstMove) {
          circleX += (mouseX - circleX) * 0.15;
          circleY += (mouseY - circleY) * 0.15;
          cursorCircleOuter.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
        }
        requestAnimationFrame(updateCircle);
      };
      requestAnimationFrame(updateCircle);

      document.body.addEventListener('mouseover', (e) => evaluateHoverState(e.target));
      document.body.addEventListener('mouseout', (e) => {
          evaluateHoverState(e.relatedTarget);
      });

      window.addEventListener('mousedown', () => {
          document.body.classList.add('cursor-active');
      });
      
      window.addEventListener('mouseup', (e) => {
          document.body.classList.remove('cursor-active');
          evaluateHoverState(e.target);
      });

      document.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-visible');
        isVisible = false;
      });
      document.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-visible');
        isVisible = true;
      });
      
    });
  </script>
"""

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = re.sub(r'\s*<!-- Özel Manyetik İmleç \(Custom Magnetic Cursor\) -->.*?<\/script>\s*', '\n', content, flags=re.DOTALL)
    content = re.sub(r'\s*<!-- The Amazing Cursor -->.*?<\/script>\s*', '\n', content, flags=re.DOTALL)
    content = re.sub(r'\s*<!-- Manyetik İmleç -->\s*<div class="cursor-dot"[^>]*></div>\s*<div class="cursor-outline"[^>]*></div>\s*', '\n', content, flags=re.DOTALL)

    content = content.replace('</body>', f'{cursor_js}\n</body>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk(html_dir):
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))

