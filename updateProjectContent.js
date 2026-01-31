const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '../../gateway/.env.local' })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2024-01-01',
})

const generateContent = (project) => {
    const blocks = []

    // Helper to add a header
    const addHeader = (text) => {
        blocks.push({
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text }],
            markDefs: []
        })
    }

    // Helper to add a paragraph
    const addParagraph = (text) => {
        blocks.push({
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text }],
            markDefs: []
        })
    }

    // 1. Overview (Generic but tailored slightly)
    addHeader('Project Overview')
    addParagraph(`This project, "${project.title}", focuses on ${project.category} solutions. It demonstrates practical application of ${project.tags ? project.tags.join(', ') : 'modern engineering concepts'} to solve real-world problems.`)
    if (project.description) {
        addParagraph(project.description)
    }

    // 2. Key Features (Generated based on data)
    addHeader('Key Features')
    const features = [
        `Optimized for ${project.category === 'vlsi' ? 'low power and area efficiency' : 'performance and reliability'}`,
        `Implements core principles of ${project.tags ? project.tags[0] : 'engineering'}`,
        `Modular design allowing for future scalability`,
        `Real-world simulation and strict testing protocols`
    ]

    // Create a proper bullet list for features
    features.forEach(feature => {
        blocks.push({
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: feature }],
            markDefs: []
        })
    })

    // 3. Technical Implementation
    addHeader('Technical Implementation')
    addParagraph(`The system is built using ${project.tags ? project.tags.join(' and ') : 'industry-standard tools'}. Key challenges included optimizing the logic for speed and ensuring component compatibility, which were resolved through iterative testing and design refinement.`)

    // 4. Conclusion
    addHeader('Conclusion')
    addParagraph(`"${project.title}" stands as a testament to efficient design in the field of ${project.category}. It successfully meets all performance metrics and serves as a solid foundation for advanced research in this domain.`)

    return blocks
}

const updateProjects = async () => {
    try {
        console.log('Fetching projects...')
        const projects = await client.fetch('*[_type == "project"]')

        console.log(`Found ${projects.length} projects. Updating content...`)

        for (const project of projects) {
            const content = generateContent(project)

            await client
                .patch(project._id)
                .set({ body: content })
                .commit()

            console.log(`✅ Updated: ${project.title}`)
        }

        console.log('🎉 All projects updated with detailed content!')
    } catch (error) {
        console.error('Update failed:', error.message)
    }
}

updateProjects()
