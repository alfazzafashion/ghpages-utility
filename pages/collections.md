---
layout: collections
toc: false
permalink: /collections
---
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