

// const commentFormHandler = async (event) => {
//   event.preventDefault();

//   const body = document.querySelector('textarea[name="comment-body"]').value;

//   if (body) {
//     await fetch('/api/comment', {
//       method: 'POST',
//       body: JSON.stringify({
//          body
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     document.location.reload();
//   }
// };


// document
// .querySelector('#new-comment-form')
// .addEventListener('submit', commentFormHandler);


async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('#comment').value.trim();
  console.log(comment_text)

  const game_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  console.log(game_id);

  // const user_id = req.session.user_id;
  // console.log(user_id);

  if (comment_text) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
             game_id: game_id,
            text: comment_text
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.reload();

      } else {
          alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
      }
  }
}

document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);
