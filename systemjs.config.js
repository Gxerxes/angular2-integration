(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    '@angular2-material':         'node_modules/@angular2-material',
    "ng2-dropdown":               "node_modules/ng2-dropdown",
    'angular2-busy':              "node_modules/angular2-busy/build/src",
    'angular2-google-maps':       "node_modules/angular2-google-maps",
    'angular2TextMask':           "node_modules/angular2-text-mask/dist/angular2TextMask.js",
    'lodash':                     "node_modules/lodash/lodash.js",
    'ng2-tree':                   "node_modules/ng2-tree"
    // 'ng2-sweetalert2':            'node_modules/ng2-sweetalert2'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { main: 'Rx.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    "ng2-dropdown":               { main: "index.js", defaultExtension: "js" },
    'angular2-busy':              { main: "index.js", defaultExtension: "js" },
    'angular2-google-maps/core':  { main: "index.js", defaultExtension: "js" },
    'ng2-tree':                   { main: "index.js", defaultExtension: "js" }
    // 'ng2-sweetalert2':            { main: 'index.js',  defaultExtension: 'js'}
  };

  var materialPkgs = [
      'core',
      'toolbar',
      'icon',
      'button',
      'sidenav',
      'list',
      'card',
      'input',
      'checkbox'
  ];

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ];
  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });
  
  materialPkgs.forEach(function (pkg) {
    packages['@angular2-material/' + pkg] = {main: pkg };
  });
  
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);