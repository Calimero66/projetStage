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
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/Dashboard',
		icon: <LayoutDashboard  />
	},
	{
		key: 'CreateTeacher',
		label: 'CreateTeacher',
		path: '/CreateClasses',
		icon: <UsersRound />
	},
	{
		key: 'CreateStudent',
		label: 'CreateStudent',
		path: '/CreateClasses',
		icon: <UserRoundPlus />
	},
	{
		key: 'CreateClasses',
		label: 'CreateClasses',
		path: '/CreateClasses',
		icon: <BookPlus />
	},
	{
		key: 'CreateListOfAbsent',
		label: 'CreateListOfAbsent',
		path: '/CreateListOfAbsent',
		icon: <FilePlus />
	},
	{
		key: 'ListOfAbsent',
		label: 'ListOfAbsent',
		path: '/ListOfAbsent',
		icon: <Sheet />
	}
]
// export const SidebarLinksTeacher = [
// 	{
// 		key: 'dashboard',
// 		label: 'Dashboard',
// 		path: '/',
// 		icon: <LayoutDashboard  />
// 	},
// 	{
// 		key: 'ReadListOfAbsent',
// 		label: 'ReadListOfAbsent',
// 		path: '/ReadListOfAbsent',
// 		icon: <Sheet />
// 	},
// 	{
// 		key: 'InsertAbsent',
// 		label: 'InsertAbsent',
// 		path: '/InsertAbsent',
// 		icon: <NotebookPen />
// 	}
// ]
// export const SidebarLinksStudent = [
// 	{
// 		key: 'dashboard',
// 		label: 'Dashboard',
// 		path: '/',
// 		icon: <LayoutDashboard  />
// 	},
// 	{
// 		key: 'ReadListOfAbsent',
// 		label: 'ReadListOfAbsent',
// 		path: '/ReadListOfAbsent',
// 		icon: <Sheet />
// 	}
// ]

export const dashboardSidebarBottomLinks = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <Settings  />   
	}
	
]