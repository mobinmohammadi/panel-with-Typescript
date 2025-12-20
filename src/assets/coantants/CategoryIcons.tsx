import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ICategoryIcon {
  [key : string] : React.ReactElement
}


const CategoryIcons : ICategoryIcon = {
  HomeIcon: <HomeIcon />,
  SearchIcon: <SearchIcon />,
  FavoriteIcon: <FavoriteIcon />,
  PersonIcon: <PersonIcon />,
  ShoppingCartIcon: <ShoppingCartIcon />,
  SettingsIcon: <SettingsIcon />,
  InfoIcon: <InfoIcon />,
  CategoryIcon: <CategoryIcon />,
  NotificationsIcon: <NotificationsIcon />,
  MailIcon: <MailIcon />,
  StarIcon: <StarIcon />,
  DeleteIcon: <DeleteIcon />,
  EditIcon: <EditIcon />,
  AddCircleIcon: <AddCircleIcon />,
  CheckCircleIcon: <CheckCircleIcon />,
};

export default CategoryIcons;
