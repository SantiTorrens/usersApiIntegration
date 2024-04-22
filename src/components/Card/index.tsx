import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
  classes?: string;
}

// Styled component for the card container
const CardContainer = styled.div<CardProps>`
  background-color: #3b82f6; /* Blue color */
  border-radius: 0.5rem;
`;

export default function Card({ children, classes }: CardProps): ReactElement {
  return <CardContainer className={classes}>{children}</CardContainer>;
}