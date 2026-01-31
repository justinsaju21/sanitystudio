import { defineConfig } from 'sanity'
import { structureTool, type StructureBuilder } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Justin Blog',

  projectId: 'qv90wwvq',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content Studio')
          .items([
            // 1. Projects Section
            S.listItem()
              .title('Projects')
              .child(
                S.list()
                  .title('Projects')
                  .items([
                    S.listItem()
                      .title('All Projects')
                      .schemaType('project')
                      .child(S.documentTypeList('project').title('All Projects')),
                    S.listItem()
                      .title('Projects by Author')
                      .child(
                        S.documentTypeList('author')
                          .title('Select Author')
                          .child((authorId: string) =>
                            S.documentList()
                              .title('Projects')
                              .filter('_type == "project" && author._ref == $authorId')
                              .params({ authorId })
                          )
                      )
                  ])
              ),

            S.divider(),

            // 2. Blog Posts Section
            S.listItem()
              .title('Blog Posts')
              .child(
                S.list()
                  .title('Blog')
                  .items([
                    S.listItem()
                      .title('All Posts')
                      .schemaType('post')
                      .child(S.documentTypeList('post').title('All Posts')),
                    S.listItem()
                      .title('Posts by Author')
                      .child(
                        S.documentTypeList('author')
                          .title('Select Author')
                          .child((authorId: string) =>
                            S.documentList()
                              .title('Posts')
                              .filter('_type == "post" && author._ref == $authorId')
                              .params({ authorId })
                          )
                      )
                  ])
              ),

            S.divider(),

            // 3. Management (Authors, Categories)
            S.listItem()
              .title('Management')
              .child(
                S.list()
                  .title('Management')
                  .items([
                    S.listItem()
                      .title('Authors')
                      .schemaType('author')
                      .child(S.documentTypeList('author').title('Authors')),
                    S.listItem()
                      .title('Categories')
                      .schemaType('category')
                      .child(S.documentTypeList('category').title('Categories')),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
