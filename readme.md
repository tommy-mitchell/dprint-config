# dprint-config

Personal config for [`dprint`](https://github.com/dprint/dprint). Intended for use with [`@tommy-mitchell/eslint-config-xo`](https://github.com/tommy-mitchell/eslint-config-xo).

## Install

```sh
npm install --save-dev @tommy-mitchell/dprint-config dprint
```

<details>
<summary>Other Package Managers</summary>
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
dprint config add json markdown typescript
```

### Peer Dependencies

- [dprint](https://github.com/dprint/dprint) - Pluggable and configurable code formatting platform written in Rust.

## Usage

Add to the `extends` section of your `dprint` config:

```jsonc
"extends": "node_modules/@tommy-mitchell/dprint-config/index.json",
```

### VS Code

Add the following to your `settings.json`:

```jsonc
"[javascript][typescript][markdown][json][jsonc][yaml]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dprint.dprint",
},
```

Update as needed based on used plugins.

## Related

- [Dprint Code Formatter](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) - Formats code in VSCode using dprint.
