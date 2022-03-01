[![Forks](https://img.shields.io/github/forks/readloud/readloud.github.io.svg)](https://github.com/readloud/readloud.github.io/network/members)
[![Stargazers](https://img.shields.io/github/stars/readloud/readloud.github.io.svg)](https://https://github.com/readloud/readloud.github.io/stargazers)
[![CodeQL](https://github.com/readloud/readloud.github.io/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/readloud/readloud.github.io/actions/workflows/codeql-analysis.yml)
[![pages-build-deployment](https://github.com/readloud/readloud.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/readloud/readloud.github.io/actions/workflows/pages/pages-build-deployment)
[![codecov.io](https://codecov.io/github/codecov/codecov-circleci-orb/coverage.svg?branch=master)](https://codecov.io/github/codecov/codecov-circleci-orb)
[![Travis-ci](https://api.travis-ci.org/readloud/readloud.github.io.svg)](https://travis-ci.org/readloud/readloud.github.io)
[![Codecov](https://codecov.io/gh/readloud/readloud.github.io/branch/master/graph/badge.svg)](https://codecov.io/gh/readloud/readloud.github.io)
[![PHP-5.5.9+](https://img.shields.io/badge/PHP-5.5.9+-orange.svg)](https://github.com/readloud/readloud.github.io)
[![PHP-7.1.4+](https://img.shields.io/badge/PHP-7.1.4+-green.svg)](https://github.com/readloud/readloud.github.io)
[![PHP-8.1.0+](https://img.shields.io/badge/PHP-8.1.0+-blue.svg)](https://github.com/readloud/readloud.github.io)
[![GitHub issues by-label](https://img.shields.io/github/issues/badges/shields/good%20first%20issue.svg)](https://github.com/badges/shields/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
[![Issues](https://img.shields.io/github/issues/readloud/readloud.github.io.svg)](https://https://github.com/readloud/readloud.github.io/issues)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/readloud/readloud.github.io/blob/main/LICENSE.md)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* rubygems

The installation of gem is depend on your operating system. Alternatively, you can download Gem through browser: [Ruby](https://www.ruby-lang.org/en/downloads/), and install rubygems manually.

```bash
# macOS

brew update
brew install ruby

# Ubuntu
sudo apt-get install ruby

# Arch
sudo pacman -S ruby

```

* bundler

```bash
gem install bundler
```
* jekyll
```bash
bundler install jekyll
```

* jekyll plugins

```bash
gem install jekyll-sitemap jekyll-feed jekyll-seo-tag jekyll-mermaid
```

### Installation

1. Fork this project on [github](https://github.com/akiritsu/pRoJEct-VeXEd), change project settings, and clone your own repository into your local disk.

```bash
git clone https://github.com/{{YOUR_USERNAME}}/{{YOUR_REPOSITORY}}.git
```

2. Change directory.

```bash
cd {{YOUR_REPOSITORY_DIR}}
```

### Personalize and Customize

#### _config.yml

Edit **_config.yml** with your own website information.

#### Collections

All your articles could be stored in this folder. You could create a new collection by creating a subfolder begin with a slash, and register the basic information in **_config.yml**. Here is an example:

```yaml
# Collections
collections:
  notes:
    output          : true
    permalink       : /:collection/:title/
    sort_by         : date
  portfolio:
    output          : true
    permalink       : /:collection/:title/
    order: # specify post order manually
      - portfolio3.md
      - portfolio2.md
      - portfolio1.md
  album:
    output          : true
    permalink       : /:collection/:title/
    sort_by         : date
```

All your articles would be shown by clicking **Archive** button in the header of your website.

#### Writing

Delete all sample collections under **./collections/**, and have fun in writing!

#### Comment

Create your own account in [Disqus.com](https://disqus.com/), and change the attribute "disqus_username" in **_config.yml**.

#### Test locally

Run command below, and access "127.0.0.1:4000" to test your website locally.

```bash
bundle exec jekyll serve
```

#### Front Matter

You can add many front matter to customize a page. For more information, visit official document: [https://jekyllrb.com/] (https://jekyllrb.com/docs/front-matter/)

```yaml
layout: post # page layout, must be one of layouts under src/_layouts
title: "Sample" # string
author: "your_name" # string
post_list: "cate" # whether to show post list under collections/_post, one of false, "cate", "date"
collection_list: true # true or false
toc: true # table of content, true or false
show_date: true # whether to show date, true or false
home_btn: true # whether to show home button, true or false
btn_text: true # whether to show button text, true or false
footer: true # whether to show footer, true or false
maximize: true # whether to show maximize button, true or false
encrypted_text: true # whether to enable encrypted text, true or false
publish: true # if you wish keep this page invisible, put false here
toc_level: 4 # the depth of toc, one of 1, 2, 3, 4, 5, 6
comment: ture # whether to show comment area
category: "sample" # string
date: 2019-5-25 # YYYY-MM-DD
excerpt: "This is excerpt." # string
abstract: "This is abstract. Abstract is blank by default." # string
```


## 🛣️ Roadmap

1. On-browser code execution teminal.
2. Code review mode.
3. Slide mode.
4. Rapid cheatsheet access.


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/readloud/readloud/issues). Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. [Fork the Project](https://github.com/readloud/readloud/fork)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🥰 Support

Give a ⭐️ if this project helped you! and If you like my work, support me to create more! 😎👍<br>

[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/mansz81)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/forever812S)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/readloud)

