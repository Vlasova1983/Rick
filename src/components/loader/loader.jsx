import { Watch } from  'react-loader-spinner';
import styles  from './loader.module.css';

const Loader = () => { 
  return (
  <div className={styles.loader}>
    <Watch   
      height="250"
      width="250"
      radius="48"
      color="#8E8E93" 
      display= "flex"
      justify-content= "center"  
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}   
   />
  </div>
  );
};

export default Loader;