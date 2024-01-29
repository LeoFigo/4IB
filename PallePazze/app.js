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
    
    function mergeColor(color1, color2) {
        const r1 = parseInt(color1.substring(4, color1.indexOf(',')));
        const g1 = parseInt(color1.substring(color1.indexOf(',') + 2, color1.lastIndexOf(',')));
        const b1 = parseInt(color1.substring(color1.lastIndexOf(',') + 2, color1.length - 1));
        const r2 = parseInt(color2.substring(4, color2.indexOf(',')));
        const g2 = parseInt(color2.substring(color2.indexOf(',') + 2, color2.lastIndexOf(',')));
        const b2 = parseInt(color2.substring(color2.lastIndexOf(',') + 2, color2.length - 1));
        const r = Math.floor((r1 + r2) / 2);
        const g = Math.floor((g1 + g2) / 2);
        const b = Math.floor((b1 + b2) / 2);
        return `rgb(${r}, ${g}, ${b})`;
    }
    /*function blendColors(color1, color2) {
        var blendedColor = {
            r: Math.floor((color1.r + color2.r) / 2),
            g: Math.floor((color1.g + color2.g) / 2),
            b: Math.floor((color1.b + color2.b) / 2)
        };
    
        return blendedColor;
    }*/

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
                
                let newColor = mergeColor(ball.color, otherBall.color);
                ball.color = newColor;
                otherBall.color = newColor;

                // Collisione
                let vxTotal = vel0.x - vel1.x;
                vel0.x = ((ball.r - otherBall.r) * vel0.x + 2 * otherBall.r * vel1.x) / (ball.r + otherBall.r);
                vel1.x = vxTotal + vel0.x;
                
                
                //PEZZI NELLE NIKE COSTANO PIU DELLE SHOESSSa PURUBUUUUUhbgudegiyhou
                

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
    

