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

export default function Overview() {
  return (
    <>
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            Overview
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
          <ChartOne />
        </div>
      </div>
      <div className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
              Top Missions
            </h2>
          </div>
          <div className="">
            <div className="relative flex">
              <Button label="View All Missions" />
            </div>
          </div>
        </div>
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
      </div>
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            Recent Activities
          </h2>
        </div>
      </div>
    </>
  );
}
