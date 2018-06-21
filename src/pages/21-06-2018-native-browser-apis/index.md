---
path: "/native-browser-api"
date: "2018-06-21T15:12:33.962Z"
title: "Native browser API's"
draft: false
---


## The shift
In the past few years a shift seems to be happening from jQuery to other libraries/frameworks like React, Angular, Vue and many more. As great as these tools are they might be overkill for many smaller and maybe middle-sized projects.


## From jQuery to Native API's
jQuery has received much scorn from the most of the developers in the community in the past few years., but is it justified? If we look back on the past jQuery has been a great tool. It large support in browsers in the time when nothing was standardized. It made DOM selection and CSS selection really easy and had a convenient animation API. And some more pro's like a huge selection of plugins etc.

However nowadays browser suppliers are standardizing, their API's to some degree which we can leverage from. This made the advantage of normalizing the old browser API's obsolete.

**Examples**

Want to get your element with id?
```
	// jQuery
	$('#my-id')

	// Native API
	document.querySelector('#my-id')
```

Maybe you want to get all of the elements with a class

```
	// jQuery
	$('.my-class')

	// Native API
	document.querySelectorAll('.my-class')
```

Easy right? Okay, this might not be the hardest task so let's try another one.

**Lazy loading images**
So how about lazy loading? For the jQuery example, we will be using the plugin called *Lazy load*

```
	// jQuery

	window.addEventListener("load", function(event) {
		lazyload(); // By default will lazyload all images with the class .lazyload
	});

	// Native API - Using Intersection Observer
	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// An element is intersecting
				const element = entry.target;
				element.target.src = yourImageToLoadIn; // Here you add the image src you want to load in
				observer.unobserve(element); // Stops observing the element
			}
		});
	};

	// Creating an IntersectionObserver instance and passing it in a callback. Options can be added as a second parameter
	const theObserver = new IntersectionObserver(callback);

	// Start to observe all images with the class .all-images
	theObserver.observe(document.querySelectorAll('.all-images'));
```

In this example, the difference in lines of code does seem a lot. However, the advantages of using the Native API's is the because these API's are built-in the browser. jQuery has to be loaded in first excluding the plugins and then be parsed afterward, increasing the load time and data consumption. And because Js is render blocking, the user will be left with an unresponsive screen.

> Native code is faster than interpreted / just in time compiled code - Christian “Schepp” Schaefer


*jQuery is only used as an example to compare with*

## Sound great, but how about ...
Now comes the question. How is the support, does it support IE version X. Well, some of API's do but not all. The question is whether you need to support IE 6 for example. Does your audience use it? Then maybe this might not be the solution for you as of yet, but you can still use it either way. How? By implementing **Progressive enhancement** and **Feature detection**.

Progressive enhancement requires you to build up your web project in layers, starting from HTML only to CSS and enhancing it with JS. Your core functionality should be working even if JS is disabled and/or when the CSS does not work for some reason. The user can still make use of the most important features.

With feature detection, you can make use of the new API's regardless of whether a visitor's browser supports it or not. By implementing the detection you can make use of newer API's for the current browsers and have a fallback for the older browsers. And when the time comes that the API's is supported by everyone then the code will already be up to date.

## Takeaway
All the new technologies are cool and really useful while also increasing productivity. While that is so it is not always necessary for your use-case. Many libraries can already be replaced by the Native API's as of today while supporting older browsers. So why not make use of them?

#### Sources:
- Talk: Jurgen Tjerik - Progressive enhancement at HvA
- Talk: Christian “Schepp” Schaefer - Breakthrough of native browser API's at NLHTML5 x CSS Day
- The jQuery lazy load snippet:  https://appelsiini.net/projects/lazyload/fadein/