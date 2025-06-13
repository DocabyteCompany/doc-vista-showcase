
import { Award, Book, Users, Clock } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Board Certified",
      description: "American Board of Internal Medicine - Cardiovascular Disease"
    },
    {
      icon: Book,
      title: "Research & Publications",
      description: "50+ peer-reviewed publications in top cardiac journals"
    },
    {
      icon: Users,
      title: "Professional Memberships",
      description: "American College of Cardiology, American Heart Association"
    },
    {
      icon: Clock,
      title: "Continuing Education",
      description: "Regular training in latest cardiac technologies and treatments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=600&fit=crop"
                alt="Dr. Sarah Johnson in her office"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Sarah Johnson
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience 
                in comprehensive cardiac care. She graduated magna cum laude from Harvard Medical School 
                and completed her cardiology fellowship at Johns Hopkins Hospital.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Johnson is passionate about preventive cardiology and believes in empowering 
                patients with knowledge to take control of their heart health. She combines 
                cutting-edge medical technology with compassionate, personalized care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <achievement.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Philosophy of Care</h3>
              <p className="italic">
                "Every patient deserves personalized, compassionate care. I believe in treating 
                not just the condition, but the whole person, ensuring each patient feels heard, 
                understood, and empowered in their journey to better heart health."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
