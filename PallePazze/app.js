let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

let balls = [
    {x: canvas.width/4, y: canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(255, 0, 0)', r: 50, number: '1'},
    {x: 3*canvas.width/4, y: canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(255, 255, 0)', r: 50, number: '2'},
    {x: canvas.width/4, y: 3*canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(0, 255, 0)', r: 50, number: '3'},
    {x: 3*canvas.width/4, y: 3*canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(0, 0, 255)', r: 50, number: '4'}]
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let ball of balls) {
            drawBall(ball);
            updateBall(ball);
        }
    
        requestAnimationFrame(draw);
    }

    function drawBall(ball) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.font = '50px mono';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(ball.number, ball.x, ball.y);
        ctx.closePath();
    }
    function rotate(x, y, sin, cos, reverse) {
        return {
            x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
            y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
        };
    }

    function updateBall(ball) {
        ball.x += ball.dx;
        ball.y += ball.dy;
    
        if(ball.x + ball.dx > canvas.width-ball.r || ball.x + ball.dx < ball.r) {
            ball.dx = -ball.dx;
        }
        if(ball.y + ball.dy > canvas.height-ball.r || ball.y + ball.dy < ball.r) {
            ball.dy = -ball.dy;
        }

        for(let otherBall of balls) {
            if(otherBall === ball) continue;
            let dx = otherBall.x - ball.x;
            let dy = otherBall.y - ball.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
                
            if(distance < ball.r + otherBall.r) {
                
                let angle = Math.atan2(dy, dx);
                let sin = Math.sin(angle);
                let cos = Math.cos(angle);
                          
                // Cambia direzione palle
                let vel0 = rotate(ball.dx, ball.dy, sin, cos, true);
                let vel1 = rotate(otherBall.dx, otherBall.dy, sin, cos, true);
                
                // Collisione
                let vxTotal = vel0.x - vel1.x;
                vel0.x = ((ball.r - otherBall.r) * vel0.x + 2 * otherBall.r * vel1.x) / (ball.r + otherBall.r);
                vel1.x = vxTotal + vel0.x;
               
                // Ricambia direzione
                let vel0F = rotate(vel0.x, vel0.y, sin, cos, false);
                let vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
                ball.dx = vel0F.x;
                ball.dy = vel0F.y;
                otherBall.dx = vel1F.x;
                otherBall.dy = vel1F.y;

            }

        }
        
    }
    draw();
    

