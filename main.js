const path = require("path");
const url = require("url");
const { app, BrowserWindow, ipcMain } = require("electron");

// 🚀 Recarga automática en desarrollo
require("electron-reload")(
  [
    path.join(__dirname, "dist/miaudoro/browser"),
    path.join(__dirname, "src"),
  ],
  {
    hardResetMethod: "exit",
    awaitWriteFinish: true,
  }
);

// 🪟 Crear ventana
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 370,
    resizable: false,
    frame: false,
    titleBarStyle: "hidden",
    icon: path.join(__dirname, "./src/assets/icon.ico"),
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Carga el index de Angular
  const indexPath = url.format({
    pathname: path.join(__dirname, "dist/miaudoro/browser/index.html"),
    protocol: "file:",
    slashes: true,
  });

  
  win.loadURL(indexPath);
  win.webContents.openDevTools();

  // 🧠 Eventos personalizados para botones desde Angular
  ipcMain.on("window-minimize", () => {
    console.log("Minimizando ventana...");
    win.minimize();
  });

  ipcMain.on("window-close", () => {
    console.log("Cerrando ventana...");
    win.close();
  });
}

// 🧩 Ciclo de vida
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
