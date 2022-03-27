import { easing, Easing, EasingFunction } from '../utils/easing'

export const strokeDraw = (value: number, path: SVGGeometryElement, easingName: Easing | EasingFunction) => {
  const style = path.style
  const strokeDasharray = path.getTotalLength()

  let percent = value / strokeDasharray
  percent = percent < 0 ? 0 : percent
  percent = percent > 1 ? 1 : percent

  const e = typeof easingName === 'string' ? easing[easingName as (keyof typeof easing)] as EasingFunction : easingName
  style.strokeDashoffset = (strokeDasharray - e(percent, 0, strokeDasharray, 1)).toString()
}

export const getMaxPathLength = (paths?: NodeListOf<SVGGeometryElement> | SVGGeometryElement[]) => {
  const pathLengths: number[] = []
  paths?.forEach((path, i) => {
    const style = path.style
    style.strokeDasharray = style.strokeDashoffset = path.getTotalLength().toString()
    pathLengths[i] = parseFloat(path.getTotalLength().toString()) || 0
  })
  
  return Math.max(...pathLengths)
}