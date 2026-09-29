pipeline {
    agent any

    stages {

        stage('Check Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'git --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Application build passed.'
        }

        failure {
            echo 'Application build failed.'
        }
    }
}