window.onload = () => {

  let divMyResponse = document.getElementsByClassName('ajax_response')[0]

  let $activeBtns = ['Users', 'Cities'];

  document.addEventListener('click', function handleClick(event) {
    event.target.classList.add('blue');
    let target = event.target.innerHTML
    console.log(event.target.innerHTML)

    if ($activeBtns.includes(target)) {

      const dataSrc = "./data_" + target.toLowerCase() + ".html";
      fetch(dataSrc)
        .then(function (response) {
          return response.text()
            .then(function (html) {
              console.log(html)
              divMyResponse.innerHTML = html
            })
      })
    }
  });




}
