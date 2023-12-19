import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Discover the Indoors',
    subHeading: 'Get The Map that Goes On',
    text: 'can be like giant mazes, getting lost can cost you getting to that interview on time, finding your friends at a public place, finding the right retail outlet. Use NavMaze to discover your desired spots inside popular locations',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'THE BEST PLACE TO BE IS OUTDOORS',
    subHeading: 'Never Ask for Directions',
    features: [
        {
            title: 'Map',
            description: 'Find a clear map of routes inside listed locations.',
            icon: 'location-pin'
        },
        {
            title: 'Real Time Navigation',
            description: 'The app will track your movement in real time making it easier to find your way around the map.',
            icon: 'stopwatch-done'
        },
        {
            title: 'Rendezvous',
            description: 'Create a meeting spot with other users so they can easily arrive at the exact location.',
            icon: 'meeting'
        },
        {
            title: 'Suggestions',
            description: 'The app suggests venues you can visit based on your preferences.',
            icon: 'suggestion'
        },
    ]
}

export const brandSelectionContent = {
    heading: 'Why Choose Fight Roots',
    descriptions: [
        'Parking lots, malls and office avenues are just as complicated as the roads outside. Before you find yourself searching for someone who can offer reliable directions, or drive around multiple times to look for an empty parking spot; use the NavMaze for guidance. '
    ],
}

export const benefitsContent = {
    heading: 'Who Put All the Pins Outside?',
    text: 'Not only are you able to set meetup spots, and find your way around complicated buildings, the app lets you find friends who have difficulty navigating, know the nearest empty parking spot, and be able to find new locations that are perfect for your interests.',
    benefits: [
        {
            title: 'Pick a Genre',
            description: 'Picking a place, item, or utility you prefer allows the app to suggest places that deal in similar items.',
            icon: 'select-category'
        },
        {
            title: 'Check In',
            description: 'Check in features notifies the app you are at a location and helps optimize your experience for the duration of your visit.',
            icon: 'checkin'
        },
        {
            title: 'Share Visibility',
            description: 'Allow your friends and fellow users to be able to see your location.',
            icon: 'opened-eye'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is NavMaze Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Know Where You Are Headed No Matter Where You Are',
    text: 'Sign up for the App Today!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
