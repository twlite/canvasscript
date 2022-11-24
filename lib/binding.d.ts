/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class CanvasRenderingContext2D {
  constructor(width: number, height: number)
  get width(): number
  get height(): number
  set fillStyle(color?: string | undefined | null)
  get fillStyle(): string
  set strokeStyle(color?: string | undefined | null)
  get strokeStyle(): string
  fillRect(x: number, y: number, width: number, height: number): void
  strokeRect(x: number, y: number, width: number, height: number): void
  set lineWidth(val: number)
  get lineWidth(): number
  __rq_surface_get_img_data_u8(): Buffer
  setLineDash(dashList: Array<number>): void
  getLineDash(): Array<number>
}
