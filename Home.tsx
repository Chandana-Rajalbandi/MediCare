import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Pill as Pills, Truck, Clock, Shield, Activity, HeartPulse, Stethoscope } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Get AI-powered diagnosis based on your symptoms and have medicines delivered to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/diagnosis"
                  className="btn bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300"
                >
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Check Symptoms
                </Link>
                <Link
                  to="/medicines"
                  className="btn bg-blue-800 text-white hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300"
                >
                  <Pills className="mr-2 h-5 w-5" />
                  Browse Medicines
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Doctor with digital tablet" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How MediCare Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple three-step process to get diagnosed and receive your medications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Describe Your Symptoms</h3>
              <p className="text-gray-600">
                Tell us about your health conditions and symptoms through our interactive form.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Get AI Diagnosis</h3>
              <p className="text-gray-600">
                Our AI analyzes your symptoms and provides potential diagnoses with recommended medications.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Medicines Delivered</h3>
              <p className="text-gray-600">
                Order the recommended medicines and get them delivered to your door in as little as 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose MediCare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine advanced AI technology with fast medicine delivery services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<HeartPulse className="h-6 w-6 text-blue-600" />}
              title="Accurate Diagnosis"
              description="Our AI is trained on millions of medical cases to provide precise symptom analysis."
            />
            <FeatureCard 
              icon={<Clock className="h-6 w-6 text-blue-600" />}
              title="Fast Delivery"
              description="Get your essential medicines delivered within 30 minutes in select areas."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-blue-600" />}
              title="Secure & Private"
              description="Your health data is encrypted and protected with the highest security standards."
            />
            <FeatureCard 
              icon={<Pills className="h-6 w-6 text-blue-600" />}
              title="Wide Medicine Range"
              description="Access to over 50,000 medicines and healthcare products."
            />
          </div>
        </div>
      </section>

      {/* Testimonials/Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your health?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of users who trust MediCare for their healthcare needs.
          </p>
          <Link
            to="/diagnosis"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Start Your Health Check Now
          </Link>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;