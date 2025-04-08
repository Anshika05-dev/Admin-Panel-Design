import React from 'react';
import { Instagram, Mail, Phone, Scissors, Palette, Magnet as Magic, Star } from 'lucide-react';
import './styles/Team.css';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Senior Hair Stylist",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600",
    bio: "With over 10 years of experience, Sarah specializes in creating unique styles that enhance each client's natural beauty.",
    specialties: ["Precision Cuts", "Wedding Styling", "Hair Color"],
    funFacts: ["Trained in Paris", "Speaks three languages", "Amateur photographer"],
    social: {
      instagram: "@sarah.styles",
      email: "sarah@example.com"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?auto=format&fit=crop&q=80&w=600",
    bio: "Michael is known for his innovative color techniques and ability to create stunning, natural-looking results.",
    specialties: ["Balayage", "Fashion Colors", "Color Correction"],
    funFacts: ["Award-winning colorist", "Tea enthusiast", "Rock climber"],
    social: {
      instagram: "@michael.colors",
      email: "michael@example.com"
    }
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Style Director",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=600",
    bio: "Emma brings creativity and passion to every client, specializing in avant-garde styles and transformative makeovers.",
    specialties: ["Avant-garde Styling", "Extensions", "Textured Hair"],
    funFacts: ["Published stylist", "Former runway stylist", "Yoga instructor"],
    social: {
      instagram: "@emma.styles",
      email: "emma@example.com"
    }
  }
];

// const SpecialtyIcon = ({ specialty }) => {
//   switch (specialty.toLowerCase()) {
//     case 'precision cuts':
//       return <Scissors className="icon" />;
//     case 'hair color':
//     case 'fashion colors':
//     case 'color correction':
//       return <Palette className="icon" />;
//     case 'balayage':
//       return <Magic className="icon" />;
//     default:
//       return <Star className="icon" />;
//   }
// };

function Teams() {
  
  return (
    <div className="teams">
      <header className="teams-header">
        <div className="teams-header-content">
          <h1>Meet Our Amazing Team</h1>
          <p>
            Our talented stylists bring years of experience and passion to every client.
            Each member of our team is dedicated to helping you look and feel your best.
          </p>
          </div>
          <button className='add-team'>+ Add </button>
        
      </header>

      <div className="team-container">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
              </div>
              <div className="card-content">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                {/* <p className="bio">{member.bio}</p> */}

                {/* <div className="specialties">
                  <h4>Specialties</h4>
                  <div className="specialty-tags">
                    {member.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">
                        <SpecialtyIcon specialty={specialty} />
                        <span>{specialty}</span>
                      </span>
                    ))}
                  </div>
                </div> */}

                {/* <div className="fun-facts">
                  <h4>Fun Facts</h4>
                  <ul>
                    {member.funFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div> */}

                <div className="social-links">
                  {member.social.instagram && (
                    <a
                      href={`https://instagram.com/${member.social.instagram}`}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.social.email}`}
                    className="social-link"
                  >
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Look?</h2>
            <p>
              Book an appointment with one of our talented stylists and experience the difference.
            </p>
            <div className="cta-buttons">
              <button className="book-button">
                Book Now
              </button>
              <a
                href="tel:+1234567890"
                className="call-button"
              >
                <Phone className="phone-icon" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;