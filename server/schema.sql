CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageid int(6),
  date varchar(40),
  text text(250),
  userid int(7),
  roomid int(3)
);

CREATE TABLE users (
  /* Describe your table here.*/
  userid int(7),
  username varchar(20)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  roomid int(3),
  roomname varchar(20)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

