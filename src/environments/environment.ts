import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
  firebaseConfig: {
    apiKey: "AIzaSyDnslW-QIlrwkv3dm5EX8CzAfUM9gt6tH8",
    authDomain: "acg-sfb-4581d.firebaseapp.com",
    databaseURL: "https://acg-sfb-4581d.firebaseio.com",
    projectId: "acg-sfb-4581d",
    storageBucket: "acg-sfb-4581d.appspot.com",
    messagingSenderId: "787538187824",
    appId: "1:787538187824:web:c96698b51dd95e6013fff5",
    measurementId: "G-DE5LV6R4QN"
  },
  awsService: 'https://djn0gviuza.execute-api.us-east-1.amazonaws.com/dev'
};
