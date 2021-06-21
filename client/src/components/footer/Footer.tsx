import React from 'react';
import './Footer.css';
import Button from '../Button'
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        !הצטרף/י למאות הסטודנטים שלנו בשוק ההייטק
        </p>
        <p className='footer-subscription-text'>
        לפרטים - הכנס/י את המייל שלך ונחזור אלייך
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
         <Button buttonStyle='btn--outline'>שלח</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
          <div className='footer-link-items'>
          <h2>על טק קריירה</h2>
            <Link to='/sign-up'>קצת עלינו</Link>
            <Link to='/'>קורסים</Link>
            <Link to='/'>שיתופי פעולה</Link>
            <Link to='/'>תנאי שימוש</Link>
          </div>
          <div className='footer-link-items'>
          <h2>צור קשר</h2>
            <Link to='/'>טלפון קווי</Link>
            <Link to='/'>סלולארי</Link>
            <Link to='/'>פקס</Link>
            <Link to='/'>תמיכה טכנית</Link>
          </div>
       
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <h2>בוגרי טק </h2>
            <Link to='/'>וידאו</Link>
            <Link to='/'>תמונות</Link>
            <Link to='/'>סיפורים</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>YouTube</Link>
            <Link to=''>Linkedin</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="tcLogo.png" alt="" />
              Tech-Career
            </Link>
          </div>
          <small className='website-rights'>Tech-Career © 2021 בת שבע 3, מתחם טלרד, לוד</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
 
            </Link>
           
           
           
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
          
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;