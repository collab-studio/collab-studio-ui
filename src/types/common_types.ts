export interface MousePosition {
  x: number;
  y: number;
}

export type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export type CanvasSize = {
  w: number;
  h: number;
};
