function sendLoginAction() {
	try {
	    webkit.messageHandlers.loginAction.postMessage(
	    	document.getElementById("email").value + " " + document.getElementById("password").value
	    );
    } catch(err) {
        console.log('The native context does not exist yet');
    }
}

function mobileHeader() {
    document.querySelector('h1').innerHTML = "WKWebView Mobile";
		document.querySelector('h1').color = 'red';
}


function testLaunchTVPlugin() {
	try {
	    webkit.messageHandlers.launchNativeTVPlugin.postMessage("launchTVPlugin");
    } catch(err) {
        console.log('The native context does not exist yet');
    }
}

function testUseAutoCropLib() {
	try {
	    webkit.messageHandlers.useAutoCropFramework.postMessage("testUseAutoCropLib")
    } catch(err) {
        console.log('The native context does not exist yet');
    }
}

function launchPhotoGallery() {
	try {
	    webkit.messageHandlers.useAutoCropFramework.postMessage()
    } catch(err) {
        console.log('The native context does not exist yet');
    }
}

window.getDataFromNative = function(data) {
    document.body.style.backgroundColor = "red";

    window.callbackForNative(data)
}

window.callbackForNative = function(data) { }

// Somewhere in your code where you want to send data to the native app and have it call a JS callback with some data:
window.callbackForNative = function(data) {
    // Do your stuff here with the data returned from the native app
    // var obj = JSON.parse(data)

    // if (obj.status != 200) {
    //     document.body.style.backgroundColor = "red";
    //     return
    // }else {
    //     document.body.style.backgroundColor = "blue";
    // }

    // var imageData = obj.data.imageData

    // addImage(imageData)
}

function addImage(base) {
    let image= new Image();
    image.src=`data:image/png; base64,${base}`
    document.body.appendChild(image);
}