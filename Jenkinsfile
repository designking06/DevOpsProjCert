pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/designking06/DevOpsProjCert.git'
            }
        }

        stage('Job 1 - Install Puppet Agent') {
            steps {
                sshagent(credentials: ['DevOpsProjKey']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@18.222.147.8 \
                        "sudo apt update && command -v puppet || sudo apt install -y puppet-agent
"
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
                      -i 18.222.147.8, \
                      --u ubuntu
                '''
            }
        }

        stage('Docker Build & Run') {
            steps {
                sshagent(credentials: ['DevOpsProjKey']) {
                    sh '''
        ssh -o StrictHostKeyChecking=no ubuntu@18.222.147.8 << 'ENDSSH'
        set -e

        # Ensure repo exists
        if [ ! -d "$HOME/DevOpsProjCert" ]; then
        git clone https://github.com/designking06/DevOpsProjCert.git
        fi

        cd DevOpsProjCert

        # Build image
        sudo docker build --no-cache -t webapp:latest -f docker/Dockerfile .

        # Replace container
        sudo docker rm -f webapp || true
        sudo docker run -d -p 80:80 --name webapp webapp:latest

        sudo docker ps
        ENDSSH
        '''
                }
            }
        }

    }

    post {
        failure {
            sh 'echo "Rollback: removing container (mock)"'
        }
    }
}
