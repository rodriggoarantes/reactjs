import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;
export const Info = styled.div`
  margin-left: 10px;
`;
export const Name = styled.strong`
  display: block;
  color: #333;
  font-size: 16px;
`;
export const Techs = styled.span`
  font-size: 13px;
  margin-top: 2px;
  color: #999;
`;
export const Bio = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;
export const LinkSite = styled.a`
  color: #8e4dff;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    color: #5a2ea6;
  }
`;
