export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='page-scroll' href='#page-top'>
            <img id="logoRentServices" src={props.data ? props.data.image : "Loading"} alt='' />{' '}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
                O nás
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Služby
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Galéria
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='#priceList' className='page-scroll'>
                Cenník
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
