# vue router 4

## React to param changes
you can use `watch` to follow param changes in a page to fetch data or use `:Key="$route.path"` on `<routet-view>` to watch param changes but the difference is in second way, component recreate on every change in params.

## Route props
decoupling our Vue.js page components from the route params via component props. Vue Router 4 provides multiple ways of doing this: from setting the props property on the route record to true and automatically passing all params as props, setting the props property to a static object to provide static props, or setting it to a function that returns the desired props.

Setting the route records props property to a function is the most versatile. It allows you to cast parameters into other types, combine static values with route-based values, and much more.

It is important to note that whatever is returned from the props function is all of the props that will be passed to the component

## Transition
for the transition component to apply the proper classes to each page, all the pages need to have a single root element.