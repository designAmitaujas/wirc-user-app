import { Dimensions } from "react-native";
import Url from "url-parse";

// export const GQL_API_URL = "https://admin.wirc-icai.org/graphql";
export const GQL_API_URL =
  "https://affecting-sci-pubmed-ot.trycloudflare.com/graphql";

const parsedUrl = new Url(GQL_API_URL);

export const downloadPath = (fileName: string) =>
  `${parsedUrl.origin}/upload/${fileName}`;

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
