## Работа с API через `CURL`

* Зарегистрировать пользователя
```
curl -v -H "Accept: application/json" -H "Content-type: application/json" POST -d '{"user": {"email": "user@mail.com", "password":"123456" }}' http://127.0.0.1:3000/api/users
```
* Получить токен
```
curl -H "Accept: application/json" -H "Content-type: application/json" POST -d '{"email": "user@mail.com", "password":"123456" }' http://127.0.0.1:3000/api/auth
```
* Добавить книгу
```
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "Authorization: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWIyMWVkNWFiMDU0YTM0OGQ1NzFiMGM0IiwiZW1haWwiOiJ1c2VyQG1haWwuY29tIiwiZXhwIjoxNTI5MDUxMjUyfQ.YvFQp5fFKD9RVtt-JBX6bcj5WSkvzoH_yqYfTiINN1Y" POST -d '{"book": {"title": "Awesome_book", "genre":"[ "Ford", "BMW", "Fiat" ]" }}' http://127.0.0.1:3000/api/books
```
