#############################################################



# crear modelo Roles
sequelize model:generate --name Roles --attributes 'roles:integer'

# crear modelo Position
sequelize model:generate --name Position --attributes 'position:string'

# crear modelo User
sequelize model:generate --name User --attributes 'user_name:string,user_last_name:string,birthdate:date,email:string,password:string,phone:integer,role_id:integer,position_id:integer'

# crear modelo Staff
sequelize model:generate --name Staff --attributes 'role_id:integer,user_id:integer'

# crear modelo Patient
sequelize model:generate --name Patient --attributes 'user_id:integer'

# crear modelo Appointment
sequelize model:generate --name Appointment --attributes 'patient_id:integer,staff_id:integer,date:DATE'

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