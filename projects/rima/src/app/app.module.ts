import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {
  MenuModule,
  SidebarAllModule,
  SidebarModule,
  TabModule,
  TreeViewModule
} from '@syncfusion/ej2-angular-navigations';
import {
  GridAllModule,
  GridModule,
} from '@syncfusion/ej2-angular-grids';
import {NumericTextBoxModule, TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {DropDownListModule, MultiSelectAllModule, MultiSelectModule} from '@syncfusion/ej2-angular-dropdowns';
import {DatePickerModule, TimePickerModule} from '@syncfusion/ej2-angular-calendars';
import {ButtonModule, CheckBoxModule, RadioButtonModule} from '@syncfusion/ej2-angular-buttons';
import {ToastAllModule} from '@syncfusion/ej2-angular-notifications';
import {DialogAllModule, TooltipModule} from '@syncfusion/ej2-angular-popups';
import {enableRipple} from '@syncfusion/ej2-base';
import {
  httpInterceptorProviders, XsAuthInterceptor,
  XsEnsureHttpsInterceptor,
  XsHttpApiService,
  XsLoggingInterceptor
} from '@expertsystems/xs-angular-common';
import {ArchivoComponent} from './archivo/views/archivo.component';
import {CaracterNumericoDirective} from './helpers/caracter-numerico.directive';
import {CaracterNumericoSinCeroDirective} from './helpers/caracter-numerico-sin-cero.directive';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArchivoService } from './archivo/service/archivo.service';
import { XsAppGlobalsService } from '@expertsystems/xs-oefa-plusd-shared';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { NumberDirective } from './helpers/number.directive';

import {XsPlugin} from '@expertsystems/xs-oefa-plusd-shared';
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
import { MessageBoxComponent } from './helpers/message-box/message-box.component';
import { XsSyncToastComponent } from './helpers/xs-sync-toast/xs-sync-toast.component';
import { SoloNumerosDirective } from './helpers/solo-numeros.directive';
import { LoginComponent } from './acceso/views/login/login.component';
import { MenuComponent } from './menu/views/menu/menu.component';
import { ParametrosComponent } from './parametros/views/parametros/parametros.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfirmarComponent } from './general/confirmar/confirmar.component';
import { ParametrosEditarComponent } from './parametros/views/parametros-editar/parametros-editar.component';
import {MatInputModule} from '@angular/material/input';
import { SnackBarComponent } from './general/snack-bar/snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GetTokenComponent } from './general/get-token/get-token.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { EstadisticaComponent } from './dashboard/views/estadistica/estadistica.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProcesoComponent } from './procesos/views/proceso/proceso.component';
import { ProcesoEditarComponent } from './procesos/views/proceso-editar/proceso-editar.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogos/views/catalogo/catalogo.component';
import { ConflictoComponent } from './conflictos/views/conflicto/conflicto.component';
import { ConflictoEditarComponent } from './conflictos/views/conflicto-editar/conflicto-editar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { ConflictoSeguimientoComponent } from './conflictos/views/conflicto-seguimiento/conflicto-seguimiento.component';
import { CatalogoEditarComponent } from './catalogos/views/catalogo-editar/catalogo-editar.component';
import { CatalogoBaseEditarComponent } from './catalogos/views/catalogo-base-editar/catalogo-base-editar.component';



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

enableRipple(true);
@NgModule({
  imports: [
    TabModule,
    TooltipModule,
    DatePickerModule,
    ButtonModule,
    TextBoxModule,
    DialogAllModule,
    MatDialogModule,
    ToastAllModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    GridAllModule,
    DropDownListModule,
    MultiSelectAllModule,
    NumericTextBoxModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule, // required animations module
    MatIconModule,
    SidebarModule,
    MenuModule,
    CommonModule,
    CheckBoxModule,
    SidebarAllModule,
    TimePickerModule,
    MultiSelectModule,
    GridModule,
    TreeViewModule,
    MatFormFieldModule,
    RadioButtonModule,
    NgxMaterialTimepickerModule,
    DropDownButtonModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDividerModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatRadioModule
  ],
  declarations: [
    AppComponent,
    ArchivoComponent,
    CaracterNumericoDirective,
    CaracterNumericoSinCeroDirective,
    NumberDirective,
    MessageBoxComponent,
    XsSyncToastComponent,
    SoloNumerosDirective,
    LoginComponent,
    MenuComponent,
    ParametrosComponent,
    ConfirmarComponent,
    ParametrosEditarComponent,
    SnackBarComponent,
    GetTokenComponent,
    EstadisticaComponent,
    ProcesoComponent,
    ProcesoEditarComponent,
    HomeComponent,
    CatalogoComponent,
    ConflictoComponent,
    ConflictoEditarComponent,
    ConflictoSeguimientoComponent,
    CatalogoEditarComponent,
    CatalogoBaseEditarComponent,
    
  ],
  providers: [
    // httpInterceptorProviders,
    XsHttpApiService,
    ArchivoService,
    XsAppGlobalsService,
    MatDatepickerModule,  
    {provide: HTTP_INTERCEPTORS, useClass: XsEnsureHttpsInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: XsAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: XsLoggingInterceptor, multi: true}
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ConfirmarComponent,
    ParametrosEditarComponent,
    ProcesoEditarComponent,
    CatalogoEditarComponent,
    CatalogoBaseEditarComponent
  ]
})
export class AppModule {
}
