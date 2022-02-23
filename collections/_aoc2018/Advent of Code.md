
---
title: Advent of Code
category: Sample
date: 2018-6-12
---

## Advent of Code is free to use.

However, building and running Advent of Code takes a significant amount of my time and energy. If you like Advent of Code, would like more things like it in the future, and are able to do so, please support Advent of Code.

Your contributions support things like:

Infrastructure (hosting, bandwidth, etc)
Time spent running Advent of Code events
Time spent building puzzles
More future projects
My sushi addiction
You are not logged in. If you proceed, your support will be anonymous, and no account will receive a supporter badge. If you want one, you should first identify yourself via one of these services:

### DayOne
```python
#Instructions: https://adventofcode.com/2018/day/1

with open('codes.txt','r') as f:
  codes = f.read().splitlines()

#Part one:
c = 0
for i in codes:
  c = eval(str(c)+i)
print(f"Answer #1: {c}")

#Part two:
twice = []
c, r = (0, 0)
while r != -1:
  r += 1
  if r % 10 == 0:
    print(f"Attempt #{r}")
  for i in codes:
    c = eval(str(c)+i)
    if c in twice:
      print(f"Answer #2: {c}")
      r = -1
      break
    twice.append(c)
    ```
    ## Advent of Code 2018
<Details>
* https://adventofcode.com/
* https://github.com/nneonneo/eqgrp-free-file.git
* https://github.com/nneonneo/ffsend.git
* https://github.com/nneonneo/pwn-stuff.git
* https://github.com/nneonneo/pwntools.git
* https://github.com/nneonneo/steam-phishing-analysis.git
* https://github.com/nneonneo/websocket-client.git
* https://github.com/nneonneo/pyelftools.git
* https://github.com/nneonneo/bpftools.git
* https://github.com/nneonneo/letsencrypt.git