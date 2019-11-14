# 

On the previous episode we reached this state:

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

So far we have a function that we can pass two parameters: Number that represents our guess and number that is the number to be guessed.

Well, let's add more features to this game! I want the computer to generate a random number for me, and then I can use this number as the second parameter instead of having to choose a number.

Alright! How do we get a random number? Here it is!

```JavaScript
Math.random()
```

If you go and execute that on the console, you'll get a random [floating point](https://en.wikipedia.org/wiki/Floating-point_arithmetic) number between 0 and 1.

Well... it's not exactly what we want, right? `Math.random()` would give us something like `0.38835543316122845` when what we want is... `24`.

So if we want a random number between 0 and 100, and we have something that gives us a random number between 0 and 1... what could we do? We can multiply the result of `Math.random()` by 100.

Go to the console and run this several times:


```JavaScript
Math.random() * 100
```

Pretty cool! But we still get all this `.761447304320534` stuff we don't want. Let's get rid of it! Inside the [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) we have other useful stuff, like [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). With it we can do something like this:


```JavaScript
Math.floor(Math.random() * 100)
```

Cool! Now we get a random number between 0 and 100 without the extra fluffy stuff.

Let's put it inside of a function, because that seems to be what the cool kids are doing:

```JavaScript
var getRandomNumber = function() {
  return Math.floor(Math.random() * 100)
}
```

Now you can run `getRandomNumber()` and get a random number! And the beauty of this is that you hide all that complexity inside of a function. It's much cleaner to call `getRandomNumber` than `Math.floor(Math.random() * 100)`, and if in the future I decide to change the way I get a random number, I can just change the body of my function and everywhere else where I'm calling that function, I don't have to care.

Hey, let's add more features to the `getRandomNumber()` function. Right now it gives me a number between 0 and 100...  but what if I want a number between 0 and 10? Let's make it configurable and pass it a paramter. How would you do it? Write it and then check above...


```JavaScript
var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n)
}
```

Now we can use `getRandomNumber` to generate a random number for us, and then `guessNumber` to play the game. Check this out in your console:


```JavaScript
var getRandomNumber = function(n) {
  return Math.floor(Math.random() * n)
}

var guessNumber = function(number, reference) {
  if (number > reference) {
    return "The number you guessed is bigger, try again"
  } else if (number < reference) {
    return "The number you guessed is smaller, try again"
  } else {
    return "You guessed the number! You're the best!"
  }
}

var myRandomNumber = getRandomNumber(100);

guessNumber(50, myRandomNumber)
```

Now you can keep executing `guessNumber(50, myRandomNumber)` with your number and play the game!

Notice that we saved a result of `getRandomNumber(100)` on a variable and then we fed that variable to `guessNumber`. What would happen if we did something like this?

```
guessNumber(50, getRandomNumber(100))
```

Well, in that case we're constantly rendering a new random number, so each time we guess, we're moving the goalpost. That wouldn't be a fun game to play, right?

## Homework

Refactor getRandomNumber to accept two parameters: first parameter is lower bound of random number and second parameter is higher bound of random nuber. That is if I call `getRandomNumber(50, 150)` I would get a random number between 50 and 150. Put it on a public gist and all you know my love.

Now also write this function in function arrow style.

Let's add a little challenge... right now we can call `guessNumber()` as much as we want, but it would be cool if after 10 tries, we get a message that we lost. For this we need a variable that holds the amount of tries we've done, that adds one to itself after one try, and a conditional that after 10 tries it will just let us know we lost. Do your best and don't be afraid to experiment. Today I didn't have so much time to make a tutorial but it's also nice you get some days of lighter stuff. Love you babe <3



