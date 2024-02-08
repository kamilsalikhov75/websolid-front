import { ImageCard, Typography } from '@/shared/ui';
import { PROJECTS } from '../model/meta';

export const ProjectsPage = () => (
  <main className='flex flex-col gap-10'>
    <div>
      <Typography className='lg:title-1 mb-5 uppercase text-blue-500' tag='h1' variant='title-2'>
        РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
      </Typography>
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <ImageCard
            key={project.id}
            description={project.description}
            href={`/projects/${project.id}`}
            imageAlt={project.title}
            imageSrc={project.image}
            title={project.title}
          />
        ))}
      </div>
    </div>
  </main>
);
