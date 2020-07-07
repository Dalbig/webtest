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
    window.callbackForNative(data)
}

// Somewhere in your code where you want to send data to the native app and have it call a JS callback with some data:
window.callbackForNative = function(data) {
    // Do your stuff here with the data returned from the native app
    document.body.style.backgroundColor = "red";
}