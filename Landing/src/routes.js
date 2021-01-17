import Index9 from "./pages/Index9/Index9";
import Index8 from "./pages/Index8/Index8";
import Index7 from "./pages/Index7/Index7";

//Auth Pages
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PasswordForget from "./pages/Auth/PasswordForget";

const routes = [
  { path: "/password-forget", component: PasswordForget },
  { path: "/login", component: Login },
  { path: "/sign-up", component: Signup },
  { path: "/mypage", component: Index7 },
  { path: "/conexoes", component: Index9 },
  { path: "/", component: Index8 },
];

export default routes;
