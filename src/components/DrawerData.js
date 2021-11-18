import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';


const DrawerData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Ordering",
        icon: <StoreIcon />,
        link: "/"

    },
    {
        title: "Inventory",
        icon: <InventoryIcon />,
        link: "/inventory"
    },
    {
        title: "News",
        icon: <AnnouncementIcon />,
        link: "/"
    },
    {
        title: "Reports",
        icon: <NotificationImportantIcon />,
        link: "/"
    },
]

export default DrawerData;