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

        stage('Install App Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
                sh 'rm -rf .next/cache'
            }
        }

        stage('Start Application') {
            steps {
                sh 'npm start > app.log 2>&1 & echo $! > app.pid'
            }
        }

        stage('Checkout Automation') {
            steps {
                dir('automation') {
                    git(
                        branch: 'main',
                        url: 'https://github.com/vanshika-nahar/nextjs-demo-automation.git'
                    )
                }
            }
        }

        stage('Install Automation Dependencies') {
            steps {
                dir('automation') {
                    sh 'npm ci'
                }
            }
        }
        
        stage('Wait for Application') {
            steps {
                dir('automation') {
                    sh 'npx wait-on http://localhost:3000'
                }
            }
        }

        stage('Run Automation') {
            steps {
                dir('automation') {
                    sh 'npm run test:bdd'
                }
            }
        }
    }

    post {
        always {
            sh '''
                if [ -f app.pid ]; then
<<<<<<< main
                    kill $(cat app.pid) || true
                fi
=======
                kill $(cat app.pid) || true
                fi

                rm -rf node_modules
                rm -rf automation/node_modules
                rm -rf .next/cache
>>>>>>> stage
            '''
        }

        success {
            echo 'Application build and automation tests passed.'
        }

        failure {
            echo 'Application build or automation tests failed.'
        }
    }
}