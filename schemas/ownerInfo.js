import { defineField, defineType } from "sanity";

export default defineType({
  name: "ownerInfo",
  title: "Owner Information",
  type: "document",
  fields: [
    defineField({
      name: "firstname",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastname",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "headerline",
      title: "Header Line",
      type: "string",
    }),
    defineField({
      name: "abouttext",
      title: "About Text",
      type: "text",
    }),
    defineField({
      name: "contacttext",
      title: "Contact Text",
      type: "text",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
  ],
});
