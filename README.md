# Random Quote Generator

This project is a simple web application that generates random quotes built using **HTML**, **CSS**, and **JavaScript**. The application is containerized using **Docker** to ensure easy deployment and portability.

## Features
- Generates a random quote each time a button is clicked.
- Simple and responsive UI.
- Dockerized for easy deployment and use across various environments.

## Prerequisites
To run this project, you need the following installed on your system:
- [Docker](https://www.docker.com/)

## Getting Started

### Step 1: Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/random-quote-app.git
cd random-quote-app
```
### Step 2: Build the Docker Image
If you want to build the Docker image locally instead of pulling it from Docker Hub, use the following command:

```bash
docker build -t yourusername/random-quote-app .
```
### Step 3: Pull the Docker Image  
You can also pull the pre-built image from Docker Hub:  

```bash
docker pull vijaydocker404/random-quote-app:latest
```
### Step 4: Run the Docker Container
To run the container in detached mode and map port 8080 on your local machine to port 80 inside the container:
```bash
docker run -d -p 8080:80 vijaydocker404/random-quote-app
```
Now, open your browser and go to http://localhost:8080 to view the app.

### Workflow of the Application
User Interaction: When the user opens the application in their browser, they see a button to generate a random quote.  

Generating Quotes: Each time the button is clicked, a new quote is displayed from a predefined list of quotes.  

Containerization: The app is packed into a Docker container, making it easy to run the app in any environment without  
 worrying about dependencies.  
 
Deployment: The Docker image can be pulled from Docker Hub and run with just a few commands, enabling quick deployment.  

### Technologies Used  
HTML5: For structuring the web page.  
CSS3: For styling the application.  
JavaScript: For generating random quotes.  
Docker: To containerize the application and make it platform-independent.

### Contributing  
*Feel free to submit pull requests or raise issues if you have suggestions for improvements or encounter any problems!*

