import { 
	UsersRound ,
	UserRoundPlus ,
	BookPlus ,
	FilePlus ,
	Sheet ,
	LayoutDashboard ,
	Settings  
} from 'lucide-react';

export const sidebarLinksAdmin = [
	// {
	// 	key: 'dashboard',
	// 	label: 'Dashboard',
	// 	path: '/Dashboard',
	// 	icon: <LayoutDashboard  />
	// },
	{
		key: 'CreateManager',
		label: 'Create Manager',
		path: '/Dashboard/CreateManager',
		icon: <UsersRound />
	},
	{
		key: 'CreateAgent',
		label: 'Create Agent',
		path: '/Dashboard/CreateAgent',
		icon: <UserRoundPlus />
	},
	{
		key: 'CreateClient',
		label: 'Create Client',
		path: '/Dashboard/CreateClient',
		icon: <BookPlus />
	},
	{
		key: 'ImportListClients',
		label: 'import List Of Client',
		path: '/Dashboard/ImportListClients',
		icon: <FilePlus />
	},
]

export const dashboardSidebarBottomLinks = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <Settings  />   
	}
	
]