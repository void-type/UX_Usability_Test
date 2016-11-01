(function () {
    "use strict";


    let startTime = null;
    let deltaTime = null;


    // Hide page
    function hidePage() {
        document.getElementById("site-wrapper").classList.add("hideMe");
    }


    // Show the page
    function startTest() {
        if (document.getElementById("site-wrapper").classList.contains("hideMe")) {
            document.getElementById("site-wrapper").classList.remove("hideMe");
            startTime = Date.now();
        }
    }


    // Hide the page
    function endTest(testName) {
        hidePage();
        deltaTime = Date.now() - startTime;
        console.log(testName + ": " + (deltaTime / 1000));
        startTime = null;

        let toggleables = document.getElementsByClassName("testToggle");

        for (let i = 0; i < toggleables.length; i++) {
            toggleables[i].classList.toggle("hideMe");
        }
    }


    // Event to start the test on spacebar
    document.onkeyup = function (e) {
        if (e.keyCode === 32) {
            startTest();
        }
    };


    // Event to end on old share
    document.getElementById("old-share").addEventListener("click", function () {
        endTest("Old-Share");
    });


    // Event to end on old share
    document.getElementById("new-share").addEventListener("click", function () {
        endTest("New-Share");
    });


    hidePage()


})();
