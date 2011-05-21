var absendername = document.getElementById('absendername');
var absenderstrasse = document.getElementById('absenderstrasse');
var absenderort = document.getElementById('absenderort');

// Absendername
addEvent(absendername, 'blur', function () {
  localStorage.setItem('absendername', this.innerHTML);
  document.designMode = 'off';
});
addEvent(absendername, 'focus', function () {
  document.designMode = 'on';
});

if (localStorage.getItem('absendername')) {
  absendername.innerHTML = localStorage.getItem('absendername');
}

// Absenderort
addEvent(absenderstrasse, 'blur', function () {
  localStorage.setItem('absenderstrasse', this.innerHTML);
  document.designMode = 'off';
});
addEvent(absenderstrasse, 'focus', function () {
  document.designMode = 'on';
});

if (localStorage.getItem('absenderstrasse')) {
  absenderstrasse.innerHTML = localStorage.getItem('absenderstrasse');
}

// Absenderort
addEvent(absenderort, 'blur', function () {
  localStorage.setItem('absenderort', this.innerHTML);
  document.designMode = 'off';
});
addEvent(absenderort, 'focus', function () {
  document.designMode = 'on';
});

if (localStorage.getItem('absenderort')) {
  absenderort.innerHTML = localStorage.getItem('absenderort');
}



