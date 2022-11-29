# LISTA 
Attendance tracking application for **LISTO** and **GILAS**.  Exclusive use for **STI Sta. Maria**.

This **README** is meant for the developers.

## 📚 What do I need to learn first?

 - [JavaScript ES6](https://www.w3schools.com/js/js_es6.asp) (basics only)
 - [React.js](https://www.w3schools.com/react/default.asp) (focus on ***functional components***)
 - [Git & Github](https://www.w3schools.com/git/) (push, pull, clone, merge, repository, pull request, etc.)

## # 📩 Installing what you need for development

 - **Node.js**
    We will need this to run **npm** commands in the command prompt. Download it [here](https://nodejs.org/en/download/).
    
 - **Git**
    After learning about [Git & Github](https://www.w3schools.com/git/), you can now continue to install it through [here](https://gitforwindows.org/). We will need this so we can work on the same project remotely.

...starting from here you should be on the folder named `lista/` that you downloaded or cloned using **git**.

    
 - **React**
    We will need this so that we can run our React code. Installation is straightforward, after installing Node.js, simply open your command prompt and type `npm install react`
    
 - **HTML5QRCODE**
	This is a free library we will be using in order to detect QR Code. Same as React, just type in `npm install html5-qrcode`

***Note:** that you no longer need to install **Cordova**, you can run your code by typing* `npm run start` *(after saving your changes to your code, it automatically recompiles it so you do not need to re-run it)*. ***Cordova** installation is difficult, please just contact me if you want your code to be built into an **.apk***

When you run your app in your laptop or PC, you may need to grant it permissions for camera and/or microphone.

Try opening DevTools by pressing <kbd>F12</kbd> and opening console (*to see errors, warnings and results*). Then toggling device emulation, so you can see how it looks like in a mobile phone.

## 🧬 Code structure
You **do not need** to make changes to the following folders and files:

📁 config/ - *Automatically generated folder that contains configuration for* **webpack** *which is what compiles our*  **React** *to native javascript and compress it.*
📁 node_modules/ - *Contains libraries and frameworks that we use. This is automatically generated and modified by* **npm** *when we add, modify, or delete libraries and frameworks (also called as packages)*
📁 platforms/ - *Automatically generated, this folder contains different platforms and native files that* **Cordova** *will compile to. Android is the main platform.*
📁 scripts/ - *This is created automatically by React to handle our commands, whether to run it or build it, we usually only use the* `start.js` *through* `npm run start`
📁 www/ - *Everything in here is automatically generated by our compiler. This is raw javascript, html, and css files that will be used by* **Cordova** *to build our app.*
📜 config.xml
📜 package-lock.json
📜 package.json

---
###  ✍️ Feel free to edit the following folders and files:
### 📁 public/
This contains the html files as well as photos, videos, sounds that we will use in the app.
📜 favicon.ico  - *is the icon of our app when shown in browser*
📜 index.html  - *Visible part of the app. We usually do not need to make any changes here.*



### 📁 src/
This contains the javascript files that we will use for the main logic of the app along with some few .css files. You **can add** any .js or .css file here as needed.
📜 index,js  - *You do not need to modify this file. This is the entrypoint of the app and only starts the main component and imports the css files.*
📜 App.js  - *Main component of our app, this is where the QR Code logic happens, feel free to modify.*
📜 index.css  - *Every design of our app is in here.*

---

## ⚖️ Code of conduct
- If installation of anything in here goes wrong, contact me
- After making changes and you are satisfied with it, contact me if you want to merge it to the main Git branch first.
- Always ask for permission before deleting or modifying any code written by others.
- Please feel free to add useful tips here in **README**.

## ✔️ Development To-Do
Please add more here so we don't lose track of our progress.
 - [ ] **Adjust size** of QR Code Camera and it's **position**.
 - [ ] Choose **color theme** for the app
 - [ ] Make app logo and replace public/favicon.ico
 - [ ] Once QR Code scan is successful, app should write the student's name, guild in the respective section they belong in google sheets. Refer to [this tutorial](https://levelup.gitconnected.com/google-sheets-api-tutorial-with-javascript-588f581aa1d9). For the meantime, we can ****just display** the name, guild, and section**.
 - [ ] Display a **creative error message** if camera error or parse error