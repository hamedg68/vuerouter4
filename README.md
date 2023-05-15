# vue router 4

## React to param changes
You can use `watch` to follow param changes in a page to fetch data or use `:Key="$route.path"` on `<routet-view>` to watch param changes but the difference is in second way, component recreate on every change in params.

## Route props
Decoupling our Vue.js page components from the route params via component props. Vue Router 4 provides multiple ways of doing this: from setting the props property on the route record to true and automatically passing all params as props, setting the props property to a static object to provide static props, or setting it to a function that returns the desired props.

Setting the route records props property to a function is the most versatile. It allows you to cast parameters into other types, combine static values with route-based values, and much more.

It is important to note that whatever is returned from the props function is all of the props that will be passed to the component

## Transition
For the transition component to apply the proper classes to each page, all the pages need to have a single root element.

## Route Guards
There are a number of ways to hook into the route navigation process
1. globally
2. per-route
3. in-component

`tip:`
If we want to keep the wrong URL when navigate to 404 not found page, we can do that by returning the route record with the name not found

## Query Params
Query params can be used for a number of different things, including storing search parameters for a search results page or, in our case, storing the path of a route to redirect to after user login.

## Named Views
Using named views in order to compose custom layouts per route.