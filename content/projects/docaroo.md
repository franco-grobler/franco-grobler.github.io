---
title: Docaroo
description: Organised files for a chaotic life.
tags: ["Vue", "Python", "Terraform", "AWS"]
impact: Leading my first MVP.
readTime: 2
links:
  - url: https://docaroo.ai
    icon: "lucide:external-link"
    label: Website
---

The last project at my first employer.

Shorty after being promoted to senior,
[NextOrbit](https://byteorbit.com/next-orbit) was tasked with building an
minimal viable product in two months. An incredible team of designers got the
design done, and looking great, allowing the development team to start the
sprint on the build.

<!-- more -->

## What is it?

Docaroo aimed to simplify and digitise your life. Finding a copy of your ID
should not involve a 10 minutes search through `Downloads/id (2)/Scan.pdf` only
to find a blurry old document while you swear you have a quality recent copy
somewhere.

Usual file storage services use a file based hierarchy. This works well for
structured data, and some people find a good way to make it work. It does
however required an internal debate over which folder is the better descriptor,
and - more importantly - which folder you will think it is in next time you need
it.

Trying to predict your future state of mind is not a great customer experience,
so [Byte Orbit's](https://byteorbit.com) talented designers found a better way.
Instead of nested folders, pockets are used to distinguish between general
categories, with tags and `I CANT REMEMBER` being used to link related
documents. Think of an insurance policy for you car - it is related to both the
insurance provider, keeping all policies from the provider together, and the car
itself, ensuring the car's loan statements are too far away.

## What did I do?

This was a project I was involved in once the idea was established. Starting
from refining the idea, discussing designs, and designing the system alongside
fellow team members.

The project had a tight timeline, so I also setup a basic development
environment using Terraform and AWS.

The application stack is Vue for the frontend, with a Python-FastAPI backend.
Vue is, in my view, the best solution for most frontend web applications. The
reactivity is class leading, with a simple API, and excellent performance.
Python was chosen to iterate quickly, especially since Byte Orbit has
significant Python expertise. FastAPI is a great choice, since it is one of the
faster, lower resource API frameworks.
