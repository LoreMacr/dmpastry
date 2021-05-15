import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setUser, clearUser } from './redux/user/userActions';
import Routes from './routes';
import { registerAuthObserver } from './services/auth';
import { getUserProfile } from './controllers/user';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    registerAuthObserver(async (user) => {
      if (user) {
        console.log('Login done: ', user);
        const userProfile = await getUserProfile(user.uid);
        dispatch(setUser(userProfile))
      } else {
        console.log('Logoff done: ');
        dispatch(clearUser());
      }
      setIsLoading(false)
    }) 
  }, []);

  if (isLoading) return <>Ammmm...</>;


  return (
    <div>
      <Routes />
    </div>
    );
  }

  export default App