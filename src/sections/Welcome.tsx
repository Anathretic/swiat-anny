import { HashLink } from 'react-router-hash-link';

const Welcome: React.FC = () => {
	return (
		<section className='welcome'>
			<div className='welcome__container'>
				<h1 className='welcome__title'>
					<span>Ś</span>
					<span>w</span>
					<span>i</span>
					<span>a</span>
					<span>t</span>
					<span>A</span>
					<span>n</span>
					<span>n</span>
					<span>y</span>
				</h1>
				<HashLink smooth to='/#oferta' className='welcome__button'>
					odkryj
				</HashLink>
			</div>
		</section>
	);
};

export default Welcome;
