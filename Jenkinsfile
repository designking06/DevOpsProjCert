pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/designking06/DevOpsProjCert.git'
            }
        }

        stage('Job 1 - Install Puppet Agent') {
            steps {
                sshagent(credentials: ['WebAppPaC']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@3.131.141.176 \
                        "sudo apt update && sudo apt install -y puppet-agent"
                    '''
                }
            }
        }

        stage('Install Docker w Ansible') {
            steps {
                sh '''
                    export PATH=/opt/homebrew/bin:/usr/local/bin:$PATH
                    ansible-playbook --version
                    ansible-playbook ansible/install_docker.yml \
                      -i 3.131.141.176, \
                      --user ubuntu \
                      --private-key ~/.ssh/DevOpsProj.pem
                '''
            }
        }

        stage('Docker Build (Mocked)') {
            steps {
                sh '''
                echo "docker build -t php-webapp ."
                echo "docker run -d php-webapp"
                '''
            }
        }
    }

    post {
        failure {
            sh 'echo "Rollback: removing container (mock)"'
        }
    }
}
