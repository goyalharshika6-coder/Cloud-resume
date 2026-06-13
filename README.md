# ☁️ Cloud Resume Challenge

A serverless cloud portfolio website built using AWS services to demonstrate cloud engineering skills and modern serverless architecture.

---

## 📌 Project Overview

This project is a personal cloud portfolio website hosted on Amazon S3 and enhanced with a serverless visitor counter using AWS Lambda, API Gateway, and DynamoDB.

The goal of this project is to gain hands-on experience with core AWS services while building a real-world cloud application.

---

## 🏗️ Architecture

```text
User
  ↓
Amazon S3 (Static Website Hosting)
  ↓
API Gateway
  ↓
AWS Lambda
  ↓
Amazon DynamoDB
```

---

## 🚀 Features

- Responsive Portfolio Website
- Static Website Hosting with Amazon S3
- Visitor Counter Implementation
- Serverless Backend Architecture
- REST API using API Gateway
- Visitor Data Storage using DynamoDB
- Fully Cloud-Native Deployment

---

## 🛠️ AWS Services Used

| Service | Purpose |
|----------|----------|
| Amazon S3 | Static website hosting |
| API Gateway | REST API endpoint |
| AWS Lambda | Visitor counter logic |
| DynamoDB | Visitor count storage |
| IAM | Secure permissions management |

---

## 🔄 Visitor Counter Workflow

1. User opens the website.
2. JavaScript sends a request to API Gateway.
3. API Gateway invokes Lambda.
4. Lambda reads the current count from DynamoDB.
5. Lambda increments the count.
6. Updated value is stored back in DynamoDB.
7. New count is displayed on the website.

---

## 📂 Project Structure

```text
cloud-resume/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 Skills Demonstrated

- Cloud Computing
- AWS Fundamentals
- Serverless Architecture
- REST APIs
- JavaScript
- Git & GitHub
- Infrastructure Integration

---

## 📸 Project Screenshot

![Cloud Resume Website](Screenshot%202026-06-14%20014023.png)

---

## 👩‍💻 Author

**Harshika Goyal**

LinkedIn:
https://www.linkedin.com/in/harshika-goyal-853145326/

GitHub:
https://github.com/goyalharshika6-coder

---
Built with ❤️ using AWS Cloud Services.
