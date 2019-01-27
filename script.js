var radWord = document.getElementById("radWord");

document.getElementById("radDefault").addEventListener("click", checkRad);
radWord.addEventListener("click", checkRad);

document.getElementById("gen").addEventListener("click", function() {
  var length = parseInt(document.getElementById("length").value.trim());
  let res;
  if (length > 0) {
    if (!radWord.checked) {
      res = genPhonString(length);
    } else {
      let list = document.getElementById("list").value.trim();
      if (list.length > 0) var array = list.split(/[^\s]+/g);
      else var array = english;
      res = genRandWordString(array, length, (document.getElementById("spaced").checked ? " " : ""), document.getElementById("wordCap").checked);
    }
  } else {
    res = "Invalid length";
  }
  res = res.charAt(0).toUpperCase() + res.slice(1);
  document.getElementById("result").innerHTML = res;
  console.log("Result: " + res);
});

function checkRad() {
  if (radWord.checked) document.getElementById("wordStuff").style.display = "block";
  else document.getElementById("wordStuff").style.display = "none";
}

function genRandWordString(w, l, j, c) { // word array, length, join string, capitalize
  var genArray = [];
  while (genArray.length < l) {
    let word = w[Math.floor(Math.random() * w.length)]
    genArray.push(c ? word.charAt(0).toUpperCase() + word.slice(1) : word);
  }
  return genArray.join(j);
}

function genPhonString(l) {
  var text = "";
  var consonants = "bcdfghjklmnpqrstvwxyz";
  var vowels = "aeiou";

  if (Math.floor(Math.random() * 2) == 0) {
    while (text.length < l) {
      text += consonants.charAt(Math.floor(Math.random() * consonants.length));
      if (text.length < l) text += vowels.charAt(Math.floor(Math.random() * vowels.length));
    }
  } else {
    while (text.length < l) {
      text += vowels.charAt(Math.floor(Math.random() * vowels.length));
      if (text.length < l) text += consonants.charAt(Math.floor(Math.random() * consonants.length));
    }
  }

  return text;
}
