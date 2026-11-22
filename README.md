# Ausdauerwerk e.V. – Website

Die Vereinswebsite wird mit Astro erstellt. Die Seiten sind statisch und können später über GitHub Pages veröffentlicht werden.

## Lokal starten

Voraussetzung ist Node.js 22.23.4 oder neuer.

```powershell
npm.cmd install
npm.cmd run dev
```

Die lokale Vorschau ist anschließend unter `http://localhost:4321` erreichbar. Beenden kannst du sie im Terminal mit `Ctrl+C`.

## Aktueller Stand

Die Startseite zeigt den Trikot-Farbton, die Navigation, eine kurze Hero-Filmsequenz mit dem Slogan „Zusammen mehr Strecke machen.“ und das Vereinslogo. Die Vereinsseite enthält eine Kurzbeschreibung, den Vorstand, einen Platzhalter für die Vereinsgeschichte und eine responsive Sponsorwand mit acht Sponsorlogos. Kontakt, Impressum und Datenschutz enthalten Informationen zum Verein und zur Website. In der oberen Navigation führen die Instagram- und YouTube-Symbole zu den Vereinsprofilen. Events und Bildergalerie sind noch leer.

## GitHub Pages

Das Repository `AusdauerwerkeV/Webseite` ist für GitHub Pages vorbereitet. Nach dem Push auf `main` veröffentlicht GitHub Actions die Website automatisch unter `https://ausdauerwerkev.github.io/Webseite/`.

### Erstmalig hochladen und veröffentlichen

1. Öffne [das Vereins-Repository auf GitHub](https://github.com/AusdauerwerkeV/Webseite).
2. Wähle **Settings → Pages** und stelle unter **Build and deployment → Source** **GitHub Actions** ein. Falls die Auswahl noch nicht erscheint, führe zuerst den nächsten Schritt aus und stelle sie danach ein.
3. Öffne in VS Code das Terminal im Projektordner und führe den ersten Push aus:

   ```powershell
   git push -u origin main
   ```

4. Öffne den Reiter **Actions** im Repository und warte, bis **Deploy to GitHub Pages** erfolgreich abgeschlossen ist. Falls der erste Lauf vor dem Einstellen von Pages fehlschlug, starte ihn dort erneut.
5. Teile anschließend diese Adresse mit dem Vorstand: <https://ausdauerwerkev.github.io/Webseite/>.

Bei einer Anmeldeaufforderung melde dich über VS Code bzw. den Git Credential Manager an. Passwörter und Zugriffstoken gehören nicht in den Quellcode oder Chat.

Für spätere Änderungen: erst lokal testen, dann in VS Code über **Source Control** committen und **Sync Changes** ausführen. GitHub Actions veröffentlicht den neuen Stand anschließend automatisch. Eine eigene Domain ist für diese Vorschau nicht erforderlich.

## Vor der breiten öffentlichen Bekanntmachung

1. Prüfen, ob für journalistisch-redaktionelle Inhalte eine verantwortliche Person anzugeben ist.
2. Texte und freigegebene Inhalte für Events und Bildergalerie ergänzen.
3. Veröffentlichungsrechte und Einwilligung für Fotos klären.
4. Angaben zu Hosting, Speicherdauer und Datenverarbeitung in der Datenschutzerklärung mit den aktuellen GitHub-Angaben abgleichen.
5. Die Website mit `npm.cmd run build` prüfen.

Kontakt- und Impressumsseite enthalten die angegebene E-Mail-Adresse, Postanschrift und den Vereinssitz. Vereinsregisternummer, Registergericht, Vertretungsregelung und Umsatzsteuer-ID sind eingetragen. Ob eine redaktionell verantwortliche Person erforderlich ist, muss bei Veröffentlichung journalistisch-redaktioneller Inhalte geprüft werden. Bankverbindung und Steuernummer werden nicht veröffentlicht.

Nur Inhalte, die öffentlich auf der Website stehen sollen, gehören in dieses GitHub-Projekt. Keine Zugangsdaten oder vertraulichen Mitgliederdaten einchecken. Der rohe WeTransfer-Ordner wird durch `.gitignore` ausgeschlossen; nur geprüfte und freigegebene Dateien nach `public/` übernehmen.
