import React from 'react'
import Header from './header'
import ScrollTop from './scrollTop'

// import styles from './layout.module.css'
import '../styles/bootstrap.min.css'
import '../styles/layout.css'
import '../styles/slick.min.css'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: function (anchor, toggle) {
      return 55;
    },
  });
}

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div>{children}</div>
    <ScrollTop />
    <footer className="footer">
      <div className="container">
        <div className='text-center'>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>

        <div className="text-center">
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
