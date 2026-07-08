function wireToggle(buttonId, inputId) {
  const toggleBtn = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  if (!toggleBtn || !input) return;

  toggleBtn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggleBtn.textContent = isPassword ? 'Hide' : 'Show';
    toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });
}

wireToggle('toggleBtn', 'password');
wireToggle('toggleBtn2', 'confirm-password');
