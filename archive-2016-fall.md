---
title: Archive
---


<style>
.post-list > li {
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

  <h1 class="page-heading">Fall of 2016 Posts</h1>

  <ul class="post-list">
    {% assign posts = site.posts | where:"categories","Fall" %}
    {% for post in posts %}
      <li{% if post.computer-lab == true %} class="computer-lab"{% endif %}>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
        <p>
          {{ post.excerpt }}
        </p>
      </li>
    {% endfor %}
  </ul>

  <p>take a look at <a href="{{ "/" | prepend: site.baseurl }}">current posts</a></p>

</div>

