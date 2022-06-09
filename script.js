function preload()
{

}
function setup()
{
    canvas = createCanvas(400 , 400)
    canvas.center()
    webcam = createCapture(VIDEO)
    webcam.hide()
    pose_netModel = ml5.poseNet(webcam , modelLoaded)
    pose_netModel.on('pose' , gotResults)
}
function draw()
{
    image(webcam , 0 , 0 , 400 , 400)
}
function modelLoaded()
{
    console.log("THE MODEL HAS BEEN LOADED")
}
function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}