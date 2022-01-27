import React from 'react';
import styled from 'styled-components';
import AvatarImage from "../assets/avatarImage2.jpg"
import AvatarImage2 from "../assets/avatarImage3.jpg"
import {cardShadow, hoverEffect, themeColor} from "../utils"
function Projects() {
  return <YourProjects>
    <Project>
      <Avatar>
        <img src={AvatarImage} alt="" />
      </Avatar>
      <Detail>
        <Title>Logo Design for bakery</Title>
        <SubTitle>1 day remaining</SubTitle>
      </Detail>
    </Project>
    <Project>
      <Avatar>
        <img src={AvatarImage2} alt="" />
      </Avatar>
      <Detail>
        <Title>Personal branding projects</Title>
        <SubTitle>5 days remaining</SubTitle>
      </Detail>
    </Project>
    <AllProjects>See all projects</AllProjects>
  </YourProjects>
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: .4s ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }
`;
const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Title = styled.h3`
  font-weight: 500;
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Projects;
