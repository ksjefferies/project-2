const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const platform = document.querySelector('textarea[name="post-platform"]').value;
  const genre = document.querySelector('textarea[name="post-genre"]').value;
  const review = document.querySelector('textarea[name="post-review"]').value;


  await fetch(`/api/game`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      platform,
      genre,
      review,
      user_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);