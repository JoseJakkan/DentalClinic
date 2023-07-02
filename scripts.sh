#############################################################



# crear modelo Roles
sequelize model:generate --name Roles --attributes 'roles:string'

# crear modelo User
sequelize model:generate --name User --attributes 'user_name:string,user_last_name:string,birthdate:date,address:string,email:string,password:string,phone:integer,role_id:integer,position:string'

# crear modelo Appointment
sequelize model:generate --name Appointment --attributes 'user_id_integer,date:DATE'

# las tablas intermedias en una relacion N:N no llevan modelo, pero si llevan migracion


#############################################################

# crear la base de datos
sequelize db:create

# ejecutar migracion
sequelize db:migrate
sequelize db:migrate --to 01-create-student.js

# revertir migracion
sequelize db:migrate:undo
sequelize db:migrate:undo:all

# crear seed
sequelize seed:generate --name seed-student

# ejecutar seed
sequelize db:seed:all
sequelize db:seed --seed 01-seed-student.js