import React from 'react';
import styles from './team.module.css';

interface TeamMember {
    name: string;
    title: string;
    description: string;
    photo: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Sushko Andriy',
        title: 'Team Lead, Frontend Developer',
        description: 'Specializes in building responsive and interactive web applications.',
        photo: '/images/team/img1.jpeg',
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
        <div className={styles.teamPage}>
            <div className={styles.teamTitle}>
                <h1>Наша команда</h1>
                <p>Талановиті професіонали, які працюють разом для створення чудового продукту</p>
            </div>

            <div className={styles.teamGrid}>
                {teamMembers.map((member) => (
                    <div key={member.name} className={styles.teamCard}>
                        <img 
                            src={member.photo} 
                            alt={member.name} 
                            className={styles.teamImage}
                        />
                        <div className={styles.teamContent}>
                            <h2 className={styles.teamName}>{member.name}</h2>
                            <h3 className={styles.teamTitle}>{member.title}</h3>
                            <p className={styles.teamDescription}>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;