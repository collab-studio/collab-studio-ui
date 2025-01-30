# Theme

Let’s first look at some of the requirements:

- The theming should be easy to understand (at least all the high level parts)
- The implementation of said theming by developers should be easy to use
- The theme setup should have a set of standardized colors that can be used for many theme attributes
- The theming should allow multiple themes, as well as user customization on themes
- For this example, we’ll just use colors, but you could apply the principles here to include other things like font sizes, standard padding sizes, etc.

To further explain requirements, we’re looking for a very flexible system, but that can enforce certain usage. In my theming, I want to have each theme immediately available at the flip of a switch, so this will be bound to a class name on the document’s html element. Something like so:

```html
<html class="light">
  ...
</html>
```
