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

    function updateBall(ball) {
        ball.x += ball.dx;
        ball.y += ball.dy;
        
        
    }
    function ballCollision() {
        
    }
    function wallCollision() {
        
        if(ball.x + ball.dx > canvas.width-ball.r || ball.x + ball.dx < ball.r) {
            return true;
        } else if(ball.y + ball.dy > canvas.height-ball.r || ball.y + ball.dy < ball.r) {
            return true;
        }
        return false;
    }
    draw();
    

