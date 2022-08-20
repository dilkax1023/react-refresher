import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BasicTabs({ onTabSelect }: { onTabSelect: any }) {
	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<button onClick={() => onTabSelect('photos')}>Photos</button>
				<button onClick={() => onTabSelect('comments')}>Comments</button>
			</Box>
		</Box>
	);
}
