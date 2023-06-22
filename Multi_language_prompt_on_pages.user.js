// ==UserScript==
// @name         Multi language script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open a small window with a word or a phrase in multiple languages!
// @author       ukra174
// @match        https://*/*
// ==/UserScript==

(function() {
    'use strict';
    var lines = [];
    const textElement = document.createElement('div');// Create a new element for the text
    console.log("AaaAAAaaaaAaA");

    fetch('https://ukra174.github.io/Multiple-language-study/words.txt')
        .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Error: ' + response.status);
        }
    })
        .then(data => {
        lines = data.split("\n");
        var words = lines[Math.ceil(Math.random()*lines.length)-1].split("/");
        document.body.appendChild(textElement);
        document.body.appendChild(textElement);
        var span1 = document.createElement("span");
        span1.style.color = "rgb(255, 85, 187)";
        span1.appendChild(document.createTextNode(words[0]));

        var span2 = document.createElement("span");
        span2.style.color = "rgb(230, 230, 210)";
        span2.appendChild(document.createTextNode(words[1]));

        var span3 = document.createElement("span");
        span3.style.color = "rgb(252, 255, 178)";
        span3.appendChild(document.createTextNode(words[2]));

        var span4 = document.createElement("span");
        span4.style.color = "rgb(182, 234, 250)";
        span4.appendChild(document.createTextNode(words[3]));

        var span5 = document.createElement("span");
        span5.style.color = "rgb(255, 255, 255)";
        span5.appendChild(document.createTextNode(words[4]));

        textElement.appendChild(span1);
        textElement.appendChild(document.createTextNode("/"));
        textElement.appendChild(span2);
        textElement.appendChild(document.createTextNode("/"));
        textElement.appendChild(span3);
        textElement.appendChild(document.createTextNode("/"));
        textElement.appendChild(span4);
        textElement.appendChild(document.createTextNode("/"));
        textElement.appendChild(span5);
        setTimeout(() => {
            fadeOut(textElement, 2000);
        }, 0);

    })
        .catch(error => {
        console.error('Error:', error);
    });
    // Apply styles for absolute positioning
    textElement.style.position = 'absolute';
    textElement.style.top = '10px';
    textElement.style.left = '10px';
    textElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    textElement.style.color = 'white';
    textElement.style.padding = '5px';
    textElement.style.zIndex = '999999';
    textElement.style.borderRadius = '5px';
    textElement.style.borderWidth = '1px';
    textElement.style.borderStyle = 'solid';
    textElement.style.borderColor = 'rgba(80,80,80,0.5)';
    textElement.style.pointerEvents = 'none'
    // Function to make the text fade out gradually
    function fadeOut(element, duration) {
        let opacity = 6;
        const interval = 10;
        const steps = duration / interval;

        const fadeOutInterval = setInterval(() => {

            opacity -= 1 / steps;
            element.style.opacity = Math.min(opacity,1);

            if (opacity <= 0) {
                clearInterval(fadeOutInterval);
                element.parentNode.removeChild(element);
            }
        }, interval);
    }
})();