# DarkCrypto
## Temat Projektu
**DarkCrypto** to projekt, który umożliwia użytkownikom interakcję z rynkiem kryptowalut poprzez intuicyjne funkcje rejestracji, zarządzania kontem, śledzenia cen kryptowalut w czasie rzeczywistym oraz dokonywania zakupów i konwersji kryptowalut. 

## Funkcje aplikacji
### 1.Rejestracja i logowanie
Użytkownicy mogą założyć konto, rejestrując się w aplikacji, oraz logować się na swoje profile, co umożliwia im dostęp do funkcji personalizowanych, takich jak zarządzanie profilem oraz śledzenie swoich transakcji.
### 2.Zarządzanie profilem użytkownika
Aplikacja umożliwia użytkownikom edycję podstawowych informacji profilowych, takich jak:
- Nazwa użytkownika
- Adres e-mail
- Hasło
### 3.Śledzenie cen kryptowalut w czasie rzeczywistym
Główna strona zawiera tabelę z aktualnymi danymi na temat cen kryptowalut. Ceny są pobierane za pomocą zewnętrznego API, co pozwala użytkownikom obserwować zmiany na rynku w czasie rzeczywistym oraz śledzić trend wzrostu lub spadku wartości wybranych kryptowalut.
### 4.Zakup kryptowalut
Użytkownicy mogą kupować kryptowaluty bezpośrednio z poziomu aplikacji. Transakcje są przeprowadzane bezpiecznie, a użytkownicy mają możliwość dostosowania kwoty zakupu oraz wyboru kryptowaluty.
### 5.Konwersja kryptowalut
Aplikacja pozwala użytkownikom konwertować posiadane kryptowaluty na inne dostępne waluty cyfrowe.

## Autorzy
- Yana Yafimava, nr. 44102
- Karyna Miadouskaya, nr. 44967
- Bohdana Yablinchuk, nr. 44101

## Instalacja i uruchomienie projektu
### Wymagania
- Zainstaluj [Docker](https://www.docker.com/get-started)
- Upewnij się, że masz dostęp do Internetu, aby pobrać niezbędne obrazy Docker.

### Kroki do uruchomienia

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/YanaYafim/DarkCrypto.git
   cd DarkCrypto
2. **Uruchom aplikację za pomocą Docker Compose**
   ```bash
   docker-compose up --build
3. **Otwórz http://localhost:3000 w swojej przeglądarce.**
