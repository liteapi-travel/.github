import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import {visit} from 'unist-util-visit'

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `${doc._raw.flattenedPath}`
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: 'articles-docs/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        author: {
            type: 'string',
        },
        date: {
            type: 'string',
        }
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: "src/content",
    documentTypes: [Doc],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "one-dark-pro",
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }]
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted")
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"]
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
        () => (tree) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "pre") {
                const [codeEl] = node.children;
       
                if (codeEl.tagName !== "code") return;
       
                node.code = codeEl.children?.[0].value;
              }
            });
          },
          () => (tree) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "div") {
                if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                  return;
                }
       
                for (const child of node.children) {
                  if (child.tagName === "pre") {
                    child.properties["code"] = node.code;
                  }
                }
              }
            });
          },
      ],
    },
  })