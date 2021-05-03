function setup()
{
canvas  = createCanvas(300,300);
canvas.center();
}

function modelLoaded()
{
console.log('model is loaded');
}
function draw()
{

}
function gotResult(error,results)
{
 if(error)
 {
     console.error(error);
 }
 else
 {
     
 }
}