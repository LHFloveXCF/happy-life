
import BlogCard from './BlogCard';
import s from './index.module.scss';

function Aside() {  
  return (
    <aside className={s.aside}>
      <BlogCard />
    </aside>
  );
}

export default Aside;
