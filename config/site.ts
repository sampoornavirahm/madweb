import {
  Rocket,
  Bot,
  Cpu,
  Network,
  LineChart,
  MessageSquare,
} from 'lucide-react';

export const siteConfig = {
  name: 'Madrocket',
  description: 'Empowering the future through artificial intelligence',
  logo: {
    icon: Rocket,
    text: 'Madrocket',
  },
  services: [
    {
      title: 'Machine Learning Solutions',
      description:
        'Custom ML models tailored to your business needs, from predictive analytics to pattern recognition.',
      icon: Bot,
    },
    {
      title: 'Natural Language Processing',
      description:
        'Advanced text analysis, sentiment detection, and language understanding capabilities.',
      icon: MessageSquare,
    },
    {
      title: 'Computer Vision',
      description:
        'State-of-the-art image and video processing for object detection and recognition.',
      icon: Cpu,
    },
    {
      title: 'Deep Learning',
      description:
        'Neural network architectures for complex problem-solving and decision-making.',
      icon: Network,
    },
    {
      title: 'Predictive Analytics',
      description:
        'Data-driven insights and forecasting for informed business decisions.',
      icon: LineChart,
    },
  ],
  contact: {
    email: 'business@madrocket.co.in',
    phone: '+91 9561299488',
    address: 'Manish Nagar Road, Nagpur 440027',
  },
  social: {
    twitter: 'https://twitter.com/madrocket',
    linkedin: 'https://linkedin.com/company/madrocket',
    github: 'https://github.com/Madrocket-Technologies-Media',
  },
};
