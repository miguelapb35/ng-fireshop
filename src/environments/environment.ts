// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDVpIGpfdseTiis8xjWTbhHlVY_ACnBOqs",
    authDomain: "afshop-eu.firebaseapp.com",
    databaseURL: "https://afshop-eu.firebaseio.com",
    projectId: "afshop-eu",
    storageBucket: "afshop-eu.appspot.com",
    messagingSenderId: "848472861064"
  },
  stripe: {
    publishable_key: "pk_test_OR9RM59fKhxa3821U50e9zT7"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
