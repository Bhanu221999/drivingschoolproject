
const{app, BrowserWindow} = require('electron');
const path = require("path");


function crearewindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, "./asset/img/emirates-logo-copy.ico"),
    });
    win.loadFile('login/first.html')

}

app.whenReady().then(crearewindow);

app.on("window-all-closed", () => {
    if(process.platform != "darwin") app.quit();
})