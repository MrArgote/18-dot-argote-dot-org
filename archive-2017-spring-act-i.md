---
layout: default
---

<style>
  .post-list > ul > li {
    display: inline-block;
    border: dashed 0.1em #555;
    border-radius: 1.5em;
    padding: 0.7em;
    max-width: 13em;
  }
  .post-list li.computer-lab {
    background-color: #FDE;
  }
</style>

<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% assign posts = site.posts | where:"categories","Spring" %}
    {% for post in posts %}
      {% assign currentdate = post.date | date: "%a, %B %d, %Y" %}
      {% if currentdate != date %}
      {% unless forloop.first %}</ul>{% endunless %}
      <li>
        <h1>{{ currentdate | date: "%a %b %d" }}</h1>
      </li>
      <ul>
      {% assign date = currentdate %}
      {% endif %}
      <li{% if post.computer-lab == true %} class="computer-lab"{% endif %}>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
            {{ post.title | escape }}
          </a>
        </h2>
        <span>
          {{ post.excerpt }}
        </span>
      </li>
      {% if forloop.last %}</ul>{% endif %}
    {% endfor %}
  </ul>

  <p>take a look at <a href="{{ "/archive/" | prepend: site.baseurl }}">old posts</a></p>

</div>