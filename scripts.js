document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('sidebarToggle');
  const container = document.querySelector('.container');

  btn.addEventListener('click', () => {
    container.classList.toggle('sidebar-hidden');
  });
});

const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const expandBtn = document.querySelector('.sidebar-expand-btn');
const toggleBtn = document.querySelector('.sidebar-toggle-btn');

expandBtn.addEventListener('click', () => {
  if (!container.classList.contains('sidebar-fullscreen')) {
    // Prepare for animation from right
    sidebar.classList.add('pre-slide');
    requestAnimationFrame(() => {
      // Wait one frame then activate fullscreen
      container.classList.add('sidebar-fullscreen');
      sidebar.classList.remove('pre-slide');
    });
  } else {
    container.classList.remove('sidebar-fullscreen');
  }
});
