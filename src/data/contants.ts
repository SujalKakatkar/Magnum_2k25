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
  mentors: Record<string, string | undefined>;
  heads: Record<string, string | undefined>;
};



const eventData = [
  {
    id: 1,
    title: 'Analytica Summit',
    logoImg: '/photos/eventlogos/dataAnlysis.png',
    routeName: 'dataAnalytics',
    tagLine: 'Conquer The Mystery',
    description: 'Analytica Summit is an exciting data analysis competition designed to challenge participants’ problem-solving, analytical, and visualization skills across multiple platforms. The event is structured into three progressive rounds—Excel, SQL, and Power BI—culminating in a final presentation. Participants will demonstrate their ability to clean, analyze, and interpret data, apply logical solutions, and present actionable insights effectively. This summit offers a platform for showcasing technical expertise, business acumen, and storytelling with data.',
    rules: [],
    skills: ["Proficiency in Microsoft Excel", "Basic to intermediate SQL knowledge", "Familarity with data visualisation and analysation"],
    requirements: '2 laptops (1 for backup),Microsoft Excel,MySQl, PostgreSQl, Oracle 10g,Power,Bi,Tableau',
    mentors: {
      mentor1: 'Prof. Rucha Bapat',
      mentor2: 'Ms.Pooja Rashinkar',
    },
    heads: {
      head1: 'Aishwarya Desai',
      head2: 'Sudhir patil',
    }
  },
  {
    id: 2,
    title: 'Vault of Voices',
    logoImg: '/photos/eventlogos/communication.jpg',
    routeName: 'communication',
    tagLine: 'Where Hidden Voices Turn into Visible Leaders',
    description: 'Step into the Vault of Voices, where every word holds the key and every idea hides a secret waiting to be revealed. In this mysterious chamber of communication, marketing, and management, teams of two will be challenged to decode situations, craft persuasive strategies, and unlock the unseen treasures of influence. Each round is a layer of the vault — concealed, complex, and compelling. To advance, participants must not just speak, but enchant; not just manage, but master. Only those who can transform their voices into powerful tools of persuasion will emerge with the keys to the vault.',
    rules: ["Each team must consist of 2 members.", "Skill Tested - Communication | Marketing | Strategy | Leadership", "No language barrier"],
    requirements: 'Phone, Pendrive, 1 laptop per team, earphones',
    mentors: {
      mentor1: 'Prof. Shruti Kanchugar',
    },
    heads: {
      head1: 'Rachel Pereira',
      head2: 'Mahesh Patil',
    }
  },
  {
    id: 3,
    title: 'BreachBox',
    logoImg: '/photos/eventlogos/cyberSecurity.jpg',
    routeName: 'cyberSecurity',
    tagLine: 'Breach the limits, Own the Box',
    description: 'Join for an immersive cybersecurity competition where experts share insights on networking security, OSINT, and Linux security. Engage in interactive threat simulations, hands-on tool training, and expert discussions. Perfect for cybersecurity enthusiasts, network specialists, Linux enthusiasts, and OSINT practitioners. Register now to test your hacking and digital defense skills!',
    rules: [],
    skills: [" Basics of Networking and cybersecurity", "Open source  intelligence", 'information gathering', 'reconnaissance and Linux commands'],
    requirements: '',
    mentors: {
      mentor1: 'Prof. Siddhesh Revankar',
      mentor2: 'Ms.Aniketa Kulkarni',
    },
    heads: {
      head1: 'Kaustubh Shitole',
      head2: 'Shravani Shiralkar',
    }
  },
  {
    id: 4,
    title: 'Mind Spark',
    logoImg: '/photos/eventlogos/quiz.jpg',
    routeName: 'quiz',
    tagLine: ' Unlock the Box Unleash the Mind',
    description: 'Step into the mystery of the Mind Spark Quiz, where every question is a puzzle waiting to be unlocked! Just like a black box hides secrets within, this quiz challenges participants to think beyond the obvious and dig deep for answers. Expect rounds filled with mysteries, hidden clues, unexpected twists, and mind-bending challenges that will keep you guessing till the very end.Join us for an exciting, brain-teasing journey where curiosity, quick thinking, and smart teamwork will help you unlock the secrets of the black box.',
    rules: [],
    requirements: 'Mobile',
    mentors: {
      mentor1: 'Prof. Kirti Bhosale',
      mentor2: 'Ms. Meghana Joshi',
    },
    heads: {
      head1: 'Namrata Marave',
      head2: 'Shivam Patil',
    }
  },
  {
    id: 5,
    title: 'Code Storm',
    logoImg: '/photos/eventlogos/coding.jpg',
    routeName: 'coding',
    tagLine: 'Step Into the Eye of the Code Storm',
    description: 'Welcome to Codestrom – a coding odyssey where creativity collides with logic, and only the brightest minds can survive the storm of challenges. Inspired by the dark and mysterious theme of the BlackBox, this competition pushes participants into a world where nothing is obvious, every challenge hides a twist, and every solution demands brilliance. This event is designed to test every dimension of a coder – knowledge, debugging instincts, and problem-solving mastery. Across three intense rounds, participants will dive into a journey where shadows conceal clues and logic is the only weapon.',
    rules: [],
    requirements: '',
    mentors: {
      mentor1: 'Prof. Vaishali Kulkarni',
      mentor2: 'Ms. Sneha Vandkar',
    },
    heads: {
      head1: 'Yashwant Mutkekar',
      head2: 'Karuna Majukar',
    }
  },
  {
    id: 6,
    title: 'BlackVerse',
    logoImg: '/photos/eventlogos/contentCreation.jpg',
    routeName: 'contentCreation',
    tagLine: 'In the realm of dark, creators shine',
    description: 'It symbolizes mystery, power, and depth — a space where thoughts are raw, bold, and unfiltered. BlackVerse can represent an artistic universe built on contrast: shadows and light, silence and sound, reality and imagination. Whether it’s for a brand, a theme, or a project, BlackVerse reflects elegance, strength, and a touch of enigma.',
    rules: [],
    requirements: '',
    mentors: {
      mentor1: 'Prof. Shruti Kulkarni',
      mentor2: 'Prof. Karuna Deshpande',
    },
    heads: {
      head1: 'Shreyash Humbarwadi',
      head2: 'Bhargavi Hulyal',
    }
  },
  {
    id: 7,
    title: 'Inkspire',
    logoImg: '/photos/eventlogos/designing.png',
    routeName: 'designing',
    tagLine: 'Ink that inspires creativity',
    description: '',
    rules: [],
    requirements: '',
    mentors: {
      mentor1: 'Dr. Chidambar Inamdar',
      mentor2: 'Ms. Vaishnavi Galagali',
    },
    heads: {
      head1: 'Omsai Desai',
      head2: 'Rahul',
    }
  },
  {
    id: 8,
    title: 'Shadow Vault',
    logoImg: '/photos/eventlogos/escapeRoom.jpg',
    routeName: 'escapeRoom',
    tagLine: 'The opaque key',
    description: 'Shadow Vault is not just a competition—it’s a journey into a hidden world of codes, riddles, and artificial intelligence. Contestants must prove their wit, technical prowess, and creativity to unlock the vault’s deepest secrets. Each round presents a new layer of challenge, where logic, data, and innovation merge. Only the most resourceful will make it to the end, uncovering the ultimate prize hidden in the shadows.',
    rules: [],
    skills: ["binary to ASCII value conversion", "problem solving", ' quick thinking'],
    requirements: ' 2 Laptops 1 as a backup, n8n tool',
    mentors: {
      mentor1: 'Prof. Govind Huilgol',
      mentor2: 'Ms. Shilpa Sarnaik',
    },
    heads: {
      head1: 'Rohit Sakhalkar',
      head2: 'Sakshi Revankar',
    }
  },
  {
    id: 9,
    title: 'Dark Nexus',
    logoImg: '/photos/eventlogos/gaming.png',
    routeName: 'gaming',
    tagLine: 'Play the shadows, rule the Nexus',
    description: 'The Dark Nexus Gaming Event is a thrilling multi-round competition designed to test strategy, reflexes, creativity, and fighting spirit across different gaming platforms.Participants will face off in three challenging rounds, each with unique games that demand skill, focus, and adaptability From mobile battles to immersive story modes and action- packed fighting arenas, this event guarantees an electrifying experience for all gamers.',
    rules: [],
    requirements: '',
    mentors: {
      mentor1: 'Prof. Jyoti Patil',
      mentor2: 'Mr.Abhishek G',
    },
    heads: {
      head1: 'Sanket gawade',
      head2: 'Shashank kudale',
    }
  },
  {
    id: 10,
    title: 'GroupEvents',
    logoImg: '',
    routeName: 'groupEvents',
    tagLine: '',
    description: 'An electrifying celebration of rhythm, passion, and expression! Dance-O-Mania brings together talented performers ready to set the stage on fire with their energy and creativity. From graceful classical moves to high-voltage contemporary beats, this event is all about showcasing versatility, style, and the power of dance.It’s not just a competition—it’s a stage where confidence meets charisma, where every step speaks louder than words. Whether solo, duo, or group, participants will enthrall the audience with performances that captivate, inspire, and entertain.',
    rules: [],
    requirements: '',
    mentors: {
      mentor1: 'Prof. Vaishali Shanbhag',
      mentor2: 'Prof. Supriya Balekundri',
    },
    heads: {
      head1: 'Shubham Kulkarni',
      head2: 'Shravani Mattikalli ',
    }
  }
]

const organizersData = [
  {
    name: "Dr. Venugopal Jalihal",
    role: "Principal of KLS Gogte College Of Commerce",
    photo: "/photos/faculty/venugopal.jpg",
  },
  {
    name: "Dr. Asmita Deshpande",
    role: "BCA Co-Ordinator",
    photo: "/photos/faculty/asmitaDeshpande.jpeg",
  },
  // {
  //   name: "Prof. Vaishali Shanbhag",
  //   role: "Event Coordinator",
  //   photo: "/vaishali.jpg?height=100&width=100",
  // },
  // {
  //   name: "Prof. Supriya Balekundri",
  //   role: "Event Coordinator",
  //   photo: "/supriya.jpg?height=100&width=100",
  // },
  {
    name: "Sameer Naik",
    role: "Student Coordinator",
    photo: "/photos/students/sameer.jpg",
    contact: "+91 8867340715",
  },
  {
    name: "Ananya Rathakar",
    role: "Student Coordinator",
    photo: "/photos/students/ananya.jpg",
    contact: "+91 8496953722",
  },
]

const devlopers = [
  {
    name: "Kaustubh",
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