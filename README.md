# DarkCrypto
## Temat Projektu
**DarkCrypto Auth API** to projekt, który udostępnia interfejs do uwierzytelniania użytkowników w aplikacji DarkCrypto. Pozwala użytkownikom rejestrować się, logować, wylogowywać oraz uzyskiwać i aktualizować informacje o profilu użytkownika. Projekt implementuje RESTful API z użyciem OpenAPI (Swagger) do dokumentowania i testowania punktów końcowych.

## Autorzy
- Yana Yafimava, nr. 44102
- Karyna Miadouskaya, nr. 44967
- Bohdana Yablinchuk, nr. 44101

## Technologie
- Node.js
- Express.js
- MongoDB

## Instalacja i uruchomienie projektu
### Wymagania
- Zainstaluj [Docker](https://www.docker.com/get-started) i [Docker Compose](https://docs.docker.com/compose/install/).
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
