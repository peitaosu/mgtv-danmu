// ==UserScript==
// @name         Disable MGTV Danmu
// @namespace    http://tampermonkey.net/
// @version      2024-11-23
// @description  Disable Danmu on MGTV
// @author       Tony Su
// @match        https://www.mgtv.com/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', () => {
     setInterval(() => {
        var danmu_toolbar = document.getElementsByClassName("danmu_toolbar");
        if (danmu_toolbar.length > 0) {
            if (danmu_toolbar[0].firstChild.className.includes(" _on_")) {
                danmu_toolbar[0].firstChild.firstChild.click();
            }
        }
    }, 3000);
    }, false);
})();