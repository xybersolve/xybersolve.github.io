node {

  stage('Checkout') {
    checkout scm
  }

  stage('Build') {
    sh 'make build-build'
  }

  stage('Build Web') {
    sh 'make build-web'
  }

  stage('Tag Web') {
    sh 'make tag-web'
  }

  stage('Push Web') {
    sh 'make login'
    sh 'make push-web'
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
