# Entrevista NetW
- Desarrollador: Edier David Martínez Espejo

# Iniciar proyecto
- Comando: ``` npm run dev ```

# Base de datos:
- MongoDB (local)
- conexión local: ``` mongodb://localhost:27017/netw_e?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false ```

# Consumir API:
- Login: ```http://localhost:3000/api/v1/login```
- Registro: ```http://localhost:3000/api/v1/register```
- Actualizar: ```http://localhost:3000/api/v1/user/:id```

# Dependencias
- bcrypt: ^5.0.1
- express: ^4.17.2 
- express-validator: ^6.14.0,
- mongoose: ^6.1.4,