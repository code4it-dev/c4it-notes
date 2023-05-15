---
title: "C# Tip: Advanced Switch Expressions and Switch Statements using filters"
date: 2023-05-11
url: /csharptips/with-keyword-for-better-switch-blocks
draft: false
categories:
- CSharp Tips
tags: 
- CSharp
toc: true
summary: "A summary"
---

We all use `switch` statements in our code: they are an helpful way to run different code paths based on an check on a variable.

In this short article, we're gonna learn different ways to write switch blocks, and some nice tricks to create clean and easy-to-read filters on such statements.

For the sake of this example, we will use a dummy hierarchy of types: a base `User` record with three subtypes: `Player`, `Gamer`, `Dancer`.

```cs
public abstract record User(int Age);

public record Player(int Age, string Sport) : User(Age);

public record Gamer(int Age, string Console) : User(Age);

public record Dancer(int Age, string Dance) : User(Age);
```

Let's see different usages of switch statements and switch expressions.

## Switch statements

Switch statements are those with the usual `switch (something)` block. They allow for different executions of paths, acting as a list of `if` - `else if` blocks. 

They can be used to return a value, but it's not mandatory: you can simply use `switch` statements to execute code that does not return any value.

### Switch statements with check on the type

The most simple example we can have is the plain check on the type.

```cs
User user = new Gamer(30, "Nintendo Switch");

string message = "";

switch (user)
{
    case Gamer: { message = "I'm a gamer"; break; }
    case Player: { message = "I'm a player"; break; }
    default: { message = "My type is not handled!"; break; }
}

Console.WriteLine(message); // I'm a player
```

Here we execute a different path based on the **runtime** value of the `user` variable.

We can also have an automatic casting to the actual type, and then use the actual data within the `case` block:

```cs
User user = new Gamer(30, "Nintendo Switch");

string message = "";

switch (user)
{
    case Gamer g: { message = "I'm a gamer, and I have a " + g.Console; break; }
    case Player: { message = "I'm a player"; break; }
    default: { message = "My type is not handled!"; break; }
}

Console.WriteLine(message); //I'm a gamer, and I have a Nintendo Switch
```

As you can see, since `user` is a `Gamer`, within the related branch we cast the user to `Gamer` in a variable named `g`, so that we can use its public properties and methods.

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

Here we have the `when g.Age < 10` filter applied to the `Gamer g` variable.

Clearly, if we set the age to 30, we will see *I'm a gamer, and I have a Nintendo Switch*.

## Switch expression

Switch expressions act like Switch Statements, but automatically return a value that can be assigned to a variable or returned from a method.

They look like a light-weigth, inline version of Switch Statements, and have a slightly different syntax.

To reach the same result we saw before, we can write:

```cs
User user = new Gamer(30, "Nintendo Switch");

string message = user switch
{
    Gamer g => "I'm a gamer, and I have a " + g.Console,
    Player => "I'm a player",
    _ => "My type is not handled!"
};

Console.WriteLine(message);
```

By looking at the syntax, we can notice a few things:

- instead of having `switch(variable){}`, we now have `variable switch {}`;
- we use the arrow notation `=>` to define the cases;
- we don't have the `default` keyword, but we use the discard value `_`.

### When

Similarly, we can use the `when` keyword to define better filters on the cases.

```cs
string message = user switch
{
    Gamer gg when gg.Age < 10 => "I'm a gamer, but too young",
    Gamer g => "I'm a gamer, and I have a " + g.Console,
    Player => "I'm a player",
    _ => "My type is not handled!"
};
```

You can finally use a slightly different syntax to achieve the same result. Instead of using `when gg.Age < 10` you can write `Gamer { Age: < 10 }`

```cs
string message = user switch
{
    Gamer { Age: < 10 } => "I'm a gamer, but too young",
    Gamer g => "I'm a gamer, and I have a " + g.Console,
    Player => "I'm a player",
    _ => "My type is not handled!"
};
```


## Further readings

https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns#relational-patterns


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

