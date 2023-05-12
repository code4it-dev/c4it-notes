---
title: "C# Tip: Advanced Switch Expressions and Switch Statements using filters"
date: 2023-05-11
url: /csharptips/with-keyword-for-better-switch-blocks
draft: false
categories:
- CSharp Tips
tags: 
- CSharp
toc: false
summary: "A summary"
---

We all use `switch` blocks in our code: they are an helpful way to run different code paths based on an check on a variable.

In this short C# tip we're gonna learn different ways to write switch blocks.

For the sake of this example, we will use a dummy hierarchy of types: a base `User` record with three subtypes: `Player`, `Gamer`, `Dancer`.

```cs
public abstract record User(int Age);

public record Player(int Age, string Sport) : User(Age);

public record Gamer(int Age, string Console) : User(Age);

public record Dancer(int Age, string Dance) : User(Age);
```

Let's see different usages of a switch block.

## Switch statements




### Simple check on the type

The most simple example we can have is the plain check on the type.

```cs
User user = new Gamer(30, "Nintendo");

string message = "";

switch (user)
{
    case Gamer: { message = "I'm a gamer"; break; }
    case Player: { message = "I'm a player"; break; }
    default: { message = "My type is not handled!"; break; }
}

Console.WriteLine(message); // I'm a player
```

Here we execute a different path based on the runtime value of the `user` variable.

We can also have an automatic casting to the actual type, and use the actual data within the `case` block:

```cs
User user = new Gamer(30, "Nintendo");

string message = "";

switch (user)
{
    case Gamer g: { message = "I'm a gamer, and I have a " + g.Console; break; }
    case Player: { message = "I'm a player"; break; }
    default: { message = "My type is not handled!"; break; }
}

Console.WriteLine(message); //I'm a gamer, and I have a Nintendo
```

As you can see, since the `user` is a `Gamer`, within the related branch we cast the user to `Gamer` in a variable named `g`, so that we can use its properties.

### Where

We can add additional filters on the actual value of the variable by using the `where` clause:

```cs
User user = new Gamer(3, "Nintendo");

string message = "";

switch (user)
{
    case Gamer g when g.Age < 10: { message = "I'm a gamer, but too young"; break; }
    case Gamer g: { message = "I'm a gamer, and I have a " + g.Console; break; }
    case Player: { message = "I'm a player"; break; }
    default: { message = "My type is not handled!"; break; }
}

Console.WriteLine(message); // I'm a gamer, but too young
```

As you can see, we have the `when g.Age < 10` filter applied to the `Gamer g` variable.

Clearly, if we set the age to 30, we will see *I'm a gamer, and I have a Nintendo*.

## Switch expression



## relational pattern


static string Classify(double measurement) => measurement switch
{
    < -4.0 => "Too low",
    > 10.0 => "Too high",
    double.NaN => "Unknown",
    _ => "Acceptable",
};


static Point Transform(Point point) => point switch
{
    { X: 0, Y: 0 }                    => new Point(0, 0),
    { X: var x, Y: var y } when x < y => new Point(x + y, y),
    { X: var x, Y: var y } when x > y => new Point(x - y, y),
    { X: var x, Y: var y }            => new Point(2 * x, 2 * y),
};

https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns#relational-patterns

## Further readings

_This article first appeared on [Code4IT 🐧](https://www.code4it.dev/)_

https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements#the-switch-statement
https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/switch-expression

## Wrapping up


I hope you enjoyed this article! Let's keep in touch on [Twitter](https://twitter.com/BelloneDavide) or on [LinkedIn](https://www.linkedin.com/in/BelloneDavide/), if you want! 🤜🤛

Happy coding!

🐧



[ ] Titoli

[ ] Grammatica

[ ] Bold/Italics

[ ] Alt Text per immagini

[ ] Frontmatter

[ ] Nome cartella e slug devono combaciare

