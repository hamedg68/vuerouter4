# vue router 4

## React to param changes
you can use `watch` to follow param changes in a page to fetch data or use `:Key="$route.path"` on `<routet-view>` to watch param changes but the difference is in second way, component recreate on every change in params.