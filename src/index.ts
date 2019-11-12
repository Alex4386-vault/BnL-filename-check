import { app, BrowserWindow } from "electron";
import { windowInitializer } from "./init";

export let mainWindow: BrowserWindow;

function initializeWindow() {
    mainWindow = windowInitializer();
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.setResizable(false);
}

app.on("ready", initializeWindow);

app.on('window-all-closed', () => {
    // macOS에서는 사용자가 명확하게 Cmd + Q를 누르기 전까지는
    // 애플리케이션이나 메뉴 바가 활성화된 상태로 머물러 있는 것이 일반적입니다.
    if (process.platform !== 'darwin') {
      app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        initializeWindow();
    }
});

