document.addEventListener('DOMContentLoaded', () => {
  const bodySelector = document.querySelector('body');
  bodySelector.addEventListener('click', () => {
    window.location.href = "/universe";
  });

});
