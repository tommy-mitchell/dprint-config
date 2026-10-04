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
"[javascript][typescript][markdown][json][jsonc][yaml][css][scss][tailwindcss][html]": {
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

## Related

- [dprint - Code Formatter](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) - Formats code in VSCode using dprint.
