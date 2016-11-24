// Date format by country
// Source: https://en.wikipedia.org/wiki/Date_format_by_country
const inputFormats = [
  // United States: 'MM-DD-YYYY'
  {
    re: /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/,
    format: 'MM-DD-YYYY',
  },

  // Asia, Europe: 'DD.MM.YYYY'
  {
    re: /^(\d{1,2})[-./](\d{1,2})[-./](\d{4})$/,
    format: 'DD-MM-YYYY',
  },

  // China, Japan, Iran: 'YYYY-MM-DD'
  {
    re: /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})$/,
    format: 'YYYY-MM-DD',
  },
];

export default inputFormats;
