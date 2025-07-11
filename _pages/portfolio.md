---
layout: page
title: Portfolio
permalink: /portfolio/
description: Here is my portfolio sectioned in to different aspects along with descriptions. Click on images for more details.
nav: true
nav_order: 3
display_categories: [Research, Work Experience, Education, Publications, Projects, Certificates, Game Jams, Technical Skills, Interests, References]
horizontal: false
toc:
  sidebar: left

---

<!-- pages/portfolio.md -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }} </h2>
      </a>
      {% assign categorized_projects = site.portfolio | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Certificates -->
      {% if category == "Certificates" %}
        <article> 
          <div class="cv">
            {% for data in site.data.resume %}
              {% if data[0] == 'certificates' %}
                <div class="card mt-3 p-3">
                  {% include resume/certificates.liquid %}
                </div>
              {% endif %}
            {% endfor %}
          </div>
        </article>        
      <!-- Publications -->
      {% elsif category == "Publications" %}
        <article> 
          <div class="cv">
            {% for data in site.data.resume %}
              {% if data[0] == 'publications' %}
                <div class="card mt-3 p-3">
                  {% include resume/publications.liquid %}
                </div>
              {% endif %}
            {% endfor %}
          </div>
        </article>
      <!-- Education -->
      {% elsif category == "Education" %}
        <article> 
          <div class="cv">
            {% for data in site.data.resume %}
              {% if data[0] == 'education' %}
                <div class="card mt-3 p-3">
                  {% include resume/education.liquid %}
                </div>
              {% endif %}
            {% endfor %}
          </div>
        </article>
      <!-- References -->
      {% elsif category == "References" %}
        <article> 
          <div class="cv">
            {% for data in site.data.resume %}
              {% if data[0] == 'references' %}
                <div class="card mt-3 p-3">
                  {% include resume/references.liquid %}
                </div>
              {% endif %}
            {% endfor %}
          </div>
        </article>
      <!-- Technical Skills -->
      {% elsif category == "Technical Skills" %}
        <article> 
          <div class="cv">
            {% for data in site.data.resume %}
              {% if data[0] == 'skills' %}
                <div class="card mt-3 p-3">
                  {% include resume/skills.liquid %}
                </div>
              {% endif %}
            {% endfor %}
          </div>
        </article>
      <!-- Technical Skills -->
      {% elsif category == "Interests" %}
        <article> 
          <div class="cv">
            {% for data in site.data.resume %}
              {% if data[0] == 'interests' %}
                <div class="card mt-3 p-3">
                  {% include resume/interests.liquid %}
                </div>
              {% endif %}
            {% endfor %}
          </div>
        </article>
      {% else %}
        <!-- Generate cards for each portfolio (_portfolio folder) -->
        {% if page.horizontal %}
        <div class="container" >
          <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
          </div>
        </div>
        {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% else %}
    <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
        </div>
      </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
