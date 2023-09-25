import { Card } from 'src/components/Card';
import { Heading } from 'src/components/Heading';
import { Text } from 'src/components/Text';
import { VContainer } from 'src/styles/home.style';
import styled from 'styled-components';

export const CardTitle = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const NameTitle = styled(Heading)`
  font-size: 64px;
`;

export const InfoCard = styled(Card)<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  gap: 0;
`;

export const InfoHeader = styled(Heading)<{ dark?: boolean }>`
  ${({ dark }) => (dark ? 'color: #1E1E1E' : 'color: #fff')};
`;

export const InfoText = styled(Text)<{ dark?: boolean }>`
  ${({ dark }) => (dark ? 'color: #1E1E1E' : 'color: #fff')};
  text-align: center;
  width: 150%;
`;

export const LinksCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 100px;
`;

export const StatusCard = styled(Card)`
  padding: 0;
`;

export const StatusWrapper = styled.div`
  display: flex;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
`;

export const BasedInCard = styled(Card)`
  padding: 0;
`;

export const BasedInWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
`;

export const BasedInText = styled(Text)`
  color: #7b7b7b;
`;

export const DescCard = styled(Card)`
  padding: 0;
  height: 100%;
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 15px;
`;

export const DescContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 50px;
  padding-top: 30px;
`;

export const VContainerRight = styled(VContainer)`
  height: 100%;
`;
