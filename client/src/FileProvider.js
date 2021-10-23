import {
  ApolloProvider as Provider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:4000/",
  }),
  cache: new InMemoryCache()
});

export default function FileProvider(props) {
  return <Provider client={client} {...props} />;
}
