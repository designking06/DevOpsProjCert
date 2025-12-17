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

        stage('Install Puppet Agent (Mocked)') {
            steps {
                sh '''
                ssh -i ~/.ssh/DevOpsProj.pem ubuntu@3.131.141.176 << EOF
                  echo "Simulating Puppet Agent install"
                  sudo apt update
                  sudo apt install -y puppet-agent || true
                EOF
                '''
            }
        }

        stage('Run Ansible (Dry Run)') {
            steps {
                sh '''
                ansible-playbook ansible/install_docker.yml \
                  -i EC2_PUBLIC_IP, \
                  --user ubuntu \
                  --private-key ~/.ssh/DevOpsProj.pem \
                  --check
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
