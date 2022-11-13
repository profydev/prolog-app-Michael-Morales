import Link from "next/link";
import styled from "styled-components";
import { Routes } from "@config/routes";

const Header = styled.header`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const Nav = styled.nav`
  display: flex;
  column-gap: 2rem;
`;

const NavLink = styled.a`
  color: #667085;
  font-weight: 500;
  line-height: 1.5;
  text-transform: capitalize;
  text-decoration: none;
`;

const DashboardLink = styled.a`
  padding: 0.625rem 1.125rem;
  color: #fff;
  font-weight: 500;
  line-height: 1.5;
  background-color: #7f56d9;
  border: 1px solid #7f56d9;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.5);
  text-transform: capitalize;
  text-decoration: none;
`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <Nav>
          <Link href="/" passHref>
            <NavLink>home</NavLink>
          </Link>
          <Link href="/products" passHref>
            <NavLink>products</NavLink>
          </Link>
          <Link href="/documentation" passHref>
            <NavLink>documentation</NavLink>
          </Link>
          <Link href="/pricing" passHref>
            <NavLink>pricing</NavLink>
          </Link>
        </Nav>
        <Link href={Routes.projects} passHref>
          <DashboardLink>open dashboard</DashboardLink>
        </Link>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
