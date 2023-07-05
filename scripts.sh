#############################################################




# crear modelo Role
sequelize model:generate --name Roles --attributes 'roles:string'



# crear modelo User
sequelize model:generate --name User --attributes 'user_name:string,user_last_name:string,birthdate:date,email:string,password:string,phone:integer, address:string,role_id:integer'

# crear modelo Patient

sequelize model:generate --name Patient --attributes 'user_id:integer'

# crear modelo Doctor

sequelize model:generate --name Doctor --attributes 'user_id:integer'

# crear modelo Appointment
sequelize model:generate --name Appointment --attributes 'patient_id:integer,doctor_id:integer,date:dateOnly'

# las tablas intermedias en una relacion N:N no llevan modelo, pero si llevan migracion
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