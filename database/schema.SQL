create table user
(
    id int auto_increment
primary key,
    username varchar(255) not null,
    constraint user_id_uindex
unique (id)
);

create table work
(
    id int auto_increment
primary key,
    job_name int not null,
    user_id int not null,
    constraint work_id_uindex
unique (id),
    constraint work_user_id_fk
foreign key (user_id) references task.user (id)
on update cascade on delete cascade
);

create index work_user_id_fk
on work (user_id);

