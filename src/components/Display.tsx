import styled, { keyframes } from "styled-components";

import { Colours } from "../common/colours";
import React from "react";

type Props = React.PropsWithChildren<Record<string, unknown>>;
export function Display({ children }: Props) {
  return (
    <Bezel>
      <ScanArea>{children}</ScanArea>
    </Bezel>
  );
}

const Bezel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: min(30rem, 90%);
  height: 20rem;

  box-shadow: inset 0 0 1px 0.625rem black;
  border-radius: 1.25rem;
  background: ${Colours.DARK};

  overflow: hidden;
  line-height: 1.2;

  // Glass effect gradients
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
      135deg,
      rgba(149, 149, 149, 0.5) 0%,
      rgba(13, 13, 13, 0.55) 19%,
      rgba(1, 1, 1, 0.64) 50%,
      rgba(10, 10, 10, 0.69) 69%,
      rgba(51, 51, 51, 0.73) 84%,
      rgba(22, 22, 22, 0.76) 93%,
      rgba(27, 27, 27, 0.78) 100%
    );
    opacity: 0.5;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${Colours.LIGHT};
    opacity: 0.1;
  }
`;

const blink = keyframes`
  0%, 40% {opacity: 0;}
  60%, 100% {opacity: 1;} 
`;

const ScanArea = styled.div`
  margin: 1.5rem;
  overflow-y: auto;

  /* font-size: 1.2rem; */
  font-family: "Courier", "Courier New", "Consolas", "Lucida Console", monospace;
  color: ${Colours.LIGHT};
  text-shadow: 0 0 5px #c8c8c8;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 0.8rem;
    margin: 0.625rem;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  &::after {
    content: "|";
    color: orange;
    font-weight: bold;
    animation: ${blink} 500ms linear infinite alternate;
  }
`;
