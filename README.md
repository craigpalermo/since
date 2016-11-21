# since
Since is a CLI that calculates the number of days between today and a certain date,
 past or future.

## Installation
```
npm install -g @unscsprt/since
```

## Usage
```
since "<input>"
```

Supported formats for `<input>` include:

- American: `MM-DD-YYYY` (`-` or `/`)
- Asia, Europe: `DD-MM-YYYY` (`-`, `/`, or `.`)
- China, Japan, Iran: `YYYY-MM-DD` (`-`, `/`, or `.`)

## TODO
- Add support for more input formats
- More output time units (minutes, weeks, etc.), selectable via CLI flags
- Unit tests
