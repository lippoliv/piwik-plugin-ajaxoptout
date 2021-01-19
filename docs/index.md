## Intention of this plugin

Some years ago I worked as an senior web developer for some cool agency. We wanted to level up the typical german opt
out from tracking game by some nice website overlay. Therefor we needed ajax endpoints in piwik / matomo to take control
over the ignore cookie.

## Respect open source community

After 2016 the development stuck. Plugin worked, no changes needed. But this is not how open source works.

When Matomo 4 came out, I feared to update my on-premise instance because this plugin maybe doesn't work. Stupid right?

So in 2021 **I investigated a significant effort in test automation** for my matomo plugins. Right now, the logic of
this plugin is covered by integration tests which will run against all supported Matomo versions. In addition to run
those tests against my code changes, I run them once a week against the newest developments so in case of problems, I
get notified by CI/CD instead of you.

## GitHub is a mirror

For the Matomo marketplace it is needed to have a GitHub project hosting the code.

Even if for this plugin there is a GitHub project, it is just a kind of mirror to my GitLab project. Changes are
automatically pushed to GitHub, also releases will be automaticcally be created.

Feel free to fork my GitHub project. Even if I do not accept pull requests, I'm looking forward to take over your
changes manually.

## What's tested?

This plugin is tested by using [GitLab CI](https://docs.gitlab.com/ce/ci/).

### PHP compatibility

I make sure all code changes are compatible to:

- php 8.0
- php 7.4
- php 7.3
- php 7.2
- php 7.1
- php 7.0
- php 5.6

### Integration with Matomo

I make sure that the plugin works as expected with this Matomo versions:

- newest Matomo 3
- newest Matomo 4
