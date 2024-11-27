# Tauri + React Application for christmas shanigans

## Frameworks Needed

- [Nodejs](https://nodejs.org/en/download/package-manager)
- [Rust](https://www.rust-lang.org/tools/install)

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)

- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)

- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

### Initializing Project

- Download both frameworks above
- Open terminal inside project
- Run the following commands

```bash
npm i
npm run tauri dev (developer instance)
# To build the project run
# application will be found under src-tauri/target/release
# installer for windows be found under src-tauri/target/release/bundle/msi
npm run tauri build (release build)
```

Note: make sure you have downloaded rust and nodejs
