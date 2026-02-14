---
title: LocalStack SES Viewer
description:
  A simple utility website to view messages on a LocalStack message queue.
tags: ["Vue", "Github Actions", "LocalStack", "TypeScript"]
impact: "Increased team velocity by providing an easier feedback loop."
readTime: 0
links:
  - icon: "i-simple-icons-github"
    url: https://github.com/franco-grobler/localstack-ses-viewer
    label: View Code
  - url: https://franco-grobler.github.io/localstack-ses-viewer/
    icon: "lucide:external-link"
    label: Live Demo
---

During a project I was a part of, we were building an event-driven fin-tech
application. The system had a microservice for sending emails, and used AWS SES
for sending emails. It was a basic service, and we needed a quick solution to
mock deliveries.

LocalStack was a quick and easy solution to mock the email provider, but lacked
a feature to view the sent emails. This made life difficult for the front-end
developers trying to style the emails, so I decided to whip up a quick, mock
email client.

<!-- more -->

## What is LocalStack?

A single docker container, containing the whole of AWS, at least according to
the marketing. In reality, well... Not quite. It is an incredibly useful tool,
capable of mocking many AWS services.
