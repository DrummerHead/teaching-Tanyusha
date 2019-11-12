# Expressions and referential transparency

In this lesson we're going to explore expressions, referential transparency and how to combine functions to do more interesting things.

An expression is any piece of code that _returns_ something.

If you go the console and press `1` it returns `1`. It is a number expression.

If I put `6 > 5` it wil return `true`.

If I write

```
if (4 > 3) {
  var meow = "purr"
}
```
I will see that it returns `undefined`, meaning that executing that code does not return anything. Instead of an expression, it is a statement.

The important thing to have in mind is that if I write `6 > 5` I can safely replace that code by `true` and the program will run the same as before.

If I write `4 * 2 + 6 / 2` is the same as if I wrote `8 + 3` is the same as if I wrote `11`.

This concenpt is very useful to understand existing code and also to write more powerful code.

For instance, we could create a function that multiplies by two:

```
var multiplyByTwo = x => x * 2;
```

And a function to add 4

```
var addFour = x => x + 4;
```

We could then use this two functions as such:

```
multiplyByTwo(22) + addFour(4);
```

What would the result be? Well, I could replace the first function call with

```
(22 * 2) + addFour(6);
```

And the second function call by

```
(22 * 2) + (6 + 4);
```

Let's try to do more interesting stuff. Imagine we live in a universe where only the number one exists; and we have this simple function:

```
var addOne = x => x + 1;
```

But out client would reeeeally like to have a function that adds two. How would we do this using only the `addOne` function? Think for a while and then check down...

We could write something like this:

```
var addTwo = x => addOne(addOne(x));
```

So what is going on in here? When we use a function, we can think of anyting inside the parenthesis as what is going in, and then the function name and the parenthesis as what is being returned (and something I can actively replace with the result itself)

So when I use `addTwo(3)` this is what is going on:

```
addOne(addOne(3))
addOne(4)
5
```

So in that excersize we did two new things:

* We used the return of one function as the input of another function
* We used a function in the declaration of another function

In JavaScript functions are [first class citizens](https://en.wikipedia.org/wiki/First-class_citizen), so we can do a lot of powerful things with them.

## Homework

Write a function that gets passed a number and returns that number plus five.

Now only using that previous function, write another function that gets passed a number and returns that number plus fifteen.

Write a function that gets passed a number and returns that number multiplied by three
Write a function that gets passed a number and returns that number plus two

Now using only the two previous functions you created, write another function that when passed the number 10 will return the number 42

Put all the results on a public gist and send me the link `<3`

Remember to always test the functions on the browser console to check they work as expected

## Extra reading

* https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/numbers-and-math/a/programming-mathematical-expressions
* https://2ality.com/2012/09/expressions-vs-statements.html
* https://www.sitepoint.com/what-is-referential-transparency/

