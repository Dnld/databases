CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int(5) NOT NULL AUTO_INCREMENT,
  userid int(4) NOT NULL,
  text varchar(250),
  room varchar(50),
  date varchar(50),
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  ID int(4) NOT NULL auto_increment,
  username varchar(50),
  PRIMARY KEY (ID)  
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

