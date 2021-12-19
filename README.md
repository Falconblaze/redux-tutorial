# Redux Tutorial
This is a simple counter application created in order to learn the basics of React Redux. Here I have used Redux in modern functional components as well as class based components so that one can make use of this tool using their preferred way OR simply make sense of a code that has been already written before.

## Installation and Setup
Make sure you have node installed in your machine. Then, run the following commands:
- `git clone https://github.com/Falconblaze/redux-tutorial.git`
- `cd redux-tutorial`
- `npm install`
- `npm start`

## How does Redux work ?
- In Redux we have **one central data store** for the components.
- Components need to **subscribe** to the redux Store. After that, when there is any change in the state, the store notifies the **subscribed** components.
- Components can **NEVER** directly change the data in the Store.
- For updating store data, we need **reducer functions**.
- Components **dispatch** actions that a reducer should perform.
- These actions are then forwarded to the reducer.
- Reducer then does what the action wants.
- Finally, reducer spits out a new state which replaces the old state.
- Subscribed components are then notified so that they can update their UI.
