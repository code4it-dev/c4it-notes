---
title: "C# Tip: Format Interpolated Strings"
date: 2023-04-23T13:44:42+02:00
url: /csharptips/post-slug
draft: false
categories:
- CSharp Tips
tags: 
- CSharp
toc: false
summary: "A summary"
---

As you know, there are many ways to "create" strings in C#. You can use a `StringBuilder`, you can simply concatenate strings, or you can use *interpolated* strings.

Interpolated? WHAT? I'm pretty sure that you've already used interpolated strings, even if you did not know the "official" name:

```cs
int age = 31;
string bio = $"Hi, I'm {age} years old";
```

That's it: an interpolated string is the one where you can reference a variable or a property withing the string definition, using the `$` and the `{}` operators to generate such strings.

Did you know that you can even format how the interpolated value must be rendered when creating the string? It's just a matter of specifying the format after the `:` sign:

## Formatting dates

The easiest way to learn it is by formattging dates:

```cs
DateTime date = new DateTime(2021,05,23);

Console.WriteLine($"The printed date is {date:yyyy-MM-dd}"); //The printed date is 2021-05-23
Console.WriteLine($"Another version is {date:yyyy-MMMM-dd}"); //Another version is 2021-May-23

Console.WriteLine($"The default version is {date}"); //The default version is 23/05/2021 00:00:00
```

Here we have `date:yyyy-MM-dd` which basically means "format the `date` variable using the `yyyy-MM-dd` format". Clearly, you can use whichever date format you need.


[AGGIUNGI ESEMPI]
https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings

## Formatting numbers

Similar to dates, we can format numbers.

For example, we can format a `double` number as currency:

```cs
var cost = 12.41;
Console.WriteLine($"The cost is {cost:C}"); // The cost is £12.41
```

https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings

## Further readings

_This article first appeared on [Code4IT 🐧](https://www.code4it.dev/)_


## Wrapping up


I hope you enjoyed this article! Let's keep in touch on [Twitter](https://twitter.com/BelloneDavide) or on [LinkedIn](https://www.linkedin.com/in/BelloneDavide/), if you want! 🤜🤛

Happy coding!

🐧
