---
title: LocalStack SES Viewer
description:
  A simple utility website to view messages on a LocalStack message queue.
tags: ["Vue", "Github Actions", "LocalStack", "TypeScript"]
impact: Increased team velocity by providing an easier feedback loop.
readTime: 2
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
capable of mocking many AWS services. It has some caveats, and nothing beats
testing against the real thing, but for a dev setup, I have seen a more complete
solution.

The setup is quite simple, and the
[documentation](https://docs.localstack.cloud/aws/) is amazing. The services can
be setup using a setup script and the AWS CLI, or using
[terraform through their own provider](https://docs.localstack.cloud/aws/integrations/infrastructure-as-code/terraform/#_top).

LocalStack, if you are reading this, I will happily accept sponsorship for the
free advertising. I can be contacted using the
[contact form](/contact#send-message).

## How does it work?

LocalStack just saves the messages internally, then exposes an endpoint to read
parse and read these messages. The response is in JSON format, with the content
being raw hyper-text markup language (HTML) - look at me knowing the acronyms.

Showing these is a browser is thus quite trivial, and not super secure. The HTML
is assumed to be valid and trusted, which is a terrible assumption to make. But,
this is a static site, hosted on GitHub pages. All code is executed on the
browser, not my server. Thus, the only person at risk is the one using it. Not
ideal, but it won't rack up a massive server bill for me if something goes
haywire.

## Why build this?

As per the excerpt, this was to aid my email in viewing emails. There were
probably simpler solutions, but I was only doing backend development at the
time, and wanted to touch JavaScript, just in case I forgot how strange the
language can be.

## Why is the styling so bad?

I fully inherited my backend developers demeanour while building it.

## Pitfalls

Email clients are not browsers. They do not fully support modern CSS or
JavaScript, which means the rendered emails will not necessarily reflect what
would be rendered on an email client.
