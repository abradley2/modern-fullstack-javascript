# React + Backbone Boilerplate

This boilerplate is ideal for web applications with high levels of interactivity
(No need to bring in React for blogs). Backbone handles the data layer, and also
provides the routing solution. React is in charge of the display and interaction
layer. These two pieces work very well with each other.

This is mainly focused on the client so the server side is extremely
minimal, while client side is quite opinionated.

# The display hierarchy

### Layouts

Layouts should not have logic in them. They are purely there to control
presentation. Each layout therefore should export a jsx const.

The layout specifies "regions" by id tags on associated html elements. These
regions are then used to contain views. This is a pretty common convention.

### Views

Views are Backbone Views without jQuery use. A view at minimum is a Backbone.View
with a render and remove function. A view's lifetime is described in the ViewManager
section.

### Components

Components are class constructors that export React.Components. Pretty
self-explanatory here. These are the reusable bits that are found throughout
your views.

# Clientside routing

### Routes

### The ViewManager

This is probably the most important piece and the one I've had to put the most
code into.

1. The view is initialized from the supplied constructor. Each given factory
can only have one created instance at a time, and the new instance will only
be created when there is no currently rendered instance.
2. The view is rendered. The render function will be called
3. the view is removed. This removes the reference to the instance from the factory,
and the next time the factory is used, a new instance will be created.

The above can be a bit confusing but it is useful since oftne on re-render not
everything about a view needs to be changed. Sometimes, nothing at all needs to
be changed (such as a navbar, which is probably always present, but static).

# Data

### Methods

### Stores
