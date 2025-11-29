import { Medicine } from '../types';

// Mock medicine data
const MOCK_MEDICINES: Medicine[] = [
  {
    id: 'med-101',
    name: 'ColdEase Plus',
    description: 'Relieves cold symptoms including cough, congestion, and fever',
    usageInstructions: 'Take 1-2 tablets every 4-6 hours as needed, not exceeding 8 tablets in 24 hours',
    sideEffects: 'May cause drowsiness. Avoid alcohol and operating machinery.',
    price: 12.99,
    dosage: '500mg tablets',
    category: 'Cold & Flu',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 50
  },
  {
    id: 'med-102',
    name: 'NightTime Cold Relief',
    description: 'Nighttime cold medicine for restful sleep while treating symptoms',
    usageInstructions: 'Take 30ml before bedtime',
    sideEffects: 'Drowsiness, dizziness',
    price: 8.99,
    dosage: '120ml syrup',
    category: 'Cold & Flu',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 35
  },
  {
    id: 'med-201',
    name: 'HeadRelief Extra Strength',
    description: 'Fast-acting pain relief for headaches and migraines',
    usageInstructions: 'Take 2 tablets every 6 hours as needed, not exceeding 6 tablets in 24 hours',
    sideEffects: 'May cause stomach upset. Take with food if necessary.',
    price: 9.99,
    dosage: '500mg tablets',
    category: 'Pain Relief',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 45
  },
  {
    id: 'med-202',
    name: 'JointEase Gel',
    description: 'Topical pain relief for arthritis and joint pain',
    usageInstructions: 'Apply to affected area up to 4 times daily',
    sideEffects: 'May cause skin irritation in sensitive individuals',
    price: 15.49,
    dosage: '100g gel',
    category: 'Pain Relief',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 28
  },
  {
    id: 'med-301',
    name: 'NauseaStop',
    description: 'Relieves nausea, vomiting, and motion sickness',
    usageInstructions: 'Take 1 tablet every 8 hours as needed',
    sideEffects: 'May cause drowsiness and dry mouth',
    price: 11.49,
    dosage: '25mg tablets',
    category: 'Digestive Health',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 30
  },
  {
    id: 'med-302',
    name: 'Rehydration Solution',
    description: 'Replenishes electrolytes lost during vomiting or diarrhea',
    usageInstructions: 'Mix one packet in a glass of water and drink as needed',
    sideEffects: 'None known when used as directed',
    price: 14.99,
    dosage: '10 packets',
    category: 'Digestive Health',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 25
  },
  {
    id: 'med-401',
    name: 'AllergyClear 24H',
    description: 'Non-drowsy 24-hour relief from seasonal allergies',
    usageInstructions: 'Take 1 tablet daily',
    sideEffects: 'May cause dry mouth and headache in some individuals',
    price: 18.99,
    dosage: '10mg tablets',
    category: 'Allergy',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 40
  },
  {
    id: 'med-501',
    name: 'First Aid Antiseptic',
    description: 'Prevents infection in minor cuts, scrapes, and burns',
    usageInstructions: 'Clean affected area and apply a small amount 1-3 times daily',
    sideEffects: 'Temporary stinging upon application',
    price: 6.99,
    dosage: '120ml solution',
    category: 'First Aid',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 55
  },
  {
    id: 'med-601',
    name: 'Daily Multivitamin',
    description: 'Complete daily vitamin and mineral supplement for adults',
    usageInstructions: 'Take 1 tablet daily with food',
    sideEffects: 'None when used as directed',
    price: 19.99,
    dosage: '90 tablets',
    category: 'Vitamins',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 65
  },
  {
    id: 'med-701',
    name: 'Hydrating Skin Lotion',
    description: 'Intensive moisturizing lotion for dry and sensitive skin',
    usageInstructions: 'Apply to clean skin as needed',
    sideEffects: 'May cause irritation in individuals with specific allergies',
    price: 13.49,
    dosage: '250ml lotion',
    category: 'Skincare',
    image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requiresPrescription: false,
    stock: 38
  }
];

// Mock API function to fetch medicines
export const fetchMedicines = async (): Promise<Medicine[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return MOCK_MEDICINES;
};

// Mock API function to search medicines
export const searchMedicines = async (query: string): Promise<Medicine[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const lowercaseQuery = query.toLowerCase();
  
  return MOCK_MEDICINES.filter(medicine => 
    medicine.name.toLowerCase().includes(lowercaseQuery) || 
    medicine.description.toLowerCase().includes(lowercaseQuery) ||
    medicine.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Mock API function to get medicine details
export const getMedicineDetails = async (id: string): Promise<Medicine | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const medicine = MOCK_MEDICINES.find(med => med.id === id);
  return medicine || null;
};