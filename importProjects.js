
const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '../../gateway/.env.local' });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qv90wwvq',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.SANITY_API_TOKEN, // Needs a write token, will ask user for it or instructions
    apiVersion: '2024-01-21',
    useCdn: false,
});

const projects = [
    // VLSI
    {
        title: "Hybrid Approximate Multiplier",
        description: "Verilog implementation of hybrid approximate multiplier for low-power computing applications. Optimized for area and power efficiency.",
        category: "vlsi",
        tags: ["Verilog", "VLSI", "Low Power", "Research"],
        github: "https://github.com/justinsaju21/Hybrid_Approximate_Multiplier",
        order: 1
    },
    {
        title: "Stick Diagram Painter",
        description: "Tool for creating VLSI stick diagrams for circuit layout visualization. Assists in understanding physical design rules.",
        category: "vlsi",
        tags: ["Python", "VLSI", "Physical Design", "Visualization"],
        github: "https://github.com/justinsaju21/stick-diagram-painter",
        streamlit: "https://justinsaju21-stick-diagram-painter-1--home-uunyi2.streamlit.app/",
        order: 2
    },
    {
        title: "CMOS Switch & Duality Visualizer",
        description: "Interactive web application for deep-dive visualization into Static CMOS Logic and CMOS Duality. Essential lab tool for ECE students.",
        category: "vlsi",
        tags: ["Python", "Streamlit", "VLSI", "Education"],
        github: "https://github.com/justinsaju21/CMOS-Switch-Translator-Duality-Conduction-Visualizer",
        streamlit: "https://justinsaju21-cmos-switch-translator-duality-conducti-app-akx8f0.streamlit.app/",
        order: 3
    },
    // Embedded
    {
        title: "LiFi Technology",
        description: "Award-winning project demonstrating Visible Light Communication (VLC). 1st Place at TECHKNOW 2023-24.",
        category: "embedded",
        tags: ["LiFi", "VLC", "Research", "Hardware"],
        external: "https://www.canva.com/design/DAGz9JnPRWQ/uUnP_neB6SjSLBD8HjPErg/edit",
        featured: true,
        order: 4
    },
    {
        title: "5x5x5 LED Matrix Display",
        description: "3D LED cube display with custom animations and patterns. Hardware project using Arduino/ESP.",
        category: "embedded",
        tags: ["C++", "Arduino", "LED Matrix", "Hardware"],
        github: "https://github.com/justinsaju21/5x5x5_Led_Matrix_Display",
        order: 5
    },
    {
        title: "MQ3 Alcohol Sensor Monitor",
        description: "Alcohol detection system with real-time monitoring via Blynk cloud platform.",
        category: "embedded",
        tags: ["C++", "Sensors", "IoT", "Safety"],
        github: "https://github.com/justinsaju21/MQ3_Alcohol_Sensor",
        order: 6
    },
    {
        title: "Mechanical Moving Chessboard",
        description: "Real-time remote play chessboard with moving mechanical parts. Designed in AutoCAD for cross-country gameplay.",
        category: "embedded",
        tags: ["AutoCAD", "IoT", "Mechanical", "Hardware"],
        order: 7
    },
    {
        title: "MQ2 Gas Sensor",
        description: "Gas leak detection system with alert functionality for safety applications.",
        category: "embedded",
        tags: ["C++", "Sensors", "Safety", "IoT"],
        github: "https://github.com/justinsaju21/MQ2_Gas_Sensor",
        order: 8
    },
    {
        title: "Music Player Buzzer",
        description: "Embedded music player using buzzer for melody playback with Blynk IoT integration.",
        category: "embedded",
        tags: ["C++", "Arduino", "IoT", "Blynk"],
        github: "https://github.com/justinsaju21/Music_Player_Buzzer",
        order: 9
    },
    {
        title: "DHT11 Environment Monitor",
        description: "Environmental monitoring system displaying temperature and humidity data in real-time.",
        category: "embedded",
        tags: ["C++", "DHT11", "IoT", "Monitoring"],
        github: "https://github.com/justinsaju21/DHT11_TempHumid_Monitor",
        order: 10
    },
    // Virtual Labs
    {
        title: "LogicMap Pro",
        description: "Professional Karnaugh Map solver and visualizer built with Streamlit. Simplifies Boolean algebra minimization for students.",
        category: "virtual-labs",
        tags: ["Python", "Streamlit", "Digital Logic"],
        github: "https://github.com/justinsaju21/logicmap-pro",
        streamlit: "https://justinsaju21-logicmap-pro-app-kvmnf2.streamlit.app/",
        order: 11
    },
    {
        title: "Op-Amp Deep Dive Lab",
        description: "Interactive virtual lab for understanding operational amplifier circuits and their applications.",
        category: "virtual-labs",
        tags: ["Python", "Electronics", "Simulation"],
        github: "https://github.com/justinsaju21/opamp-deep-dive-lab",
        streamlit: "https://justinsaju21-opamp-deep-dive-lab-app-hqjbjr.streamlit.app/",
        order: 12
    },
    {
        title: "Interactive CPU Lab",
        description: "Hands-on CPU architecture simulation for Computer Organization and Architecture studies.",
        category: "virtual-labs",
        tags: ["Python", "CPU", "Architecture"],
        github: "https://github.com/justinsaju21/interactive-cpu-lab",
        streamlit: "https://justinsaju21-interactive-cpu-lab-home-hqfnek.streamlit.app/",
        order: 13
    },
    // Web Apps
    {
        title: "Photobooth Mailer",
        description: "Vintage-style web photobooth that captures photos and emails them directly to users.",
        category: "web-apps",
        tags: ["Python", "Streamlit", "Email", "Camera"],
        github: "https://github.com/justinsaju21/photobooth-mailer",
        streamlit: "https://justinsaju21-photobooth-mailer-main-l2yfdj.streamlit.app/",
        order: 14
    },
    {
        title: "Card Game / Card Selector Pro",
        description: "Interactive card-based game with professional selection process features.",
        category: "web-apps",
        tags: ["Python", "Streamlit", "Games"],
        github: "https://github.com/justinsaju21/card_game",
        streamlit: "https://cardgame-gn3aenokejqqn9wsd7odfn.streamlit.app/",
        order: 15
    },
    {
        title: "Cake App",
        description: "Online cake ordering platform with custom cake builder and order management.",
        category: "web-apps",
        tags: ["Python", "Streamlit", "E-commerce"],
        github: "https://github.com/justinsaju21/cake_app",
        streamlit: "https://cakeapp-rgfejhbe4wunz58scnz3fp.streamlit.app/",
        order: 16
    },
    // Circuits
    {
        title: "4x4x4 LED Matrix Display",
        description: "3D LED cube display simulation with Arduino controlling 64 LEDs in a matrix configuration.",
        category: "circuits",
        tags: ["TinkerCAD", "Arduino", "LED Matrix", "Simulation"],
        tinkercad: "https://www.tinkercad.com/things/lQ8bzgYgQfN-4x4x4-led-matrix-display",
        order: 17
    },
    {
        title: "4-Bit Adder",
        description: "Full adder circuit implementation for 4-bit binary addition using logic gates.",
        category: "circuits",
        tags: ["TinkerCAD", "Digital Logic", "Adder", "Gates"],
        tinkercad: "https://www.tinkercad.com/things/aSvIQRK2Oic-4-bit-adder",
        order: 18
    },
];

async function importData() {
    console.log('Starting import of', projects.length, 'projects...');

    // Fetch the author ID for "Justin" (or the first author found)
    const authorQuery = '*[_type == "author"][0]._id';
    const authorId = await client.fetch(authorQuery);

    if (!authorId) {
        console.error("❌ No author found in Sanity! Please create an author first.");
        return;
    }
    console.log(`👤 Assigning projects to Author ID: ${authorId}`);

    for (const project of projects) {
        const doc = {
            _type: 'project',
            title: project.title,
            slug: {
                _type: 'slug',
                current: project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
            },
            author: {
                _type: 'reference',
                _ref: authorId
            },
            description: project.description,
            category: project.category,
            tags: project.tags,
            github: project.github,
            streamlit: project.streamlit,
            tinkercad: project.tinkercad,
            external: project.external,
            featured: project.featured || false,
            order: project.order
        };

        try {
            const res = await client.create(doc);
            console.log(`✅ Created: ${project.title} (ID: ${res._id})`);
        } catch (err) {
            console.error(`❌ Failed to create ${project.title}:`, err.message);
        }
    }
    console.log('Import complete!');
}

importData();
