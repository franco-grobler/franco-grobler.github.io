---
title: Cowsay RS
description: Fast ASCII cows.
tags: ["Rust", "Github Actions"]
impact: Learning a new language.
readTime: 3
links:
  - url: https://github.com/franco-grobler/cowsay-rs
    icon: "i-simple-icons-github"
    label: View Code
  - url: https://franco-grobler.github.io/cowsay-rs
    icon: "lucide:external-link"
    label: Website
---

Cowsay is a fairly well known useless CLI. It has no specific use, not is a
workflow enhancing tool. It is just for fun.

This project was built for the same reason, for a bit of fun. As well as
learning probably the most hyped language for the last few years. Take a look at
the website, there is a container available to avoid installing another unused
CLI you read about on the internet.

<!-- more -->

## Why choose Rust

Rust promises C level performance, while feeling modern, and saving an engineer
from themselves. The analyser is probably one the best developer tools
available, and the compiler is incredibly strict. These properties make tech
YouTubers very excited, since the "C is so over" titles are somewhat true. Many
large organisations are migrating to Rust, and recommend Rust for new systems
projects and time sensitive applications. C projects might need to be rewritten
in some cases, since memory safe languages are now required to retain certain
compliances.

This is not a performance critical application, but it is a great way to learn a
new language.

Another benefits of using Rust, is the excellent WebAssembly support. This
allows a Rust codebase to be packaged for the browser, offering better
performance than JavaScript implementations, all without having to maintain two
codebases.

## Project structure

The basic project structure is as follows:

```bash
.
├── cows
│   └── file.cow
├── crates
│   ├── cowsay
│   ├── cowsay-cli
│   ├── cowsay-parser
│   ├── cowsay-template
│   └── cowsay-wasm
├── docker
│   ├── cowsay
│   └── website
├── scripts
└── website
```

### Auxiliary folders

The default `cowfiles` are stored in the `cows` directory. This is to ensure the
default files are available when new users install the application.

The container files (Docker files) for the CLI and website are stored in the
`docker` directory.

Helper scripts live in the `scripts` directory, while the website is built in
the `website` directory.

### Crates

In order to modularise the application, the project uses Cargo workspaces, and
various crates to split domain specific code.

| Crate             | Description                                      |
| :---------------- | :----------------------------------------------- |
| `cowsay`          | Implements application functionality as library. |
| `cowsay-cli`      | CLI application binding to cowsay library.       |
| `cowsay-parsing`  | Responsible for creating complete ASCII cows.    |
| `cowsay-template` | Responsible for loading and parsing `cowfiles`.  |
| `cowsay-wasm`     | WASM binding to cowsay library.                  |

### Parsing cowfiles

The original application was written in Perl. Since Perl is an interpreted
language, similar to bash, the `cowfiles` were essentially Perl scripts, which
could be evaluated to handle template substitutions.

In order to maintain parity with the original application, the project
essentially needs to parse a subset Perl scripts. This can be achieved in two
ways; either implement a Perl interpreter in Rust, or make use of the dreaded
Regular Expression.

Since I am not a language designer, and building interpreters are a lot more
time consuming than writing regular expressions, I opted for the second option.

Regular expressions are powerful, but it won't be as powerful as an interpreter.
This application does not retain full parity with the original application, it
does produce the exact same output for all of the default `cowfiles`.
