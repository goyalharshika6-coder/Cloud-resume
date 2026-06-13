# Cloud Resume Challenge

A serverless cloud portfolio website built using AWS services.

## Architecture

S3 → Static Website Hosting

API Gateway → REST API Endpoint

Lambda → Visitor Counter Logic

DynamoDB → Store Visitor Count

## Features

- Static portfolio website
- Visitor counter
- Serverless architecture
- Hosted on AWS
- GitHub version control

## AWS Services Used

- Amazon S3
- AWS Lambda
- Amazon DynamoDB
- Amazon API Gateway
- IAM

## Project Structure

```
cloud-resume/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Visitor Counter Flow

1. User opens website
2. JavaScript calls API Gateway
3. API Gateway triggers Lambda
4. Lambda updates count in DynamoDB
5. Updated count is returned to website

## Author

Harshika Goyal

LinkedIn:
https://www.linkedin.com/in/harshika-goyal-853145326/

GitHub:
https://github.com/goyalharshika6-coder
