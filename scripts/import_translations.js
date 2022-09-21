#!env node

// This script converts the original WWW SQL Designer translations from XML to JSON
// so that they can be used with i18next
// Example usage: node scripts/import_translations.js ~/Code/original-wwwsqldesigner ./public/locale

const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

async function main() {
  const [WwwSqlDesignerSource, OutputPath] = process.argv.slice(2);

  const xmlFiles = fs.readdirSync(path.join(WwwSqlDesignerSource, 'locale'));
  for (let i = 0; i < xmlFiles.length; i++) {
    const locale = xmlFiles[i].replace(/\.xml$/, '');

    const xml = fs.readFileSync(path.join(WwwSqlDesignerSource, 'locale', xmlFiles[i]));
    const parsed = await xml2js.parseStringPromise(xml);

    const converted = {};

    for (let j = 0; j < parsed.locale.string.length; j++) {
      const row = parsed.locale.string[j];
      const label = row.$.name;
      const text = row._;
      converted[label] = text;
    }

    const json = JSON.stringify(converted, null, 4);
    const outputPath = path.join(OutputPath, locale);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath);
    }
    fs.writeFileSync(path.join(OutputPath, locale, 'translation.json'), json,);
  }
}

main();
