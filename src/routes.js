import LoginPage from "./pages/LoginPage";
import SignupScreen from "./SignupScreen";
import MainPage from "./pages/MainPage";
import AdminMainPage from "./pages/AdminMainPage";
import FavoritesPage from "./pages/FavoritesPage";
import LivePage from "./pages/LivePage";
import MatchDetailPage from "./pages/MatchDetailPage";
import BracketPage from "./pages/BracketPage";
import Settings from "./pages/Settings";
import MyPage from "./pages/MyPage";
import TeamManagementPage from "./pages/TeamManagementPage";
import MatchManagementPage from "./pages/MatchManagementPage";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
    exact: true,
  },
  {
    path: "/SignupScreen",
    element: <SignupScreen />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/adminmainpage",
    element: <AdminMainPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/livepage",
    element: <LivePage />,
  },
  {
    path: "/matchDetail/:matchId",
    element: <MatchDetailPage />,
  },
  {
    path: "/bracketpage",
    element: <BracketPage />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/create-team",
    element: <TeamManagementPage />,
  },
  {
    path: "/create-match",
    element: <MatchManagementPage />,
  },
];
export default routes;