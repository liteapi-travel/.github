// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
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
      // rehypeSlug,
      // rehypePrism,
      [
        rehypePrettyCode
        // {
        //     theme: 'github-dark',
        //     onVisitLine(node) {
        //         if (node.children.length == 0) {
        //             node.children = [{ type: 'text', value:' '}]
        //         }
        //     },
        //     onVisitHighlightedWord(node) {
        //         node.properties.className = ['word--highlighted']
        //     },
        //     onVisitHighlightedLine(node) {
        //         node.properties.className = ['line--highlighted']
        //     }
        // }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MO7KPTL3.mjs.map
