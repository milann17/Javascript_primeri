var playlist = new Playlist();

var hereComesTheSun = new Song("Ti si pjesma moje duse", "Mate Miso Kovac ", "2:54");
var walkingOnSunshine = new Song("Kamerav ", "Saban Bajramovic ", "3:43");

var manOfSteel = new Movie("Otpisani", 1970, "2:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
