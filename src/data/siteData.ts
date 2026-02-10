import type {
  NavLink,
  StatItem,
  ServiceItem,
  Product,
  TeamMember,
  Testimonial,
  TimelineEvent,
  Partner,
  BlogPost,
  SDGGoal,
  ContactInfo,
  Program,
} from "@/types";

export const siteConfig = {
  name: "Wezesha Industries",
  tradingAs: "The Above Ground Mining Project",
  tagline: "Wezesha, the seedbed for tomorrow's green and inclusive industries",
  registration: "PBC 362/2022",
  description:
    "Empowering women and youth through inclusive, decent, gender-centric green entrepreneurship in Bulawayo, Zimbabwe.",
  url: "https://wezeshaindustries.com",
  ogImage: "/images/og-image.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Products", href: "/products" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const impactStats: StatItem[] = [
  {
    value: 125,
    suffix: "+",
    label: "Members in Green Production Hubs",
    icon: "users",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Impact",
    icon: "calendar",
  },
  {
    value: 6000,
    suffix: "+",
    label: "People Reached Through Programs",
    icon: "globe",
  },
  {
    value: 120,
    suffix: "+",
    label: "Trained in Green Skills",
    icon: "graduation-cap",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Green Hustler-Preneur Training",
    description:
      "Empowering individuals with skills to launch and grow green businesses that contribute to a circular economy.",
    icon: "sprout",
    href: "/what-we-do#training",
  },
  {
    title: "Recycling as a Business",
    description:
      "Teaching communities how to transform waste into valuable products and sustainable income streams.",
    icon: "recycle",
    href: "/what-we-do#recycling",
  },
  {
    title: "Eco-Broom Production",
    description:
      "Training in the production of eco-friendly brooms from recycled materials, creating green livelihoods.",
    icon: "leaf",
    href: "/what-we-do#eco-broom",
  },
  {
    title: "Green Business Mentorship",
    description:
      "One-on-one guidance and support for aspiring green entrepreneurs to build sustainable enterprises.",
    icon: "handshake",
    href: "/what-we-do#mentorship",
  },
  {
    title: "Market Linkages",
    description:
      "Connecting green product producers with markets, buyers, and distribution channels for growth.",
    icon: "link",
    href: "/what-we-do#markets",
  },
  {
    title: "Movement Building",
    description:
      "Building a collective force of green economy advocates and practitioners across Zimbabwe.",
    icon: "megaphone",
    href: "/what-we-do#movement",
  },
  {
    title: "Agro-Produce Value Addition",
    description:
      "Training in adding value to agricultural produce through sustainable processing techniques.",
    icon: "wheat",
    href: "/what-we-do#agro",
  },
  {
    title: "Green Value Chain Consultancy",
    description:
      "Expert advisory services on building sustainable and inclusive green value chains.",
    icon: "briefcase",
    href: "/what-we-do#consultancy",
  },
  {
    title: "Contract Drafting",
    description:
      "Professional contract drafting services for green businesses and social enterprises.",
    icon: "file-text",
    href: "/what-we-do#contracts",
  },
];

export const products: Product[] = [
  {
    id: "eco-broom",
    name: "The Eco-Broom",
    description:
      "Our flagship product — a durable, eco-friendly broom handcrafted from recycled PET bottles and locally sourced grass. Each Eco-Broom diverts plastic waste from landfills while providing dignified employment to women in our production hubs. Built to last, gentle on surfaces, and kind to the planet.",
    shortDescription:
      "Handcrafted eco-friendly broom made from recycled PET bottles and local grass.",
    price: "Contact for pricing",
    image: "/images/products/ecobroom.jpg",
    category: "Cleaning",
    featured: true,
    impact:
      "Each broom diverts approximately 15 PET bottles from landfills and supports a woman artisan.",
  },
  {
    id: "recycled-plasticware",
    name: "Recycled Plasticware",
    description:
      "A range of practical household items made from recycled plastic waste. These products demonstrate the value locked within discarded materials and showcase the potential of circular economy principles.",
    shortDescription:
      "Practical household items made from recycled plastic waste.",
    image: "/images/products/plasticware.jpg",
    category: "Household",
  },
  {
    id: "bin-liners",
    name: "Bin Liners",
    description:
      "Durable bin liners produced through our recycling processes. An everyday essential that supports sustainable waste management and green employment.",
    shortDescription:
      "Durable bin liners produced through sustainable recycling.",
    image: "/images/products/bin-liners.jpg",
    category: "Waste Management",
  },
  {
    id: "refuse-bins",
    name: "Refuse Bins",
    description:
      "Sturdy refuse bins designed for community and household waste collection. Made with sustainability in mind, supporting proper waste segregation and management.",
    shortDescription:
      "Sturdy refuse bins for community and household waste collection.",
    image: "/images/products/refusebins.jpg",
    category: "Waste Management",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Sinqobile Ndlovu",
    role: "Founder & Executive Director",
    bio: "Sinqobile is a passionate social entrepreneur and green economy advocate with over a decade of experience empowering women and youth through sustainable livelihoods. She founded Wezesha Industries with a vision to transform waste into wealth and build inclusive green enterprises across Zimbabwe.",
    image: "/images/team/sinqobile-ndlovu.jpg",
    linkedin: "https://www.linkedin.com/in/sinqobile-ndlovu",
    email: "admin@wezeshaindustries.com",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Wezesha Industries changed my life. I went from collecting waste to owning my own eco-broom business. Now I can provide for my family with dignity.",
    author: "Thandiwe M.",
    role: "Eco-Broom Producer",
    location: "Bulawayo",
  },
  {
    quote:
      "The green hustler-preneur training opened my eyes to the opportunities in recycling. I never knew trash could be turned into treasure.",
    author: "Nomsa K.",
    role: "Green Entrepreneur",
    location: "Bulawayo",
  },
  {
    quote:
      "As a young person, Wezesha gave me the skills and confidence to start my green business. The mentorship program was exactly what I needed.",
    author: "Tendai C.",
    role: "Youth Entrepreneur",
    location: "Bulawayo",
  },
  {
    quote:
      "The community level-up campaign brought real change to our neighbourhood. We now see waste differently — as a resource, not rubbish.",
    author: "MaZulu S.",
    role: "Community Leader",
    location: "Bulawayo",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2013",
    title: "The Beginning",
    description:
      "Founded as an informal community recycling initiative in Bulawayo, driven by the vision of turning waste into livelihoods for women.",
  },
  {
    year: "2015",
    title: "First Training Programs",
    description:
      "Launched the first green skills training programs targeting women and youth in Bulawayo's high-density suburbs.",
  },
  {
    year: "2017",
    title: "Eco-Broom Innovation",
    description:
      "Developed the signature Eco-Broom product — transforming recycled PET bottles and local grass into a marketable household product.",
  },
  {
    year: "2019",
    title: "Movement Building",
    description:
      "Expanded from production to movement building, launching the 'Treasure in Trash' schools competition to inspire the next generation.",
  },
  {
    year: "2022",
    title: "Official Registration",
    description:
      "Formally registered as Wezesha Industries (PBC 362/2022), marking a new chapter of growth and professional operations.",
  },
  {
    year: "2023",
    title: "Scaling Impact",
    description:
      "Grew to 125+ members across multiple green production hubs, reaching over 6,000 people through programs and campaigns.",
  },
  {
    year: "2024",
    title: "National Recognition",
    description:
      "Gained recognition as a leading social enterprise in Zimbabwe's green economy, partnering with international organisations.",
  },
];

export const partners: Partner[] = [
  { name: "Women Win", logo: "/images/partners/women-win.png" },
  { name: "JCI Zimbabwe", logo: "/images/partners/jci-zimbabwe.png" },
  {
    name: "Bertha Centre for Social Innovation",
    logo: "/images/partners/bertha-centre.png",
  },
  { name: "British Council", logo: "/images/partners/british-council.png" },
  { name: "UNDP Zimbabwe", logo: "/images/partners/undp.png" },
  {
    name: "Embassy of Netherlands",
    logo: "/images/partners/netherlands-embassy.png",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Turning Trash into Treasure: The Story of the Eco-Broom",
    excerpt:
      "How recycled PET bottles and local grass are being transformed into a sustainable household product that empowers women in Bulawayo.",
    content: "",
    image: "/images/blog/eco-broom-story.jpg",
    date: "2024-03-15",
    author: "Sinqobile Ndlovu",
    category: "Success Stories",
    tags: ["recycling", "eco-broom", "women empowerment"],
    slug: "turning-trash-into-treasure",
  },
  {
    id: "2",
    title: "Youth in the Green Economy: Why It Matters",
    excerpt:
      "Exploring how young Zimbabweans are finding opportunity and purpose through green entrepreneurship and the circular economy.",
    content: "",
    image: "/images/blog/youth-green-economy.jpg",
    date: "2024-02-28",
    author: "Sinqobile Ndlovu",
    category: "Green Economy",
    tags: ["youth", "green economy", "entrepreneurship"],
    slug: "youth-in-green-economy",
  },
  {
    id: "3",
    title: "Treasure in Trash: Schools Competition 2024",
    excerpt:
      "Our annual schools competition is back, challenging students to innovate with waste and discover the value in what we discard.",
    content: "",
    image: "/images/blog/treasure-in-trash.jpg",
    date: "2024-01-20",
    author: "Wezesha Team",
    category: "Events",
    tags: ["schools", "competition", "youth", "recycling"],
    slug: "treasure-in-trash-2024",
  },
];

export const sdgGoals: SDGGoal[] = [
  {
    number: 1,
    title: "No Poverty",
    description: "Creating sustainable livelihoods for marginalised communities.",
    color: "#E5243B",
  },
  {
    number: 5,
    title: "Gender Equality",
    description:
      "Empowering women through green entrepreneurship and leadership.",
    color: "#FF3A21",
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    description:
      "Providing dignified employment in the green economy.",
    color: "#A21942",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description: "Building inclusive enterprises that leave no one behind.",
    color: "#DD1367",
  },
  {
    number: 11,
    title: "Sustainable Cities",
    description:
      "Making communities cleaner and more sustainable through recycling.",
    color: "#FD9D24",
  },
  {
    number: 12,
    title: "Responsible Consumption",
    description:
      "Promoting circular economy principles and sustainable production.",
    color: "#BF8B2E",
  },
  {
    number: 13,
    title: "Climate Action",
    description: "Reducing waste and emissions through green practices.",
    color: "#3F7E44",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "Collaborating with partners to multiply our impact.",
    color: "#19486A",
  },
];

export const contactInfo: ContactInfo = {
  factory: {
    address: "Kelvin Light Industries, Khami Road",
    city: "Bulawayo, Zimbabwe",
    coordinates: { lat: -20.1525, lng: 28.5667 },
  },
  trainingCentre: {
    address: "9th Avenue Extension, S. Parirenyatwa",
    city: "Bulawayo, Zimbabwe",
    coordinates: { lat: -20.1467, lng: 28.58 },
  },
  email: "info@wezeshaindustries.com",
  phone: "+263 775 182 522",
  contactPerson: {
    name: "Sinqobile Ndlovu",
    email: "admin@wezeshaindustries.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/wezesha-industries/",
    facebook: "https://www.facebook.com/WezeshaIndustries/",
    youtube: "https://www.youtube.com/@abovegroundmining5010",
  },
};

export const programs: Program[] = [
  {
    title: "Treasure in Trash Schools Competition",
    description:
      "An annual inter-school competition challenging students to create innovative products from waste materials, fostering environmental consciousness and creativity from a young age.",
    target: "Primary and secondary school students",
  },
  {
    title: "Community Level Up Campaign",
    description:
      "A grassroots campaign mobilising communities to adopt sustainable waste management practices, recycling, and green livelihood strategies.",
    target: "Community members in high-density suburbs",
  },
  {
    title: "Green Art & Craft Lessons",
    description:
      "Creative workshops teaching participants to transform waste materials into art, crafts, and functional items — blending creativity with sustainability.",
    target: "Women, youth, and community groups",
  },
];

export const values = [
  {
    title: "Inclusiveness",
    description:
      "We believe in creating opportunities for everyone, regardless of background, gender, or ability.",
    icon: "heart",
  },
  {
    title: "Ubuntu",
    description:
      "I am because we are. We thrive through community, solidarity, and mutual support.",
    icon: "users",
  },
  {
    title: "Mutual Respect",
    description:
      "We honour the dignity and contribution of every individual in our ecosystem.",
    icon: "shield",
  },
  {
    title: "Authenticity",
    description:
      "We stay true to our roots, our mission, and the communities we serve.",
    icon: "check-circle",
  },
  {
    title: "Innovation",
    description:
      "We constantly seek creative solutions to transform waste into value and challenges into opportunities.",
    icon: "lightbulb",
  },
  {
    title: "Partnership",
    description:
      "We believe in the power of collaboration to amplify impact and drive systemic change.",
    icon: "handshake",
  },
  {
    title: "Sustainability",
    description:
      "Everything we do is designed to create lasting positive impact for people and planet.",
    icon: "leaf",
  },
];
