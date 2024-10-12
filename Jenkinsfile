pipeline {
    agent any


    stages {
        stage('构建') {
            steps {
                withDockerContainer('node') {
                    // some block
                    sh 'node -v'
                    sh 'npm config set registry https://registry.npmmirror.com'
                    sh 'npm install'
                    sh 'npm run docs:build'
                }
            }
        }


        stage('制品'){
         steps {
             dir('.vitepress/dist') {
                 // some block
                 sh 'ls -al'
                 sh 'tar -zcvf docs.tar.gz *'
                 archiveArtifacts artifacts: 'luocynet.tar.gz',
                                                allowEmptyArchive: true,
                                                fingerprint: true,
                                                onlyIfSuccessful: true
                 sh 'ls -al'
             }
         }
        }
    }
}
