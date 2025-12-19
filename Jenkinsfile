pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/designking06/DevOpsProjCert.git'
            }
        }

        stage('Install Puppet Agent') {
            steps {
                sshagent(credentials: ['DevOpsProjKey']) {
                    sh '''
ssh -o StrictHostKeyChecking=no ubuntu@18.222.147.8 \
"sudo apt update && command -v puppet || sudo apt install -y puppet-agent"
'''
                }
            }
        }

        stage('Install Docker w Ansible') {
            steps {
                sh '''
ansible-playbook ansible/install_docker.yml \
  -i 18.222.147.8, \
  --user ubuntu
'''
            }
        }

        stage('Docker Build & Run') {
            steps {
                sshagent(credentials: ['DevOpsProjKey']) {
                    sh '''
ssh -o StrictHostKeyChecking=no ubuntu@18.222.147.8 << 'EOF'
set -e

if ! command -v docker; then
  echo "Docker not installed" && exit 1
fi

if [ ! -d "$HOME/DevOpsProjCert" ]; then
  git clone https://github.com/designking06/DevOpsProjCert.git
fi

cd DevOpsProjCert

sudo docker build -t webapp:latest -f docker/Dockerfile .
sudo docker rm -f webapp || true
sudo docker run -d -p 80:80 --name webapp webapp:latest

sudo docker ps
EOF
'''
                }
            }
        }
    }
}
