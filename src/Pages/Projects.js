import './Project.css';

import ImageButton from '../Components/ImageButton'

function Projects() {
    return (
        <div className="Projects">
            <div className='section'>
                <ImageButton image={
                    {
                        url: 'https://i.ibb.co/nQFwB6X/Vocab-Builder.png',
                        title: 'Vocab Builder',
                        width: '20%'
                    }
                }/>
            </div>
        </div>
    );
}

export default Projects;
