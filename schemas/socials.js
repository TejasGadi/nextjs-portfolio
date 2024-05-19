import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Url',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'Github Url',
      type: 'string',
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
    }),
    defineField({
        name: 'instagram',
        title: 'Instagram Url',
        type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contact No',
      type: 'string',
    }),
  ],
})
