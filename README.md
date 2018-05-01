## Pan-Pan

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/Desenho2018-1/pan-pan/images/logo_panpan.jpg" width="300">
</p>

## About the Project

Pan Pan! is an web application developed by Software Engineering students of Universidade de Brasilia - UnB, that aims to aid the bands management so that they upgrade their performance.

## About the Team

| Name | E-mail | GitHub |
| ---- | ------ | ------ |
| Augusto Vilarins | augusto.vilarins@gmail.com | [@augustovilarins](https://github.com/augustovilarins) |
| Álax de Carvalho Alves | alaxallves@gmail.com | [@alaxalves](https://github.com/alaxalves) |
| Fabíola Fleury | fabiola.mfleury@gmail.com | [@fabiolamfleury](https://github.com/fabiolamfleury) |
| Hugo Neves | hugonvsc@gmail.com | [@hugonxc](https://github.com/hugonxc) |
| Josué Nascimento | josuetk63@gmail.com | [@josutk](https://github.com/josutk) |
| Matheus Joranhezon | mjoranhezon@gmail.com | [@Joranhezon](https://github.com/Joranhezon) |
| Pablo Diego | pablodiegoss@hotmail.com | [@pablodiegoss](https://github.com/pablodiegoss) |
| Rodrigo Oliveira | rodrigo.redcode@gmail.com | [@rodrigocam](https://github.com/rodrigocam) |
| Roger Lenke | rogerlenke@gmail.com | [@Rdlenke](https://github.com/Rdlenke) |

## How To Contribute
_please see the instructions in CODE_OF_CONDUCT.md file_

### Development Enviroment

1. Ensure you have Docker CE installed [See](https://docs.docker.com/install/)

2. Clone this repo by running the command - `git clone https://github.com/Desenho2018-1/pan-pan.git`

3. Navigate to the directory where the repo is cloned to.

4. Execute the following command: 

`$ make run`

NOTE: If you haven't followed the [post-installation steps](https://docs.docker.com/install/linux/linux-postinstall/) for docker you need to use `sudo` along with the `make` instructions, such as:

`$ sudo make run`

#### Other Useful commands

- Builds the entire environment including database, api and frontend

`$ make build`
- Starts the application's database

`$ make start-db`
- Starts the application's api/backend

`$ make start-back`
- Starts the application's frontend

`$ make start-front`
- Drops the application's entire environment

`$ make drop`
- Install the application's frontend dependencies

`$ make front-install`
- Executes the application's backend tests

`$ make back test`
- Executes the application's frontend tests

`$ make front test`
- Removes the application's shared network

`$ make rm-network`
- Removes the application's shared virtual volumes

`$ make rm-volume`
- Lists your running services

`$ make ps`

------------------------------------------------------------------------------------------------------

For now, the containers are taking too much time to up on the first time (around 15 minutes), so don't worry!

 * The API runs on `localhost:8080`
 * The Front-End runs on `localhost:3000`

