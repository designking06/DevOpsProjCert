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
                      --user ubuntu \
                      --private-key ~/.ssh/DevOpsProj.pem
                '''
            }
        }

        stage('Docker Build & Run') {
            steps {
                sshagent(credentials: ['DevOpsProjKey']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@18.222.147.8 << 'ENDSSH'
                        # Navigate to repo
                        cd ~/DevOpsProjCert

                        # Build Docker image from docker/Dockerfile
                        sudo docker build --no-cache -t webapp:latest -f docker/Dockerfile .

                        # Stop and remove existing container if exists
                        if [ $(sudo docker ps -aq -f name=webapp) ]; then
                            sudo docker stop webapp
                            sudo docker rm webapp
                        fi

                        # Run new container
                        sudo docker run -d -p 80:80 --name webapp webapp:latest

                        # Check running containers
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
