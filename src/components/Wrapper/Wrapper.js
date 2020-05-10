import React from 'react';
import styled from 'styled-components/native';

const StyledWrapper = styled.View`
  width: 100%;

  ${({ m }) =>
    m &&
    `
    margin: ${m};
  `};

  ${({ mx }) =>
    mx &&
    `
    margin-right: ${mx};
    margin-left: ${mx};
  `};

  ${({ my }) =>
    my &&
    `
    margin-top: ${my};
    margin-bottom: ${my};
  `};

  ${({ mt }) =>
    mt &&
    `
    margin-top: ${mt};
  `};

  ${({ mb }) =>
    mb &&
    `
    margin-bottom: ${mb};
  `};

  ${({ mr }) =>
    mr &&
    `
    margin-right: ${mr};
  `};

  ${({ ml }) =>
    ml &&
    `
    margin-left: ${ml};
  `};
`;

const Wrapper = ({ children, m, mx, my, mt, mb, mr, ml }) => (
  <StyledWrapper m={m} mx={mx} my={my} mt={mt} mb={mb} mr={mr} ml={ml}>
    {children}
  </StyledWrapper>
);

export default Wrapper;
