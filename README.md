# vite-plugin-year

[![npm version](https://badge.fury.io/js/@8hobbies%2Fvite-plugin-year.svg)](https://badge.fury.io/js/@8hobbies%2Fvite-plugin-year)

[GitLab](https://gitlab.com/8hobbies/vite-plugin-year) | [GitHub](https://github.com/8hobbies/vite-plugin-year)

A [Vite][] plugin that inserts the current year to the html file during build. Useful for adding a
copyright year to the HTML file.

## Usage

Install with

```sh
npm install --save-dev '@8hobbies/vite-plugin-year'
```

In `vite.config.ts`, add:

```typescript
import yearPlugin from "@8hobbies/vite-plugin-year";

// ...

export default defineConfig({
  // ...

  plugins: [
    // ...
    yearPlugin(),
  ],
});
```

In `index.html`, add:

```html
<footer><p>Copyright &copy; __YEAR__ My Name</p></footer>
```

Upon build, this plugin replaces `__YEAR__` with the current year.

## Contributing

Source code is available on [GitHub][source code].

To report a bug, visit the [issue tracker][].

To run test, run `npm run test`. To build for production, run `npm pack`.

To send your contribution, open a [pull request][].

## License

```
Copyright (C) 2024 8 Hobbies, LLC <hong@8hobbies.com>

Permission to use, copy, modify, and/or distribute this software for anypurpose with or without
fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIESWITH REGARD TO THIS
SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OFMERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
AUTHOR BE LIABLE FORANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY
DAMAGESWHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN ANACTION OF CONTRACT,
NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OFOR IN CONNECTION WITH THE USE OR PERFORMANCE
OF THIS SOFTWARE.
```

[Vite]: https://vite.dev
[issue tracker]: https://github.com/8hobbies/vite-plugin-year/issues
[pull request]: https://github.com/8hobbies/vite-plugin-year/pulls
[source code]: https://github.com/8hobbies/vite-plugin-year
