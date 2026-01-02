# Hello World

This repository contains A simple Node.js Express application designed for EKS deployment with health checks and graceful shutdown, Terraform configuration for EKS, ECR and Github Actions Prerequisites, Kubernetes manifests, and Github Actions CI/CD pipeline to deploy the application on AWS EKS.

---

### Run Express Application Locally 

Run locally: `npm install && npm start`
Build container: `docker build -t hello-world .`

---

### Terraform Prerequisites

- AWS account
- Terraform installed
- AWS CLI installed
- S3 bucket created manually for Terraform state

---

### Apply Terraform

#### Clone Repository

```bash
git clone https://github.com/chirag0821/interview-hello-world.git
cd interview-hello-world
```

#### Configure AWS CLI

```bash
aws configure
```

Enter AWS user credentials and region. (make sure you have necesarry AWS IAM permissions to provision resources)

---

#### Initialize Terraform

```bash
cd terraform
terraform init
```

---

#### Review Plan

```bash
terraform plan
```

---

#### Apply Infrastructure

```bash
terraform apply
```

Type `yes` to confirm.

This provisions:
- Amazon ECR
- Amazon EKS
- Networking resources
- IAM roles and OIDC configuration for CI/CD

---

### CI/CD Pipeline

The github actions CI/CD pipeline is defined under `.github/workflows/ci-cd.yaml`.

It performs:
- Docker image build
- Image vulnerability scan
- Push to Amazon ECR
- Deployment to Amazon EKS using OIDC authentication

---

### Working Demo

Screenshots of the working application and successful pipeline run


---
