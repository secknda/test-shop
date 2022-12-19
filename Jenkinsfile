#!groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/user/repo.git']]])
            }
        }
        stage('Build') {
            steps {
                sh 'make'
            }
        }
        stage('Test') {
            steps {
                sh 'make test'
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
    post {
        always {
            slackSend channel: '#build-notifications', color: '#000000', message: "Pipeline completed: ${currentBuild.currentResult}", teamDomain: 'myteam', tokenCredentialId: 'abcdefgh-1234-5678-abcd-efghijklmnop'
        }
    }
}
