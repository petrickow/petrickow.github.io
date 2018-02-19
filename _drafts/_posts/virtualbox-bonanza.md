---
title: Virtualbox Bonanza
date: 2018-02-19 12:15:58 +0000
tags:
- virtualbox
ingress: Checking out ways to improve on the Vagrant defaults for Virtualbox.
---
This is a short list of some take aways after setting up environments using vagrant and virtualbox. Some of the standards are a bit too safe for the performence we needed on a project I worked on, so the following parameters had to be changed.

#### Chipset

I don't have conlusive evidence that this change was neccassarty for our projcet, but since I've learned that the internet is never wrong, I decided to change this to ich9 just in case.

#### Network

The standard device type is set to intel jalla jalla. Virtio is said to increase the performance of the network significantly.

#### Disk IO