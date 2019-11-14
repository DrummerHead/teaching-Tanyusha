//= Comments starting with = are my own (DrummerHead)

//Comparisons: http://prntscr.com/pwlmph
//= Great job!
// ____________________________________________
// 
//What does it mean? http://prntscr.com/pwlt54
//= Ok, let's put this in a little function to understand it better

var increaseFunky = function(num) {
  var x = num;
  while (x < 10) {x++};
  return x;
}

// This is a function that takes a number, copies that number to an internal
// variable, and executes a while statement
// A while statement will keep executing as long as the predicate remains true,
// which also means that to avoid an infinite loop, the conditional has to be
// mutated by the body of the while in some way.
// For instance if I do this:

while (6 > 3) {
  console.log('meow')
}

// It will execute forever, since the predicate 6 > 3 is always true.
// Now then what is the plus plus thing? Let's see this example:

var bob = 7;
var bob = bob + 1;
console.log(bob);

// In here we declare a variable called bob that holds the number 7. Then we
// declare that bob is equal to bob plus one. The declaration of the new
// variable is self-referential, it evaluates the previous value of itself and
// then it adds one.

var bobPlus = 7;
var bobPlus = bobPlus++;
console.log(bob);

// This example I'm showing you here does exactly the same. The plus plus is a
// shorthand way to add one to a variable, since in mutable style this is a
// task that happens relatively often to control loop states
// Let's see what happens to increaseFunky when I pass it the value 2
//

var increaseFunky = function(num) {
  var x = num;
  while (x < 10) {x++};
  return x;
}

var increaseFunky = function(2) {
  var x = 2; // Two gets stored here
  while (x < 10) {x++};
  return x;
}

// And then we enter the while loop

while (x < 10) {x++};
// So the body of the while loop gets executed, which adds one to x. Then x < 10
// gets evaluated (in this case 3 < 10) and it returns true. Since it
// returns true, the while body get executed again, that is 3++. Then the
// condition gets executed again, until we reach a point where 10 < 10 returns
// false and we break out of the while loop. When that happens, we're left with
// x that is equal to 10


// ____________________________________________
var WhenWeWillSeeEachOtherAgain = function (days) {
    if (days<=14) {
   return "( ˘⌣˘)♡(˘⌣˘ )"
    }else{
	return "(╥﹏╥) No. fuck it. we are stronger than reality. Anyway, it will be less than 14"
}
}

// Mi amor <3 what a lovely function ^^
// Be conscious of indentation, which is how you use whitespace to organize your code.
// Indentation is like comments, the computer doesn't need it; but code is
// created and read by humans and so indentation and comments help us
// understand what we write.
// To get a feel of the indentation you should use, you can copy paste whatever code you write in here to the left:
// https://prettier.io/playground/
// and on the right you'll see the code with a more standard indentation

var WhenWeWillSeeEachOtherAgain = function(days) {
  if (days <= 14) {
    return "( ˘⌣˘)♡(˘⌣˘ )";
  } else {
    return "(╥﹏╥) No. fuck it. we are stronger than reality. Anyway, it will be less than 14";
  }
};

// Always try to write code properly from the first time, but learning this
// takes time so at the beginning just write code that works, and after you see
// that it works copy it in the link above and make the necessary changes to
// the code you wrote previously. The more you do this the more your brain will
// pattern match how to do it properly in the future :D

// ____________________________________________
//Ok, the first try was failed:

var GuessNumber = function (guess, reference) {   // I was so happy when I saw,that we have the same name of the variable :3
if (guess>reference) {
return "It's bigger. Try again"
}else{
return "It's less. Try again"
if (guess===reference) {    // But now I see the right solution and I wanna slap my forhead
return "That's it"
}
}

// One syntax error with this example is you missed one closing }

var GuessNumber = function(guess, reference) { // I was so happy when I saw,that we have the same name of the variable :3
  if (guess > reference) {
    return "It's bigger. Try again";
  } else {
    return "It's less. Try again";
  }
  if (guess === reference) { // But now I see the right solution and I wanna slap my forhead
    return "That's it";
  }
};

// One problem with this implementation is that the first if will encompass all
// the possible states. In the first condition you say "is guess bigger than
// reference" and if it is, something will happen. And _else_ (meaning anything
// else that is not the first condition) then execute the second branch. The
// second if will never have an opportunity to be executed, the functio returns
// and then any other code continues to execue

// ____________________________________________
//then I cheated a little and searched in google a possible options for working with several conditions

//aaand....

//I failed again ¯\_(ツ)_/¯

var guessnumber = function(guess, reference) {
let message = (guess>reference) ? "It's less. Try again" :
  (guess<reference) ? "It's bigger. Tyr again" :
  (guess===reference) ? "that's it!" :
  '';}

// What you found here is a ternary operator 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// It's a basic if else _expression_, which means that the ternary operator
// _returns_ a value, while an if _statement_ does not return a value, it just
// executes different branches of code
// A way to write this with ternary operators would be

var guessnumber = function(guess, reference) {
  return guess > reference
    ? "What you guessed is too big"
    : (guess < reference ? "What you guessed is too small" : "You guessed right!")
};


//   _____________________________________________
//Only the third time I got the right solution

var guessnumber = function(number, reference) {
if (number > reference)
{return "It's bigger. Tyr again"}
else if (number < reference)
{return "It's less. Try again"}
else
{return "that''s it!"}}

// Yes! You got it :D and you did very well in also showing me how you got to
// the right solution, since I can give you intermediate feedback
// With nicer indentation it looks like this:

var guessnumber = function(number, reference) {
  if (number > reference) {
    return "It's bigger. Tyr again";
  } else if (number < reference) {
    return "It's less. Try again";
  } else {
    return "that''s it!";
  }
};

// Compare it with the version above with the two ifs (the one where I told you
// the code never reaches the second if) and see what the difference is




// ________________________________________________

// Refactoring of the securityRobot:

//For the client who wants to let people in who are equal or older than 21:

var securityRobot = function(age) {    //perhaps  I didn't understand the task correctly
  if (age >= 21) {
    return "Ok you can enter"
  } else {
    return `Sorry, come back in ${21-age} years`
  }
}

//For the other clients:

var securityRobot = function(age) {
  if (age >= 18) {
    return "Ok you can enter"
  } else {
    return `Sorry, come back in ${18-age} years`
  }
}

// So, in this excercise what I wanted you to do is to add an extra parameter
// to the securityRobot function. The magic of programming is configuration. We
// can have a function that handles 18 year old and another one that handles 21
// year old; but we can also have a single function that handles n years old.
// How could we do this? Instead of hardcoding (remember the concept) the
// value, we can pass it as a parameter. Check this version:

var securityRobot = function(age, maxAge) {
  if (age >= maxAge) {
    return "Ok you can enter";
  } else {
    return `Sorry, come back in ${maxAge - age} years`;
  }
};

// With this ^ implementation we can have a securityRobot that takes two parameters.
// We can do even fancier things like this:

var securityRobotBuilder = function(maxAge) {
  return function(age) {
    if (age >= maxAge) {
      return "Ok you can enter";
    } else {
      return `Sorry, come back in ${maxAge - age} years`;
    }
  };
};

var securityRobot18 = securityRobotBuilder(18);

securityRobot18(16)
// "Sorry, come back in 2 years"

securityRobot18(19)
// "Ok you can enter"

var securityRobot21 = securityRobotBuilder(21);

securityRobot21(18)
// "Sorry, come back in 3 years"

securityRobot21(21)
// "Ok you can enter"

// securityRobotBuilder is a function that takes a number and returns a new
// function. This function will also take another number, and eventually will
// return a string. So you can assign the calling of securityRobotBuilder to a
// variable that now contains another function, this function will keep the
// value given to it by the surrounding function (concept called closure).
// This is more advanced, but it's nice for you to know that things like this exist.


// _________________________________________________
// Arrow function expression
var myname = "Tatiana"
var Hello = `Hello, ${myname}` // I think I'm a little broken. It's 4:13 a.m. I'll try again in the morning

// Function expression
var HelloName = function (myname)
{
var myname = readline();
return 'Hello, ${myname}';
}
// __________________________________________________
// You said, that the  third parameters is the difference between the numbers. Should it be a random number or is it really the difference between the numbers?
// If the third parameters is the difference between the numbers then the first number and the second number are always "pretty far appart"
bc the difference between the numbers can't be smaller than the third parameter.
So I was solving this task taking the third parameters as a random number.

var threeParameters = function(TheFirstNum, TheSecondNum, Difference) {
  if (Math.abs(TheFirstNum-TheSecondNum) < Difference) {
    return "Yup this two numbers are close to each othe"
  } else {
    return "No they are pretty far apart"
  }
}

// Yes, this is the desired implementation :) everything that you pass as a
// parameter to a function is something to configure. You would never pass to a
// function something that you can calculate with the given parameters. I
// mean... you can, but why would you :) let the computer do it for you.


// You did great mi amor! <3
//
// Some extra tips: When you save a gist you can add an extension to the
// filename. If you go like "homework4.js" it will infer you're writing
// JavaScript and will syntax highlight the code for you