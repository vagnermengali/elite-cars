import styled from "styled-components";

export const ContainerPhotoList = styled.div`
  width: 100%;
  padding: 2.25rem 2.75rem;
  border-radius: 0.25rem;
  background-color: var(--whiteFixed);
`;

export const TextPhoto = styled.h2``;

export const CustomerPhotoList = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.875rem;
  .icon{
    width:100%;
    font-size: 2.5rem;
    color: var(--grey5);
    @media (max-width: 1250px) {
    font-size: 3.5rem;
	}
  @media (max-width: 600px) {
    font-size: 3rem;
	}
  @media (max-width: 1250px) {
    font-size: 4.5rem;
	}
  @media (max-width: 426px) {
    font-size: 3rem;
	}
  @media (max-width: 376px) {
    font-size: 2.5rem;
	}
  @media (max-width: 321px) {
    font-size: 2rem;
	}
  }
`;

export const ContainerPhoto = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border-radius: 0.25rem;
  background: var(--grey7);
  overflow: hidden;
  cursor: pointer;
`;

export const Photo = styled.img`
  width: 100%;
`;
