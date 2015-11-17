#bootstrap-waitingfor

"Waiting for..." modal dialog with progress bar for Bootstrap.

See this plugin in action:rocket:: http://bootsnipp.com/snippets/featured/quotwaiting-forquot-modal-dialog

##Features

* AMD-compatible
* Configurable

##Using

You can install this module with bower `bower install bootstrap-waitingfor` and include the files from `build` directory.

 
In your javascript code write something like this:

**1.Show/Hide** :

```js
waitingDialog.show('I\'m waiting');
setTimeout(function () {
  waitingDialog.hide();
}, 1000);
```
**2.message** :
   After calling ```show``` function , you can **get** or **update** message of waiting dialog : 
  ```js
    waitingDialog.message() // get the current message , i.e: "Loading" .   
    waitingDialog.message("Please wait"); // update the waiting dialog message .
   ```

**3.animate/stopAnimate** :

```js
   //after calling show
   a1=waitingDialog.animate(); // will animate "message" passed in "show" function . 
   
  waitingDialog.animate("waiting"); //  animate waiting : "waiting..","waiting...." ,"waiting......" ,"waiting.." so on
  
  waitingDialog.animate("waiting",3000,1000); // change message every 3 secondes + start after delay of 1 seconde 
  
  waitingDialog.animate(["wait","wait..","please wait ..."]); loop without stopping on the array elements and change message
  
  var a2=waitingDialog.animate(function(container){
      container.html(new Date())
  },1000) ; 
   //---> the message will be the current Date/Time on real Time .
   
   /**
   *********************** stopAnimate ********************************************************
   * mean stop change message 
   */
   waitingDialog.stopAnimate(a1);
   
  
```

**4.progress** :
  
  ```js
    waitingDialog.progress(); //get current progress-bar value , default : 100
    waitingDialog.progress(70) ; // progress 70%
    waitingDialog.progress(40,80) // progress 50% (because the total 80 is twice the current which is 40) 
  
  ```


See `src/waitingfor.js` for additional options.

##Contributing

Before making a pull request do the following steps:

1. Run `gulp`
2. Make sure `gulp` doesn't return any errors
3. Open `test/run.html` in your favorite browser
4. Make sure there are no errors in dev console
5. Make sure all dialogs behave correctly

Setting up the environment:

1. Run `npm install`
2. Run `bower install`

##Examples

HTML page example:
```html
<html>
<head>
  <meta charset="utf-8">
  <title>boostrap-waitingfor</title>
  <link href="bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />
  <link href="bower_components/bootstrap/dist/css/bootstrap-theme.css" rel="stylesheet" />
</head>
<body>
  <script src="../bower_components/jquery/dist/jquery.min.js"></script>
  <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="../build/bootstrap-waitingfor.js"></script>
</body>
</html>
```
