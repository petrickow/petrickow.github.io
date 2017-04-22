---
title: Deployment and control in Forestry.io
date: '2016-12-08 00:00:00'
layout: post
ingress:
- My experience so far using forestry.io as a CMS for my little side project.
tags:
- programming
---
So far I've been very happy with the use of forestry when it comes to managing my simple site. Hosting it on github makes it easy to deploy changes fast as I learn Jekyll and Liquid and the content creation tools provided by forestry are neat. More on that later.

One decision I made early on which did not jive well with the CMS was to host the site from a branch in the source repository. My current structure is to have forestry get the changes from my 'master' branch, generate the site and push it to a 'publish' branch.

It seems Github pages can build Jekyll projects, rendering the need for a system such as forestry.io to build it unnecessary. Forestry is still nice to have for content management, but it would be nice to be able to disable the deploy-step (update: just found the button).