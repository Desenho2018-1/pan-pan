build:
	@echo "*********************\n"
	@echo "Building application!\n"
	@echo "*********************\n"
	@echo "WARN: For now, the containers are taking too much time to up on the first time (around 15 minutes), so don't worry!\n\n"
	@docker-compose build

run:
	@echo "*********************************\n"
	@echo "Lifting up the whole environment!\n"
	@echo "*********************************\n"
	@docker-compose up

start-db:
	@echo "************************\n"
	@echo "Lifting up the database!\n"
	@echo "************************\n"
	@docker-compose up db

start-back:
	@echo "*************************\n"
	@echo "Lifting up the api/backend!\n"
	@echo "*************************\n"
	@docker-compose up api

start-front:
	@echo "************************\n"
	@echo "Lifting up the frontend!\n"
	@echo "************************\n"
	@docker-compose up front

drop:
	@echo "******************************\n"
	@echo "Dropping down the environment!\n"
	@echo "******************************\n"
	@docker-compose down

ps:
	@echo "************************\n"
	@echo "Listing running services\n"
	@echo "************************\n"
	@docker-compose ps

front-install:
	@echo "*********************************\n"
	@echo "Using npm to install dependencies\n"
	@echo "*********************************\n"
	@docker-compose exec front yarn install

back-test:
	@echo "***************************\n"
	@echo "Executing api/backend tests\n"
	@echo "***************************\n"
	@docker-compose exec api mvn test -B

front-test:
	@echo "************************\n"
	@echo "Executing frontend tests\n"
	@echo "************************\n"
	@docker-compose exec front yarn test

rm-network:
	@echo "**********************************\n"
	@echo "Removing pan-pan's docker network!\n"
	@echo "**********************************\n"
	@docker network rm panpan_default

rm-volume:
	@echo "*********************\n"
	@echo "Removing all volumes!\n"
	@echo "*********************\n"
	@docker volume rm $(sudo docker volume ls -q)

.PHONY: no_targets__ list
no_targets__:
list:
	@sh -c "$(MAKE) -p no_targets__ -prRn -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'"
