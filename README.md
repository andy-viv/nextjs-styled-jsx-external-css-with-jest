# nextjs-styled-jsx-external-css-with-jest

Example repo of Next.js, styled-jsx with external css and Jest with snapshot
testing for global jsx bug report.

Snapshot testing works as expected with the use of
[`indentity-obj-proxy`](https://github.com/keyanzhang/identity-obj-proxy) and
[`babel-jest`](https://github.com/facebook/jest/tree/master/packages/babel-jest)
when using scoped `styled-jsx` Eg:

```js
// components/Footer.js
<style jsx>{footerStyles}</style>;
```

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

      Consider adding an error boundary to your tree to customize error handling behavior.
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

results in correctly running tests, but the styles are thus scoped.

Is this a bug? I can try and use global styles through the `<link>` in the head with Next.js `import Head from "next/head";` and scoped with styled-jsx, but it would be good to use a single method in the JSX to include styles.

This seems related too, but not the same as this issue:
https://github.com/zeit/styled-jsx/issues/298

## Install

`yarn`

## Test

`yarn test`
