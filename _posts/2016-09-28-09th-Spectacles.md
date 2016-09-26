---
students:
  ranking:
    01: false
    02: false
    03: false
    04: false
    05: false
    06: 09
    07: false
    08: 04
    09: false
    10: 08
    11: 11
    12: false
    13: false
    14: false
    15: 10
    16: false
    17: false
    18: 12
    19: false
    20: 07
    21: false
    22: false
    23: false
    24: 14
    25: 13
    26: false
    27: false
    28: false
    29: 06
    30: 05
    31: 01
    32: 03
    33: 02
    34: false
    35: false
    36: false
    38: false
    39: false
---


## LastPass Drill Race and Spectacles

how quick are you to install LastPass extension and log-in?

This time couldn't do it will demonstrate again next time.

<style>
  .student-tasks-grid span {
  display: inline-block;
  border-radius: 1em;
  padding: 0.3em;
  }
  .student-tasks-grid span.yet-to-do .number {
  background-color: #EEE;
}
  .student-tasks-grid span.done {
  background-color: #2F8;
  }
  .student-tasks-grid span.yet-to-do {
  background-color: #F4A;
  }
</style>

<div class="student-tasks-grid" style="display:flex-wrap;">
{% for student in page.students.ranking %}
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

## Snap Spectacles

<iframe width="854" height="480" src="https://www.youtube.com/embed/XqkOFLBSJR8" frameborder="0" allowfullscreen></iframe>

