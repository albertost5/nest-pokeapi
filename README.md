<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# DEV

1. Clone the repository.
2. Execute:
```
npm install
```
3. Install Nest CLI:
```
npm i -g @nestjs/cli
```
4. Run the db container: 
```
docker-compose up -d
```
5. Clone the file __.env.example__ and rename the copy to __.env__
6. Fill the env vars of the .env file.
7. Start the application: 
```
npm run dev
```
8. Fill the db with data:
```
http://localhost:3000/api/v2/seed
```

## Stack:
* NestJS
* MongoDB

# PROD Build

1. Create the file ```.env.prod```
2. Fill the prod env.
3. Create the new image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```