Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById('camera');

Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('output').innerHTML = "<img id='captured_image' src="+data_uri+">";
    })
}
console.log('ML5.js Version: '+ml5.version)

classifire = ml5.imageClassifier('https://storage.googleapis.com/tm-model/v_sl95BzE/model.json', modelLoaded());
function modelLoaded(){
    console.log('modelLoaded');
}