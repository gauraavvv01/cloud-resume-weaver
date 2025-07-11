
import React from 'react';
import { Trophy, Award, Users, Code, Target, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Sports Tournament Organization',
      description: 'Led and organized a major sports tournament with 1000+ participants, demonstrating exceptional event management and coordination skills',
      category: 'Leadership'
    },
    {
      icon: Award,
      title: 'Ecom-thon 2023 Winner',
      description: 'Winner of Ecom-thon 2023 and Runner-up in VIT Linux Club Advitya Talent-thon, demonstrating technical excellence',
      category: 'Technical'
    },
    {
      icon: Target,
      title: 'National Science Congress',
      description: 'Achieved first place at State level in National Science Congress and represented the region at IIT Kanpur nationals',
      category: 'Academic'
    },
    {
      icon: Code,
      title: 'Programming Excellence',
      description: 'LeetCode: 200+ problems solved | GeeksforGeeks: 100+ problems solved',
      category: 'Technical'
    },
    {
      icon: Medal,
      title: 'Quiz Competition',
      description: 'Secured 5th position in RBI90 Quiz at state level, showcasing strong analytical and quick-thinking abilities',
      category: 'Academic'
    },
    {
      icon: Users,
      title: 'Smart India Hackathon',
      description: 'Successfully qualified for Smart India Hackathon (SIH), showcasing innovative problem-solving capabilities',
      category: 'Technical'
    },
    {
      icon: Trophy,
      title: 'Sports Championships',
      description: 'Achieved multiple victories in regional badminton tournaments and secured runner-up position in cricket championships',
      category: 'Sports'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical': return 'text-orange-400 bg-orange-900/50 border-orange-700';
      case 'Leadership': return 'text-orange-400 bg-orange-900/50 border-orange-700';
      case 'Academic': return 'text-orange-400 bg-orange-900/50 border-orange-700';
      case 'Sports': return 'text-orange-400 bg-orange-900/50 border-orange-700';
      default: return 'text-gray-400 bg-gray-900 border-gray-700';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Leadership & Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and accomplishments across technical excellence, leadership, academics, and sports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-orange-500 group">
              <div className="flex items-center mb-4">
                <div className="bg-orange-900/50 p-3 rounded-full mr-4 group-hover:bg-orange-800/50 transition-colors duration-300">
                  <achievement.icon className="text-orange-500" size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(achievement.category)}`}>
                  {achievement.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
