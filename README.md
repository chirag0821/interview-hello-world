# Hello World

This repository contains A simple Node.js Express application designed for EKS deployment with health checks and graceful shutdown, Terraform configuration for EKS, ECR and Github Actions Prerequisites, Kubernetes manifests, and Github Actions CI/CD pipeline to deploy the application on AWS EKS.

---

### Run Express Application Locally 

```
npm install && npm start
```
---

### Apply Terraform

#### Terraform Prerequisites

- AWS account
- Terraform installed
- AWS CLI installed
- S3 bucket created manually for Terraform state

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

#### Update `main.tf`

Update `principal_arn` with the ARN of IAM user that has administrator privileges.

```bash
Update module.eks.access_entries.admin_user.principal_arn with the ARN of an IAM user that has administrator privileges.
```
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

#### Application Endpoint
<img width="1919" height="866" alt="application_endpoint" src="https://github.com/user-attachments/assets/7705f3b1-7e26-4ac6-be25-cb6fb80693f7" />

#### Application Health Endpoint
<img width="1919" height="882" alt="application_health_endpoint" src="https://github.com/user-attachments/assets/0296b804-2a61-454b-a94c-3210f60f1a8a" />

#### Failed CI pipeline given that HIGH Vulnerability Detected
<img width="1920" height="908" alt="pipeline_ci_failed" src="https://github.com/user-attachments/assets/6ade075c-5021-4e16-ab99-367c54773767" />


#### Successful EKS Deployment
<img width="1919" height="883" alt="pipeline_cd_success" src="https://github.com/user-attachments/assets/5b540efd-79dc-4cb8-b9ae-c659218fab06" />


---
