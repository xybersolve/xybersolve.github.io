.PHONY: clean-build build-build test-build \
				clean-web build-web run-web test_web tag-web login push-web \
				logs-build ssh-build logs-web ssh-web

ORG := xybersolve

# Build variables
IMAGE_BUILD := xybersolve/gmilligan.build
CONTAINER_BUILD := gmilligan.build
FILE_BUILD := Dockerfile.build

# Web variables
IMAGE_WEB := xybersolve/gmilligan
CONTAINER_WEB := gmilligan
FILE_WEB := Dockerfile.nginx

# git commit hash
GIT_SHORT := $(shell git log -1 --pretty=%h)

include info.mk
#
# -------------------------------------------
# Jenkins routines start here
#   * docker only Jenkins routines
#
# Build
#
clean-build:
	${INFO} "Clean Angular project..."
	@docker container stop $(CONTAINER_BUILD) || true
	@docker container rm $(CONTAINER_BUILD) || true
	@docker image rm $(IMAGE_BUILD) || true

build-build: clean-build
	${INFO} "Build Angular project..."
	@docker build -t $(IMAGE_BUILD) -f $(FILE_BUILD) .
	@docker ru1n --name $(CONTAINER_BUILD) -d $(IMAGE_BUILD)
	@docker cp $(CONTAINER_BUILD):/usr/app/build/. build
	${SUCCESS} "Built Angular project"

test-build:
	echo "Unit & smoke test here..."
#
# Web
#
clean-web:
	${INFO} "Clean web container & image..."
	@docker container stop $(CONTAINER_WEB) || true
	@docker container rm $(CONTAINER_WEB) || true
	@docker image rm $(IMAGE_WEB) || true

build-web: clean-web
	${INFO} "Build web image..."
	@docker build --tag $(IMAGE_WEB) -f $(FILE_WEB) .

run-web:
	${INFO} "Run web image..."
	@docker run --name $(CONTAINER_WEB) -p 80:80 -d $(IMAGE_WEB)

test-web:
	echo "Smoke and unit tests here "

tag-web:
	${INFO} "Tagging web image..."
	@docker tag $(IMAGE) $(ORG)/$(IMAGE_WEB):$(GIT_SHORT)
	@docker tag $(IMAGE) $(ORG)/$(IMAGE_WEB):latest

login:
	${INFO} "Logging into DockerHub..."
	# from terminal or Jenkins Credentials
	@docker login -u $(user) -p $(pass)

push-web:
	${INFO} "Push web image"
	@docker push $(ORG)/$(IMAGE_WEB):$(GIT_SHORT)
	@docker push $(ORG)/$(IMAGE_WEB):latest
#
# Jenkins routines end here
# -------------------------------------------
#
#
# Support & debug paths
#
logs-build:
	@docker logs -f $(CONTAINER_BUILD)

ssh-build: ## SSH into image
	${INFO} "SSH into the Angular build image..."
	@docker run -it --rm $(IMAGE_BUILD) bash

logs-web:
	@docker logs -f $(CONTAINER_WEB)

ssh-web: ## SSH into image
	${INFO} "SSH into the Angular build image..."
	@docker run -it --rm $(IMAGE_WEB) bash



# publish static build
#docker build -t gmilligan .
#docker run -p 80:80 gmilligan
#docker run -p 80:80 -v ${PWD}:/usr/share/nginx/html gmilligan
