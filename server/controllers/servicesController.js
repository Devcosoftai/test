const Service = require('../models/Service');

// Fallback static data (used when DB is empty)
const STATIC_SERVICES = [
  {
    id: 'fullstack', icon: '🚀', title: 'Full-Stack Development',
    desc: 'Scalable web applications with modern architecture.',
    items: ['MERN Stack', 'MEAN Stack', 'Next.js & React SSR/SSG', 'Node.js APIs', 'TypeScript & GraphQL'],
    order: 1,
  },
  {
    id: 'mobile', icon: '📱', title: 'Mobile App Development',
    desc: 'High-performance cross-platform apps.',
    items: ['React Native', 'Flutter', 'Cross-platform Apps', 'App Store Deployment'],
    order: 2,
  },
  {
    id: 'cloud', icon: '☁️', title: 'Cloud & AWS Services',
    desc: 'Enterprise-grade cloud infrastructure.',
    items: ['AWS EC2, S3, RDS', 'Lambda & Serverless', 'Cloud Migration', 'Cloud-native Apps'],
    order: 3,
  },
  {
    id: 'devops', icon: '⚙️', title: 'DevOps & CI/CD',
    desc: 'Automated pipelines for faster deployments.',
    items: ['Docker & Kubernetes', 'GitHub Actions', 'CI/CD Pipelines', 'Terraform'],
    order: 4,
  },
  {
    id: 'ai', icon: '🤖', title: 'AI & Automation',
    desc: 'Intelligent solutions that automate operations.',
    items: ['AI Chatbots', 'Recommendation Systems', 'Predictive Analytics', 'AI Agents'],
    order: 5,
  },
  {
    id: 'saas', icon: '🧠', title: 'SaaS & Enterprise',
    desc: 'Product development for market advantage.',
    items: ['SaaS Products', 'ERP & CRM', 'UI/UX Design', 'Microservices'],
    order: 6,
  },
];

/**
 * GET /api/services
 */
exports.getServices = async (req, res) => {
  try {
    let services = await Service.find({ active: true }).sort('order');

    if (!services.length) {
      services = STATIC_SERVICES;
    }

    res.json({ success: true, data: services });
  } catch (error) {
    res.json({ success: true, data: STATIC_SERVICES });
  }
};

/**
 * GET /api/services/:id
 */
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findOne({ id: req.params.id, active: true });

    if (!service) {
      const fallback = STATIC_SERVICES.find((s) => s.id === req.params.id);
      if (fallback) return res.json({ success: true, data: fallback });
      return res.status(404).json({ error: 'Service not found' });
    }

    res.json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch service' });
  }
};
