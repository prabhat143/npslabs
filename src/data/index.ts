import { NavItem, Service, TestingCategory, Equipment, ValueProposition, ContactInfo } from '../types';
import { FlaskRound as Flask, Microscope, Droplets, Bug, Skull, TestTube, BeakerIcon, BadgeCheck, LineChart, Settings, Clock, Users } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 'residue-testing',
    title: 'Residue Testing',
    description: 'Comprehensive testing for antibiotic residues and dyes in seafood products to ensure safety and compliance with international standards.',
    icon: 'Flask',
  },
  {
    id: 'water-testing',
    title: 'Water Testing',
    description: 'Complete analysis of water parameters including pH, hardness, ammonia, nitrite, and alkalinity using strip and UV methods.',
    icon: 'Droplets',
  },
  {
    id: 'pesticide-residues',
    title: 'Pesticide Residues',
    description: 'Ensuring products are free from harmful chemical contaminants using advanced analytical methods.',
    icon: 'Bug',
  },
  {
    id: 'toxin-analysis',
    title: 'Toxin Analysis',
    description: 'Detection of harmful mycotoxins to ensure safety and compliance with international food safety regulations.',
    icon: 'Skull',
  },
  {
    id: 'specialized-testing',
    title: 'Specialized Testing',
    description: 'Advanced testing including histamine analysis, indole testing, and steroids and stilbenes analysis.',
    icon: 'Microscope',
  },
  {
    id: 'chemical-testing',
    title: 'Chemical Testing',
    description: 'Proximate analysis determining nutritional composition such as moisture, protein, fat, and ash levels.',
    icon: 'TestTube',
  },
];

export const testingCategories: TestingCategory[] = [
  {
    id: 'antibiotic-residues',
    title: 'Antibiotic Residues',
    tests: [
      { id: 'nitrofurans', name: 'Nitrofurans & their metabolites (AOZ, AMOZ, AHD, SEM, DNSH)' },
      { id: 'chloramphenicol', name: 'Chloramphenicol' },
      { id: 'tetracyclines', name: 'Tetracyclines and Epimers' },
      { id: 'sulfonamides', name: 'Sulfonamides' },
      { id: 'quinolones', name: 'Quinolones, and other antibiotics' },
    ]
  },
  {
    id: 'dyes',
    title: 'Dyes',
    tests: [
      { id: 'malachite-green', name: 'Malachite Green (MG-LMG)' },
      { id: 'crystal-violet', name: 'Crystal Violet (CV-LCV)' },
    ]
  },
  {
    id: 'water-testing',
    title: 'Water Testing',
    tests: [
      { id: 'ph', name: 'pH' },
      { id: 'total-hardness', name: 'Total Hardness' },
      { id: 'un-ionised-ammonia', name: 'Un Ionised Ammonia' },
      { id: 'ionised-ammonia', name: 'Ionised Ammonia' },
      { id: 'salinity', name: 'Salinity' },
      { id: 'nitrite', name: 'Nitrite' },
      { id: 'alkalinity', name: 'Alkalinity (by Strip and UV Method)' },
    ]
  },
  {
    id: 'specialized-testing',
    title: 'Specialized Testing',
    tests: [
      { id: 'histamine-analysis', name: 'Histamine Analysis', description: 'Verifying seafood freshness, particularly in species prone to histamine formation.' },
      { id: 'indole-testing', name: 'Indole Testing', description: 'Monitoring spoilage indicators to ensure seafood quality during processing and storage.' },
      { id: 'steroids-stilbenes', name: 'Steroids and Stilbenes Analysis', description: 'Identifying illegal growth-promoting substances.' },
      { id: 'chemical-testing', name: 'Chemical Testing', description: 'Determining nutritional composition such as moisture, protein, fat, and ash levels.' },
    ]
  }
];

export const equipment: Equipment[] = [
  {
    id: 'lc-ms-ms',
    name: 'LC-MS/MS',
    description: 'Liquid Chromatography-Mass Spectrometry for precise analysis of chemical compounds.',
    imageUrl: 'https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg',
  },
  {
    id: 'gc-ms',
    name: 'GC-MS MS',
    description: 'Gas Chromatography-Mass Spectrometry for volatile and semi-volatile compounds analysis.',
    imageUrl: 'https://images.pexels.com/photos/8325928/pexels-photo-8325928.jpeg',
  },
  {
    id: 'uv-spectrophotometer',
    name: 'UV Spectrophotometer',
    description: 'For quantitative determination of various analytes in solutions.',
    imageUrl: 'https://images.pexels.com/photos/8326313/pexels-photo-8326313.jpeg',
  },
  {
    id: 'hplc',
    name: 'HPLC',
    description: 'High-Performance Liquid Chromatography for separating and analyzing compounds.',
    imageUrl: 'https://images.pexels.com/photos/8326350/pexels-photo-8326350.jpeg',
  },
];

export const valuePropositions: ValueProposition[] = [
  {
    id: 1,
    title: 'Industry Expertise',
    description: 'With a team of highly skilled scientists and technicians, we leverage cutting-edge technology to deliver precise and reliable results, ensuring safety and quality at every stage of the seafood supply chain.',
    icon: 'BadgeCheck',
  },
  {
    id: 2,
    title: 'Regulatory Compliance',
    description: 'We strictly adhere to international standards, enabling seamless compliance with global regulations for exports and imports.',
    icon: 'LineChart',
  },
  {
    id: 3,
    title: 'Customized Solutions',
    description: 'Our tailored testing services are designed to meet the unique requirements of manufacturers, suppliers, and buyers, offering complete flexibility and reliability.',
    icon: 'Settings',
  },
  {
    id: 4,
    title: 'Advanced Equipment',
    description: 'Equipped with the latest analytical instruments, we ensure that every test is conducted with utmost accuracy and efficiency.',
    icon: 'BeakerIcon',
  },
  {
    id: 5,
    title: 'Turnaround Times',
    description: 'Our efficient processes are designed to deliver results within 24 hours for most testing categories, allowing you to meet urgent timelines and market demands.',
    icon: 'Clock',
  },
  {
    id: 6,
    title: 'Trusted Partner',
    description: 'Our commitment to transparency, quality, and customer satisfaction makes us the preferred choice for businesses looking to enhance product integrity and consumer trust.',
    icon: 'Users',
  },
];

export const contactInfo: ContactInfo = {
  address: 'Door no. 1-132/3, Vijayalaxmi Estates, 2nd Floor, J.P. Road, Bhimavaram, Andhra Pradesh-534 202',
  phone: ['+91-97405 79955', '+91-99085 63750'],
  email: 'nspanalyticallabs@gmail.com',
};