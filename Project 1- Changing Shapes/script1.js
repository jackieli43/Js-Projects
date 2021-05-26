
      var numberOfBalls = 100;
      var Speed = .1;
      var Size = 10;
      var incre = 0;
      const height = document.documentElement.clientHeight;
      const width = document.documentElement.clientWidth;
      const Ball = function(x, y, radius) {
            this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
            this.direction = Math.random() * Math.PI*2;
            this.speed = Math.random()*Speed + 1;
            this.x = x;
            this.y = y;
            this.radius = Size;
              };
      const Square = function(x,y,size) {
        this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        this.direction = Math.random() * Math.PI*2;
        this.speed = Math.random()*Speed + 1;
        this.x = x;
        this.y = y;
        this.size = Size - 2;
      };
      const Star = function(x,y,size) {
        this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        this.direction = Math.random() * Math.PI*2;
        this.speed = Math.random()*Speed + 1;
        this.x = x;
        this.y = y;
        this.size = Size;
      };
      const Diamond = function(x,y,size){
        this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        this.direction = Math.random() * Math.PI*2;
        this.speed = Math.random()*Speed + 1;
        this.x = x;
        this.y = y;
        this.size = Size * 2;
      }

      Diamond.prototype = {
        updatePosition: function(width,height) {
          this.x += Math.cos(this.direction) * this.speed;
          this.y += Math.sin(this.direction) * this.speed;
          if(this.x < 0){
            this.x = this.size / 2;
            this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
          } else if (this.x + this.size> width) {
            this.x = width - this.size * 2
            this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
          }

          if(this.y < 0){
            this.y = this.size;
            this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));

          }else if ( this.y + this.size> height) {
            this.y = height - this.size * 2;
            this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));
          }
        }
      }

      Star.prototype = {
        updatePosition: function(width,height) {
          this.x += Math.cos(this.direction) * this.speed;
          this.y += Math.sin(this.direction) * this.speed;
          if(this.x < 0){
            this.x = this.size;
            this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
          } else if(this.x + this.size > width){
            this.x = width - this.size * 2
            this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
          }
          if(this.y - this.size < 0){
            this.y = this.size;
            this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));
          }else if(this.y + this.size> height){
            this.y = height - this.size * 2;
            this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));

          }
        }
      }

      Square.prototype = {
        updatePosition:function(width,height) {
          this.x += Math.cos(this.direction) * this.speed;
          this.y += Math.sin(this.direction) * this.speed;
          if(this.x < 0){
            this.x = this.size;
            this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
          } else if (this.x + this.size * 2 > width) {
            this.x = width - this.size * 2
            this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
          }

          if(this.y < 0){
            this.y = this.size;
            this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));

          }else if ( this.y + this.size * 2> height) {
            this.y = height - this.size * 2;
            this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));
          }
        }
      };

      Ball.prototype = {

                updatePosition:function(width, height) {

                  this.x += Math.cos(this.direction) * this.speed;
                  this.y += Math.sin(this.direction) * this.speed;

                  if(this.x - this.radius < 0) {

                    this.x = this.radius;

                    this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));

                  }else if (this.x + this.radius > width) {

                    this.x = width - this.radius;

                    this.direction = Math.atan2(Math.sin(this.direction), -Math.cos(this.direction));
                  }

                  if(this.y - this.radius < 0) {

                    this.y = this.radius;

                    this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));

                  }else if (this.y + this.radius > height) {

                    this.y = height - this.radius;

                    this.direction = -Math.atan2(Math.sin(this.direction), Math.cos(this.direction));
                  }
                }
              };

      var context = document.querySelector("canvas").getContext("2d");
      canvas = document.querySelector("canvas");
      canvas.addEventListener("click", onMouseClick);
              function onMouseClick(){
                if(incre == 2){
                  numberOfBalls = Math.ceil(Math.random() * 100);
                  incre = 0;
                } else {
                  numberOfBalls = Math.ceil(Math.random() * 100);
                  incre++;
                }

                  }

      var ball = new Ball(Math.random() * 800, Math.random() * 800, 50);
      var balls = new Array();
        for(let i = 0; i < numberOfBalls; i++) {
          let x = Math.random() * width;
          let y = Math.random() * height;
          balls.push(new Ball(x, y, Size));
 }
      var square = new Square(Math.random() * 800, Math.random() * 800, 50);
      var squares = new Array();
      for(let i = 0; i < numberOfBalls; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        squares.push(new Square(x, y, Size));
      }

      var star = new Star(Math.random() * 800, Math.random() * 800, 50);
      var stars = new Array();
      for(let i = 0; i < numberOfBalls; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        stars.push(new Star(x, y, Size));
      }

      var diamond = new Diamond(Math.random() * 800, Math.random() * 800, 50);
      var diamonds = new Array();
      for(let i = 0; i < numberOfBalls; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        diamonds.push(new Diamond(x, y, Size));
      }

    function drawStar() {
      let height = document.documentElement.clientHeight;
      let width = document.documentElement.clientWidth;
      star.updatePosition(width, height);

      context.canvas.height = height;
      context.canvas.width = width;

      var d1 = Math.sin(Math.PI*2/20);
      var d2 = Math.sin(Math.PI*2/10);
      var d3 = Math.sin(Math.PI*2*3/20);
      var d4 = Math.sin(Math.PI*2/5);
      for(let i = 0; i < numberOfBalls; i++){
        let star = stars[i];
        context.fillStyle = star.color;
        context.beginPath();
        context.moveTo(star.x,star.y-star.r);
        context.lineTo(star.x+d2*star.size,star.y+star.size*d3)
        context.lineTo(star.x-d4*star.size,star.y-d1*star.size);
        context.lineTo(star.x+d4*star.size,star.y-d1*star.size);
        context.lineTo(star.x-d2*star.size,star.y+star.size*d3);
        context.lineTo(star.x,star.y-star.size);
        context.fill();
        star.updatePosition(width,height);
      }
   }
   function drawDiamond(){
     let height = document.documentElement.clientHeight;
     let width = document.documentElement.clientWidth;
     diamond.updatePosition(width, height);

     context.canvas.height = height;
     context.canvas.width = width;
     for(let i = 0; i < numberOfBalls; i++){
       let diamond = diamonds[i];
       context.fillStyle = diamond.color;
       context.beginPath();
       context.moveTo(diamond.x,diamond.y);
       context.lineTo(diamond.x - diamond.size / 2, diamond.y + diamond.size / 2);
       context.lineTo(diamond.x, diamond.y + diamond.size);
       context.lineTo(diamond.x + diamond.size / 2, diamond.y + diamond.size / 2);
       context.fill();
       diamond.updatePosition(width,height);
     }
    }



   function drawSquare() {

             let height = document.documentElement.clientHeight;
             let width = document.documentElement.clientWidth;
             square.updatePosition(width, height);

             context.canvas.height = height;
             context.canvas.width = width;

             for (i = 0; i < numberOfBalls; i++) {
               let square = squares[i];
               context.fillStyle = square.color;
               context.beginPath();
               context.rect(square.x,square.y,20,20);
               context.fill();
               square.updatePosition(width, height);
   }
 }
    function drawBall() {

              let height = document.documentElement.clientHeight;
              let width = document.documentElement.clientWidth;
              ball.updatePosition(width, height);

              context.canvas.height = height;
              context.canvas.width = width;

              for (i = 0; i < numberOfBalls; i++) {
              let ball = balls[i];
              context.fillStyle = ball.color;
              context.beginPath();
              context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
              context.fill();
              ball.updatePosition(width, height);
    }
  }


      function loop() {
        window.requestAnimationFrame(loop);
        drawDiamond();
        // if(incre == 0){
        //   drawBall();
        // } else if(incre == 1){
        //   drawStar();
        // } else if(incre == 2){
        //   drawSquare();
        // }


      };
      loop();




      document.getElementById("myDropdown").classList.toggle("show");
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
