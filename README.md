# Angular FireShop

## General Informations 
Simple library that turns angular app into PWA eCommerce shop.   
To install that library simple type:   

```
git clone https://github.com/WebEferen/ng-fireshop.git
```

## Configure Firebase
Firstly, find file called **enviorement.ts** or **enviorement.prod.ts** under the enviorements folder.   
In there replace the firebase config to yours obtained from: [Google Firebase Console](https://firebase.google.com/).  
   
Code should look similar this:   

```javascript
export const environment = {
  ...
  firebase: {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR DOMAIN URI",
    databaseURL: "DATABASE URI",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET URI",
    messagingSenderId: "SENDER ID"
  }
};
```

## Configure Stripe
If you want to use Stripe as the payment provider then simply replace the stripe key in the **enviorement.ts** or **enviorement.prod.ts** file.   
Stripe **publishable key** should be obtained from: [Stripe Publishable Key](https://dashboard.stripe.com/account/apikeys).   

Code should look similar this:   

```javascript
export const environment = {
  ...
  stripe: {
      publishable_key: "KEY"
  }
};
```
## Authors

### Mike "WebEferen" Makowski

> Skype: WebEferen   
> LinkedIn: [Profile](https://www.linkedin.com/in/mmakowski97)   
> Portfolio: [Visit!](https://mmakowski.online)
