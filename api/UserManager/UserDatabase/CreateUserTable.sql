CREATE USER  IF NOT EXISTS 'klvs'@'localhost' IDENTIFIED WITH mysql_native_password BY 'klvs';
GRANT ALL ON usermanager.* TO 'klvs'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE usermanager;

use usermanager;

CREATE TABLE User (
    Id int not null primary key auto_increment,
    Email varchar(250) unique
);

CREATE TABLE Password (
    Id int not null primary key auto_increment,
    UserId int not null,
    Value varchar(500),
    FOREIGN KEY (UserId) REFERENCES User(Id)
);