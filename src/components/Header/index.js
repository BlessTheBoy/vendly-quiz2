import { forwardRef } from 'react';
import './style.css';

const Header = forwardRef((props, ref) => {
  return (
      <header className="header"ref={ref}>
        <h1 className='header_title'>Quiz</h1>
      </header>
  )
})

export default Header
