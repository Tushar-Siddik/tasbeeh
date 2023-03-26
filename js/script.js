let count = 0;
function setCountSubhanallah() {
  document.getElementById("count-Subhanallah").innerText = count;
}
function initialCountSubhanallah() {
  setCountSubhanallah();
}

function incrementSubhanallah() {
  if (count < 33) {
    count++;
    setCountSubhanallah();
  } else {
    alert("Awesome! You have recited Subhan Allah 33 times");
  }
}

function decrementSubhanallah() {
  if (count > 0) {
    count--;
    setCountSubhanallah();
    document.getElementById("text-sub").innerText = "";
  } else {
    alert("Please press the '+' button");
  }
}

initialCountSubhanallah();

//Alhamdulillah
function setCountAlhamdulillah() {
    document.getElementById("count-Alhamdulillah").innerText = count;
  }
  function initialCountAlhamdulillah() {
    setCountAlhamdulillah();
  }
  
  function incrementAlhamdulillah() {
    if (count < 33) {
      count++;
      setCountAlhamdulillah();
    } else {
      alert("Awesome! You have recited Alhamdulillah 33 times");
    }
  }
  
  function decrementAlhamdulillah() {
    if (count > 0) {
      count--;
      setCountAlhamdulillah();
      document.getElementById("text-sub").innerText = "";
    } else {
      alert("Please press the '+' button");
    }
  }
  
  initialCountAlhamdulillah();

  //Allahu Akbar
  function setCountAllahuakbar() {
    document.getElementById("count-Allahuakbar").innerText = count;
  }
  function initialCountAllahuakbar() {
    setCountAllahuakbar();
  }
  
  function incrementAllahuakbar() {
    if (count < 34) {
      count++;
      setCountAllahuakbar();
    } else {
      alert("Awesome! You have recited Allahu Akbar 34 times");
    }
  }
  
  function decrementAllahuakbar() {
    if (count > 0) {
      count--;
      setCountAllahuakbar();
      document.getElementById("text-sub").innerText = "";
    } else {
      alert("Please press the '+' button");
    }
  }
  
initialCountAllahuakbar();
