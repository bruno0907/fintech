import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { SignIn } from '../views/pages/SignIn';
import { SignUp } from '../views/pages/SignUp';
import { Home } from '../views/pages/Home';
import { AuthLayout } from '../views/layouts/AuthLayout';
import { AppLayout } from '../views/layouts/AppLayout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
