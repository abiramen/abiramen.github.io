---
permalink: /making-site
short: making-site
title: Making this site
time: 19 September 2020
last-update: 24 January 2021
layout: post
tags: meta
desc: I had a lot of fun making this website! I'm going to step through some of the decisions I made in the process.
show-read-time: yes
---
Hi! If you're here, that means I've finally got around to fully completing my website! I purchased this domain 10
months ago, mostly neglected it for 9 of those months, or was super indecisive about how I wanted to approach it, and
then finally got around to working on it.

## Planning
I knew the main feature I wanted to implement was a blog, and that I also wanted some place for a portfolio, while having a relatively unique design compared to most blogs. With this in mind, I quickly threw something together in Adobe Illustrator.
## Making a logo
I've had an idea in my mind to have some kind of ramen logo out of neon lights. After creating a wireframe in Illustrator, and a few Photoshop tutorials on neon glow effects later, I've got a new logo to use everywhere! :)
## A tech stack
This was probably the part that held me off from working on this for the longest. For a long time, I was convinced that I would build my site using Vue.js, with the Vuetify component library, due to my prior experience with Vue. I also contemplated throwing in Nuxt in order to be able to server-side render some things. At some point, I realised that this was all extremely overkill, and would require actively running a server, which had many of its own costs.
### GitHub Pages, and Dr Jekyll
Once I realised that a static site would better suit my needs, I knew that I would use GitHub Pages for hosting. A friend of mine, ralismark, had mentioned how great Jekyll was, using it for <a href="https://www.ralismark.xyz" target="_blank">their own site</a>. I had known that Jekyll was a thing for a while, ever since I created my first GitHub Pages site in 2014, but had always ignored it, naively thinking that pure HTML/CSS was the way to go at the time.

After building this site with Jekyll, I have to say it's an absolute delight to work with. GitHub automatically builds a Jekyll site on push, and deploys it. Jekyll provides amazing templating support, reducing redundancy.Another fantastic feature is built-in support for writing pages and posts in Markdown (this is my first post in Markdown!! Hello world!!), for insertion into templates. While there are many Markdown-to-HTML converters out there, Jekyll just makes it seamless.

If I ever require a page with server-side rendering, I can always host that on a separate domain. ralismark still says that Jekyll is great, although she does wish that he could server-side render LaTeX so that she doesn't need to do that on the client's device.
### Frontend frameworks
~~Admittedly as a result of me still being stuck in my old ways (or just being lazy), this site still uses jQuery in few places. I intend on porting it all to vanilla JavaScript at some point.~~ This site is now free of jQuery!  I also made the mistake of deciding to use Bootstrap when I started writing this site - mainly for layout (responsive containers), but you can probably see, this site looks relatively un-Bootstrapish. I also intend on removing Bootstrap at some point, since most of the layout stuff shouldn't be too hard to reimplement myself.
## Fun stuff
One of <a href="https://mango.pdf.zone" target="_blank">my favourite blogs</a>, by the legendary <a href="https://twitter.com/mangopdf">@mangopdf</a>, has a couple of easter eggs baked into it. I decided to take some inspiration and add some fun stuff too! At the moment, there's only one easter egg, which you'll have to head to the homepage to learn about, but there's definitely more coming soon!

I also eventually realised that mangopdf's blog uses Jekyll too, so I knew that I had made a good choice. 😎

## The future
Well, I have quite a few posts planned, so watch this space I guess! 🙃
