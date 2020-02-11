import React from 'react';
import { useFetch } from "./hooks";

const url1 = 'https://jsonblob.com/api/jsonBlo/8be236ca-4cae-11ea-97f8-491074f38960';
const url2 = 'https://jsonblob.com/api/jsonBlob/b80655c5-4cac-11ea-97f8-2d14d3cd38c7';
const url3 = 'https://jsonblob.com/api/jsonBlob/9cdc79c4-4ca9-11ea-97f8-05218d042d51';

const calculateDuration = (start, end) => {
	const date1 = new Date(start);
	const date2 = new Date(end);
	const diffTime = Math.abs(date2 - date1);
	return Math.ceil(diffTime / (1000 * 60));
}

const TableView = () => {
	const sessionsList = useFetch( url1, []);
	const vectors = useFetch(url2, []);
	const details = useFetch(url3, []);
	console.log('vectors',JSON.stringify(vectors));
	
	const getGad = id => {
		const gadObj = vectors.find( entry => (entry.session_id === id && entry.outcome_type === "gad7"));
		return gadObj ? gadObj.score : null;
	};
	
	return (
		<table className='sessions'>
			<thead>
			<tr>
				<th></th>
				<th>Date</th>
				<th>Patient</th>
				<th>Session</th>
				<th>PHQ-9</th>
				<th>GAD-7</th>
				<th>Duration</th>
			</tr>
			</thead>
			<tbody>
			{
				sessionsList.map( entry => {
					
					return (
						<tr key={entry.id}>
							<td></td>
							<td>{new Date(entry.start_time).toLocaleString()}</td>
							<td>Monica Levinski</td>
							<td></td>
							<td></td>
							<td>{getGad(entry.id)}</td>
							<td>{calculateDuration(entry.start_time, entry.end_time)}</td>
						</tr>
					)
				})
			}
			</tbody>
		</table>
	)
};

export default TableView;