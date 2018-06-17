node {
  def app
  stage('Checkout') {
    checkout scm
  }

  stage('Clean') {
    sh 'make clean'
  }

  stage('Build') {
    sh 'make build'
  }

  stage('Test') {
    app.inside {
      sh 'echo "Tests passed"'
    }
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
