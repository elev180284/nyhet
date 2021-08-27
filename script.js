var colors = ["red", "blue", "green"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 70) {
            alert('You Payed Respects!');

        }
    });
