import styled from 'styled-components';

export const TalkContainer = styled.div<{ $talkOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0%;
  opacity: ${(props) => (props.$talkOpen ? 1 : 0)};
  transform: translate(-95%, -90%);
  width: ${(props) => (props.$talkOpen ? '30rem' : '0')};
  height: ${(props) => (props.$talkOpen ? '50rem' : '0')};
  background-color: #eeeeee;
  border-radius: 10px 10px 0 10px;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const TalkListContainer = styled.div<{ $talkChannelOpen: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: ${(props) => (props.$talkChannelOpen ? 0 : 1)};
  z-index: ${(props) => (props.$talkChannelOpen ? -5 : 5)};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
  & > h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & > span {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }

  & > ul {
    margin-top: 1rem;
    background: white;
    height: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const TalkChannelCardItem = styled.li`
  position: relative;
  padding: 2rem 1rem;
  display: flex;
  align-items: start;
  cursor: pointer;
  &:hover {
    background: gray;
  }
  & > figure {
    margin-right: 1rem;
    border-radius: 50%;
    & > img {
      border-radius: 50%;
      height: 5rem;
      width: 5rem;
      object-fit: cover;
    }
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & div:last-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const InvisibleMessage = styled.span`
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-weight: bold;
  color: red;
  font-size: 2rem;
`;

export const TalkMessageContainer = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 2rem 1rem;

  & ul {
    margin: 1rem 0 1rem 0;
    padding: 0 0.5rem;
    height: 35rem;
    overflow-y: scroll;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const PrevButton = styled.button`
  cursor: pointer;
`;

export const TalkCardUserInfo = styled.div`
  & > h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
  }
`;

export const TalkFormUserInfo = styled.section`
  display: flex;
  align-items: start;
  margin-top: 0.3rem;

  & > figure {
    margin-right: 1rem;
  }
  & h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & span {
    font-weight: bold;
    text-decoration: underline;
  }

  & img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
`;

type style = { 'x-position': string; color: string };
export const TalkMessage = styled.li<{ $subStyle: style }>`
  position: relative;
  margin: 0.8rem 0;
  padding: 1rem;
  max-width: 70%;
  border-radius: 10px 10px ${(props) => (props.$subStyle['x-position'] === 'start' ? '10px 0px' : '0px 10px')};

  font-size: 1.3rem;
  align-self: ${(props) => props.$subStyle['x-position']};

  line-height: 1.5rem;
  background-color: ${(props) => props.$subStyle.color};
  color: ${(props) => (props.$subStyle.color === '#000000' ? '#FFFFFF' : '#000000')};
  border: 1px solid;
  border-color: ${(props) => (props.$subStyle.color === '#000000' ? '#FFFFFF' : '#000000')};

  & > span:last-child {
    left: ${(props) => (props.$subStyle['x-position'] === 'start' ? '0' : 'unset')};
    right: ${(props) => (props.$subStyle['x-position'] === 'end' ? '0' : 'unset')};
  }
  & figure {
    margin-bottom: 0.5rem;
  }
`;

export const MessageContext = styled.span`
  width: 100%;
  word-break: break-all;
`;
export const VisibleChecker = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-100%, 0);
  color: #000000;
`;

export const MessageDate = styled.span`
  position: absolute;
  font-size: 1rem;
  transform: translate(0, 90%);
  bottom: 0;
  white-space: nowrap;
  color: gray;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  & input:last-child {
    display: none;
  }
  & > button {
    font-size: 1.3rem;
    padding: 1rem 0;
    text-align: center;
    background-color: gray;
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
`;

export const InputArea = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  border-radius: 5px;

  & > label {
    cursor: pointer;
  }

  & > div {
    width: 100%;
    position: relative;
    & button {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: pointer;
    }
    & input {
      font-size: 1.5rem;
      width: 100%;
      outline: none;
      height: 3rem;
      border: none;
      background: none;
      padding-left: 0.2rem;
      padding-right: 3rem;
    }
  }
`;

export const SelectImageSection = styled.section`
  display: flex;
  align-items: center;
  & button {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const DoneProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: lightgrey;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const PreviewProductInfo = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

export const DoneMessage = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
