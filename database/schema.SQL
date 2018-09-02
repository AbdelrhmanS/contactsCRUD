create table department
(
    id int auto_increment
        primary key,
    department_name varchar(255) not null,
    user_id int null,
    constraint department_id_uindex
    unique (id)
)
;

create index department_user_id_fk
    on department (user_id)
;

create table user
(
    id int auto_increment
        primary key,
    username varchar(255) not null,
    constraint user_id_uindex
    unique (id)
)
;

alter table department
    add constraint department_user_id_fk
foreign key (user_id) references task.user (id)
    on update cascade on delete cascade
;

