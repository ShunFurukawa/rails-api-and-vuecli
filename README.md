# rails-api-and-vuecli

## Versions
**Docker: 19.03.12**  
**docker-compose: 1.27.2**  

**Ruby: 2.7.2**  
**Rails: 6.0.3.3**  

**Postgres: 12.4**  

**Node: 14.12.0**  
**npm: 6.14.8**  
**VueCLI: 4.5.6**  

**Nginx: 1.19.2**  


## Initial Setup

```
$ docker-compose build

$ docker-compose up -d

$ docker-compose exec ruby bundle exec rails db:create

$ docker-compose exec ruby bundle exec rails db:migrate

$ docker-compose exec ruby bundle exec rails db:seed

$ open http://127.0.0.1/
```

## Shutdown

```
$ docker-compose down
```

<br>
<br>

## Database Conect

```
$ psql -u rails_user -h 127.0.0.1
```
