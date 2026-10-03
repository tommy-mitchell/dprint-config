# dprint-config

Personal config for [`dprint`](https://github.com/dprint/dprint). Intended for use with [`@tommy-mitchell/eslint-config-xo`](https://github.com/tommy-mitchell/eslint-config-xo).

## Install

```sh
npm install --save-dev @tommy-mitchell/dprint-config dprint
```

<details>
<summary>Other package managers</summary>
<p>

```sh
yarn add --dev @tommy-mitchell/dprint-config dprint
```

```sh
pnpm add --save-dev @tommy-mitchell/dprint-config dprint
```

</p>
</details>

After installing, add your desired `dprint` plugins:

```sh
dprint config add json markdown typescript npm:dprint-plugin-yaml
```

### Peer Dependencies

- [dprint](https://github.com/dprint/dprint) - Pluggable and configurable code formatting platform written in Rust.

## Usage

Add to the `extends` section of your `dprint` config:

```jsonc
"extends": ["node_modules/@tommy-mitchell/dprint-config/index.jsonc"],
```

### VS Code

Add the following to your `settings.json`:

```jsonc
"[javascript][typescript][markdown][json][jsonc][yaml]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dprint.dprint",
},
```

> [!TIP]
> You can configure VSCode to read `dprint.json` as JSONC and ignore trailing comma warnings:
>
> <details>
> <summary><code>.jsonc</code> file association</summary>
> <p>
>
> ```jsonc
> // settings.json
> "files.associations": { "dprint.json": "jsonc" },
> "json.schemas": [{
>   "fileMatch": ["dprint.json"],
>   "schema": { "allowTrailingCommas": true }
> }]
> ```
>
> </p>
> </details>

### Plugins

3rd-party plugins must be individually extended from separate configs to avoid errors ([dprint#891](https://github.com/dprint/dprint/issues/891)).

#### Malva (CSS)

See [`dprint-plugin-malva`](https://github.com/g-plane/malva).

```sh
dprint config add npm:dprint-plugin-malva
```

<details>
<summary><code>dprint.json</code></summary>
<p>

```jsonc
"extends": [
	// …
	"node_modules/@tommy-mitchell/dprint-config/malva.jsonc",
],
```

</p>
</details>

<details>
<summary><code>settings.json</code></summary>
<p>

```jsonc
"[…][css][scss][tailwindcss]": {
  // …
},
```

</p>
</details>

#### Markup (HTML)

See [`dprint-plugin-markup`](https://github.com/g-plane/markup_fmt).

```sh
dprint config add npm:dprint-plugin-markup
```

<details>
<summary><code>dprint.json</code></summary>
<p>

```jsonc
"extends": [
	// …
	"node_modules/@tommy-mitchell/dprint-config/markup.jsonc",
],
```

</p>
</details>

<details>
<summary><code>settings.json</code></summary>
<p>

```jsonc
"[…][html]": {
  // …
},
```

</p>
</details>

## Related

- [Dprint Code Formatter](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) - Formats code in VSCode using dprint.
