## Branch

Use this format when naming a branch : `^[a-z\-]+$`

A branch name should be **descriptive** (add-featurename, test-componentname), not cryptic (test, update)

If you are working on a fix that needs a quick merge on master, prefix the branch with **hotfix-**

## New Component

- Create the main file in: `component/ComponentName/index.js` (the name of the component should be the same as the name of the file)
- Create the stories in: `component/ComponentName/story.js`
- Link the story in: `storybook/config.js` (keep the alphabetical order)
- Add automatic snapshot to stories in: `component/ComponentName/snapshot.test.js`
- Add unit tests in: `component/ComponentName/index.test.js`

Follow the [style guide](#component) and keep [performances](#performances) in mind.

## Pull Request

### Review

Add at least one reviewer

### Assignee

Assign someone to the pull request (usually yourself)

### Title

Should use the same format as the [Commit Message Format](#commit-message-format)

### Description

Add a short sentence describing the goal of this pull request

Add any relevant information that could help the reviewers

### Issue

If this PR fix an issue, specify it in the description with this format :

`fixes #number-of-issue`

`#number-of-issue` should be a **direct link** to the issue

## Commit Message Format

Each commit message should include a **type**, a **scope** and a **subject**:

`<type>(<scope>): <subject>`

Lines should not exceed 100 characters.

### Type

Must be one of the following:

- **chore**: changes to the build process or auxiliary tools and libraries such as documentation generation
- **feat**: new feature
- **fix**: bug fix
- **test**: adding or updating tests

### Scope

Can be anything: ComponentName, libraryName. Use **App** if there is no specific scope.

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- do **not** suffix with a dot

## Style Guide

### Extensions

Use [prettier](https://github.com/SensCritique/Michel-Ssrdou/blob/master/.vscode/extensions.json) and [eslint](https://github.com/SensCritique/Michel-Ssrdou/blob/master/.vscode/extensions.json) extensions in vscode

### Imports Order

- libraries
- components
- everything else

Separate each block with a newline

Order each block by alphabetical order

```javascript
// example
import { propType } from "graphql-anywhere";
import idx from "idx";
import PropTypes from "prop-types";
import React from "react";

import Poster from "component/Poster";

import getLink from "utils/getLink";
```

### Component

- Imports
- styled-components
- export default Class

```javascript
// example
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: ${({theme}) => theme.color.button}
`

export default class MyComponent extends React.PureComponent {
  render() {
    return(
      // ...
    )
  }
}
```

### Methods

Don't use prefix when appending class methods

```javascript
const MyClass extends React.Component {
  // nope
  _myMethod = () => {}

  // good !
  myMethod = () => {}

  render() {}
}

```

## Performances

### State

Don't overuse setState, but do overuse **Redux**

Don't overuse properties extraction, especially when you can bind a result in a class instance without drawbacks

```javascript
// example
import idx from 'idx'
import React from 'react'

// nope
export default class MyComponent {
  myMethod() {
    const results = idx(this.props, _ => _.a.b.c.d.results);
    // do something with results
  }

  render() {
    const results = idx(this.props, _ => _.a.b.c.d.results);
    // ...
  }
}

// ok !
export default class MyComponent {
  results = []
  myMethod() {
    // do something with this.results
  }

  render() {
    this.results = idx(this.props, _ => _.a.b.c.d.results);
    // ...
  }
}
```

### Mutation

NEVER MUTATE DATA. **NEVEEEEEEEEEEEER !**
Even if it seems to make sense when you're doing it, data mutation can hurt perfomances very heavily, and be really hard to track. If you think you **need** to mutate your data, it usually means you actually need to **refactor** your code

### Functional Components

Don't use them. Use React.Component or React.PureComponent

### Functions as Props

Don't create a new function on every render. Use methods and auto-binding for a clean way to handle functions as props

```javascript
// example
// ...

// nope
export default class MyClass extends React.PureComponent {
  render() {
    return (
      <div onClick={() => console.log('hello !')} />
    )
  }
}

// good !
export default class MyClass extends React.PureComponent {
  onClick = () => {
    console.log('hello !')
  }

  render() {
    return (
      <div onClick={this.onClick} />
    )
  }
}
```

### ShouldComponentUpdate

In a perfect world, your top components should have a clean shouldComponentUpdate, and your small Components be PureComponent. ShouldComponentUpdate on top components can be tedious to maintain, so unless you notice big perfomance pitfalls, you can be very leniant on how you check your nextProps and only handle the most obvious cases
