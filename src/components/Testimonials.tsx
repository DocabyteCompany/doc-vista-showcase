
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      age: "Age 58",
      condition: "Heart Attack Recovery",
      rating: 5,
      text: "Dr. Johnson saved my life. Her quick diagnosis and expert treatment during my heart attack gave me a second chance. The follow-up care has been exceptional, and I feel stronger than ever.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Maria Rodriguez",
      age: "Age 45",
      condition: "Preventive Care",
      rating: 5,
      text: "As someone with a family history of heart disease, Dr. Johnson's preventive approach has been invaluable. She's helped me understand my risks and take proactive steps to protect my heart.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop"
    },
    {
      name: "Robert Chen",
      age: "Age 62",
      condition: "Arrhythmia Treatment",
      rating: 5,
      text: "I was scared about my irregular heartbeat, but Dr. Johnson explained everything clearly and developed a treatment plan that has completely resolved my symptoms. Her expertise is remarkable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Jennifer Walsh",
      age: "Age 39",
      condition: "Cardiac Screening",
      rating: 5,
      text: "Dr. Johnson's thorough cardiac screening caught an issue early that could have been serious later. Her attention to detail and caring approach made all the difference in my care.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "David Miller",
      age: "Age 55",
      condition: "Post-Surgery Care",
      rating: 5,
      text: "After my bypass surgery, Dr. Johnson guided my recovery every step of the way. Her expertise and encouraging bedside manner helped me get back to the activities I love.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Lisa Anderson",
      age: "Age 41",
      condition: "Hypertension Management",
      rating: 5,
      text: "Dr. Johnson helped me understand and manage my high blood pressure through lifestyle changes and medication. I finally feel in control of my health again.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients whose lives have been transformed through expert cardiac care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="bg-white hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} • {testimonial.condition}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold mb-2">Join Thousands of Satisfied Patients</h3>
            <p className="text-blue-100">Experience compassionate, expert cardiac care that puts you first.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
