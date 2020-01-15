# Jobandtalent Design system

This repo contains the jobandtalent's design system (CSS and React Components), and it's supposed to be shared between projects as a [git subtree](https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree).

https://jtguides.appspot.com/design_system/

## How to use it from other projects

### Adding the design system

To use our design system styles in a parent repository, you need to add it as a subtree, specifying the design system path:

```
git subtree add --prefix <DESIGN_SYSTEM_PATH> git@github.com:jobandtalent/design_system.git master --squash
```

If you are storing the design system in `vendor/design_system`, for example, the command would be:

```
git subtree add --prefix vendor/design_system git@github.com:jobandtalent/design_system.git master --squash
```

This creates a local copy of the design system in the parent repository. We can use all the created files normally from there.

### Updating the design system

To pull the last changes on the design system from the parent repository, you need to:

```
git subtree pull --prefix <DESIGN_SYSTEM_PATH> git@github.com:jobandtalent/design_system.git master --squash
```

## Contributing (WIP)
Code can be committed directly in this repo as usual, but since this was created to be used as a subtree in a parent repo, the code will usually be changed and tested from somewhere else, so working directly with this repo could be painful.

This repo will soon include tooling like linting, testing, showcasing and packaging to make the development delightful.

Luckily, pushing changes to the design system directly from the parent repo is possible. Just work as you would from the parent repo, commit all the stuff, and when you are ready to push, run:

```
git subtree push --prefix <DESIGN_SYSTEM_PATH> git@github.com:jobandtalent/design_system.git ds-pull-request-branch
```

This creates a new branch named `ds-pull-request-branch` in the design system with the changes made from the parent repo.

⚠️ When doing a `git subtree push`, git is smart enough to filter out files and commits, only pushing changes in the subtree folder (`design_system` in this case), but for the sake of clarity, commits affecting the design system from the parent repo should only change design system files.

### Prerequisites

You need [Yarn](https://yarnpkg.com/) 1.3+. Install it according to your OS and environment preferred configuration.

### Style Guides

#### Javascript

We are enforcing the style guides through eslint. Running the following command will tell you if warning or errors are present.

    yarn eslint

During coding sessions is useful to have an automatic verification with:

    yarn eslint-watch

#### Stylesheets

For stylesheets, we are using [stylelint](https://stylelint.io/). Check how to [configure your editor](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/complementary-tools.md#editor-plugins) to support it. Also, you can always run the following command to check for errors or warnings:

    yarn stylelint

### Testing

The React Components must be tested, [Jest](https://facebook.github.io/jest/) is the test framework, and runing the following command will reports errors and coverage.

    yarn test

### Documentation

The components documentation is generated with Storybook, you need to write the stories and the distributable Storybook could be generated with;

    yarn storybook-publish

### Playground

The Storybook stories are useful for documentation but also useful as a playground to experiment, try and test things. Launch the live storybook with:

    yarn storybook
