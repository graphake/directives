- [The Goal](#the-goal)
- [Functionality](#functionality)
  - [Filed declarations](#filed-declarations)

# The Goal

This repository captures the declarative syntax for GraphQL schema directives that power the creation of the server with dummy data.

- This repository only encapsulates graphake's syntax guidelines and does not include the implementation.
- This repository is in progress and is not ready for use yet.

# Functionality

In this section you see the different use-cases of the graphake syntax.

## Filed declarations 

When you do not specify any configuration on a type declaration, graphake will try and create the data based on the specified type.

```gql
type Post {
  id: ID!
  title: String!
}
```

This automatically creates the following records in the backend. For example:

```json
{
  "postCollection": [
    {"id":  "4b53c968-ccca-43ad-984e-c28b90709654", "title": "Lorem ipsum dolor" },
    {"id":  "bbc7f463-40a6-4c95-8ae1-273848759485", "title": "totam rem aperiam" }
  ]
}
```

This is the same as declaring this in your scheme:

```gql
type Post @generate(times: 2) {
  id: ID! @fake(string: "UUID")
  title: String! @fake(string: {ipsum: {word: 3}})
}
```
This means that create me a couple of post objects which have UUID for `id` and for `title` put a random string containing 3 words.