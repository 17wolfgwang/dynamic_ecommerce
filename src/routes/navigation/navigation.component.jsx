import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import DynamicLogo from "../../assets/dynamic_logo.svg"
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  StyledText,
  LogoNameContainer,
  LogoSetContainer,
  LogoImage,
  Title,
  SubTitle
} from "./navigation.styles";

const Navigation = (props) => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const { userName } = props;

  const location = useLocation();
  const homePath = '/'
  const isHome = location.pathname === homePath;

  return (
    <Fragment>
      <NavigationContainer>
        <LogoSetContainer>
          <LogoContainer to="/">
            <LogoImage className="logo" src={DynamicLogo} alt="logo" />
          </LogoContainer>
          <LogoNameContainer to="/"> Dynamic </LogoNameContainer>
        </LogoSetContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>

          {currentUser ? (
            <>
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
              <StyledText>
                Hello {userName.split(" ")[0]} {":)"}
              </StyledText>
            </>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      {isHome && (
        <><Title>GEAR UP, STAND OUT</Title>
          <SubTitle>Unleash your inner athlete with our trendy sports goods.</SubTitle></>)}
    </Fragment >
  );
};

export default Navigation;
