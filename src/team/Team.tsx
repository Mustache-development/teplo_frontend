import React from 'react';

type TeamMember = {
    name: string;
    title: string;
    description: string;
    photo: string;
};

const teamMembers: TeamMember[] = [
    {
        name: 'John Doe',
        title: 'Frontend Developer',
        description: 'Specializes in building responsive and interactive web applications.',
        photo: '/images/john_doe.jpg',
    },
    {
        name: 'Jane Smith',
        title: 'Backend Developer',
        description: 'Expert in server-side logic and database management.',
        photo: '/images/jane_smith.jpg',
    },
    {
        name: 'Mike Johnson',
        title: 'Backend Developer',
        description: 'Focuses on API development and system integration.',
        photo: '/images/mike_johnson.jpg',
    },
    {
        name: 'Emily Davis',
        title: 'Project Manager',
        description: 'Ensures the project is on track and meets the deadlines.',
        photo: '/images/emily_davis.jpg',
    },
    {
        name: 'Chris Brown',
        title: 'Tester',
        description: 'Responsible for testing and quality assurance.',
        photo: '/images/chris_brown.jpg',
    },
    {
        name: 'Anna White',
        title: 'Designer',
        description: 'Creates visually appealing and user-friendly designs.',
        photo: '/images/anna_white.jpg',
    },
];

const Team: React.FC = () => {
    return (
        <div>
            <h1>Our Team</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {teamMembers.map((member) => (
                    <div key={member.name} style={{ margin: '20px', textAlign: 'center' }}>
                        <img src={member.photo} alt={member.name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                        <h2>{member.title}</h2>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;