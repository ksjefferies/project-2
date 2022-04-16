const searchbtn = $('#searchbutton');
const postbtn = $('#postbutton');
const morebtn = $('#morebutton');
// const title = $('#game_title').value.trim();
// const platform = $('#game_platform').value.trim();
// const genre = $('#game_genre').value.trim();
// const comment = $('#comment_text').value.trim();

searchbtn.click(function(event){
    event.preventdeafault();
})

// const newFormHandler = async (event) => {
//     event.preventDefault();
// if (title && platform && genre) {
//     const response = await fetch(`/dashboard`, {
//       method: 'POST',
//       body: JSON.stringify({ title, platform, genre }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to create post');
//     }
//   }};

const moreButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/game/${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      document.location.replace(`/game/${id}`);
    } else {
      
    }
  }
};

morebtn.click(moreButtonHandler)