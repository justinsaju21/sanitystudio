import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            description: 'Used for Gateway cards and SEO summaries',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Detailed Content',
            type: 'blockContent',
            description: 'Full project details for the Projects Hub detail page',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'VLSI / Hybrid', value: 'vlsi' },
                    { title: 'Embedded', value: 'embedded' },
                    { title: 'Virtual Labs', value: 'virtual-labs' },
                    { title: 'Web Apps', value: 'web-apps' },
                    { title: 'Digital Circuits', value: 'circuits' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'github',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'streamlit',
            title: 'Streamlit Demo URL',
            type: 'url',
        }),
        defineField({
            name: 'tinkercad',
            title: 'TinkerCAD URL',
            type: 'url',
        }),
        defineField({
            name: 'external',
            title: 'External Link',
            type: 'url',
            description: 'Any other external link (documentation, Canva, etc.)',
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Show in featured section',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower number = higher priority',
            initialValue: 99,
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Title A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
        },
        prepare({ title, category }) {
            return {
                title,
                subtitle: category?.toUpperCase().replace('-', ' ') || 'No category',
            }
        },
    },
})
