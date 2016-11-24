# since
Since is a CLI that calculates the number of days between today and a certain date,
 past or future.

## Installation
```
npm install -g @unscsprt/since
```

## Usage
```
since "<input>" [options]
```

Supported formats for `<input>` include:

- American: `MM-DD-YYYY` (`-` or `/`)
- Asia, Europe: `DD-MM-YYYY` (`-`, `/`, or `.`)
- China, Japan, Iran: `YYYY-MM-DD` (`-`, `/`, or `.`)

### Options

| Option  | Description |
|---------|-------------|
| `-w`, `--weeks` | Show output in units of weeks |
| `-m`, `--months` | Show output in units of months |
| `-y`, `--years` | Show output in units of years |
| `-h`, `--help` | Show help |

## ToDo
- Flag to enable output as decimal
- Add support for more input formats
- Unit tests
- Support combined unit flags for more granular output (e.g. `-wm` => `3 months, 2 weeks`)

## Change log
- **0.4.x** - Add args to show output as weeks, months, or years
- **0.3.x** - Fixed file permission bug
- **0.2.x** - Now supports future dates
- **0.1.x** - Initial release
