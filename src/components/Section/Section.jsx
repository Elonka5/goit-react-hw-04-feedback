import { StyledSection } from './SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyledSection>
  );
};
