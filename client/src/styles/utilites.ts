import styled, { css } from "styled-components";
import { Property } from "csstype";

type PropertyLocal =
  | "color"
  | "background-color"
  | "opacity"
  | "visibility"
  | "border-color"
  | "border-radius"
  | "box-shadow"
  | "text-shadow"
  | "transform"
  | "outline"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "height"
  | "width"
  | "margin";
type Animation = Property.AnimationTimingFunction;

export const getTransition = (
  duration: number = 150,
  property: PropertyLocal[] | PropertyLocal = ["background-color", "color"],
  animation: Animation = "ease-out"
) => css`
  transition-property: ${Array.isArray(property)
    ? property.join(", ")
    : property};
  transition-duration: ${duration}ms;
  transition-timing-function: ${animation};
`;

export const FlexWithGap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const ScreenReader = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const visible = css`
  opacity: 1;
  visibility: visible;
`;

export const hidden = css`
  opacity: 0;
  visibility: hidden;
`;
