"use client";
import urlFor from "@/utility/imageUtility";
import styled from "styled-components";
import formattedDate from "@/utility/dateUtility";

const EducationCard = ({ detail }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={urlFor(detail.instituteLogo)} alt="" />
      </ImageContainer>
      <CardDesc>
        <h3>{detail.institute}</h3>
        <Degree>{detail.degree}</Degree>
        <span>
          {formattedDate(detail.startDate)} - {formattedDate(detail.endDate)}
        </span>
        <span style={{fontWeight:"800"}}>
          {detail.cgpa}
        </span>
      </CardDesc>
    </Card>
  );
};

const Card = styled.div`
  padding: 0.5rem 1.5rem;
  width: 25rem;
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid orange;
`;

const CardDesc = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 10px;
`;

const ImageContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Degree = styled.span`
  color: orange;
  font-weight: 800;
`;

export default EducationCard;
