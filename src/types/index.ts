export type Language = 'en' | 'pt-BR' | 'es';

export interface Translation {
  nav: {
    home: string;
    features: string;
    pricing: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  sidebar: {
    filters: string;
    allTasks: string;
    completed: string;
    today: string;
    thisWeek: string;
    categories: string;
  };
  categories: {
    work: string;
    personal: string;
    study: string;
    health: string;
  };
  tasks: {
    new: string;
    edit: string;
    delete: string;
    deleteConfirm: string;
    highPriority: string;
    save: string;
    cancel: string;
    title: string;
    create: string;
    update: string;
  };
  priorities: {
    low: string;
    medium: string;
    high: string;
    urgent: string;
  };
  form: {
    title: string;
    description: string;
    priority: string;
    category: string;
    dueDate: string;
  };
  pricing: {
    title: string;
    free: {
      name: string;
      price: string;
      features: string[];
      buttonText: string;
    };
    pro: {
      name: string;
      price: string;
      features: string[];
      buttonText: string;
    };
    popular: string;
    perMonth: string;
    launchOffer: string;
    launchDescription: string;
    validUntil: string;
    faq: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description: string;
    };
    howItWorks: {
      title: string;
      steps: string[];
    };
    forWhom: {
      title: string;
      users: string[];
    };
    technology: {
      title: string;
      features: string[];
    };
    vision: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    email: string;
    whatsapp: string;
    website: string;
    businessHours: string;
    location: string;
    name: string;
    message: string;
    sendMessage: string;
    hours: {
      weekdays: string;
      saturday: string;
    };
    digital: string;
  };
}

export interface Translations {
  [key: string]: Translation;
}

export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type Status = 'pending' | 'in_progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  category: string;
  status: Status;
  createdAt: Date;
  dueDate: Date;
  aiEstimate: number;
}