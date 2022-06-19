FROM ubuntu as base
ENV TZ=Europe/Paris
ENV MYSQLD_OPTS="--skip-networking --skip-grant-tables --lower_case_table_names"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update && apt install mysql-server -y
RUN service mysql start && mysql -u root -e"ALTER USER 'root'@'localhost' IDENTIFIED BY 'klvsroot';FLUSH PRIVILEGES;"
ENV MYSQLD_OPTS="--lower_case_table_names"
RUN service mysql restart

WORKDIR /install
COPY CreateSchema.sql .
RUN service mysql start && mysql -u root -pklvsroot -e"CREATE SCHEMA User;"
RUN service mysql restart
#RUN service mysql start && mysql -u root -e"set @DB_USER=user; set @DB_PASSWORD=user;" < CreateSchema.sql

COPY CreateUserTable.sql .
RUN service mysql start && mysql -u root -pklvsroot < CreateUserTable.sql
EXPOSE 3306
ENTRYPOINT service mysql start && tail -f /var/log/mysql/error.log;
