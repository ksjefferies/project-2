const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameCreate = document.querySelector('#username-input-signup');
  const passwordCreate = document.querySelector('#password-input-signup');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameCreate.value,
      password: passwordCreate.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Whoops your sign up failed, try again!');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
