# Contributing to shortway
First off, thanks for taking the time to contribute!

Now, take a moment to be sure your contributions make sense to everyone else.
These are just guidelines, not rules.
Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct
This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

## Reporting Issues
Found a problem? Want a new feature? First of all see if your issue or idea has [already been reported](../../issues).
If don't, just open a [new clear and descriptive issue](../../issues/new).

## Submitting pull requests
Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.
And submit your pull request after making sure that all tests pass and they are covering 100% of the code.

- Fork it!
- Clone your fork: `git clone https://github.com/<your-username>/shortway`
- Navigate to the newly cloned directory: `cd shortway`
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Install the tools necessary for development: `yarn` or `npm install`
- Make your changes.
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes.

## Testing
Every time you write a test, remember to answer all the questions:

1. What are you testing?
2. What should it do?
3. What is the actual output?
4. What is the expected output?
5. How can the test be reproduced?

## Code Style
Follow the [xo](https://github.com/sindresorhus/xo) style.
Using two spaces for identation and no [semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding).

## Scripts
The follow scripts are available when you develop.

- `npm test` - Run the tests one time.
- `npm test:watch` - Watch and run the tests.
- `npm run lint` - Lint the files.
