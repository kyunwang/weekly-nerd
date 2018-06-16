---
path: "/quick-look-into-react-and-vue"
date: "2018-06-02T12:12:12.962Z"
title: "Quick look into React and Vue"
draft: true
---

First of I started out with React Native and recently started playing around with Vue.

*Disclaimer* this is not a React Versus Vue article, but a summary about my short experience with these two technologies.


After a long time in the hype and love for Vue, I decided to try it out. Around the start of the Vue boom I read something in the akin to this: (Don't take my word for it)
> Vue is a great framework to start with for new developers. Developers who have used frameworks before might feel a bit confused at first.

To be honest I can see why people feel confused at first because I too was confused. Why? Because Vue *Just Works*. Compared to React, Vue does most of the heavy lifting for you *Implicitly* and React is *Explicit*. Although the switch was really easy.

For example `vue-router` only needs you to create a router and call `Vue.use(router)` and you are set. What confused me was when I needed to call `<router-view>` as I didn't know where it came from. In React you will need to import all your components, but Vue makes it available everywhere. I thought that this was pretty convenient yet confusing. Vuetify for example would require you to remember all the component you want to us. You need to keep referring to the documentation until you remember your most used snippets, similar to bootstrap.

React needs you to write a lot more boilerplate in my opinion(depending on what you use). Importing React, writing your Class, Proptypes, Defaultypes, constructor(this.state now) ect. It creates a clear overview and separation in my opinion, but can grow into a behemoth.


# How do I choose the right tool?

To be honest I do not know. I think most developers choose based on their likes, dislikes and prior experience. You can choose what works best for you and your team, but would that decisions also be the the best tools for the job? That is a question I have yet to find and have yet to hear/read about it too.

They say that React is good for large scale and Vue for small to mid scale applications. This does not clarify the question *Why?*. Is it the project structure? This can be adapted for both. Is it because of the features? What specific difference would that feature make? Would it be the ease of implementation or control over the project? Many of these questions are still unanswered or have yet to be shared (At least the unbiased answers).

Same applies to Angular which is said to be for enterprise applications. Again *Why?*.


# Conclusion

In the end I liked both React and Vue, apart from the question what tool is the best for the job. These are the things I like about them.

Vue:
- Quick to setup
- Great cli tool
- Great docs (except the SSR)
- Easy to learn
- Vuex (Heaven compared to Redux)
- `Vue.use` Love how this makes `Vuex` available everywhere unlike Redux

React:
- Quick to start (Using CRA)
- Allows/Forces you to learn ES6 and understand it
- (Clear) Explicit code
- Just Javascript (and JSX)


If anyone has the answer for me, hit me up at [@kyunwang][twitter]


Right tool for the right job, but qhich cases whould that be?? large scale and small/medium doesn't say anything to me as react can also be used for small app and vue for large ones.





# Similarities

# Differences

# Conclusion

Most of the confusing arts could be fixed with jsut reading the docs and Vue has great docs (not for the SSR though)



Vue is implicit
React is explicit 


Just looking at Vuex and Redux
Vuex seems much cleaner as it does not divide everything is separate files
but might become a problem with scope creep

but compared to redux, veux is much easier to setup and has less boilerplate



Opiniation in Vue and React

Some people just don't like how react mixes html, css, and js as the only argument they have. Separation of concerns! But in fact you do not need to do it fully like that. Although js and the html(jsx) does need to be mixed to a certain extend.

Imho Vue also does/can mix js in html albeit not as apparent, because it used directives to link to your methods and so on.
for example v-for can be seen as js in your html as you write a simple for-in statement which references to the js you have below in the script tag

templates man



Also some similarities in lifecycle methods but same as said above more implicit

how i see it the `watch` property is the same or at least really similar to shouldcomponentupdate.
However instead of checking through the whole lot of this.props/this.state you will tell vue to just keep track of this one prop/ and run a method when changed 


[twitter]: https://twitter.com/kyunwang