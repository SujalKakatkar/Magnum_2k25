type Mentor = { name: string; img?: string };
type Head = { name: string; img?: string };

export type EventType = {
  id: number;
  title: string;
  logoImg?: string;
  routeName: string;
  tagLine?: string;
  description?: string;
  rules?: string[] | undefined;
  skills?: string[];
  requirements?: string;
  mentors: Mentor[] | undefined;
  heads: Head[] | undefined;
};



const eventData = [
  {
    id: 1,
    title: 'Analytica Summit',
    logoImg: '/photos/eventlogos/dataAnalytics.webp',
    routeName: 'dataAnalytics',
    tagLine: 'Conquer The Mystery',
    description: 'Analytica Summit is an exciting data analysis competition designed to challenge participants’ problem-solving, analytical, and visualization skills across multiple platforms. The event is structured into three progressive rounds—Excel, SQL, and Power BI—culminating in a final presentation. Participants will demonstrate their ability to clean, analyze, and interpret data, apply logical solutions, and present actionable insights effectively. This summit offers a platform for showcasing technical expertise, business acumen, and storytelling with data.',
    rules: [],
    skills: ["Proficiency in Microsoft Excel", "Basic to intermediate SQL knowledge", "Familarity with data visualisation and analysation"],
    requirements: '2 laptops (1 for backup),Microsoft Excel,MySQl, PostgreSQl, Oracle 10g,Power,Bi,Tableau',
    mentors: [
      { name: 'Prof. Rucha Bapat', img: '/photos/faculty/rucha.webp' },
      { name: 'Ms.Pooja Rashinkar', img: '/photos/faculty/pooja.webp' },
    ],
    heads: [
      { name: 'Aishwarya Desai', img: '/photos/students/aishwarya.webp' },
      { name: 'Sudhir patil', img: '/photos/students/sudhir.webp' },
    ]
  },
  {
    id: 2,
    title: 'Vault of Voices',
    logoImg: '/photos/eventlogos/communication.webp',
    routeName: 'communication',
    tagLine: 'Where Hidden Voices Turn into Visible Leaders',
    description: 'Step into the Vault of Voices, where every word holds the key and every idea hides a secret waiting to be revealed. In this mysterious chamber of communication, marketing, and management, teams of two will be challenged to decode situations, craft persuasive strategies, and unlock the unseen treasures of influence. Each round is a layer of the vault — concealed, complex, and compelling. To advance, participants must not just speak, but enchant; not just manage, but master. Only those who can transform their voices into powerful tools of persuasion will emerge with the keys to the vault.',
    rules: ["Each team must consist of 2 members.", "Skill Tested - Communication | Marketing | Strategy | Leadership", "No language barrier"],
    requirements: 'Phone, Pendrive, 1 laptop per team, earphones',
    mentors: [
      { name: 'Prof. Shruti Kanchugar', img: '/photos/faculty/Shruti Kanchugar.webp' },
    ],
    heads: [
      { name: 'Rachel Pereira', img: '/photos/students/rachel.webp' },
      { name: 'Mahesh Patil', img: '/photos/students/mahesh.webp' },
    ]
  },
  {
    id: 3,
    title: 'BreachBox',
    logoImg: '/photos/eventlogos/cyberSecurity.webp',
    routeName: 'cyberSecurity',
    tagLine: 'Breach the limits, Own the Box',
    description: 'Join for an immersive cybersecurity competition where experts share insights on networking security, OSINT, and Linux security. Engage in interactive threat simulations, hands-on tool training, and expert discussions. Perfect for cybersecurity enthusiasts, network specialists, Linux enthusiasts, and OSINT practitioners. Register now to test your hacking and digital defense skills!',
    rules: [],
    skills: [" Basics of Networking and cybersecurity", "Open source  intelligence", 'information gathering', 'reconnaissance and Linux commands'],
    requirements: '',
    mentors: [
      { name: 'Prof. Siddhesh Revankar', img: '/photos/faculty/Siddesh Revankar.webp' },
      { name: 'Ms.Aniketa Kulkarni', img: '/photos/faculty/aniketa.webp' },
    ],
    heads: [
      { name: 'Kaustubh Shitole', img: '/photos/students/kaustubh.webp' },
      { name: 'Shravani Shiralkar', img: '/photos/students/shravani.webp' },
    ]
  },
  {
    id: 4,
    title: 'Mind Spark',
    logoImg: '/photos/eventlogos/quiz.webp',
    routeName: 'quiz',
    tagLine: ' Unlock the Box Unleash the Mind',
    description: 'Step into the mystery of the Mind Spark Quiz, where every question is a puzzle waiting to be unlocked! Just like a black box hides secrets within, this quiz challenges participants to think beyond the obvious and dig deep for answers. Expect rounds filled with mysteries, hidden clues, unexpected twists, and mind-bending challenges that will keep you guessing till the very end.Join us for an exciting, brain-teasing journey where curiosity, quick thinking, and smart teamwork will help you unlock the secrets of the black box.',
    rules: [],
    requirements: 'Mobile',
    mentors: [
      { name: 'Prof. Kirti Bhosale', img: '/photos/faculty/kirti.webp' },
      { name: 'Ms. Meghana Joshi', img: '/photos/faculty/meghna.webp' },
    ],
    heads: [
      { name: 'Namrata Marave', img: '/photos/students/namrata.webp' },
      { name: 'Shivam Patil', img: '/photos/students/shivam.webp' },
    ]
  },
  {
    id: 5,
    title: 'CodeStorm',
    logoImg: '/photos/eventlogos/coding.webp',
    routeName: 'coding',
    tagLine: 'Step Into the Eye of the CodeStorm',
    description: 'Welcome to CodeStorm – a coding odyssey where creativity collides with logic, and only the brightest minds can survive the storm of challenges. Inspired by the dark and mysterious theme of the BlackBox, this competition pushes participants into a world where nothing is obvious, every challenge hides a twist, and every solution demands brilliance. This event is designed to test every dimension of a coder – knowledge, debugging instincts, and problem-solving mastery. Across three intense rounds, participants will dive into a journey where shadows conceal clues and logic is the only weapon.',
    rules: [],
    requirements: 'Any programming language of your choice can be used, but it is mandatory to know C, Java, and Python.',
    mentors: [
      { name: 'Prof. Vaishali Kulkarni', img: '/photos/faculty/Vaishali Kulkarni.webp' },
      { name: 'Ms. Sneha Vandkar', img: '/photos/faculty/sneha.webp' },
    ],
    heads: [
      { name: 'Yashwant Mutkekar', img: '/photos/students/yashwant.webp' },
      { name: 'Karuna Majukar', img: '/photos/students/karuna.webp' },
    ]
  },
  {
    id: 6,
    title: 'BlackVerse',
    logoImg: '/photos/eventlogos/contentCreation.webp',
    routeName: 'contentCreation',
    tagLine: 'In the realm of dark, creators shine',
    description: 'It symbolizes mystery, power, and depth — a space where thoughts are raw, bold, and unfiltered. BlackVerse can represent an artistic universe built on contrast: shadows and light, silence and sound, reality and imagination. Whether it’s for a brand, a theme, or a project, BlackVerse reflects elegance, strength, and a touch of enigma.',
    rules: [],
    requirements: '',
    mentors: [
      { name: 'Prof. Shruti Kulkarni', img: '/photos/faculty/Prof Shruti Kulkarni.webp' },
      { name: 'Prof. Karuna Deshpande', img: '/photos/faculty/Karuna.webp' },
    ],
    heads: [
      { name: 'Shreyash Humbarwadi', img: '/photos/students/shreyash.webp' },
      { name: 'Bhargavi Hulyal', img: '/photos/students/bhargavi.webp' },
    ]
  },
  {
    id: 7,
    title: 'Inkspire',
    logoImg: '/photos/eventlogos/designing.webp',
    routeName: 'designing',
    tagLine: 'Ink that inspires creativity',
    description: 'Dive into a creative adventure where design goes beyond boundaries! This event unfolds through three engaging rounds that challenge participants on every level. From hands-on tasks with multiple design softwares to exploring the power of AI, each round is designed to spark innovation and push imagination further. Alongside technical mastery, participants will also encounter a non-technical round that tests presence of mind, communication, and creative thinking outside the screen.It’s more than just a competition—it’s a journey of ideas, adaptability, and artistry, where originality takes center stage and creativity becomes the ultimate tool. Whether through pixels, prompts, or pure imagination, this event is about discovering how far design can truly go.',
    rules: [],
    skills:["Non technical Designing ( Manual Art )","Creativity & Innovation","Design Software Knowledge ","AI Tools Adaptability","Problem-Solving Mindset ","Communication & Presentation ","Teamwork & Adaptability","Time Management "],
    requirements: '2 laptops , art supplies ( Brush , Pallet, colors etc )',
    mentors: [
      { name: 'Dr. Chidambar Inamdar', img: '/photos/faculty/chidambar.webp' },
      { name: 'Ms. Vaishnavi Galagali', img: '/photos/faculty/vaishnavi.webp' },
    ],
    heads: [
      { name: 'Omsai Desai', img: '/photos/students/omsai.webp' },
      { name: 'Rahul', img: '/photos/students/rahul.webp' },
    ]
  },
  {
    id: 8,
    title: 'Shadow Vault',
    logoImg: '/photos/eventlogos/escapeRoom.webp',
    routeName: 'escapeRoom',
    tagLine: 'The opaque key',
    description: 'Shadow Vault is not just a competition—it’s a journey into a hidden world of codes, riddles, and artificial intelligence. Contestants must prove their wit, technical prowess, and creativity to unlock the vault’s deepest secrets. Each round presents a new layer of challenge, where logic, data, and innovation merge. Only the most resourceful will make it to the end, uncovering the ultimate prize hidden in the shadows.',
    rules: [],
    skills: ["binary to ASCII value conversion", "problem solving", ' quick thinking'],
    requirements: ' 2 Laptops 1 as a backup, n8n tool',
    mentors: [
      { name: 'Prof. Govind Huilgol', img: '/photos/faculty/Govind V Huilgol.webp' },
      { name: 'Ms. Shilpa Sarnaik', img: '/photos/faculty/shilpa.webp' },
    ],
    heads: [
      { name: 'Rohit Sakhalkar', img: '/photos/students/rohit.webp' },
      { name: 'Sakshi Revankar', img: '/photos/students/sakshi.webp' },
    ]
  },
  {
    id: 9,
    title: 'Dark Nexus',
    logoImg: '/photos/eventlogos/gaming.webp',
    routeName: 'gaming',
    tagLine: 'Play the shadows, rule the Nexus',
    description: 'The Dark Nexus Gaming Event is a thrilling multi-round competition designed to test strategy, reflexes, creativity, and fighting spirit across different gaming platforms.Participants will face off in three challenging rounds, each with unique games that demand skill, focus, and adaptability From mobile battles to immersive story modes and action- packed fighting arenas, this event guarantees an electrifying experience for all gamers.',
    rules: [],
    requirements: '',
    mentors: [
      { name: 'Prof. Jyoti Patil', img: '/photos/faculty/Jyoti Patil.webp' },
      { name: 'Mr.Abhishek G', img: '/photos/faculty/abhishek.webp' },
    ],
    heads: [
      { name: 'Sanket gawade', img: '/photos/students/Sanket.webp' },
      { name: 'Devraj Sirdesai', img: '/photos/students/devraj.webp' },
    ]
  },
  {
    id: 10,
    title: 'GroupEvents',
    logoImg: '/photos/eventlogos/groupEvent.webp',
    routeName: 'groupEvents',
    tagLine: '',
    description: 'An electrifying celebration of rhythm, passion, and expression! Dance-O-Mania brings together talented performers ready to set the stage on fire with their energy and creativity. From graceful classical moves to high-voltage contemporary beats, this event is all about showcasing versatility, style, and the power of dance.It’s not just a competition—it’s a stage where confidence meets charisma, where every step speaks louder than words. Whether solo, duo, or group, participants will enthrall the audience with performances that captivate, inspire, and entertain.',
    rules: [],
    requirements: '',
    mentors: [
      { name: 'Prof. Vaishali Shanbhag', img: '/photos/faculty/prof. Vaishali.webp' },
      { name: 'Prof. Supriya Balekundri', img: '/photos/faculty/Prof.Supriya .webp' },
    ],
    heads: [
      { name: 'Shubham Kulkarni', img: '/photos/students/shubham.webp' },
      { name: 'Shravani Mattikalli ', img: '/photos/students/shravaniM.webp' },
    ]
  }
]

const organizersData = [
  {
    name: "Dr. Venugopal Jalihal",
    role: "Principal KLS Gogte College Of Commerce",
    photo: "/photos/faculty/venugopal.webp",
  },
  {
    name: "Dr. Asmita Deshpande",
    role: "BCA Co-Ordinator",
    photo: "/photos/faculty/asmitadeshapande.webp",
  },
  {
    name: "Prof. Vaishali Shanbhag",
    role: "Core committee",
    photo: "/photos/faculty/prof. Vaishali.webp",
  },
  {
    name: "Prof. Supriya Balekundri",
    role: "Core committee",
    photo: "/photos/faculty/Prof.Supriya .webp",
  },
  {
    name: "Prof. Vaibhav Ambekar",
    role: "Core committee",
    photo: "/photos/faculty/Vaibhav Ambekar.webp",
  },

]

export const students = [
  {
    name: "Sameer Naik",
    role: "Student Coordinator",
    photo: "/photos/students/sameer.webp",
    contact: "+91 8867340715",
  },
  {
    name: "Ananya Rathakar",
    role: "Student Coordinator",
    photo: "/photos/students/ananya.webp",
    contact: "+91 8496953722",
  },
]

const devlopers = [
  {
    name: "Kaustubh Shitole",
    contact: "9019869256"
  },
  {
    name: "Sujal Kakatkar",
    contact: '+91 9036044080'
  }
]

export {
  eventData,
  organizersData,
  devlopers
}