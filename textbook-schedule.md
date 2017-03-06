---
title: Textbook Plan
header-nav: false
week_numbers:
  01: "Section 1, be and have"
  02: "Section 2, present tenses"
  03: "Section 3, talking about the future"
  04: "Section 4, past tenses"
  05: "Section 5, perfect tenses"
  06: "Section 6, modal verbs"
  07: "Section 7, passives"
  08: "Section 8, questions and negatives"
  09: "Section 9, infinitives and -ing forms"
  10: "Section 10, special structures with verbs"
  11: "Section 11, articles: a/an and the"
  12: "Section 12, determiners"
  13: "Section 13, personal pronouns; possessives"
  14: "Section 14, nouns"
  15: "Section 15, adjectives and adverbs"
  16: "Section 16, comparison"
  17: "Section 17, conjunctions"
  18: "Section 18, if"
  19: "Section 19, relative pronouns"
  20: "Section 20, indirect speech"
  21: "Sections 21 and 22, prepositions and spoken grammar"
---

{% for week in page.week_numbers %}
Week {{ week[0] }} : {{ week[1] }}
{% endfor %}

