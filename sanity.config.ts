import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Justin Blog',

  projectId: 'qv90wwvq',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(S.documentTypeListItems()),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
