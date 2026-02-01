---
title: "Homelab: The Dawn of Self Hosting"
description: I didn't want to pay AWS to run tests for my master's thesis.
date: 2026-01-31
topic: Homelab
tags: ["Proxmox", "Virtual Machines", "Kubernetes", "ArgoCD"]
---

Every aspiring DevOps engineer eventually realises that cloud hosting is
amazing, but when it is not coming out of your own pocket. Thus, homelabs are
born.

My journey started because I thought AWS charge way too much for a Kubernetes
cluster. From some basic, back of the napkin calculations,I would have paid more
to host the infrastructure used in my master's research, than for I would pay
for my actual masters. Therefor, I did the responsible thing and spent **less**
money to build a homelab.

<!-- more -->

## The plan

I needed to run a kubernetes cluster, and because this is not at all a
production cluster, it had to highly available. Sarcasm aside, I wanted the
setup to at least resemble something that would be available in a cloud
environment.

I started with three old Intel desktops - each running Proxmox VE. Each virtual
machine was assigned at least one core, and at least 2GB of memory with TalosOS
as the operating system. This resulted in 10 VMs ready for use. Three VMs - one
on each computer, would run a master plane, and the rest would be workers.
