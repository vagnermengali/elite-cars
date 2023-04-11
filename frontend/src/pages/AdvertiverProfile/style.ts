import styled from "styled-components";

interface IUserImg {
  avatarColor: string;
}

export const Container = styled.div`
  width: 100%;
  background-color: var(--grey8);
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 11.25rem);
`;

export const InfoUser = styled.main`
  width: 100%;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey8);
`;

export const BackgroundInfo = styled.div`
  width: 100%;
  min-height: 15rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, var(--brand1) 80%, var(--grey8) 20%);
`;

export const Info = styled.div`
  width: 90%;
  min-height: 20.3125rem;
  border-radius: 0.25rem;
  background-color: var(--grey10);
  margin-top: 5rem;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: -10rem;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const UserImg = styled.div<IUserImg>`
  background-color: ${(props) => `var(${props.avatarColor})`};
  min-height: 5rem;
  min-width: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: var(--whiteFixed);
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
`;

export const Tag = styled.span`
  background-color: var(--brand4);
  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  color: var(--brand1);
`;

export const Description = styled.div`
  color: var(--grey2);
  font-weight: 400;
`;
