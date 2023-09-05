import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/main";
import Root from "../pages/root";
import Login from "../pages/login/login";
import SearchResult from "../pages/search/searchResult";
import EditorList from "../pages/editor/editorlist";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: "/login", element: <Login /> },
      { path: "/searchResult/:search", element: <SearchResult /> },
      { path: "/editorlist", element: <EditorList /> },
    ],
  },
]);
