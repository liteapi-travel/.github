// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "articles-docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    author: {
      type: "string"
    },
    date: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypePrism
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-EHUEZ4J2.mjs.map
