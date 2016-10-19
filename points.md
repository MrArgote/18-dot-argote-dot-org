---
title: Points
header-nav: true
nav-icon: /assets/four-dots.svg
---



<style>
  .student-tasks-grid span {
  display: inline-block;
  border-radius: 1em;
  padding: 0.3em;
  }
  // .student-tasks-grid span.yet-to-do .number { background-color: #EEE; }
  // .student-tasks-grid span.done { background-color: #2F8; }
  // .student-tasks-grid span.yet-to-do { background-color: #F4A; }
</style>



## Textbook

<div class="student-tasks-grid" style="display:flex-wrap;">
  {% for student in site.data.textbookProgress.students %}
    {% assign compSize = student[1].completed | size %}
    {% assign inproSize = student[1].inProgress | size %}
    {% assign listSize = compSize + inproSize %}
    <div class="
    {% if listSize > 1 %}
    done
    {% else %}
    yet-to-do
    {% endif %}
    ">
      <span class="number">
        {{ student[0] }}
      </span>
      <span>
        {{ student[1].completed | join: " // " }}
      </span>
      <span class="{% if inproSize > 0 %}yet-to-do{% endif %}">
        {{ student[1].inProgress | join: " // " }}
      </span>
    </div>
  {% endfor %}
</div>


{% comment %}

<div class="student-tasks-grid" style="display:flex-wrap;">
{% for student in site.data.savedSlackPassToLastpass.students %}
  <span>
  {% if student[1] %}
    <span class="done">
      {{ student[0] }}
      Done
    </span>
  {% else %}
    <span class="yet-to-do">
      {{ student[0] }}
      Not ready?
    </span>
  {% endif %}
  </span>
{% endfor %}
</div>

Saved Dropbox password to Lastpass?


<div class="student-tasks-grid" style="display:flex-wrap;">
{% for student in site.data.savedDropboxToLastpass.students %}
  <span>
  {% if student[1] %}
    <span class="done">
      <span class="number">
      {{ student[0] }}
      </span>
      Done
    </span>
  {% else %}
    <span class="yet-to-do">
      <span class="number">
      {{ student[0] }}
      </span>
      Not ready?
    </span>
  {% endif %}
  </span>
{% endfor %}
</div>

{% endcomment %}
