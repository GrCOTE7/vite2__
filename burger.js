window.onload = () => {

  if (window.innerWidth < 500) {


    let liElts = document.getElementsByTagName('li')
    console.log(liElts)

    let i = 0;
    let links = 3;
    let showLinker;

    function linkCount(i) {
      return [document.getElementsByTagName('li')[i++], i++]
    }

    let boucle = linkCount(0);
    console.log(i);

    boucle = linkCount(i);
    // console.log(boucle[0]);
    // console.log(i=boucle[1]);

    setTimeout(function (boucle, i) {
      boucle[0].style.opacity = 1
    }(boucle, i), ((i + 1) * 1000)
    );
    // clearTimeout(timeout);


    boucle = linkCount(i);
    console.log(boucle[0]);
    console.log(i = boucle[1]);

    setTimeout(function (boucle, i) {
      boucle[0].style.opacity = 1
    }(boucle, i), i * 2000
    );

    boucle = linkCount(i);
    console.log(boucle[0]);
    console.log(i = boucle[1])


    setTimeout(function (boucle, i) {
      boucle[0].style.opacity = 1
    }(boucle, i), 3000
    );

    boucle = linkCount(i);
    console.log(boucle[0]);
    console.log(i = boucle[1])


    setTimeout(function (boucle, i) {
      boucle[0].style.opacity = 1
    }(boucle, i), 4000
    )
  }
}
