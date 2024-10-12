pipeline {
  agent any
  stages {
    stage('1') {
      steps {
        sh 'npm run docs:build'
      }
    }

    stage('2') {
      steps {
        waitForBuild(runId: 'wait', propagate: true, propagateAbort: true)
      }
    }

    stage('3') {
      steps {
        echo 'sussue'
      }
    }

  }
}