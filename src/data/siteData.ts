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
  tradingAs: "The Above Ground Mining Project and Eco-preneur Hub",
  tagline:
    "We are a green transition catalyst, incubator, and accelerator — producing innovative green products while teaching communities to do the same.",
  registration: "PBC 362/2022",
  description:
    "Wezesha Industries is a Zimbabwe-registered, women- and youth-led social enterprise at the forefront of Africa's green transition. We empower aspiring entrepreneurs to rapid-test and launch sustainable business models, bridging the critical gap between marginalised micro-entrepreneurs and mainstream market players.",
  url: "https://wezeshaindustries.com",
  ogImage: "/images/og-image.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/what-we-do" },
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
    label: "Active members of our green production hubs",
    icon: "users",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of inclusive impact",
    icon: "calendar",
  },
  {
    value: 500,
    suffix: "+",
    label: "Women and youths trained in green skills",
    icon: "graduation-cap",
  },
  {
    value: 4,
    prefix: "+",
    label: "Tonnes of recyclable waste diverted from landfills & converted into green products",
    icon: "recycle",
  },
];

export const services: ServiceItem[] = [
  // A. Green Technical Skills Training
  {
    title: "PET Recycling & Eco-Broom Production Training",
    description:
      "We provide technical, green skills training that equips participants with the skills to upcycle PET plastic waste into innovative products.",
    icon: "leaf",
    href: "/what-we-do#eco-broom",
  },
  {
    title: "Paper Recycling & Beadwork Innovation Training",
    description:
      "We provide technical, green skills training that equips participants with the skills to upcycle metal and paper waste into innovative products.",
    icon: "recycle",
    href: "/what-we-do#paper-recycling",
  },
  {
    title: "Greening Vocational Training",
    description:
      "We offer support to green the delivery of vocational training programs. We also work with partners to support trainees and graduates of vocational training programs to green their newly gained vocational skills.",
    icon: "graduation-cap",
    href: "/what-we-do#vocational",
  },
  // B. Green Business Incubation & Soft Skills Training
  {
    title: "Green Hustler-Preneur Training",
    description:
      "Empowering individuals with skills to launch and grow green businesses that contribute to a circular economy.",
    icon: "sprout",
    href: "/what-we-do#training",
  },
  {
    title: "Recycling as a Business Training",
    description:
      "Empowering individuals with a green entrepreneurial mindset and resources to help them take up opportunities in the recycling value chain in a manner that is decent, gainful, safe and professional.",
    icon: "briefcase",
    href: "/what-we-do#recycling",
  },
  {
    title: "Green Business Acceleration, Incubation & Mentorship",
    description:
      "We offer custom trainings, real-life hustler-preneurial simulations that help emerging entrepreneurs to monetise green skills by rapid testing and launching MVPs (basic, low cost business models). We also provide blended financing models that give entrepreneurs access to the critical resources they need to start their green businesses.",
    icon: "handshake",
    href: "/what-we-do#mentorship",
  },
  {
    title: "Agro-Produce Value Addition Training",
    description:
      "Training in adding value to agricultural produce through sustainable processing techniques, helping communities unlock new income streams.",
    icon: "wheat",
    href: "/what-we-do#agro",
  },
  {
    title: "Inclusive Value Chain Development",
    description:
      "Connecting green product producers with markets, buyers, and distribution channels — bypassing exploitative middleman structures for more equitable outcomes.",
    icon: "link",
    href: "/what-we-do#markets",
  },
  {
    title: "Ecosystem & Green Movement Building",
    description:
      "We connect with shadow and mainstream players in order to collaboratively create a conducive environment for green entrepreneurship.",
    icon: "megaphone",
    href: "/what-we-do#movement",
  },
  {
    title: "Environmental Management Trainings & Consultancy",
    description:
      "We provide custom trainings and consultancy services that help businesses to comply with environmental legal requirements, and/or to reach sustainability targets.",
    icon: "file-text",
    href: "/what-we-do#consultancy",
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
    image: "/images/gallery/boom.jpg.jpg",
    category: "Home & Lifestyle",
    featured: true,
    impact:
      "Each broom diverts approximately 15 PET bottles from landfills and supports a woman artisan.",
  },
  {
    id: "decorative-cushions",
    name: "Decorative Cushions & Soft Furnishings",
    description:
      "We put a green spin on the usual bean bag cushions and ottomans. Our soft furnishings offer the ultimate luxury while helping to divert plastic from the landfill. Our soft furnishings are made to order. Available in Small (Ottomans), Junior size, Large size, XL and custom size.",
    shortDescription:
      "Handcrafted cushions and soft furnishings made from upcycled PET waste.",
    price: "Contact for pricing",
    image: "/images/gallery/wese.jpg",
    category: "Home & Lifestyle",
    impact:
      "60-150 PET plastic bottles diverted per item. Women and Youth made. 100% Eco-friendly.",
  },
  {
    id: "designer-lamps",
    name: "Designer Lamps & Lamp Shades",
    description:
      "Our latest innovation includes a range of Lamp shades and interior décor pieces skilfully crafted from upcycled paper and metals to help make your space stand out.",
    shortDescription:
      "Unique lamps and lamp shades from upcycled metal and paper waste.",
    price: "Contact for pricing",
    image: "/images/gallery/bottledesigns.jpg.jpeg",
    category: "Interior Décor",
    impact:
      "Women and Youth made. Made from recyclable materials.",
  },
  {
    id: "upcycled-mirrors",
    name: "Upcycled Mirrors",
    description:
      "Striking mirrors with frames crafted from upcycled metal and paper waste. Each mirror is a conversation piece that blends sustainability with style — proof that waste can become something beautiful.",
    shortDescription:
      "Designer mirrors with upcycled metal and paper waste frames.",
    price: "Contact for pricing",
    image: "/images/gallery/productsposter.jpg.jpg",
    category: "Interior Décor",
    impact:
      "Repurposes metal and paper waste into premium interior décor pieces.",
  },
  {
    id: "art-supplies",
    name: "Upcycled Art Supplies",
    description:
      "Creative art supplies crafted from upcycled waste materials, designed to inspire young artists while teaching them about sustainability. Perfect for schools, art classes, and community programmes.",
    shortDescription:
      "Art supplies crafted from upcycled waste — creativity meets sustainability.",
    price: "Contact for pricing",
    image: "/images/gallery/crafting.jpg.jpg",
    category: "Creative & Educational",
    impact:
      "Transforms waste into creative tools that inspire young people to think sustainably.",
  },
  {
    id: "climate-board-game",
    name: "Climate Literacy Board Game",
    description:
      "An educational board game designed to build climate literacy in a fun, engaging way. Perfect for schools, families, and community groups — teaching the next generation about sustainability, recycling, and green economy principles.",
    shortDescription:
      "Educational board game teaching climate literacy and green economy principles.",
    price: "Contact for pricing",
    image: "/images/gallery/trainingpic.jpg.jpg",
    category: "Creative & Educational",
    impact:
      "Builds environmental awareness and climate literacy in schools and communities.",
  },
  {
    id: "recycled-plasticware",
    name: "Recycled Plasticware",
    description:
      "A range of practical household items made from recycled plastic waste. These products demonstrate the value locked within discarded materials and showcase the potential of circular economy principles.",
    shortDescription:
      "Practical household items made from recycled plastic waste.",
    image: "/images/products/plasticware.jpg",
    category: "Home & Lifestyle",
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
    bio: "Sinqobile is a passionate social entrepreneur, green economy advocate, and Bertha Scholar for Social Innovation & Entrepreneurship (University of Cape Town). She founded Wezesha Industries after over a decade of working with informal waste-pickers, co-creating the 'Above Ground Miners' identity that transformed a community's self-perception and economic trajectory. Her mission: to ensure that the least powerful can operate alongside the most powerful economic players.",
    image: "/images/gallery/groupphoto.jpg.jpg",
    linkedin: "https://www.linkedin.com/in/sinqobile-ndlovu",
    email: "admin@wezeshaindustries.com",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I am happy with the support we are getting from this business… I am no longer worried about balancing my housework with my job. I am thankful to be part of Wezesha.",
    author: "Green Production Hub Member",
    role: "Young Mother",
    location: "Bulawayo",
  },
  {
    quote:
      "Most times I am forced to choose between earning an income or taking care of our children. I am happy to be part of this business because it matches my needs.",
    author: "Eco-Broom Production Trainee",
    role: "Female Entrepreneur",
    location: "Bulawayo",
  },
  {
    quote:
      "This was very eye opening. I never thought there is income from rubbish and that there are people who depend on waste picking to feed their families!",
    author: "Female Student",
    role: "Treasure in Trash Competition Participant",
    location: "Bulawayo",
  },
  {
    quote:
      "I normally wait for buyers or walk long distances in search for markets. My products are bulky — I can only carry two or three at a time. After walking the whole day, I end up selling to whoever offers me whatever amount that will enable me to go back home with food for my children.",
    author: "Male Youth Exhibitor",
    role: "First Market Fair, Green Producer",
    location: "Bulawayo",
  },
  {
    quote:
      "We pick old clothing and socks from the dumpsite which we use for sanitary wear. We know it's not healthy, but using this allows us to carry on with our work during 'those times of the month.'",
    author: "Woman Beneficiary",
    role: "First Ngozi Mine Health Expo",
    location: "Bulawayo",
  },
  {
    quote:
      "My twins have no birth certificates. I am pained at the thought of my children growing up without being able to go to school. I have a US$200 delivery debt at a local hospital — they withheld my children's birth records. I feel hopeless because I can't see how a person like me can raise this amount.",
    author: "Young Mother, 25",
    role: "Community Member",
    location: "Bulawayo",
  },
  {
    quote:
      "The green hustler-preneur training opened my eyes to the opportunities in recycling. I never knew trash could be turned into treasure.",
    author: "Nomsa K.",
    role: "Green Entrepreneur",
    location: "Bulawayo",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2013",
    title: "The Recycling Middlemen",
    description:
      "Sinqobile Ndlovu founded The Recycling Middlemen (TRM), a registered for-profit enterprise offering recyclable waste collection services to companies in Bulawayo.",
  },
  {
    year: "2015",
    title: "A crisis of conscience",
    description:
      "During a routine collection, the TRM team encountered a scene of tragic desperation where two, male waste-pickers had fought violently over the very materials TRM was contracted to collect.",
  },
  {
    year: "2018",
    title: "Bertha Scholar for Social Innovation",
    description:
      "Witnessing the exploitation of informal waste-pickers, Sinqobile pursued postgraduate research at UCT as a Bertha Scholar, living alongside waste-pickers and co-creating the 'Above Ground Miners' identity.",
  },
  {
    year: "2019",
    title: "The Above Ground Mining Project",
    description:
      "TRM evolved into The Above Ground Mining Project (TAGMP) — an action-research pilot dedicated to building formal market linkages and dismantling negative stereotypes around waste-picking.",
  },
  {
    year: "2021",
    title: "The Birth of Wezesha",
    description:
      "Supported by a seed grant from the FREE Fund (Women Win, Netherlands), TAGMP began rapid-testing a green economy social enterprise model, training 120 young women in green skills.",
  },
  {
    year: "2022",
    title: "Official Registration",
    description:
      "Formally registered as Wezesha Industries (PBC 362/2022) after successfully incubating MVP products including eco-brooms from PET plastic waste. A new chapter of growth begins.",
  },
  {
    year: "2024",
    title: "Scaling Impact",
    description:
      "Grew to 125+ members across multiple green production hubs, reaching over 6,000 people through programs and campaigns, with international partnership recognition.",
  },
];

export const partners: Partner[] = [
  { name: "Women Win", logo: "/images/partners/Women Win.png" },
  { name: "JCI Zimbabwe", logo: "/images/partners/JCI Zimbabwe.png" },
  {
    name: "Bertha Centre for Social Innovation",
    logo: "/images/partners/Bertha Centre.png",
  },
  { name: "Ministry of Youth", logo: "/images/partners/Ministry of Youth.jpg" },
  { name: "City of Bulawayo", logo: "/images/partners/City of Bulawayo.jpg" },
  { name: "Tallinn University", logo: "/images/partners/Tallinn University.jpg" },
  { name: "University of Cape Town", logo: "/images/partners/University of Cape Town.png" },
  { name: "MDPCZ", logo: "/images/partners/MDPCZ.png" },
  { name: "Moremi Group", logo: "/images/partners/Moremi Group.jpg" },
  { name: "Women in Africa", logo: "/images/partners/Women in Africa.png" },
  { name: "AECF", logo: "/images/partners/aecf.jpg" },
  { name: "Jairos Jiri Association", logo: "/images/partners/Jairos Jiri Association.png" },
  { name: "Treger Plastics", logo: "/images/partners/Treger Plastics.png" },
  { name: "Soroptimist International", logo: "/images/partners/Soroptimist International.jpg" },
  { name: "Plan International", logo: "/images/partners/Plan International.png" },
  { name: "Let's Do It", logo: "/images/partners/Let.jpg" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Turning Trash into Treasure: The Story of the Eco-Broom",
    excerpt:
      "How recycled PET bottles and local grass are being transformed into a sustainable household product that empowers women in Bulawayo.",
    content: "",
    image: "/images/gallery/makingbroom.jpg.jpg",
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
    image: "/images/gallery/trainingphoto.jpg.jpg",
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
    image: "/images/gallery/girlpickinglitter.jpg.jpg",
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
    description:
      "Informal recyclers earn $6–$80/month. We formalise these roles and increase earning potential through value-addition and direct market access.",
    color: "#E5243B",
  },
  {
    number: 5,
    title: "Gender Equality",
    description:
      "Women represent 80%+ of the bottom recycling value chain yet earn the minimum $6/month. We create flexible, gender-centric models that accommodate female entrepreneurs.",
    color: "#FF3A21",
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    description:
      "We advocate for waste management as a productive economic sector — shifting the narrative from 'scavenging' to a respectable, dignified profession.",
    color: "#A21942",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description:
      "Middlemen earn up to $400/month while primary harvesters earn a fraction. Our 'shared value' model bypasses exploitative structures for equitable profit distribution.",
    color: "#DD1367",
  },
  {
    number: 11,
    title: "Sustainable Cities",
    description:
      "Targeting high-need areas like Ngozi Mine in Bulawayo — facilitating clean-up campaigns and creating green spaces in marginalised communities.",
    color: "#FD9D24",
  },
  {
    number: 12,
    title: "Responsible Consumption",
    description:
      "Bridging the gap between waste generators and the recycling industry, promoting separation-at-source to support Smart City development.",
    color: "#BF8B2E",
  },
  {
    number: 13,
    title: "Climate Action",
    description:
      "Waste management is a critical pillar of climate action. We reduce waste, lower emissions, and build climate literacy through education and community programmes.",
    color: "#3F7E44",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "We actively seek multi-stakeholder partnerships across government, private sector, and international NGOs to build a sustained, inclusive green movement in Africa.",
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
    address: "Stand Number 2579Bt, Scout Hall, 9th Avenue Extension, S. Parirenyatwa",
    city: "Bulawayo, Zimbabwe",
    coordinates: { lat: -20.1467, lng: 28.58 },
  },
  email: "info@wezeshaindustries.com",
  phone: "+263 787288099",
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
    title: "Learning & Innovation",
    description:
      "We constantly seek creative solutions to transform waste into value and challenges into opportunities.",
    icon: "lightbulb",
  },
  {
    title: "Partnership & Collaboration",
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
