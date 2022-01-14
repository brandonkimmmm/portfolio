import { ComponentType } from 'react';
import { Project } from '../../models';
import Link from 'next/link';
import TechnologyLogo from '../Technology/TechnologyLogo';

interface Props {
	project: Project;
}

const ProjectCard: ComponentType<Props> = ({ project }) => {
	return (
		<div className='card h-full shadow bg-blue-800 relative'>
			<Link href={`/portfolio/${project.id}`}>
				<div className='card-body flex flex-col justify-between hover:bg-neutral hover:cursor-pointer'>
					<div className='card-title uppercase'>{project.name}</div>
					<div className='flex flex-row space-x-2 justify-end'>
						{project.technologies.map((tech, i) => (
							<TechnologyLogo
								key={i}
								tech={tech}
								height={20}
								width={20}
							/>
						))}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;
