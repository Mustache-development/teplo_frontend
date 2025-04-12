import React from 'react';
import * as styles from './team.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface TeamMember {
    name: string;
    title: string;
    description: string;
    photo: string;
}

interface FileNode {
    name: string;
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
    };
}

interface FileEdge {
    node: FileNode;
}

const Team: React.FC = () => {
    const data = useStaticQuery(graphql`
        query TeamImages {
            allFile(filter: { relativeDirectory: { eq: "team" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(
                                width: 300
                                height: 300
                                layout: FIXED
                            )
                        }
                    }
                }
            }
        }
    `);

    console.log('data', data);

    const teamMembers: TeamMember[] = [
        {
            name: 'Andriy Lutiy Sushko',
            title: 'Team Lead, Frontend Developer',
            description:
                'Андрій виступив технічним лідером проєкту та відповідав за архітектуру, ключові технічні рішення і розробку клієнтської частини. Завдяки його досвіду вдалося швидко запустити стабільний вебзастосунок.',
            photo: 'sushko'
        },
        {
            name: 'Alla Rudenka',
            title: 'Project Manager',
            description:
                'Алла організувала роботу команди, налаштувала комунікацію, слідкувала за дедлайнами та допомагала усім учасникам залишатися на одній хвилі. Саме завдяки її управлінню проєкт був завершений вчасно.',
            photo: 'female'
        },
        {
            name: 'Tetiana Horobchuk',
            title: 'UX/UI Designer',
            description:
                'Тетяна створила адаптивні макети та інтерфейс користувача, який однаково зручно виглядає як на мобільних пристроях, так і на десктопі. Вона зробила значний внесок у зручність і візуальну привабливість продукту.',
            photo: 'female'
        },
        {
            name: 'Maxim Rudaites',
            title: 'Frontend Developer',
            description:
                'Максим реалізовував мобільну та десктопну версію інтерфейсу відповідно до дизайну. Його уважність до деталей дозволила зробити користування сайтом приємним та інтуїтивно зрозумілим.',
            photo: 'male'
        },
        {
            name: 'Volodymyr Horbatiuk',
            title: 'Backend Developer',
            description:
                'Володимир займався розробкою серверної частини, API та налаштуванням взаємодії між фронтендом і базами даних. Його робота стала основою стабільної роботи сервісу.',
            photo: 'male'
        },
        {
            name: 'Ruslan Petrov',
            title: 'Backend Developer',
            description:
                'Руслан відповідав за реалізацію важливих бекенд-функцій та підтримку API. Його досвід дозволив ефективно інтегрувати систему та забезпечити її надійність.',
            photo: 'male'
        },
        {
            name: 'Lilia Osipova',
            title: 'QA Manual Tester',
            description:
                'Лілія тестувала функціонал, виявляла баги та перевіряла якість реалізації кожної частини. Її уважність до деталей гарантувала високу якість кінцевого продукту.',
            photo: 'female'
        },
        {
            name: 'Irina Parambul',
            title: 'HR-Manager',
            description:
                'Ірина допомогла зібрати команду та підтримувала позитивну атмосферу під час роботи. Вона створила умови, в яких кожен учасник міг працювати ефективно.',
            photo: 'female'
        },
    ];

    return (
        <div className={styles.teamPage}>
            <div className={styles.teamTitle}>
                <h1>Наша команда</h1>
                <p>Наша команда створила сайт проєкту "Тепло на передову" - зручний інформаційний портал для підтримки військових і збору коштів. Кожен член команди внес суттєвий вклад у створення цього проекту, який допомагає ефективно допомагати нашим захисникам.</p>

            </div>

            <div className={styles.teamGrid}>
            {teamMembers.map((member) => {
                    const imageNode = data.allFile.edges.find(
                        (edge: FileEdge) => edge.node.name === member.photo
                    )?.node;
                
                    return (
                        <div key={member.name} className={styles.teamCard}>
                            {imageNode?.childImageSharp?.gatsbyImageData && (
                                <GatsbyImage
                                image={imageNode.childImageSharp.gatsbyImageData}
                                alt={member.name}
                                className={styles.teamImage}
                                imgClassName={styles.teamImage}
                                style={{ width: '100%', height: '300px' }}
                            />
                            )}
                            <div className={styles.teamContent}>
                                <h2 className={styles.teamName}>{member.name}</h2>
                                <h3 className={styles.teamTitle}>{member.title}</h3>
                                <p className={styles.teamDescription}>{member.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Team;