## Работа с API через `CURL`

* Зарегистрировать пользователя
```
curl -v -H "Accept: application/json" -H "Content-type: application/json" POST -d '{"user": {"email": "user@mail.com", "password":"so_secret" }}' http://159.65.115.107:9999/users
```
