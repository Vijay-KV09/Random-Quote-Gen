pipeline{
    agent any
    
    stages{
        stage("Cloning the Repo"){
            steps{
             git url: "https://github.com/Vijay-KV09/Random-Quote-Gen/",
             branch: "main"
            }
        }
        stage("Building the app"){
            steps{
                echo "app is building"
                bat "docker build -t quote-app ."
            }
        }
        stage("deploying the app"){
            steps{
                echo "app is been deployed"
                bat "docker run -d -p 80:80 quote-app"
            }
        }
    }
}
