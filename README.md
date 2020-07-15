# Отчет по проектно-технологической практике 
Разработка изолированных приложений при помощи технологий контейнеризации на примере балансировщика нагрузки.

Ильспользуемый стек:
1. NodeJS+ExpressJS для создания веб-серверов между которыми будет происходить балансировка нагрузки.
2. NGINX для создания балансировщика нагрузкти.
3. Docker+Docker Compose для контейнеризации приложений.

Запуск проекта:
```
sudo docker-compose up --build -d
```
Проверка
1. Открыть браузер по адресу http://localhost:8080/
2. Проверить записи логов зайдя внутрь контейнера
```
sudo docker exec -it loadbalancer-node-docker_nginx_1 bash
```
и посмотрев файл
```
tail -f var/log/nginx/lbaccess.log
```