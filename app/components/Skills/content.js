export const skillCategories = [
    {
      title: "Web Development",
      backgroundImage: '/backgrounds/web.gif',
      gradientColors: {
        from: 'rgba(59, 130, 246, 0.9)',
        to: 'rgba(147, 51, 234, 0.9)'
      },
      skills: [
        { 
          name: 'HTML', 
          level: 'Intermediate', 
          image: '/skills/html.png',
          color: '#E34F26' // HTML5 orange-red
        },
        { 
          name: 'JavaScript', 
          level: 'Intermediate', 
          image: '/skills/javascript.png',
          color: '#F7DF1E' // JavaScript yellow
        },
        { 
          name: 'React', 
          level: 'Intermediate', 
          image: '/skills/react.png',
          color: '#61DAFB' // React blue
        },
        { 
          name: 'CSS3', 
          level: 'Intermediate', 
          image: '/skills/css.png',
          color: '#264DE4' // CSS blue
        }
      ]
    },
    {
      title: "Backend Development",
      backgroundImage: '/backgrounds/back.gif',
      gradientColors: {
        from: 'rgba(16, 185, 129, 0.9)',
        to: 'rgba(6, 182, 212, 0.9)'
      },
      skills: [
        { 
          name: 'MySQL', 
          level: 'Intermediate', 
          image: '/skills/mysql.png',
          color: '#4479A1' // MySQL blue
        },
        { 
          name: 'Python', 
          level: 'Advanced', 
          image: '/skills/python.png',
          color: '#3776AB' // Python blue
        },
        { 
          name: 'Java', 
          level: 'Advanced', 
          image: '/skills/java.png',
          color: '#007396' // Java blue
        }
      ]
    },
    {
      title: "System/Low Level Development",
      backgroundImage: '/backgrounds/cpu.gif',
      gradientColors: {
        from: 'rgba(250, 150, 0, 0.5)', // Fixed alpha value
        to: 'rgba(200, 0, 0, 0.5)'
      },
      skills: [
        { 
          name: 'C++', 
          level: 'Advanced', 
          image: '/skills/cpp.png',
          color: '#00599C' // C++ blue
        },
        { 
          name: 'x86', 
          level: 'Advanced', 
          image: '/skills/x86.png',
          color: '#8B0000' // x86 red
        }
      ]
    }
];