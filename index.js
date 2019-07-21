const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 680,
        resizable: false,
    })
    mainWindow.loadURL(`file://${__dirname}/main.html`)
    
    mainWindow.on('closed', () => {
        mainWindow = null;
      });
      
      Menu.setApplicationMenu(null);
});
