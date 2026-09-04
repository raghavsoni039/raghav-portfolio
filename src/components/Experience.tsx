import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Generative AI and Cloud Computing',
      company: 'IBM SkillsBuild Internship',
      location: 'Jaipur,Rajasthan',
      period: 'june-26 to july-26',
      description: [
        'Led a 3-member team in design developement and deployment of ResearchMindAI' ,
        'ResearchMindAI is a RAG powered Research Assistant',
        'Managed Deployment debugging and AWS cloud deployment','Troubleshooting runtime issues to ensure a stable , production-ready Application'
      ]
    },
    {
      title: 'Agentic AI Intern',
      company: 'Linux World Informatics Private Limited',
      location: 'Jaipur,Rajasthan',
      period: 'july-25 to aug-25',
      description: [
        'Launched Red Hat Linux on Windows VM','Implemented Docker containerization',

'Automated social media posting'
,'Deployed Docker-in-Docker containers'
      ]
    }
  ];

  const education = [
    
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Arya College of Engineering, Jaipur',
      period: '2023 - present',
      gpa: '8.2/10.0'
    },
    {
      degree: 'Higher Secondary Education',
      school: 'Saint Edmund\'s School, Jaipur',
      period: '2021 - 2023'
    }
  ];

  const certifications = [{
    name:'Oracle Certified AI Foundations Associate 2025',
  link:"https://drive.google.com/file/d/1KITlSAp9rnlEo_gTczqTKKZeAt8ojODH/view?usp=drive_link"},{name:'SQL(Basic) ',link:"https://drive.google.com/file/d/1gEpVAxyAGxv7LMb-eoiC0r6dk76Z_PSS/view?usp=drive_link"}
  ];

  return (
    <section id="experience" className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-[#00C9A7] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Work Experience</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#00C9A7]"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 pb-12 last:pb-0">
                  <div className="absolute left-0 w-8 h-8 bg-[#00C9A7] rounded-full flex items-center justify-center">
                    <Building size={16} className="text-[#0D0D0D]" />
                  </div>
                  
                  <div className="bg-[#1A1A1A] p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-[#EAEAEA] mb-2">
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 mb-4 text-[#B3B3B3] text-sm">
                      <div className="flex items-center">
                        <Building size={16} className="mr-2 text-[#00C9A7]" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-[#00C9A7]" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-[#00C9A7]" />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-[#B3B3B3] text-sm flex items-start">
                          <span className="w-2 h-2 bg-[#00C9A7] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-[#00C9A7] mb-2">{edu.school}</p>
                  <div className="flex justify-between text-[#B3B3B3] text-sm">
                    <span>{edu.period}</span>
                    {edu.gpa && (
                      <span>GPA: {edu.gpa}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#EAEAEA] mb-8">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#1A1A1A] p-4 rounded-lg hover:border hover:border-[#00C9A7] transition-all duration-300"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00C9A7] underline font-medium hover:text-[#00A085] transition-colors duration-300"
                    >
                      {cert.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;