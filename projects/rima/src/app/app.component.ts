import { Component } from '@angular/core';
import {L10n, loadCldr, setCulture, setCurrencyCode} from "@syncfusion/ej2-base";

import EJ2_LOCALE from "@syncfusion/ej2-locale/src/es.json";
import numberingSystems from "cldr-data/main/es/numbers.json";
import caGregorian from "cldr-data/main/es/ca-gregorian.json";
import characters from "cldr-data/main/es/characters.json";
import currencies from "cldr-data/main/es/currencies.json";
import timeZoneNames from "cldr-data/main/es/timeZoneNames.json";
import units from "cldr-data/main/es/units.json";
import dateFields from "cldr-data/main/es/dateFields.json";
import delimiters from "cldr-data/main/es/delimiters.json";
import languages from "cldr-data/main/es/languages.json";
import listPatterns from "cldr-data/main/es/listPatterns.json";
import localeDisplayNames from "cldr-data/main/es/localeDisplayNames.json";
import measurementSystemNames from "cldr-data/main/es/measurementSystemNames.json";
import numbers from "cldr-data/main/es/numbers.json";
import posix from "cldr-data/main/es/posix.json";
import scripts from "cldr-data/main/es/scripts.json";
import territories from "cldr-data/main/es/territories.json";
import variants from "cldr-data/main/es/variants.json";

L10n.load({es: EJ2_LOCALE.es});
setCulture("es");
setCurrencyCode("PEN");
loadCldr(numberingSystems,
  caGregorian,
  characters,
  currencies,
  timeZoneNames,
  units,
  dateFields,
  delimiters,
  languages,
  listPatterns,
  localeDisplayNames,
  measurementSystemNames,
  numbers,
  posix,
  scripts,
  territories,
  variants
);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {}
