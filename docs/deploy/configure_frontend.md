---
sidebar_position: 2
---

# Frontend Configuration

This page will describe how to configure the backend part of the WIMP system.

:::info
As a reminder, the "Backend" term in the WIMP system refers to the part that is accessible to teachers and administrators. For more information about the definitions used in the WIMP system, please see [this page](../intro.md).
:::

## Configure the Raspberry

On your first Raspberry Pi (or server), if you have a firewall installed, then the first step is to add some new rules : 

- Ensure that the port 8080 is open for ExpressAPI communication.
- Ensure that the port 1880 is open for Node-RED communication.
- Ensure that all the ports for the communications between your IoT devices and your Raspberry are open (for example, use a WeMo smart plug implies to open the port 9000).

## Pull the sources

Once you have configured your firewall, you can now pull the Github project that corresponds to the Teacher/Admin part :
- In order to pull the repository, you must ask to an admin for a Github access token.
- Once you have your access token, you can simply pull the repository :

```bash
git clone https://<github-username>:<github-token>@github.com/ptidejteam/wimp-frontend

cd ./wimp-frontend/
```
Now you can move on to configuring the service and exposing the backend with Nginx.

## Configure the environment

Now you need to add a file that will contains the environement variables for the Frontend part of the system : 
- Create a file named `.env` in the current directory :
```bash
vim .env
```

- And fill it with the following lines, replacing the values with your information :
```
ENV=prod
PROTOCOL=https
FRONTEND_HOST=**@IP of the current Raspberry pi**
FRONTEND_PORT=8080
BACKEND_HOST=**@IP of the Raspberry Pi that hosts the backend part**
BACKEND_PORT=8080
SESSION_SECRET=**Generate a strong session secret to manage the session**
BACKEND_SECRET=**Generate a strong backend secret to authorize access to backend**
```
:::note
To Authorize a frontend request to access the backend API, this request must be a POST request and have a body formatted like this :
`{ 
    "password": "**Backend secret in clear**"
}`
:::