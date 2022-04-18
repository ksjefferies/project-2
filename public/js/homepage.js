const morebtn = $('#morebutton');


const randommessage = () => {
  const messages = ['Wow, Much post', 'Are you winning son?', "It's dangerous to go Alone",'No, you have a problem']
  let message = messages[Math.floor(Math.random()*messages.length)];
  $('#randommsg').text(message);
}


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


randommessage();
morebtn.click(moreButtonHandler)