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
      review: "The best driving school in Nairobi! Flexible schedules and experienced instructors. I'm now a confident driver thanks to them."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied students 
            have to say about their experience with Raha Driving School.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
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