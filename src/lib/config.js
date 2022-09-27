export const Config = {
  AvailableDBs: [
    "mysql",
    "sqlite",
    "mssql",
    "postgresql",
    "oracle",
    "sqlalchemy",
    "vfp9",
    "cubrid",
    "web2py",
  ],

  DefaultDB: "mysql",

  AvailableLocales: [
    "ar",
    "cs",
    "de",
    "el",
    "en",
    "eo",
    "es",
    "fr",
    "hu",
    "it",
    "ja",
    "ko",
    "nl",
    "pl",
    "pt_BR",
    "ro",
    "ru",
    "sv",
    "tr",
    "zh",
  ],

  DefaultLocale: "en",

  AvailableBackends: [
    "php-mysql",
    "php-s3",
    "php-blank",
    "php-file",
    "php-sqlite",
    "php-mysql+file",
    "php-postgresql",
    "php-pdo",
    "perl-file",
    "php-cubrid",
    "asp-file",
    "web2py",
  ],

  DefaultBackend: "php-mysql",

  Relation: {
    Thickness: 2,
    Spacing: 15,
    Colours: ["#000", "#800", "#080", "#008", "#088", "#808", "#088"],
    MaterialColours: [
      "#323232",
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#3F51B5",
      "#673AB7",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFC107",
      "#FF5722",
      "#795548",
      "#607D8B",
    ],
    Highlighted: {
      Colour: "#FF0000",
      Thickness: 5,
    }
  },

  Styles: ["material-inspired", "original"],

  Paths: {
    Static: "",
    XHR: "",
  },

  /*
   * The key below needs to be set individually by you if you want to use the Dropbox load/save feature.
   * To do that, first sign up with Dropbox (may require a specific developer / SDK sign-up), go to
   * https://www.dropbox.com/developers/apps and use "Create app" to add a new "Dropbox API app".
   * Limit the app to its own folder. Call it, for instance, "wwwsqldesigner".
   * Under "OAuth 2", "Redirect URIs", add the URL to the "dropbox-oauth-receiver.html" file on your server.
   * E.g, if you install wwwsqldesigner on your local web server under "http://localhost/sqldesigner/", then add
   * http://localhost/sqldesigner/dropbox-oauth-receiver.html as a Redirection URI.
   * Copy the shown "App key" and paste it here below instead of the null value:
   */
  DropboxKey: null, // such as: "d6stdscwewhl6sa"
};
