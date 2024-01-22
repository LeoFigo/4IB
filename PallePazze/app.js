let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

let balls = [
    {x: canvas.width/4, y: canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(255, 0, 0)', r: 50, number: '1'},
    {x: 3*canvas.width/4, y: canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(255, 255, 0)', r: 50, number: '2'},
    {x: canvas.width/4, y: 3*canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(0, 255, 0)', r: 50, number: '3'},
    {x: 3*canvas.width/4, y: 3*canvas.height/4, dx: Math.random() * 4 - 2, dy: Math.random() * 4 - 2, color: 'rgb(0, 0, 255)', r: 50, number: '4'}]

    function drawBall(ball) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
    
        // Aggiungi il numero al centro della palla
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(ball.number, ball.x, ball.y);
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
                
                // Rotate the position of the balls
                let pos0 = {x: 0, y: 0};
                let pos1 = rotate(dx, dy, sin, cos, true);
                
                // Rotate the velocities of the balls
                let vel0 = rotate(ball.dx, ball.dy, sin, cos, true);
                let vel1 = rotate(otherBall.dx, otherBall.dy, sin, cos, true);
    
                // Collision reaction
                let vxTotal = vel0.x - vel1.x;
                vel0.x = ((ball.r - otherBall.r) * vel0.x + 2 * otherBall.r * vel1.x) / (ball.r + otherBall.r);
                vel1.x = vxTotal + vel0.x;
    
                // Update positions
                pos0.x += vel0.x;
                pos1.x += vel1.x;
                
                /*
                // Rotate positions back
                let pos0F = rotate(pos0.x, pos0.y, sin, cos, false);
                let pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
                */
                /*
                // Adjust positions to actual screen positions
                otherBall.x = ball.x + pos1F.x;
                otherBall.y = ball.y + pos1F.y;
                ball.x = ball.x + pos0F.x;
                ball.y = ball.y + pos0F.y;
                */
                // Rotate velocities back
                let vel0F = rotate(vel0.x, vel0.y, sin, cos, false);
                let vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
                ball.dx = vel0F.x;
                ball.dy = vel0F.y;
                otherBall.dx = vel1F.x;
                otherBall.dy = vel1F.y;
                
            }

        }
        
    }
    

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        for(let ball of balls) {
            drawBall(ball);
            updateBall(ball);
        }
    
        requestAnimationFrame(draw);
    }
    
    draw();

    function rotate(x, y, sin, cos, reverse) {
        return {
            x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
            y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
        };
    }

