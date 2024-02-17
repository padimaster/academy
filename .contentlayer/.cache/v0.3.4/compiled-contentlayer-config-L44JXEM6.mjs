// contentlayer.config.js
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import { type } from "os";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishAt: {
      type: "date",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: true
    },
    isPublished: {
      type: "boolean",
      default: true
    },
    author: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.filePath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentPath: "content",
  documentTypes: [Blog]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-L44JXEM6.mjs.map
