webpackJsonp([0xa65cea08cdf1],{344:function(e,t){e.exports={data:{markdownRemark:{html:'<p>draft</p>\n<p>All of the sudden I had the opportunity to got to React Amsterdam albeit just for a few hours. In this short article I will talk about the four talks I was able to attend and what I have learned from them. I will quickly go over the talks I have attended and my take-aways.</p>\n<p><em>React Amsterdam was on the 13th of April 2018</em></p>\n<h1>First talk: React State Management in a GraphQL Era</h1>\n<h6>By <em>Kristijan Ristovski</em> from ReactAcademy</h6>\n<p>The day started great with Kristijan, also known as Kitze, giving a great talk about state management libraries and how they might be unnecessary with GraphQL in the scene.\nAfter a light-hearted intro he gave a short overview about the difference between REST and GraphQL. Namely that REST is dependent on the back-end and needs many API calls to many end-points or with GraphQL which combines everything in one query and giving the power to the client who can define what data it needs.</p>\n<p>He continued about how GraphQL can be our solution for state management, which is simpler than redux and mobx. Kitze explains that fixing the REST apis would effect into fixing the state management. And helps us choose wether we actualy need state management library when we are using GraphQL by giving us examples of stacks which can be used.</p>\n<blockquote>\n<p>Redux is a great library, however it is overhyped and overused by many, as Dan Abramov (Creator of Redux) said himself. </p>\n</blockquote>\n<p>New technologies keep comming up and dissapearing, so instead of always asking <em>What is better?</em> we should ask ourselves:</p>\n<ul>\n<li>What is suitable for my app</li>\n<li>What is suitable for my team</li>\n<li>What is suitable for our use-case</li>\n</ul>\n<blockquote>\n<p>GraphQL is the thing that’s eventually gonna replicate REST, but you keep telling yourself that you don’t need to learn it.</p>\n</blockquote>\n<p><a href="https://www.youtube.com/watch?v=Q54YDGC_t3Y">Watch the talk here</a></p>\n<h1>Second talk: GraphQL at scale with AWS</h1>\n<h6>By <em>Richard Threlkeld</em> from Amazon</h6>\n<p><a href="https://www.youtube.com/watch?v=P_mGa91wZ4o">Watch the talk here</a></p>\n<h1>Third talk: Rethinking With React 16</h1>\n<h6>By <em>Manjula Dube</em> from Bookmyshow</h6>\n<p>Manjula talked about what React 16(.3) brings to the world. These are my take-aways from this talk.</p>\n<p>We won\'t be getting async rendering with React 16 sadly enough, but there is no need to wrap all the components with dirty divs anymore.\nWhy? because we can now use the <code>&#x3C;Fragment></code> tag instead. </p>\n<p>What is really exiting is the Context API which can replace redux/mobx for smaller apps. Say goodbye to unnecessary boilerplace for a hambureger menu! I am looking at you Redux. Use cases for the Context API: you can reduce props drilling, for data flow (Check: <a href="https://github.com/jamiebuilds/unstated">Unstated</a>), for theming.</p>\n<p>The deprecation of lifecycle methods. Some of the lifecycle methods seem to be misused which made Facebook deprecate and replace them. These are the soon to be deprecated lifecycle methods and the new ones.</p>\n<p>To be deprecated:</p>\n<ul>\n<li>ComponentWillMount - Use <code>ComponentDidMount</code> instead</li>\n<li>ComponentWillUpdate - Use <code>ComponentDidUpdate</code> instead</li>\n<li>ComponentWillReceiveProps - Use the new <code>static getDeprivedStateFromProps</code> instead</li>\n</ul>\n<p>But we do not need to be lonely because <code>ComponentWillUnmount</code> will stay</p>\n<p>New lifecycle methods:</p>\n<ul>\n<li><code>getDeprivedStateFromProps</code></li>\n<li><code>getSnapShotBeforeUpdate</code></li>\n</ul>\n<p>And there are more ways to implement refs now. Here is a quick overview:</p>\n<ul>\n<li>Legacy string refs (Will get deprecated)</li>\n<li>Callback refs (For advanced cases)</li>\n<li>Object refs (For most cases)</li>\n<li>Forward refs (To access nested elements)</li>\n</ul>\n<p><a href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html">Read more about the new lifecycles here</a></p>\n<p><a href="https://www.youtube.com/watch?v=gb2gXX7xiAM">Watch the talk here</a></p>\n<h1>Fourth talk: Mixed Mode React</h1>\n<h6>By <em>Ken Wheeler</em> from Formidable</h6>\n<p><a href="https://www.youtube.com/watch?v=PBpugV5l90c">Watch the talk here</a></p>\n<p>The awesome people at React Amsterdam have recorded all the talks which you can find here:</p>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=smBND2pwdUE&#x26;t=18146s">General Track</a></li>\n<li><a href="https://www.youtube.com/watch?v=N-X3Z5A-pW4">React Native Track</a></li>\n</ul>\n<p><em>Yes I wrote this a month after the conference</em></p>',frontmatter:{date:"May 23, 2018",path:"/react-amsterdam-2018",title:"Short visit at React Amsterdam"}}},pathContext:{}}}});
//# sourceMappingURL=path---react-amsterdam-2018-7194ac10a62ec53b4d62.js.map