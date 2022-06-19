FROM ubuntu as base
RUN apt update && apt install mysql-server -y
RUN usermod -d /var/lib/mysql mysql
COPY mysqld.cnf /etc/mysql/mysql.conf.d/
ENTRYPOINT ["service", "mysql", "restart"]

FROM base
WORKDIR /install
COPY CreateSchema.sql .
RUN mysql -u root -p -e"set @DB_USER=user; set @DB_PASSWORD=user;" < CreateSchema.sql

COPY CreateUserTable .
RUN mysql -u root -p User < CreateSchema.sql
