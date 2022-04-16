const newFormHandler = async (event) => {
  event.preventDefault();

  const form = document.forms[0]
  const title = form.querySelector('input[name="post-title"]').value;
  const platform = form.querySelector('input[name="post-platform"]').value;
  const genre = form.querySelector('input[name="post-genre"]').value;
  const review = form.querySelector('textarea[name="post-review"]').value;


  await fetch(`/api/games`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      platform,
      genre,
      review,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);