# Contribution Guidelines

## Branching / Pr Title Guidelines

Make sure the branch / pr title starts with a sematic prefix:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- chore: Other changes that don't modify src or test files
- revert: Reverts a previous committ

```text
// branch names should follow as follows
{type}/{action suggesting your implementation}
example:
feat/user-authentication
fix/fix-styling

// pr title
{type}: {description suggesting your implementation}

feat: user-authentication implementation using passkeys

More detailed explanation on the implementation if necessary
```

Here's a great template of a good commit message originally written by [Tim pope](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)

```text
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, followed by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent

If you use an issue tracker, add a reference(s) to them at the bottom,
like so:

Resolves: #123
```

## Testing

Once you submit your pull request it will automatically be tested. Be sure to check the results of the test and fix any issues that arise, merge is only possible once all issues and open comments are resolved and approved by one approver.

It's also a good idea to consider if your change should include additional tests. This is highly recommended for new features or bug-fixes. For example, it's good practice to create a test for each bug you fix which ensures that we don't regress the code in the future.

Finally - always manually test your changes using the convenient staging environment deployed for each pull request. As much as local development attempts to replicate production, there can still be subtle differences in behavior. For larger features consider testing your change in multiple browsers as well.
