import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About Who',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'about',
    },
  },
})
