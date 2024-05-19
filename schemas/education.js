import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "institute",
      title: "Institute",
      type: "string",
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
    }),
    defineField({
      name: "instituteLogo",
      title: "Institute Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MMMM, YYYY",
      },
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MMMM, YYYY",
      },
    }),
    defineField({
      name: "cgpa",
      title: "CGPA",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "institute",
    },
  },
});
