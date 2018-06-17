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
  stage('Push Web') {
    // Jenkins withCredentials and make
    withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
      sh "make login user=${env.dockerHubUser} pass=${env.dockerHubPassword}"
      sh 'make push-web'
      }
  }
  */

}
