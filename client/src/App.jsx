import { useEffect } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	useEffect(() => {
		fetchData();
	});
	return (
		<>
			<GlobalStyles />
		</>
	);
};

const fetchData = async () => {
	const response = await fetch(url);
	const data = await response.json();

	console.log(data);
};
export default App;
