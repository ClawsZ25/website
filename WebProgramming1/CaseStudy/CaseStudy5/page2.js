/*
 *  Author: Zachary Clawson
 *  Project: Case Study
 *  Date: 010/3/2025
 * 
 * 
 * 
 * 
 * 
 * 
 */

// get the cyber div box



window.addEventListener("load", CreateCyberInfo);

function CreateCyberInfo(){
    let cyberInfo = document.getElementById("cyberShowcase");
    let info1 = document.getElementsByTagName("li")[0];
    let info2 = document.getElementsByTagName("li")[1];
    let info3 = document.getElementsByTagName("li")[2];
    let info4 = document.getElementsByTagName("li")[3];
    let info5 = document.getElementsByTagName("li")[4];
    let info6 = document.getElementsByTagName("li")[5];
    let info7 = document.getElementsByTagName("li")[6];
    let info8 = document.getElementsByTagName("li")[7];
    let info9 = document.getElementsByTagName("li")[8];
    

    // console.log(info1);
    let browserInfo = "The name of the browser is " + navigator.appName + "!";
    info1.textContent = browserInfo;

    let versionInfo = "The version of the browser is " + navigator.appVersion + "!";
    info2.textContent = versionInfo;

    navigator.geolocation.getCurrentPosition(showPosition);

    // Not sure I like the idea of nested functions but the exist in js
    function showPosition(position){
        let locationInfo;
        locationInfo = " Your location is Lattitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;

        info3.textContent += locationInfo;
    }

    let screenHeight = "The height of the screen in pixels is " + screen.height + "!";
    info4.textContent = screenHeight;

    let screenWidth = "The width of the screen in pixels is " + screen.width+ "!";
    info5.textContent = screenWidth;

    let colorDepth = "The bit depth of the screen's color is  " + screen.colorDepth + "!";
    info6.textContent = colorDepth;

    let summary1 = "This is the number 1 guide book to using the web safely. It includes the basics, good rules to follow, and lessons to write home about."
    let link1 = document.getElementById("link1");
    let linkText1 = "This is a user manual on Web Saftey";
    info7.innerHTML = `<a href="${link1.href}" target="_blank">${linkText1}</a> - ${summary1}`;

    let summary2 = "This a link two 5 great tips issue prevention and using the web safely."
    let link2 = document.getElementById("link2");
    let linkText2 = "This a link two Guardian Group";
    info8.innerHTML = `<a href="${link2.href}" target="_blank">${linkText2}</a> - ${summary2}`;

    let summary3 = "This website talks about the best VPN's to use. VPN is a virtual private network that makes surfing the wbe more secure."
    let link3 = document.getElementById("link3");
    let linkText3 = "This is a link to VPN Mentor";
    info9.innerHTML = `<a href="${link3.href}" target="_blank">${linkText3}</a> - ${summary3}`;


}

