# React Test Project

This is a test repo to replicate a bug in react 16

see https://github.com/facebook/react/issues/11726

If there is a client/server mismatch for text inside of an `a` or `button` element, it causes it to be automatically focused on page load.

## How to replicate

- `npm install`
- `npm run dev`
- go to http://localhost:3000

you get the expected `Text content did not match. Server: "TEXT" Client: "CLIENT TEXT"` warning in the console, but that's it.
