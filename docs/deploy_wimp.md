---
sidebar_position: 8
---

# Deploy your WIMP system

This page will learn you how to deploy your WIMP system for your entity.

## Requirements

To deploy you WIMP system, you will need at least two Raspeberry Pi or servers which can support Node-RED and ExpressAPI.
The network configuration of your system must look like the following schema : 

## Deploy the Teacher/Admin part of the system

On your first Raspberry Pi (or server), if you have a firewall installed, then the first step is to add some new rules : 

- Ensure that the port 8000 is open for ExpressAPI communication.
- Ensure that the port 1880 is open for Node-RED communication.
- Ensure that all the ports for the communications between your IoT devices and your Raspberry are open (for example, use a WeMo smart plug implies to open the port 9000).

Once you have configured your firewall, you can now pull the Github project that corresponds to the Teacher/Admin part :
- In order to pull the repository, you must ask to an admin for a Github access token.
- Once you have your access token, you can simply pull the repository :

```bash
git clone https://<github-username>:<github-token>@github.com/ptidejteam/industry
```
Now you can configure the uWSGI service for the Teacher/Admin part : 

## Deploy the Student part of the system

On your second Raspberry Pi (or server), if you have a firewall installed, then the first step is to add some new rules : 

- Ensure that the port 3000 is open for ExpressAPI communication.

Once you have configured your firewall, you can now pull the Github project that corresponds to the Student part :
- In order to pull the repository, you must ask to an admin for a Github access token.
- Once you have your access token, you can simply pull the repository :

```bash
git clone https://<github-username>:<github-token>@github.com/ptidejteam/wimp_webserver
```

Now you need to configure the communication between the Student part and the Teacher/Admin part of the system : 
- In the `.env` file, replace the line :
```
NODE_RED_EXPRESS_HOST=localhost
```
by :
```
NODE_RED_EXPRESS_HOST=**your_teacheradmin_part_raspberry_ip**
```

Now you can configure the uWSGI service for the Teacher/Admin part : 

## Test the system