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
  <h1 class="page-heading">Act II Posts (April to Mid-May 2017, Spring Semester)</h1>

  <ul class="post-list">
    {% assign posts = site.posts | where:"categories","Act-II" | where:"categories","Spring" %}
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
      </li>
      {% if forloop.last %}</ul>{% endif %}
    {% endfor %}
  </ul>


  <p>take a look at <a href="{{ "/" | prepend: site.baseurl }}">current posts</a></p>

  <p>take a look at <a href="{{ "/archive-2017-Spring-Act-I/" | prepend: site.baseurl }}">Posts from Act I of this semester (February and March 2017)</a></p>
  <p>take a look at <a href="{{ "/archive-2016-fall/" | prepend: site.baseurl }}">take a look at last semester's posts (August 2016 to January 2017)</a></p>

</div>

