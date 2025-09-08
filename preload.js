const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openExternal: (url) => {
        window.open(url, '_blank');
    }
});