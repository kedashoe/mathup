import transforms from "./transforms/index.js";

export default function transformer(options) {
  return function transform(node) {
    const transformNode = transforms.get(node.type);

    if (!transformNode) {
      return null;
    }

    return transformNode(node, transform, options);
  };
}
