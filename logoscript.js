function getBackgroundColorAtButton() {
    const btn = document.getElementById('logoRR');
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    const elementUnder = document.elementFromPoint(centerX, centerY);
    if (!elementUnder) return;
  
    const bgColor = window.getComputedStyle(elementUnder).backgroundColor;
    btn.style.backgroundColor = '#ffffff';
    const match = bgColor.match(/rgba?\((\d+), (\d+), (\d+)/);
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
      if (brightness < 128) {
        btn.style.backgroundColor = '#ffffff';
        btn.style.color = '#000000';
      } else {
        btn.style.backgroundColor = '#000000';
        btn.style.color = '#ffffff';
      }
    }
  }
  
  window.addEventListener('scroll', getBackgroundColorAtButton);
  window.addEventListener('load', getBackgroundColorAtButton);
  