export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestingCategory {
  id: string;
  title: string;
  tests: TestingItem[];
}

export interface TestingItem {
  id: string;
  name: string;
  description?: string;
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ValueProposition {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string;
}