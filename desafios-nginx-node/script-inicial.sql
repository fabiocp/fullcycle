use nodedb;

create table if not exists people (
    id int not null primary key auto_increment,
    name varchar(255)
)