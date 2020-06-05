Emphasoft
---------------------

Данное приложение разработано в виде Single Page Application с помощью ReactJS.

Система состоит из следующих разделов:

- Страница ввода имени и пароля (вход в систему) -> LoginForm;
- Страница с таблицей пользователей -> UsersTable;

В процессе разработки использованы готовые элементы управления (material-ui).


Запуск приложения
-------------------

Для запуска приложения необходимо скачать код из репозитория и выполнить команды npm install и npm start. 
Или вы можете познакомиться с данным приложением здесь https://codesandbox.io/s/github/marikor168/emphasoft. Для удобства откройте приложение в новом окне (Open In New Window).

При запуске приложения появляется страница ввода имени и пароля пользователя. Ввод данных обязателен. Пока пользователь не пройдёт авторизацию, 
он не будет иметь доступ к другим страницам приложения.

ВАЖНО! Данная система не подразумевает обеспечение безопасности приложения.

После ввода данных пользователь автоматически перенаправлется на страницу с таблицей пользователей.
Теперь пользователь может искать интересующих его пользователей по полю username, 
а также сортировать их по возрастанию или убыванию (по полю ID).
Когда пользователь нажимает на иконку "Выход из системы", он попадает на страницу ввода имени и пароля пользователя и больше не имеет доступ к данным приложения. 
Для возврата и дальнейшей работы пользователю необходимо вновь пройти аутентификацию.

Валидация.
1) Поле username: Длина от 1 до 150 символов включительно, может содержать буквы, цифры, @, ., +, -, _.
2) Поле password: Длина от 8 до 128 символов включительно, обязательно должен содержать цифру и заглавную букву.

Если поля не соответсвуют данным условиям, пользователь не сможет попасть на страницу с таблицей пользователей.

Просмотр пользователей
-------------------------

- На странице есть иконка "Выход из приложения". При клике на нее, пользователь автоматически попадает обратно на страницу входа в приложение.
- Фильтрация пользователей(поиск):
Поиск работает следующим образом: при вводе в поле поиска сразу показываются только те пользователи, в которых присутствует данный символ или их сочетание.
- Сорировка пользователей:
Для этого необходимо кликнуть на стрелку в столбце "ID". При клике пользователи отсортируются по возрастанию. 
При клике ещё раз - пользователи отсортируются по убыванию.