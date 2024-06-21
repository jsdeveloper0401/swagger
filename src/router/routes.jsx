import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AppleIcon from '@mui/icons-material/Apple';
const routes = [
    {
        path: "/main",
        content: "Cars",
        icon: <DirectionsCarIcon/>
    },
    {
        path: "/main/brand",
        content: "Brands",
        icon: <AppleIcon/>
    },
];

export default routes;
