// Thank you for doing that for me.
//_________________________________________________________________________________________
//What is that?)))   http://prntscr.com/pyx5af It says " Who are you? I didnt't invite you"
//
// Some sites will serve you comments in the developer console.
// https://www.console.love/
//
//_________________________________________________________________________________________

//Refactoring getRandomNumber:

var getrandomnumber = function(min,max) {
	return min+Math.floor(Math.random()*(max-min+1))
}

_________________________________________________________________________________________
//In the beginning I did it like:

var getrandomnumber = function(min,max) {
	return min+Math.floor(Math.random()*(max-min))
}

// But it's never given me 10: http://prntscr.com/pytmug
//
// An alternative is to use round instead of floor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
//
// This function after I pass it down https://prettier.io/playground/

var getrandomnumber = function(min, max) {
  return min + Math.floor(Math.random() * (max - min));
};

// The function in arrow style:

var getrandomnumber = (min, max) =>
  min + Math.floor(Math.random() * (max - min));



//_________________________________________________________________________________________


// Hm. The second task's very interesting. I should think of it more.
// The draft:


var Count = 0;

  var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n)
}

var guessNumber = function(number, reference) {
  if (number > reference) {
	Count++
    return "The number you guessed is bigger, try again"
  } else if (number < reference) {
	Count++
    return "The number you guessed is smaller, try again"
  } else {
    return "You guessed the number! You're the best!"
  }
}

var myRandomNumber = getRandomNumber(100);
        if (Count > 10) {
      return('You lost');
      }
}
// ____________________________________________________________________________________________________________

// Good morning. Ok, it doesn't work, but I'm not going to give up. I've been thinting of it all night andmorning and it starts to drive me crazy



var Count = 0;

  var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n)
}

var guessNumber = function(number, reference) {
  if (number > reference) {
	Count = Count + 1
    return "The number you guessed is bigger, try again"
  } else if (number < reference) {
	Count = Count + 1
    return "The number you guessed is smaller, try again"
  } else {
    return "You guessed the number! You're the best!"
  }
}

var myRandomNumber = getRandomNumber(100);
        if (Count > 10) {
      return('You lost');
      }
}

// Alright! Let's massage this code a bit. First, let's indent it properly
// I went to https://prettier.io/playground and I got this back:
// (while it also warned me of a floating } that shouldn't be there)


var Count = 0;

var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n);
};

var guessNumber = function(number, reference) {
  if (number > reference) {
    Count = Count + 1;
    return "The number you guessed is bigger, try again";
  } else if (number < reference) {
    Count = Count + 1;
    return "The number you guessed is smaller, try again";
  } else {
    return "You guessed the number! You're the best!";
  }
};

var myRandomNumber = getRandomNumber(100);

if (Count > 10) {
  return "You lost";
}

// And not let's remove capitalization on the count variable. Variables that
// start with a capital letter are associated with classes, and this is not a
// class
//
// Read more about variable naming:
// https://javascript.info/variables#variable-naming

var count = 0;

var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n);
};

var guessNumber = function(number, reference) {
  if (number > reference) {
    count = count + 1;
    return "The number you guessed is bigger, try again";
  } else if (number < reference) {
    count = count + 1;
    return "The number you guessed is smaller, try again";
  } else {
    return "You guessed the number! You're the best!";
  }
};

var myRandomNumber = getRandomNumber(100);

if (count > 10) {
  return "You lost";
}

// So what we have so far is a variable count that holds a number, and then
// inside guessNumber we're increasing this variable for some branches in the
// conditional. So far so good!
//
// But, how do we actually play the game? By running the guessNumber function,
// like this:

guessNumber(50, myRandomNumber)

// So the problem we see here is that

if (count > 10) {
  return "You lost";
}

// Is code that somehow got lost. We don't really reach this code anywhere. I
// have to keep executing guessNumber(50, myRandomNumber) with a different
// number, and it is the responsibility of this function to tell me at some
// point I have tried too many times. Let's see what else we can do

var count = 0;

var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n);
};

var guessNumber = function(number, reference) {
  if (count > 10) {
    return "You lost";
  }

  if (number > reference) {
    count = count + 1;
    return "The number you guessed is bigger, try again";
  } else if (number < reference) {
    count = count + 1;
    return "The number you guessed is smaller, try again";
  } else {
    return "You guessed the number! You're the best!";
  }
};

var myRandomNumber = getRandomNumber(100);

guessNumber(50, myRandomNumber)


// What I did here is move the count check to the beggining of the body of the
// function.
// What happens now is that when I run guessNumber it first checks the amount
// of times. If the predicate (count > 10) is false, then nothing happens and
// the code after it gets exectuted. This is a statement, it does not return
// any value, it's just a way to decide whether to run some code or not.
//
// Now, if count IS bigger than 10, then the code inside gets executed; that is
// the return statement. A function declaration can have many return statements
// inside, but only one will return. At the moment the function reaches the
// return statement, the function returns and it stops execution. When a
// function reaches its return statement, it just washes its hands and says "my
// job here is done"
//
// So with this knowledge, we can have an early return that just short-circuits
// the game logic.
//
// Cool! So, this should work. We put the previous code in the console, and
// then we run 

guessNumber(50, myRandomNumber)

// Several times. Try it out! So... did you see anything in particular? It
// seems I had to run guessNumber(50, myRandomNumber) 12 times instead of 10
// for it to tell me I lost... let's try to understand what is going on... code
// is running and things are happening... it would be cool if we could
// understand how the state of the code is changing through time
//
// The developer console is quite useful for us because it allows us several
// ways of debuggging our code. One of these ways is with console.log()
//
// https://developer.mozilla.org/en-US/docs/Web/API/Console/log
// https://developers.google.com/web/tools/chrome-devtools/console/api?utm_campaign=2016q3
//
// Basically we feed console.log with something, and then we will see that in the console.
//
// Let's put it to the test!

var count = 0;

var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n);
};

var guessNumber = function(number, reference) {
  console.log("count")
  console.log(count)

  if (count > 10) {
    return "You lost";
  }

  if (number > reference) {
    count = count + 1;
    return "The number you guessed is bigger, try again";
  } else if (number < reference) {
    count = count + 1;
    return "The number you guessed is smaller, try again";
  } else {
    return "You guessed the number! You're the best!";
  }
};

var myRandomNumber = getRandomNumber(100);

guessNumber(50, myRandomNumber)

// If we use guessNumber(50, myRandomNumber) we can see extra output on the
// console. first we see the text "count" and then we see a number, which is
// the contents of the variable count. After this, we see the return value of
// the function.
//
// The first thing we can conclude is that when we do the first try, the count
// is at 0. Perhaps we should initiate the variable with the number 1


var count = 1;

var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n);
};

var guessNumber = function(number, reference) {
  console.log("count")
  console.log(count)

  if (count > 10) {
    return "You lost";
  }

  if (number > reference) {
    count = count + 1;
    return "The number you guessed is bigger, try again";
  } else if (number < reference) {
    count = count + 1;
    return "The number you guessed is smaller, try again";
  } else {
    return "You guessed the number! You're the best!";
  }
};

var myRandomNumber = getRandomNumber(100);

guessNumber(50, myRandomNumber)

// Now when we use guessNumber(50, myRandomNumber) several times, we can see
// that count represents the number of tries we did. But we still need to try
// 11 times to fail, it should be 10! Our predicate right now is count > 10,
// which means that count has to be 11 for the predicate to return true. We can
// also use >= comparison operator


var count = 1;

var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n);
};

var guessNumber = function(number, reference) {
  console.log("count")
  console.log(count)

  if (count >= 10) {
    return "You lost";
  }

  if (number > reference) {
    count = count + 1;
    return "The number you guessed is bigger, try again";
  } else if (number < reference) {
    count = count + 1;
    return "The number you guessed is smaller, try again";
  } else {
    return "You guessed the number! You're the best!";
  }
};

var myRandomNumber = getRandomNumber(100);

guessNumber(50, myRandomNumber)

// Now we try it in our console, and we see that we got what we wanted! Are we
// done now? Not yet! The console statements are just for us to debug, now that
// we reached a certain state of finished, we have to remove them


var count = 1;

var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n);
};

var guessNumber = function(number, reference) {
  if (count >= 10) {
    return "You lost";
  }

  if (number > reference) {
    count = count + 1;
    return "The number you guessed is bigger, try again";
  } else if (number < reference) {
    count = count + 1;
    return "The number you guessed is smaller, try again";
  } else {
    return "You guessed the number! You're the best!";
  }
};

var myRandomNumber = getRandomNumber(100);

guessNumber(50, myRandomNumber)

// And now yeah, we're done!
//
// We can get a little deeper and explain what is going on further.
//
// If we take a look at getRandomNumber we can see that it is a function that
// takes a number and returns a number. Nothing else is going on. Although it
// is not deterministic, it is "pure" in the sense that the function takes a
// value, does some stuff with that and returns a value. Nothing else is
// changed
//
// Now if we take a look at guessNumber, we use an external variable to affect
// the flow of our program. In some cases we're mutating the variable. This is
// a function that takes two numbers and returns a string, but it is not pure
// since it involves code outside of the body of the function. This function is
// affecting the surrounding system. Is this "bad"? It just is. For this use
// case, it's a good enough solution. For more complex systems, we try to avoid
// this since keeping track of how our code works can get very tricky.
//
// https://dev.to/ysael/functional-programming-basics-part-1-pure-function-e55

// _________________________________________________________________________________
//I often see things like
let x = 1;
alert( +x ); // 1

// Could you explain me how to use it?
//
// The let is like the var
let x = 1;
// is pretty similar to 
var x = 1;
// and the difference between the two is not such an important concept for us
// right now. They both hold a value.
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//
// the alert is actually a method of the globally accessible window object
// https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
//
// you can go right now to the console and run

alert("Tanyusha is not only sexy but also super smart")

// And you'll see a little window popping and showing the message
// Alerts used to be used for very simple user interaction and for debugging
// Nowadays console.log is preffered for debugging, which we discussed earlier
//
//
// now by +x I imagine you mean ++x. +x is the + operator and an x, it's
// missing something before to do something. ++x is like x++ but the difference
// is when is the addition done. It's not so important for us to understand at
// this point, but you can read about it nontheless:
// https://dev.to/somedood/the-difference-between-x-and-x-44dl
//
// <3