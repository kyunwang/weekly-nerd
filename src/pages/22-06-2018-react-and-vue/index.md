---
path: "/quick-look-into-react-and-vue"
date: "2018-06-02T12:12:12.962Z"
title: "Quick look into React and Vue"
draft: false
---

First of I started out with React Native and recently started playing around with Vue.

*Disclaimer* this is not a React Versus Vue article, but a summary about my short experience with these two technologies.

## The impression

After a long time in the hype and love for Vue, I decided to try it out. Around the start of the Vue boom, I read something in the akin to this: (Don't take my word for it)
> Vue is a great framework to start with for new developers. Developers who have used frameworks before might feel a bit confused at first.

To be honest I can see why people feel confused at first because I too was confused. Why? Because Vue *Just Works*. Compared to React, Vue does most of the heavy lifting for you *Implicitly* and React is *Explicit*. Although the switch was really easy.

For example `vue-router` only needs you to create a router and call `Vue.use(router)` and you are set. What confused me was when I needed to call `<router-view>` as I didn't know where it came from. In React you will need to import all your components, but Vue makes it available everywhere. I thought that this was pretty convenient yet confusing. Vuetify, for example, would require you to remember all the component you want to us. You need to keep referring to the documentation until you remember your most used snippets, similar to bootstrap.

React needs you to write a lot more boilerplate in my opinion(depending on what you use). Importing React, writing your Class, Proptypes, Defaultypes, constructor(this.state now) etc. It creates a clear overview and separation in my opinion but can grow into a behemoth.

## How do I choose the right tool?

To be honest I do not know. I think most developers choose based on their likes, dislikes and prior experience. You can choose what works best for you and your team, but would that decisions also be the best tools for the job? That is a question I have yet to find and have yet to hear/read about it too.

They say that React is good for large scale and Vue for small to mid-scale applications. This does not clarify the question *Why?*. Is it the project structure? This can be adapted for both. Is it because of the features? What specific difference would that feature make? Would it be the ease of implementation or control over the project? Many of these questions are still unanswered or have yet to be shared (At least the unbiased answers).

Same applies to Angular which is said to be for enterprise applications. Again *Why?*.

One reason might be how Vue re-renders components compared to React, but would this be a deal breaker? You can read about it [here][vue-comp-reat]

## What is great

In the end, I liked both React and Vue, apart from the question of what tool is the best for the job. These are the things I like about them.

Vue:
- Quick to start
- Great cli tool
- Great docs (except the SSR)
- Easy to learn
- Vuex (Heaven compared to Redux)
- Write less code
- `Vue.use`: Love how this makes `Vuex` available everywhere unlike Redux

React:
- Quick to start (Using CRA)
- Allows/Forces you to learn ES6 and understand it
- (Clear) Explicit code
- Just Javascript (and JSX)

Which tools is the best for what use case? If you have the answer for me, hit me up at [@kyunwang][twitter]


Sources:
- https://vuejs.org/v2/guide/comparison.html##React
- https://medium.com/@dalaidunc/10-things-i-love-about-vue-505886ddaff2
- https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247
- Talk: Harijs Deksnis at VueJS MeetUp Amsterdam - Vuejs vs React with Adidas




[twitter]: https://twitter.com/kyunwang
[vue-comp-react]: https://vuejs.org/v2/guide/comparison.html##React