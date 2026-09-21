# Uppgiftsapp – webb (React)

En webbapp där man kan visa, lägga till och ändra uppgifter, och ladda upp en bild till en uppgift.

Repon:
- Webb: https://github.com/SemirZahirovic97/uppgiftsapp-webb
- Backend: https://github.com/SemirZahirovic97/uppgiftsapp-backend

## Behövs installerat
.NET SDK 10, Node.js 24 och Git.

## Så startar du appen

Du behöver två terminaler, en för backend och en för frontend.

**Terminal 1 – backend:**
```
git clone https://github.com/SemirZahirovic97/uppgiftsapp-backend
cd uppgiftsapp-backend
dotnet run --launch-profile http
```
API:et startar på http://localhost:5005. Lämna terminalen öppen.

**Terminal 2 – frontend:**
```
git clone https://github.com/DITT-NAMN/uppgiftsapp-webb.git
cd uppgiftsapp-webb
npm install
npm run dev
```
Öppna http://localhost:5173 i webbläsaren.

## Vad appen kan
- Visa uppgifter (GET)
- Lägga till uppgift (POST)
- Ändra uppgift och markera som klar (PUT)
- Ladda upp och visa en bild på en uppgift
- Visa ett felmeddelande om API:et inte svarar
- Fungera på både bred och smal skärm

## Tekniska val
- **React med Vite:** enkelt att starta och kräver lite inställningar.
- **Komponenter:** `App` pratar med API:et, `TaskList` och `TaskCard` visar uppgifterna, `AddTaskForm` är formuläret.
- **Bara useState och fetch:** inga extra bibliotek behövs.
- **Flexbox och grid:** flexbox för rader, grid för kortlistan. Grid ändrar antal kolumner efter skärmbredd.
- **try/catch:** om ett API-anrop misslyckas visas ett felmeddelande i stället för att appen kraschar.
- **Port 5173 är låst:** backend tillåter bara den adressen (CORS).
- **Ingen databas:** uppgifterna ligger i minnet och nollställs när backend startas om.