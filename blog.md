---
title: Blog
layout: default
permalink: "/blog/"
ingress: ''
tags: []
---
<h1 class="page-heading">Posts</h1>
<div role="main" class="home">
    <ul class="post-list">
        {% for post in site.posts %}
        <a class="  " href="{{ post.url | prepend: site.baseurl }}">

            <li class="post-box">
                {{ post.date | date: "%-d %b %Y" }}
                    <h2>
                        {{ post.title }}
                    </h2>

                    {% if post.ingress %}
                    <p>
                        {{post.ingress}}
                    </p>
                    {% endif %}
            </li>
        </a>
        {% endfor %}
    </ul>
</div>