**TEAM WORK**
===
Полезно
* Сделать клон данного репозитория
* Из папки проекта войти в ветку `DEV`(все буквы, заглавные)
* Находясь в папке проекта выполнить команду `npm i`
* Из `DEV` сделать свою рабочую ветку
* Работаем только в своей ветке, НЕ В `DEV`
* Делаем `pull request,  merge` из СВОЕЙ ветки в `> DEV`

### Перемещаться по веткам
    git checkout [name branch]
### Сделать свою ветку
    git branch [name branch]
### Сделать свою ветку и перейти в нее
    git checkout -b [name branch]    
### Чтоб сделать push своей ветки на GitHub
    git push -u origin [name branch]
### Удалить ветку 
    git branch -d [name branch]

---
---

Пожелания - не правила
---
* `блок__элемент--мод`       написание БЭМ
* `class="list"`             пишем ul
* `class="link"`             пишем для ссылок
* `class="visually-hidden"`  пишем скрытым заголовкам и тд

>`mixin.scss`   код пишем с помощью миксинов (перед версткой ознакомиться с ними, что не понятно, спрашивать в общий чат).
>* Хочешь добавить? Вперед! Только остальным скажи, может они тоже захотят его использовать?;
```css
    @include name-mixin;
```
#
#
#
>`placeholders.scss`                код пишем с помощью плейсхолдеров (сделаем их когда увидим макет).
>* Хочешь добавить? Вперед! Только остальным скажи, может они тоже захотят его использовать?;
```css
    @extend %name-placeholder;
```
