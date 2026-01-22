# DevOps project
The business solution I am solving in this project is as follows:
In 2026, a common business problem for a clothing company that requires:
- standardizing development environments
- automated patching 
- Rapid Application Delivery / CI/CD
- Scaling for Peak Shopping Seasons
is managing "Dependency Drift and Zero-Day Exploits" during a major product launch (e.g., a "Spring Fashion Week" drop).

## The Business Problem: "The Seasonal Catalog Crash"
Your company is launching a high-traffic mobile and web catalog. You have a team of 15 developers working on the checkout and inventory services.

- The Conflict (Dependency Drift): Developer A is using a newer version of a payment library on their local laptop that isn't compatible with the production server. Developer B is using an older version of Python that lacks modern performance optimizations. When they push their code, the site becomes unstable because the environments are inconsistent.

- The Crisis (Zero-Day Exploit): Two days before the launch, a critical security vulnerability (like a 2026 version of Log4j) is discovered in a common web library used by the industry. Your clothing site is now at risk of a data breach, and every server must be updated immediately. 

## Concepts


## Lisence

MIT

## DevOps
Connecting to EC2
1. Locally, run
- chmod 400 ~/.ssh/DevOpsProj.pem
- ssh -i ~/.ssh/DevOpsProj.pem ubuntu@3.131.141.176

2. In ssh, run
-  sudo apt update