---
title: So many versions
description: Keeping copies of code everywhere.
date: 2026-01-29
topic: Software
tags: ["GitLab", "GitHub", "Version control", "CI/CD"]
readTime: 2
---

Back-ups are important, we all know this. Yet, when it comes to version control,
most developers trust a single source with their code. This does make sense,
since we trust in these organisations to keep our data safe, secure, and
backed-up.

Two things made me reconsider this approach.

<!-- more -->

## 3-2-1

The 3-2-1 back-up method is widely considered to be the 'right' way to do
back-ups. This means keeping three copies, on two different mediums, and one
off-site. I decided to mostly apply this to my repositories as well.

The three copies are taken care of by hosting the repository on two service
providers, and one local copy. The two mediums, well, I am sure GitHub and
GitLab use different storage devices (this is an assumption, and I am skimping
here). Since GitHub and GitLab is not hosted in my house, this takes care of the
off-site backup.

### Mirrors

Keeping a duplicate of a repository on two different providers seems like a
hassle, but it actually isn't too difficult. Many well-known open-source
projects are older than GitHub, and still use the original git server they were
using before the rise of GitHub. Some examples include ...

<!-- TODO: add examples. -->
