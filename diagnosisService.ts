import { Diagnosis } from '../types';

// Mock diagnosis service
export const analyzeSymptomsApi = async (symptomData: any): Promise<Diagnosis> => {
  // In a real app, this would be an API call to a backend service
  console.log('Analyzing symptoms:', symptomData);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock response based on symptoms
  const isFeverPresent = symptomData.symptoms.includes('Fever');
  const isHeadachePresent = symptomData.symptoms.includes('Headache');
  const isCoughPresent = symptomData.symptoms.includes('Cough');
  const isNauseaPresent = symptomData.symptoms.includes('Nausea');
  const isSevere = symptomData.severity === 'Severe';
  
  let diagnosis: Diagnosis;
  
  if (isFeverPresent && isCoughPresent) {
    diagnosis = {
      id: 'diagnosis-' + Date.now(),
      condition: 'Common Cold',
      description: 'A viral infection of the upper respiratory tract. Rest, fluids, and over-the-counter medications can help alleviate symptoms.',
      confidence: 85,
      severity: isSevere ? 'moderate' : 'mild',
      recommendedMedicines: [
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
        }
      ],
      advice: 'Rest, stay hydrated, and avoid spreading the infection to others. If symptoms worsen or persist for more than a week, consult a healthcare professional.',
      seeDoctor: false
    };
  } else if (isHeadachePresent && symptomData.duration.includes('week')) {
    diagnosis = {
      id: 'diagnosis-' + Date.now(),
      condition: 'Tension Headache',
      description: 'Tension headaches are the most common type of headache and are often described as a feeling of pressure or tightness, like a band around the head.',
      confidence: 75,
      severity: 'mild',
      recommendedMedicines: [
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
        }
      ],
      advice: 'Try relaxation techniques, ensure proper sleep, and stay hydrated. If headaches persist or are severe, consult a healthcare professional.',
      seeDoctor: false
    };
  } else if (isNauseaPresent && symptomData.duration.includes('day')) {
    diagnosis = {
      id: 'diagnosis-' + Date.now(),
      condition: 'Gastroenteritis',
      description: 'Inflammation of the stomach and intestines, typically resulting from a viral or bacterial infection.',
      confidence: 70,
      severity: isSevere ? 'moderate' : 'mild',
      recommendedMedicines: [
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
        }
      ],
      advice: 'Stay hydrated, eat bland foods, and rest. If symptoms worsen or you cannot keep fluids down, seek medical attention.',
      seeDoctor: isSevere
    };
  } else {
    // Default diagnosis
    diagnosis = {
      id: 'diagnosis-' + Date.now(),
      condition: 'General Discomfort',
      description: 'Based on your symptoms, you may be experiencing general discomfort that could be caused by various factors including stress, minor viral infection, or fatigue.',
      confidence: 60,
      severity: 'mild',
      recommendedMedicines: [
        {
          id: 'med-401',
          name: 'MultiSymptom Relief',
          description: 'General relief for multiple minor symptoms',
          usageInstructions: 'Take 2 tablets every 6 hours as needed',
          sideEffects: 'May cause drowsiness in some individuals',
          price: 7.99,
          dosage: '200mg tablets',
          category: 'General',
          image: 'https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          requiresPrescription: false,
          stock: 60
        }
      ],
      advice: 'Rest, stay hydrated, and monitor your symptoms. If they persist or worsen, consider consulting a healthcare professional for a more accurate diagnosis.',
      seeDoctor: isSevere
    };
  }
  
  return diagnosis;
};