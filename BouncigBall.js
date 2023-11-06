
const main=document.querySelector(".main");
const ball=document.querySelector(".ball");
let leftright= Math.floor(Math.random()*2);
let right =leftright?true:false;
let updown=Math.floor(Math.random()*2);
let up=updown?true:false;
let velocity=3;

let ballmove=setInterval(()=>{
    let ballbounds=ball.getBoundingClientRect();
    let boarbounds=main.getBoundingClientRect();
    let ballboundsleft = parseInt(ballbounds.left);
    let ballboundsright = parseInt(ballbounds.right);
    let ballboundstop = parseInt(ballbounds.top);
    let ballboundsbottom = parseInt(ballbounds.bottom);
    let balltop=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("top")));
    let ballleft=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("left")));

    if (right && up)
    {
        ball.style.top=balltop-velocity + "px";
        ball.style.left=ballleft+velocity + "px";
    }
    if (!right && up)
    {
        ball.style.top=balltop-velocity + "px";
        ball.style.left=ballleft-velocity + "px";
    }
    if (right && !up)
    {
        ball.style.top=balltop+velocity + "px";
        ball.style.left=ballleft+velocity + "px";
    }
    if (!right && !up)
    {
        ball.style.top=balltop+velocity + "px";
        ball.style.left=ballleft-velocity + "px";
    }
    if (ballboundstop<=boarbounds.top)
    {
        leftright= Math.floor(Math.random()*2);
        right = leftright?true:false;
        up=false;
    }
    if (ballboundsbottom>=boarbounds.bottom)
    {
        leftright= Math.floor(Math.random()*2)
        right = leftright?true:false;
        up=true;
    }
    if (ballboundsright>=boarbounds.right)
    {
       right = false;
       updown =Math.floor(Math.random()*2)
       up = down?true:false;
    }
    if (ballboundsleft<=boarbounds.left)
    {
        right=true;
        updown= Math.floor(Math.random()*2);
        up =updown?true:false;
    }
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${red}, ${green}, ${blue})`;

    ball.style.backgroundColor = randomColor;
    

},1);

