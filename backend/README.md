## Работа с API через `CURL`

* Зарегистрировать пользователя
```
curl -v -H "Accept: application/json" -H "Content-type: application/json" POST -d '{"user": {"login": "530_kiv", "password":"kek" }}' http://159.65.115.107:9999/users
```
