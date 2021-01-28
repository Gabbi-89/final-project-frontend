import styled from 'styled-components/macro';

export const SectionHeading = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 10px 0;

  @media (min-width: 767px) {
    font-size: 18px;
  }
`;

export const Weekday = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 6px;
  text-decoration-line: underline;
  -moz-text-decoration-line: underline;
  -webkit-text-decoration-line: underline;
`;
