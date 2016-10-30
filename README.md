# UX Usability Study Test For BACS 383
This mockup is only to automate testing for more accurate results of A/B testing for the social media buttons on PCPartPicker.

## How To Use
1. Download the files.
2. Install Node.js. Then using the Node Package Manager, NPM, install live-server by using the command: 
```
npm install live-server -g
```
3. Run the site by navigating to the root site folder and running:
```
live-server
```
4. The site will come up blank, this is normal. The subject's actions are timed once they initiate the psuedo-loading of the page.
    1. Instruct the subject to share page via one of the available social media buttons on the page once the page is loaded.
    2. The subject will hit the spacebar to initiate "loading" of the page.
    3. The page will display either the "A" or "B" test.
    4. The subject will then find and click the button.
    5. This will stop the timer and display their time in the browser console. Do not close the browser or you will lose the data, but do not attempt to record the time before they have completed both tests.
    6. Repeat steps 1 - 6 to have them wor though the second test.
    7. Now record the times from the console, they are labeled depending on which test was taken.
    8. Ask any supplemental questions regarding their familiarity with the site, computer usage and what test they preferred.