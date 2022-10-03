const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const deps = require("../../package.json").dependencies;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json')
);

module.exports = {
  output: {
    uniqueName: 'ModuloRima'
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: 'ModuloRima',
        filename: 'remoteEntry.js',
        exposes: {
            /* './PuntoAdicionalListadoComponent': './projects/rima/src/app/punto-adicional/views/punto-adicional-listado/punto-adicional-listado.component.ts',
            './CadenaCustodiaPluginComponent': './projects/rima/src/app/cadena-custodia/views/cadena-custodia-plugin/cadena-custodia-plugin.component.ts',
            './InformeMonitoreoPluginComponent': './projects/rima/src/app/informe-monitoreo/views/informe-monitoreo-plugin/informe-monitoreo-plugin.component.ts',
            './LineaBasePluginComponent': './projects/rima/src/app/linea-base/views/linea-base-plugin/linea-base-plugin.component.ts',
            './PlanificacionPluginComponent': './projects/rima/src/app/planificacion/views/planificacion-plugin/planificacion-plugin.component.ts' */
        },
        shared: {
          ...deps,
          '@angular/core': {singleton: false, strictVersion: true, requiredVersion: deps["@angular/core"],},
          '@angular/common': {singleton: false, strictVersion: true, requiredVersion: deps["@angular/common"]},
          '@angular/router': { singleton: false, strictVersion: true },
          '@expertsystems/xs-angular-common': {singleton: false, strictVersion: true},
          '@expertsystems/xs-oefa-plusd-shared': {singleton: false, strictVersion: true},
        }
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    // sharedMappings.getPlugin(),
  ],
};
