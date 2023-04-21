
     var body = document.getElementsByTagName('body')[0];
     var Right1 = document.getElementsByClassName('Right1')[0];
     var Right2 = document.getElementsByClassName('Right2')[0];
     var Right3 = document.getElementsByClassName('Right3')[0];
    var svg = document.getElementsByTagName('svg')[0];
     var img = document.getElementsByTagName('img')[0];


        Right2.style.backgroundColor = 'red';
        Right3.style.backgroundColor = 'red';
        body.style.backgroundColor = 'rgb(11,11,67)';

        // trigger this function every time the user scrolls

        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 300) {
                // navyblue
                body.style.backgroundColor = 'rgb(11,11,67)';
                svg.style.backgroundColor='rgb(11,11,67)';

                
                
            } else if (scroll >= 300 && scroll < 600) {
                // blue
                body.style.backgroundColor = 'blue';
                svg.style.backgroundColor='blue';
                img.style.img ='domi-img1.png';
                Right2.style.backgroundColor = 'green';

                
            } else if (scroll >= 600 && scroll < 1200) {
                // black
             body.style.backgroundColor = 'rgb(2,11,1)';
                svg.style.backgroundColor='rgb(2,11,1)';
            

            } else if (scroll >= 1200 && scroll < 1800) {
              // purple
                 body.style.backgroundColor = 'rgb(214,51,137)';
                svg.style.backgroundColor='rgb(214,51,137)';
                Right3.style.backgroundColor = 'blue';

            } else if (scroll >= 1800 && scroll < 3000) {
                // red
                body.style.backgroundColor = 'lime';
                svg.style.backgroundColor='lime';
            } 

           
        }

        