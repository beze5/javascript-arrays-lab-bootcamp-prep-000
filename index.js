var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name){
  let kitten2 = [name];
  var allKittens = kittens.concat(kitten2);
  return allKittens
}

function prependKitten(name){
  var moreKittens = kittens.unshift(name);
  return moreKittens;
}

function removeLastKitten(){
  var lastKittenGone = [kittens.pop()];
  return lastKittenGone;
}
