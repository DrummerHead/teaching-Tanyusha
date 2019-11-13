# Comparison, if statements

We're gonna build a little game, so in this case we're gonna start exploring the things we need to build the game.

The game will be "guess the number"; we think of a number from 1 to 100, if the number is not it, we can say "lower" or "higher" until the person guesses the number.

So, the first thing we need to do is to compare. At some point we will need to compare the number the user tells us with the number we're thinking about.

For this we need [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators). These guys are expressions that return a [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) (either `true` or `false`)

Remember from the last lesson that expressions are pieces of code that _return_ something.

In the following example I'll put the code followed by `> ` which means what the code would return. Also keep in mind that anything followed by `//` is a [code comment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Comments), which does nothing and gives us as the developer an opportunity to add text to clarify our intentions.

```JavaScript
7 > 5 // Is seven bigger than five?
> true

7 > 7 // Is seven bigger than seven?
> false

7 >= 7 // Is seven bigger or equal than seven?
> true

7 <= 9 // Is seven smaller or equal than nine?
> true

7 === 7 // Is seven equal to seven?
> true

7 !== 9 // Is seven not equal to nine?
> true
```

Now go to the console and check:

* Is nine equal to ten?
* Is 42 bigger than 20?
* Is 90 smaller or equal than 2?
* Is 77 smaller than 22?
* Is 321 bigger or equal than 321?
* Is 0 smaller than -1?
* Is 4 + 3 bigger than 20 / 2?
* Is 90 * 3 smaller than 5 + 5?

You can also read about [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), which means that some stuff will happen before other stuff; like in math when you do `2 * 4 + 6 / 3` you know that multiplication and division will happen first, then they will _return_ their result and then the addition will happen. In programming we add more stuff like comparison operators, so in this case any math stuff will happen _before_ any comparison stuff.

Ok! So we know how to compare one number to another number! What else do we need to do? Well, we need some [flow control](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling). When a number is bigger, something should happen; if the number is smaller, something else should happen; if it's the same, yet another thing.

One of the most common ways to control flow is with the [if statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) (notice it's a statement, not an expression)

An if statement is a way to compare some [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value and decide whether we should do this or that. Let's build a security robot for our nightclub:

```JavaScript
var securityRobot = function(age) {
  if (age >= 18) {
    return "Ok you can enter"
  } else {
    return "Sorry, come back in a few years"
  }
}
```

Here we have a function that has an if statement where we're comparing the `age` parameter with a [hardcoded](https://en.wikipedia.org/wiki/Hard_coding) number: 18.

In an if statement we have a predicate that gets evaluated, in this case `age >= 18`. What happens if we run `securityRobot(23)`? We can re-write the code (just to understand what is going on) as such:

```JavaScript
var securityRobot = function(23) {
  if (23 >= 18) {
    return "Ok you can enter"
  } else {
    return "Sorry, come back in a few years"
  }
}
```

```JavaScript
var securityRobot = function(23) {
  if (true) {
    return "Ok you can enter"
  } else {
    return "Sorry, come back in a few years"
  }
}
```

```JavaScript
var securityRobot = function(23) {
  return "Ok you can enter"
}
```

Our `age` variable gets replaced with 23, the comparison between 23 and 18 returns true, and thus the first branch gets executed. If we had evaluated `16`, then `16 >= 18` would have evaluated to false, and then the `else` branch would get executed instead. In this case, both branches are returning [strings](https://javascript.info/string), which are a type that allows us to save arbitrary text.

Alright! Awesome. We know how to compare numbers to each other and how to decide stuff based on booleans. How would you create a function that takes two numbers (the guess number and the reference number) and returns a string that tells me whether it's bigger or smaller? Try to play around with the console and then come back...

Alright, this is what we could do with the knowledge we have so far:


```JavaScript
var guessNumber = function(number, reference) {
  if (number > reference) {
    return "The number you guessed is bigger, try again"
  } else {
    return "The number you guessed is smaller, try again"
  }
}
```

Nice! We can call this function like this `guessNumber(42, 77)` where 77 is the number we need to guess and 42 is the number we're proposing. In this case, the function would return "The number you guessed is smaller, try again". But because you're so intelligent, you probably spotted a big problem with this function. It will never guess the number! If we were to run `guessNumber(77, 77)` it will still tell us the number is smaller (because `77 > 77 === false` and thus the `else` branch gets executed).

An if statement can take more than one condition, so let's try one more time:

```JavaScript
var guessNumber = function(number, reference) {
  if (number > reference) {
    return "The number you guessed is bigger, try again"
  } else if (number < reference) {
    return "The number you guessed is smaller, try again"
  } else {
    return "You guessed the number! You're the best!"
  }
}
```

Go and test this version of `guessNumber` on your console and see if it actually does what we want it to do.

Nice! We have an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) of our game! It's very simple code, it does what it should do... but it would be nice for the computer to create a random number for us, right? And then instead of us having to pass it the guessing number, we could feed it the result of creating a random number. We're gonna do that in the next lesson ;)

For now we've learned about

* Comparison operators
* If statements
* Code comments
* Operator precedence

##  Homework

With string interpolation we can put stuff inside of a string. Normally strings are all like `"hey wuzzup"` but with string interpolation we get stuff like

```
var cat = "lovely"
var myCat = `My cat is quite ${cat}, don't you think`
```

Notice that `myCat` is using this `\`` funky characters and the `${}` syntax for interpolation.

Go and run that in the console and see what's inside `myCat`

With this knowledge let's [refactor](https://refactoring.com/) securityRobot. What could we improve? Well, if I'm not older than 18 it now tells me `"Sorry, come back in a few years"` but it could actually tell me in how many years I should come back, right?

Check this code and change `yourCodeHere` so that `securityRobot` returns a string that lets me know in how many years I should return, and put it in a public gist:

```JavaScript
var securityRobot = function(age) {
  if (age >= 18) {
    return "Ok you can enter"
  } else {
    return `Sorry, come back in ${yourCodeHere} years`
  }
}
```

Cool! Our `securityRobot` has been deployed to production and is working in 5 different nightclubs around the world. As we saw before, the number 18 is hardcoded in our code. This has become a problem, because one of our clients wants to let people in who are equal or older than 21.

Refactor `securityRobot` so that it takes a second parameter (the age to compare to) and returns the appropriate string (and also tells me how many years I'll have to wait if I'm not old enough) and put it in a public gist.

Write a function that takes a string that represents a name and returns a string such as `\`Hello ${myname}!\`` and put it in the public gist. Write this function twice, using [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and the older [function keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function). This is an example for you to remember the difference, a function that adds one:

```JavaScript
// Arrow function expression
var addOne = x = x + 1;

// Function expression
var addOne = function (x) {
  return x + 1;
}
```

Write a function that takes 3 parameters, all numbers. The first two parameters are whatever number and the third parameters is the difference between the numbers. If the difference between the numbers is smaller than the third parameter, return the string "Yup this two numbers are close to each other" and if not "No they are pretty far apart" and put it in a public gist.

`<3`