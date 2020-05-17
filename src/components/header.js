import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo.svg"

// creating a React styled component
const HeaderWrapper = styled.div`
  background: #524763;
  img {
    margin-bottom: 0; // overriding the base img style in css folder
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} Louies Logs*/}
          <img
            style={{ width: "100px" }}
            src={Logo}
            alt="Level Up Tutorials Logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
