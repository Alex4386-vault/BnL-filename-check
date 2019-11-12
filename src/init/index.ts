import { BrowserWindow } from "electron";

export function windowInitializer(): BrowserWindow {
    let mainWindow = new BrowserWindow( {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile("../web/index.html");

    mainWindow.webContents.openDevTools();

    
    return mainWindow;
}