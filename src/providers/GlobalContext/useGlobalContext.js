import { useContext } from 'react';
import { GlobalContext } from './GlobalContextProvider';

export default () => {
  const context = useContext(GlobalContext);

  // useEffect(() =>{

  // },[context, dispatch])

  return context;
};
