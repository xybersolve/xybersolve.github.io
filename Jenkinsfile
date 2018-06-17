node {
  def app
  stage('Checkout') {
    checkout scm
  }

  # encapsulated in Makefile
  #stage('Clean') {
  #  sh 'make clean-build'
  #}

  stage('Build') {
    sh 'make build-build'
  }

  stage('Test') {
    sh 'make test-build'
  }

  stage('Build Web') {
    sh 'make build-web'
  }

  stage('Tag Web') {
    sh 'make tag-build'
  }

  stage('Push Web') {
    sh 'make login'
    sh 'make push-build'
  }

  /*
  stage('Push image') {
    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
      app.push("${env.BUILD_NUMBER}")
      app.push("latest")
    }
  }
  */
}
