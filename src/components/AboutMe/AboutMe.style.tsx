import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;
`;

export const Name = styled.h1`
  font-size: 64px;
  font-weight: 500;
  color: #fff;
`;

export const Description = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: #fff;
  max-width: 800px;
  text-align: center;
`;
