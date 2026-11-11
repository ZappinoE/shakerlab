# ShakerLab

Generatore di segnali audio per shaker (Web Audio): tono con righello e zoom fine, burst, sweep, banda di rumore modulata, forme d'onda (sinusoide, quadra, triangolare, sega, impulso, additiva, disegnata, rumori), tremolo, filtri di protezione, preset.

- **Sito / app iPhone e Android (PWA):** https://zappinoe.github.io/shakerlab/ (da Safari: Condividi → Aggiungi alla schermata Home)
- **File dell'app:** `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`
- **Versione Windows:** `ShakerLab.exe` (portatile, non incluso nel repository). Sorgenti in `desktop/`.

## Ricostruire l'.exe

Serve Node.js. Da una cartella di lavoro **fuori da OneDrive** (le dipendenze sono migliaia di file):

```
copia desktop/* nella cartella di lavoro
copia index.html, manifest.webmanifest, icon.svg in <cartella>/app/
npm install
node node_modules/electron/install.js
npx electron-builder --win portable
```

L'eseguibile esce in `dist/`.

## Note

L'uscita audio non pilota direttamente lo shaker: serve un amplificatore adatto. Gli altoparlanti di telefoni e PC non riproducono le basse frequenze; usa il pulsante "Beep 440 Hz" per verificare l'uscita.
