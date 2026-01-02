terraform {
  backend "s3" {
    bucket = "interview-hello-world-tf-state"
    key    = "dev/terraform.tfstate"
    region = "ap-south-1"
  }
}
