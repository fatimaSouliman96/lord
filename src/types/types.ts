export type paackage = {
    created_at: string;
    duration?: string;
    id: number;
    limit?: string;
    name?: string;
    price?: string;
    phone?: string;
    region_id?: number;
    description?: string;
    image?: string;
    package_id?: number;
    slug?: string;
    speed?: string;
    updated_at: string;
}

export type region = {
    city_id: number;
    created_at: string;
    id: number;
    name: string
    packages: paackage[]
}

export type city = {
    created_at: string;
    id: number;
    name: string;
    regions: region[];
    updated_at: string;
}

export type testimonial = {
    comment: string;
    created_at: string;
    id: number;
    name: string;
    position: string;
    updated_at: string;
}

export type testimonials = {
    testimonials: testimonial[]
}

export type branch = {
    address: string;
    created_at: string;
    id: number;
    name: string;
    phone: string;
    status: string;
    updated_at: string;
}

export type branches = {
    branches: branch[]
}

export  type faq = {
  id: number;
  question: string;
  answer: string;
  created_at: string; 
  updated_at: string; 
};

export type faqs = {
    faqs: faq[]
}

export type CompanyInfo = {
  id: number;
  title: string;
  description: string;
  created_at: string; 
  updated_at: string; 
};
