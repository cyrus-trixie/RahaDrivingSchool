import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import avatarWoman1 from "@/assets/avatar-woman-1.jpg";
import avatarMan1 from "@/assets/avatar-man-1.jpg";
import avatarWoman2 from "@/assets/avatar-woman-2.jpg";
import avatarMan2 from "@/assets/avatar-man-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      avatar: avatarWoman1,
      review: "Raha Driving School made learning to drive so easy! The instructors were patient and professional. I passed my test on the first try."
    },
    {
      name: "James Ochieng",
      avatar: avatarMan1,
      review: "Excellent training and modern cars. The theory classes were very helpful in understanding traffic rules. Highly recommended!"
    },
    {
      name: "Mary Kivuti",
      avatar: avatarWoman2,
      review: "I was nervous about driving, but the instructors at Raha Driving School made me feel confident. Great value for money and professional service."
    },
    {
      name: "David Kamau",
      avatar: avatarMan2,
      review: "The best driving school in Nakuru! Flexible schedules and experienced instructors. I'm now a confident driver thanks to them."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          What Our Students Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Don't just take our word for it. Here's what our satisfied students 
          have to say about their experience with Raha Driving School.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Verified Student
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;