$(".ambulance").click(function(){
    var sounds = document.getElementsByTagName('audio');
    for(let i=0; i<sounds.length; i++) sounds[i].pause();
    document.getElementById("ambsound").play();
});
$(".coffee").click(function(){
    var sounds = document.getElementsByTagName('audio');
    for(let i=0; i<sounds.length; i++) sounds[i].pause();
    document.getElementById("cofsound").play();
});
$(".office").click(function(){
    var sounds = document.getElementsByTagName('audio');
    for(let i=0; i<sounds.length; i++) sounds[i].pause();
    document.getElementById("offsound").play();
});