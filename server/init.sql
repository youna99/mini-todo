create database codingon default character set utf8 collate utf8_general_ci;

show databases;

use codingon;

DROP TABLE IF EXISTS todo;

CREATE TABLE Todo (
id INT NOT NULL PRIMARY KEY auto_increment,
title VARCHAR(100) NOT NULL,
done BOOLEAN NOT NULL DEFAULT false
);

DESC todo;

SELECT * FROM todo;

insert INTO todo VALUES (null, 'my todo1', 0);
insert INTO todo VALUES (null, 'my todo2', 1);
insert INTO todo VALUES (null, 'my todo3', 0);
insert INTO todo VALUES (null, 'my todo4', 0);
insert INTO todo VALUES (null, 'my todo5', 1);
insert INTO todo VALUES (null, 'my todo6', 0);

update todo SET title='내가 할일 4번' WHERE id = 4;

DELETE FROM todo WHERE id = 3;

SELECT * FROM mysql.user;

CREATE USER 'user'@'%' IDENTIFIED BY '1234';
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;