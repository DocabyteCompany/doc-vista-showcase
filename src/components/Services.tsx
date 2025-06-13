
import { Heart, Activity, Shield, Briefcase, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Preventive Cardiology",
      description: "Comprehensive heart health assessments and preventive care to keep your heart healthy for life.",
      features: ["Risk Assessment", "Lifestyle Counseling", "Early Detection"]
    },
    {
      icon: Activity,
      title: "Diagnostic Testing",
      description: "State-of-the-art cardiac testing including ECG, stress tests, and advanced imaging.",
      features: ["ECG & Holter Monitoring", "Stress Testing", "Echocardiography"]
    },
    {
      icon: Shield,
      title: "Heart Disease Treatment",
      description: "Expert treatment for various heart conditions with personalized care plans.",
      features: ["Coronary Artery Disease", "Heart Failure", "Arrhythmia Management"]
    },
    {
      icon: Briefcase,
      title: "Interventional Procedures",
      description: "Minimally invasive procedures to treat blocked arteries and heart conditions.",
      features: ["Angioplasty", "Stent Placement", "Cardiac Catheterization"]
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "24/7 emergency cardiac care for acute heart conditions and cardiac emergencies.",
      features: ["Chest Pain Evaluation", "Heart Attack Treatment", "Emergency Procedures"]
    },
    {
      icon: Users,
      title: "Family Cardiology",
      description: "Comprehensive cardiac care for the whole family, from pediatric to geriatric patients.",
      features: ["Pediatric Cardiology", "Adult Care", "Senior Heart Health"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Cardiac Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From prevention to treatment, we offer a full range of cardiac services 
            using the latest technology and evidence-based medicine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="bg-white hover:shadow-lg transition-all duration-300 hover-scale group">
              <CardHeader>
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mb-4 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
