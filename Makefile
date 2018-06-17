.PHONY: clean build tag login push \
				run archive logs ssh  \
				build-web run-web test_web clean-web

IMAGE_BUILD := xybersolve/gmilligan.angular
CONTAINER_BUILD := gmilligan.angular
FILE_BUILD := Dockerfile.build.in-place

IMAGE_WEB := xybersolve/gmilligan.web
CONTAINER_WEB := gmilligan.web

FILE_WEB := Dockerfile.nginx

IP =: $(shell docker-machine ip $(shell docker-machine active))

include info.mk
#
# -------------------------------------------
# Jenkins routines start here
#   * docker only Jenkins routines
#
clean:
	@docker container stop $(CONTAINER_BUILD) || true
	@docker container rm $(CONTAINER_BUILD) || true
	@docker image rm $(IMAGE_BUILD) || true

build:
	${INFO} "Build the Angular project..."
	@npm run build
	#@docker build --tag $(IMAGE_BUILD) -f $(FILE_BUILD) .
	#${INFO} "Run the built Angular project..."
	#@docker run -f $(COMPOSE_FILE) up builder
	#${INFO} "Copy build artifacts to the local build directory..."
	#@docker cp $$(docker-compose -p $(PROJECT) -f $(COMPOSE_FILE) ps -q builder):/usr/app/build/. build
	#${SUCCESS} "Build complete"

test:
	echo "Unit & smoke test here..."

tag: ## Tag the base image for deployment to DockerHub
	${INFO} "Tagging base image..."
	@docker tag $(IMAGE) $(ORG)/$(IMAGE):$(GIT_SHORT)
	@docker tag $(IMAGE) $(ORG)/$(IMAGE):latest

login: ## Login to docker hub
	${INFO} "Logging into DockerHub..."
	# from terminal or Jenkins Credentials
	@docker login -u $(user) -p $(pass)

push:  ## Push to DockerHub, requires prior login
	${INFO} "Push"
	@docker push $(ORG)/$(IMAGE):$(GIT_SHORT)
	@docker push $(ORG)/$(IMAGE):latest
#
# Jenkins routines end here
# -------------------------------------------
#
run:
	@docker run -d $(IMAGE_BUILD)

archive: ## Build and archive the build artifacts
	${INFO} "Copy build artifacts to the local build directory..."
	@docker cp $(CONTAINER_BUILD):/usr/app/build/. ./build

logs:
	@docker logs -f $(CONTAINER_BUILD)

ssh: ## SSH into image
	${INFO} "SSH into the Angular build image..."
	@docker run -it --rm $(IMAGE_BUILD) bash

build-web:
	@docker build --tag $(IMAGE_WEB) -f $(FILE_WEB) .

run-web:
	@docker run --name $(CONTAINER_WEB) -p 80:80 -d $(IMAGE_WEB)

clean-web:
	@docker container stop $(CONTAINER_WEB) || true
	@docker container rm $(CONTAINER_WEB) || true
	@docker image rm $(IMAGE_WEB) || true


# publish static build
#docker build -t gmilligan .
#docker run -p 80:80 gmilligan
#docker run -p 80:80 -v ${PWD}:/usr/share/nginx/html gmilligan
