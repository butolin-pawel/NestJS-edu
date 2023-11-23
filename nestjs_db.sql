create database nestjs_db;
\c nestjs_db

create table post
     (id serial primary key not null,
      title varchar(40) not null,
       description text not null,
        avatar varchar(30) not null);
insert into post VALUES 
    (default,'title1','description1','avatar1'),
    (default,'title2','description2','avatar2'),
    (default,'title3','description3','avatar3'),
    (default,'title4','description4','avatar4');