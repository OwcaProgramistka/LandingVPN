# 🚀LandingVPN

## 💻 Instalacja projektu
➡️Odpal terminal i wykonaj poniższą komendę, aby zainstalować potrzebne pluginy i oprogramowanie używane w projekcie. Będzie ono przechowywane w folderze node_modules.
```
npm install
```
##### 🔺Node_modules zajmują dużo miejsca, dlatego nie dodajemy ich do repozytorium. Stawiając projekt lokalnie, zostają pobrane powyższą komendą. Potrzebne wtyczki są określone w pliku `package.json`. To na jego podstawie skrypt wie, które rzeczy zainstalować.

## 🟩 Node.js
➡️Upewnij się, że masz zainstalowaną wersję node 14.0.0 lub wyższą. Prawidłową wersję możesz pobrać za pomocą Node Version Manager'a, który również musisz pobrać przez terminal.

### 1️⃣ Instalacja nvm
```sh
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh

bash install_nvm.sh

source ~/.bash_profile
```
Żeby sprawdzić czy nvm został zainstalowany
```sh
command -v nvm
```
Komenda powinna zwrócić `nvm`.

### 2️⃣ Instalacja odpowiedniej wersji node.js
```sh
nvm install 14.0.0
```
Jeśli masz więcej niż jedną wersję node na komputerze, możesz się między nimi swobodnie przełączać.
```sh
nvm use 14.0.0
```
Komenda przełączy Cię na wersję node 14.0.0.

## 🔥 Odpalanie projektu
```sh
gulp
```
Gulp jest narzędziem do automatyzacji zadań. Skonfigurowałam go w taki sposób, żeby śledził wprowadzane przez Ciebie zmiany i automatycznie odświerzał przeglądarkę.

## 🦄 Development
 - Wszelkie zmiany robisz w folderze `app`, który jest folderem do developmentu. Manager zadań kompiluje Twoje zmiany (pozbywa się niepotrzebnych spacji, konwertuje scss do css, minifikuje zdjęcia itp) i przenosi je do folderu produkcyjnego `dist` (w nim kod jest jaknajbardziej skompresowany, przez co może być nieczytelny)
 - Jeżeli chcesz odświeżyć zmiany statyczne (dodane fonty / zdjęcia),  usuń forlder `dist` i odpal ponownie komendę `gulp`

 ### 🌆 Dodawanie zdjęć po źródle

 Zasoby strony widocznej w przeglądarce są ładowanae z folderu produkcyjnego. Dodając zdjęcia podczas developmentu, musisz odnieść się do ścieżki względnej między zdjęciem, a plikiem `index.html` (oba są w folderze `dist`).
