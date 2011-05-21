var absendername = document.getElementById('absendername');
var absenderstrasse = document.getElementById('absenderstrasse');
var absenderort = document.getElementById('absenderort');
var datum = document.getElementById('datum');
var fristdatum = document.getElementById('fristdatum');

function updateLetter(){
  unterschrift = document.getElementById('unterschrift');
  unterschrift.innerHTML = localStorage.getItem('absendername');
  rantwortadresse = document.getElementById('rantwortadresse');
  rantwortadresse.innerHTML = 
    document.getElementById('absendername').innerHTML + " " +
    document.getElementById('absenderstrasse').innerHTML + " " +
    document.getElementById('absenderort').innerHTML
};

// Absendername
addEvent(absendername, 'blur', function () {
  localStorage.setItem('absendername', this.innerHTML);
  document.designMode = 'off';
  updateLetter();
});
addEvent(absendername, 'focus', function () {
  document.designMode = 'on';
});

// Absenderort
addEvent(absenderstrasse, 'blur', function () {
  localStorage.setItem('absenderstrasse', this.innerHTML);
  document.designMode = 'off';
  updateLetter();
});
addEvent(absenderstrasse, 'focus', function () {
  document.designMode = 'on';
});

// Absenderort
addEvent(absenderort, 'blur', function () {
  localStorage.setItem('absenderort', this.innerHTML);
  document.designMode = 'off';
  updateLetter();
});
addEvent(absenderort, 'focus', function () {
  document.designMode = 'on';
});

// initial updates after page load
if (localStorage.getItem('absendername')) {
  absendername.innerHTML = localStorage.getItem('absendername');
}
if (localStorage.getItem('absenderstrasse')) {
  absenderstrasse.innerHTML = localStorage.getItem('absenderstrasse');
}
if (localStorage.getItem('absenderort')) {
  absenderort.innerHTML = localStorage.getItem('absenderort');
}

updateLetter();

var jetzt = new Date();
var tag = jetzt.getDate();
var monat = jetzt.getMonth()+1;
var jahr = jetzt.getFullYear();
datum.innerHTML = tag + "." + monat + "." + jahr;
//var ms = jetzt.getMilliseconds() + 1000*60*60*24*14
var frist = new Date(jetzt.getTime() + 1000*60*60*24*14 );
var ftag = frist.getDate();
var fmonat = frist.getMonth()+1;
var fjahr = frist.getFullYear();
fristdatum.innerHTML = ftag + "." + fmonat + "." + fjahr;
alert(fristdatum.innerHTML);
