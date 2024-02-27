# dprint-config

Personal config for [`dprint`](https://github.com/dprint/dprint).

## Install

```sh
npm install --save-dev @tommy-mitchell/dprint-config dprint
```

<details>
<summary>Other Package Managers</summary>

<br />

```sh
yarn add --dev @tommy-mitchell/dprint-config dprint
```

</details>

After installing, add your desired `dprint` plugins:

```sh
dprint config add json
dprint config add markdown
dprint config add typescript
```

### Peer Dependencies

- [dprint](https://github.com/dprint/dprint) - Pluggable and configurable code formatting platform written in Rust.

## Usage

Add to the `extends` section of your `dprint` config:

```jsonc
"extends": ["node_modules/@tommy-mitchell/dprint-config/index.json"],
```

### VS Code

Add the following to your `settings.json`:

```jsonc
"[javascript][typescript][markdown][json][jsonc]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dprint.dprint",
},
```

## Related

- [Dprint Code Formatter](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) - Formats code in VSCode using dprint.
