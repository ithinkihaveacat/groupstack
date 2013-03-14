create table questions 
  on select get from 'https://api.stackexchange.com/2.1/users/{id}/questions?order=desc&sort=activity&site=stackoverflow' resultset 'items';

create table users
  on select get from 'https://api.stackexchange.com/2.1/users/{id}?order=desc&sort=reputation&site=stackoverflow' resultset 'items';
