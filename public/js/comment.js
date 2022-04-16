

const commentFormHandler = async (event) => {
  event.preventDefault();

  const user_Id = document.querySelector('input[name="user_id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        user_Id,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

// const postForm = async (event) => {
//   event.preventDefault();
//   const comment = $('#comment_text').value.trim()
//   if (comment) {
//     await fetch('/dashboard', {
//       method: 'POST',
//       body: JSON.stringify({
//         comment_id,
//         comment_text
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     document.location.reload();
//   }
// };

// postbtn.addEventListener('submit', postForm)

// document
//   .querySelector('#new-comment-form')
//   .addEventListener('submit', commentFormHandler);


