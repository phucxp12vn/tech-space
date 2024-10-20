import { Button, ChartOne, Card } from '@tech-space/ui';

const dummyMissions = [
  {
    id: '1',
    name: 'Shadow English',
    image: '/images/shadow-speaking.jpg',
    content: 'Practice shadow english with 3 sentences 5 times',
  },
  {
    id: '2',
    name: 'Free Speak English',
    image: '/images/chat-ai.jpg',
    content: 'Practice speaking with AI in 5 minutes',
  },
  {
    id: '3',
    name: 'Reading book',
    image: '/images/reading-book.jpeg',
    content: 'Read 1 page and summary the main content at least 3 sentences',
  },
];

export default function MissionsPage() {
  return (
    <>
       <div className="mt-4 md:mt-6 grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
          {dummyMissions.map((mission) => (
            <Card
              key={mission.id}
              imageSrc={mission.image}
              title={mission.name}
              content={mission.content}
            />
          ))}
        </div>
    </>
  );
}
