let scount = 0;
function setCountSubhanallah() {
  document.getElementById("count-Subhanallah").innerText = scount;
}
function initialCountSubhanallah() {
  setCountSubhanallah();
}

function incrementSubhanallah() {
  if (scount < 33) {
    scount++;
    setCountSubhanallah();
  } else {
    alert("Awesome! You have recited Subhan Allah 33 times");
  }
}

function decrementSubhanallah() {
  if (scount > 0) {
    scount--;
    setCountSubhanallah();
  } else {
    alert("Please press the '+' button");
  }
}

initialCountSubhanallah();

//Alhamdulillah
let lcount = 0;
function setCountAlhamdulillah() {
  document.getElementById("count-Alhamdulillah").innerText = lcount;
}
function initialCountAlhamdulillah() {
  setCountAlhamdulillah();
}

function incrementAlhamdulillah() {
  if (lcount < 33) {
    lcount++;
    setCountAlhamdulillah();
  } else {
    alert("Awesome! You have recited Alhamdulillah 33 times");
  }
}

function decrementAlhamdulillah() {
  if (lcount > 0) {
    lcount--;
    setCountAlhamdulillah();
<<<<<<< HEAD
=======
    document.getElementById("text-sub").innerText = "";
>>>>>>> 04e7ab6b155e777d9b661f1fbaae20ac8165e41c
  } else {
    alert("Please press the '+' button");
  }
}

initialCountAlhamdulillah();

//Allahu Akbar
let acount = 0;
function setCountAllahuakbar() {
  document.getElementById("count-Allahuakbar").innerText = acount;
}
function initialCountAllahuakbar() {
  setCountAllahuakbar();
}

function incrementAllahuakbar() {
  if (acount < 34) {
    acount++;
    setCountAllahuakbar();
  } else {
    alert("Awesome! You have recited Allahu Akbar 34 times");
  }
}

function decrementAllahuakbar() {
  if (acount > 0) {
    acount--;
    setCountAllahuakbar();
<<<<<<< HEAD
=======
    document.getElementById("text-sub").innerText = "";
>>>>>>> 04e7ab6b155e777d9b661f1fbaae20ac8165e41c
  } else {
    alert("Please press the '+' button");
  }
}

initialCountAllahuakbar();
