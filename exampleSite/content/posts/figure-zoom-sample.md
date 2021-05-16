---
author: "Dave Kerr"
date: 2021-04-30
linktitle: Figure Zoom Sample
title: Figure Zoom Sample
weight: 10
---

The `figure-zoom` shortcode is a version of the [standard `figure` shortcode](https://gohugo.io/content-management/shortcodes/#figure) which also incorporates [Zoom.js](https://github.com/fat/zoom.js/).

Here is how the markdown for the shortcode is used:

```
{{</* figure-zoom src="/images/kitten.jpg"
    title="It's a Kitten!"
    caption="This is a kitten, what else needs to be said?"
*/>}}
```

It will be shown like this - click on the image to zoom in:

{{< figure-zoom src="/images/kitten.jpg"
    title="It's a Kitten!"
    caption="This is a kitten, what else needs to be said?"
>}}
