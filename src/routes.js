import Posts from './pages/posts';
import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';

export const routes = [
    {
        isNavBar: true,
        isExact: true,
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        isNavBar: true,
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
    {
        isNavBar: true,
        path: '/profile',
        name: 'Profile',
        component: Profile,
        isPrivate: true
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];
