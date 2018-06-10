---
path: "/react-amsterdam-2018"
date: "2018-05-23T17:12:33.962Z"
title: "Short visit at React Amsterdam"
---

draft

All of the sudden I had the opportunity to got to React Amsterdam albeit just for a few hours. In this short article I will talk about the four talks I was able to attend and what I have learned from them. I will quickly go over the talks I have attended and my take-aways.

*React Amsterdam was on the 13th of April 2018*

# First talk: React State Management in a GraphQL Era
### By *Kristijan Ristovski* from ReactAcademy

The day started great with Kristijan, also known as Kitze, giving a great talk about state management libraries and how they might be unnecessary with GraphQL in the scene.
After a light-hearted intro he gave a short overview about the difference between REST and GraphQL. Namely that REST is dependent on the back-end and needs many API calls to many end-points or with GraphQL which combines everything in one query and giving the power to the client who can define what data it needs.

He continued about how GraphQL can be our solution for state management, which is simpler than redux and mobx. Kitze explains that fixing the REST apis would effect into fixing the state management. And helps us choose wether we actualy need state management library when we are using GraphQL by giving us examples of stacks which can be used.

> Redux is a great library, however it is overhyped and overused by many, as Dan Abramov (Creator of Redux) said himself. 

New technologies keep comming up and dissapearing, so instead of always asking *What is better?* we should ask ourselves:
- What is suitable for my app
- What is suitable for my team
- What is suitable for our use-case

> GraphQL is the thing that’s eventually gonna replicate REST, but you keep telling yourself that you don’t need to learn it.

[Watch the talk here][kristijan-ristovski]


# Second talk: GraphQL at scale with AWS
### By *Richard Threlkeld* from Amazon

[Watch the talk here][richard-threlkeld]


# Third talk: Rethinking With React 16
### By *Manjula Dube* from Bookmyshow

Manjula talked about what React 16(.3) brings to the world. These are my take-aways from this talk.

We won't be getting async rendering with React 16 sadly enough, but there is no need to wrap all the components with dirty divs anymore.
Why? because we can now use the `<Fragment>` tag instead. 

What is really exiting is the Context API which can replace redux/mobx for smaller apps. Say goodbye to unnecessary boilerplace for a hambureger menu! I am looking at you Redux. Use cases for the Context API: you can reduce props drilling, for data flow (Check: [Unstated][unstated]), for theming.

The deprecation of lifecycle methods. Some of the lifecycle methods seem to be misused which made Facebook deprecate and replace them. These are the soon to be deprecated lifecycle methods and the new ones.

To be deprecated:
- ComponentWillMount - Use `ComponentDidMount` instead
- ComponentWillUpdate - Use `ComponentDidUpdate` instead
- ComponentWillReceiveProps - Use the new `static getDeprivedStateFromProps` instead

But we do not need to be lonely because `ComponentWillUnmount` will stay

New lifecycle methods:
- `getDeprivedStateFromProps`
- `getSnapShotBeforeUpdate`

And there are more ways to implement refs now. Here is a quick overview:
- Legacy string refs (Will get deprecated)
- Callback refs (For advanced cases)
- Object refs (For most cases)
- Forward refs (To access nested elements)

[Read more about the new lifecycles here][react-blog-lifecycles]

[Watch the talk here][manjula-dube]


# Fourth talk: Mixed Mode React
### By *Ken Wheeler* from Formidable

[Watch the talk here][ken-wheeler]


The awesome people at React Amsterdam have recorded all the talks which you can find here:
- [General Track](https://www.youtube.com/watch?v=smBND2pwdUE&t=18146s)
- [React Native Track](https://www.youtube.com/watch?v=N-X3Z5A-pW4)

*Yes I wrote this a month after the conference*

[kristijan-ristovski]: https://www.youtube.com/watch?v=Q54YDGC_t3Y
[richard-threlkeld]: https://www.youtube.com/watch?v=P_mGa91wZ4o
[manjula-dube]: https://www.youtube.com/watch?v=gb2gXX7xiAM
[ken-wheeler]: https://www.youtube.com/watch?v=PBpugV5l90c


[unstated]: https://github.com/jamiebuilds/unstated
[react-blog-lifecycles]: https://reactjs.org/blog/2018/03/29/react-v-16-3.html