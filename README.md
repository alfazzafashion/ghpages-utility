[![pages-build-deployment](https://github.com/readloud/readloud.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/readloud/readloud.github.io/actions/workflows/pages/pages-build-deployment)
[![CodeQL](https://github.com/readloud/readloud.github.io/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/readloud/readloud.github.io/actions/workflows/codeql-analysis.yml)
[![Forks](https://img.shields.io/github/forks/readloud/readloud.github.io.svg)](https://github.com/readloud/readloud.github.io/network/members)
[![Stargazers](https://img.shields.io/github/stars/readloud/readloud.github.io.svg)](https://https://github.com/readloud/readloud.github.io/stargazers)
[![Issues](https://img.shields.io/github/issues/readloud/readloud.github.io.svg)](https://https://github.com/readloud/readloud.github.io/issues)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/readloud/readloud.github.io/blob/main/LICENSE.md)
![Discord](https://img.shields.io/discord/731616556622282814?logo=discord&logoColor=white?style=social)
![YouTube Video Views](https://img.shields.io/youtube/views/e2icQFxhp3w?style=social)
![YouTube Video Votes](https://img.shields.io/youtube/likes/e2icQFxhp3w?label=Likes&style=social) 
![Twitter](https://img.shields.io/twitter/follow/mansz81.svg?style=social)

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

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/readloud/readloud/issues). You can also take a look at the [contributing guide](https://github.com/readloud/readloud/blob/master/CONTRIBUTING.md).

## 🥰 Support

Give a ⭐️ if this project helped you!<br>
<a href="https://www.patreon.com/mansz81">
<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png"  height="30px"  width="80" alt="patreon">
</a>
<br>
If you like my work, support me to create more! 😎👍<br>
<a href="https://www.buymeacoffee.com/forever812S" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30px"  width="80"  alt="Buy Me A Coffee"></a>
<a href="https://www.paypal.me/readloud" target="_blank"><img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" height="30px"  width="80" alt="PayPal"/> 
</a>
<br>
You can also [fork](https://github.com/readloud/readloud/fork) or take a look at the [Installation guide](https://github.com/readloud/readloud/blob/master/INSTALL.md) for each repository.
