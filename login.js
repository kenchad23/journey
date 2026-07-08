const toggleBtn = document.getElementById('toggleBtn');
  const passwordInput = document.getElementById('password');
  toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleBtn.textContent = isPassword ? 'Hide' : 'Show';
    toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });