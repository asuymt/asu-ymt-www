document.addEventListener("DOMContentLoaded", () => {
  if(window.amazingCursorInitialized) return;
  window.amazingCursorInitialized = true;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (!hasFinePointer) return;
  document.body.classList.add('cursor-enabled');
  const cursorDot = document.createElement('div');
  cursorDot.id = 'cursor-dot';
  const cursorCircleOuter = document.createElement('div');
  cursorCircleOuter.id = 'cursor-circle-outer';
  const cursorCircleInner = document.createElement('div');
  cursorCircleInner.id = 'cursor-circle-inner';
  cursorCircleOuter.appendChild(cursorCircleInner);
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorCircleOuter);
  const savedPos = (() => {
    try { return sessionStorage.getItem('amazingCursorPos'); } catch (e) { return null; }
  })();
  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;
  let isVisible = false;
  let firstMove = false;
  if (savedPos) {
    try {
      const pos = JSON.parse(savedPos);
      if (Number.isFinite(pos.x) && Number.isFinite(pos.y)) {
        mouseX = pos.x;
        mouseY = pos.y;
        circleX = pos.x;
        circleY = pos.y;
        firstMove = true;
        cursorCircleOuter.style.transform = "translate3d(" + circleX + "px, " + circleY + "px, 0)";
        cursorDot.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px, 0) translate(-50%, -50%)";
        document.body.classList.add('cursor-visible');
        isVisible = true;
        evaluateHoverState(document.elementFromPoint(mouseX, mouseY));
      }
    } catch (e) {}
  }
  function evaluateHoverState(target) {
    if (!target) return;
    const interactiveElement = target.closest('a, button, [onclick], input, select, textarea, .gallery-list-item');
    if (interactiveElement || window.getComputedStyle(target).cursor === 'pointer') {
        document.body.classList.add('cursor-hover');
    } else {
        document.body.classList.remove('cursor-hover');
    }
  }
  window.addEventListener('mousemove', (e) => {
    if (!firstMove) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    try { sessionStorage.setItem('amazingCursorPos', JSON.stringify({ x: mouseX, y: mouseY })); } catch (e) {}
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
    try { sessionStorage.setItem('amazingCursorPos', JSON.stringify({ x: mouseX, y: mouseY })); } catch (e) {}
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });
  const updateCircle = () => {
    if (isVisible && firstMove) {
      // Snappier tracking: 0.35 instead of 0.15
      circleX += (mouseX - circleX) * 0.35;
      circleY += (mouseY - circleY) * 0.35;
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
