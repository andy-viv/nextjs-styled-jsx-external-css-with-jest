# nextjs-styled-jsx-external-css-with-jest example repo

Example repo for
[styled-jsx bug report](https://github.com/zeit/styled-jsx/issues/354).

## Summary

I'm using Next.js, styled-jsx with external css compiled through postcss and
Jest with snapshot testing. Scoped styles works as expected, global styles
through styled-jsx do not. As far as Jest is concerned these should result in
the same output, no?

## Explanation

Snapshot testing works as expected with the use of
[`indentity-obj-proxy`](https://github.com/keyanzhang/identity-obj-proxy) and
[`babel-jest`](https://github.com/facebook/jest/tree/master/packages/babel-jest)
when using scoped `styled-jsx` Eg:

```js
// components/Footer.js
<style jsx>{footerStyles}</style>;
```

creates a correct snapshot.

However when adding `global` to the style element

```js
// from pages/index.js
<style jsx global>
  {stylesheet}
</style>;
```

`styled-jsx` throws the following error:

```shell
    console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:5533
      The above error occurred in the <JSXStyle> component:
          in JSXStyle
          in div (at index.js:11)
          in Unknown (at index.test.js:6)

      Consider adding an error boundary to your tree to customize error handling behaviour.
      Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  ● renders correctly › encountered a declaration exception

    StyleSheet: `insertRule` accepts only strings.

      at invariant (node_modules/styled-jsx/dist/lib/stylesheet.js:274:11)
      at Array.map (native)
      at Suite.<anonymous> (pages/index.test.js:6:42)
      at Object.<anonymous> (pages/index.test.js:5:1)
      at next (native)
      at next (native)
```

Removing the `global` from the style tag

```js
<style jsx>{stylesheet}</style>;
```

results with correctly running tests and snapshots, but the styles are thus
scoped.

I can try and use global styles through the `<link>` in the head with Next.js
`import Head from "next/head";` and scoped with `styled-jsx`, but it would be
good to use a single method to include styles with JSX throughout my app,
ideally just `<style jsx>` to include styles (and not mixing `<link>`s
everywhere).

## Example Repo

https://github.com/jthegedus/nextjs-styled-jsx-external-css-with-jest

## Related

https://github.com/zeit/styled-jsx/issues/298

## Versions:

```json
"next": "^4.1.4",
"styled-jsx": "^2.2.0"
```
