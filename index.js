const portraits = document.querySelectorAll('.aboutUs_portraitContainer');

function showPortraitInfo(infoElement) {
  infoElement.style.position = 'relative';
  infoElement.style.display = 'block';
  infoElement.style.top = '-100px';
  infoElement.style.margin = '-1rem 1rem';
  infoElement.style.fontSize = '1.5rem';
  infoElement.style.color = 'var(--sfBlue)';
  infoElement.style.filter = 'drop-shadow(10px 10px 10px black)';
}

function hidePortraitInfo(infoElement) {
  infoElement.style.position = 'relative';
  infoElement.style.display = 'none';
  infoElement.style.top = '-100px';
  infoElement.style.margin = '-1rem 1rem';
  infoElement.style.fontSize = '1.5rem';
  infoElement.style.color = 'var(--sfBlue)';
}

portraits.forEach(member => {
  const info = member.querySelector('.aboutUs_portraitInfo');

  member.addEventListener('mouseover', () => showPortraitInfo(info));
  member.addEventListener('mouseout', () => hidePortraitInfo(info));
});