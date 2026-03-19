import { PortableTextComponents } from "next-sanity";

export const components: PortableTextComponents = {
  block: {
    // Customize normal paragraphs
    normal: ({ children }) => <p className="mb-2">{children}</p>,
    // h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    // h2: ({ children }) => (
    //   <h2 className="text-2xl font-semibold">{children}</h2>
    // ),
    // etc...
  },
  // marks: {
  //   strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  //   em: ({ children }) => <em className="italic">{children}</em>,
  //   code: ({ children }) => (
  //     <code className="bg-gray-100 px-1 rounded">{children}</code>
  //   ),
  //   // custom marks here
  // },
};
