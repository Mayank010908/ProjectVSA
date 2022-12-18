var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event);
    //results[0][0].transcript
    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content

    if (content == "take my selfie") {
        console.log("Taking your selfie in 5 seconds")
        speak()
    }
}

function speak() {
    var synth = window.speechSynthesis
    speakdata = "Taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
    Webcam.attach(camera)

    setTimeout(function (){
    takesnapshot1();   
    takesnapshot2()
    takesnapshot3()              
    //save();
        
    }, 5000);
}

//step 3 camera integration starts
//webcam.set()=used to setup the properties of the camera
//webcam.attach()=used to attach the camera to the webpage

var camera=document.getElementById("camera")
Webcam.set({
    width:350,
    height:280,
    img_format: "jpeg",
    jpeg_quality:90
})

function takesnapshot1(){
    Webcam.snap(
        function(data_uri){
         document.getElementById("result1").innerHTML="<img id='selfie_image1' src= ' " +data_uri+" '>";
        }
    )
}

function takesnapshot2(){
    Webcam.snap(
        function(data_uri){
         document.getElementById("result2").innerHTML="<img id='selfie_image2' src= ' " +data_uri+" '>";
        }
    )
}


function takesnapshot3(){
    Webcam.snap(
        function(data_uri){
         document.getElementById("result3").innerHTML="<img id='selfie_image3' src= ' " +data_uri+" '>";
        }
    )
}


function save(){
link = document.getElementById("link")
img = document.getElementById("selfie_image").src
link.href=img
link.click()
}