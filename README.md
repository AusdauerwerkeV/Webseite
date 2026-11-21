# Ausdauerwerk e.V. – Website

Die Vereinswebsite wird mit Astro erstellt. Die Seiten sind statisch und können später über GitHub Pages veröffentlicht werden.

## Lokal starten

Voraussetzung ist Node.js 22.23.4 oder neuer.

```powershell
npm.cmd install
npm.cmd run dev
```

Die lokale Vorschau ist anschließend unter `http://localhost:4321` erreichbar. Beenden kannst du sie im Terminal mit `Ctrl+C`.

## Aktueller Entwurf

Die Startseite zeigt den Trikot-Farbton, die Navigation, ein Hero-Foto mit dem Slogan „Zusammen mehr Strecke machen.“ und das Vereinslogo. Die verlinkten Seiten für Verein, Events, Bildergalerie, Kontakt und Impressum sind zunächst absichtlich leer.

## GitHub Pages

Das Repository `AusdauerwerkeV/Webseite` ist für GitHub Pages vorbereitet. Nach dem Push auf `main` veröffentlicht GitHub Actions die Website automatisch unter `https://ausdauerwerkev.github.io/Webseite/`.

Im GitHub-Repository muss unter **Settings → Pages** als Build-Quelle **GitHub Actions** ausgewählt sein. Eine eigene Domain ist für diese Vorschau nicht erforderlich.

## Vor der späteren öffentlichen Vereinsseite

1. Texte und freigegebene Inhalte für die leeren Seiten ergänzen.
2. Veröffentlichungsrechte und Einwilligung für das Hero-Foto klären.
3. Impressum und Datenschutzhinweise passend zu den tatsächlich verwendeten Funktionen ergänzen.
4. Die Website mit `npm.cmd run build` prüfen.

Nur Inhalte, die öffentlich auf der Website stehen sollen, gehören in dieses GitHub-Projekt. Keine Zugangsdaten oder vertraulichen Mitgliederdaten einchecken. Der rohe WeTransfer-Ordner wird durch `.gitignore` ausgeschlossen; nur geprüfte und freigegebene Dateien nach `public/` übernehmen.
