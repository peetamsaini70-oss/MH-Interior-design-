export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Modular Kitchen' | 'False Ceiling' | 'Living Room' | 'Villa';
  location: string;
  image: string;
  description: string;
  highlight: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  serviceInterest: string;
  city: string;
  message: string;
}

