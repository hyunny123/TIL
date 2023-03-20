import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  font-weight: 600;
  font-size: 18px;
`;

const ImageBox = styled.img`
  max-width: 100px;
  margin-bottom: 5px;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const NavContent = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export default function NavBar() {
  const router = useRouter();

  return (
    <NavContainer>
      <ImageBox src="/vercel.svg" />
      <LinkWrap>
        <Link href="/">
          <NavContent className={router.pathname === "/" ? "active" : ""}>
            Home
          </NavContent>
        </Link>
        <Link href="/about">
          <NavContent className={router.pathname === "/about" ? "active" : ""}>
            About
          </NavContent>
        </Link>
      </LinkWrap>
    </NavContainer>
  );
}
