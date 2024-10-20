declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

// declare module '*.svg' {
//   import type { HTMLProps, FC } from 'react'
//
//   export const ReactComponent: FC<HTMLProps<SVGElement>>
// }
//
// declare module '*.svg' {
//   import type { SVGProps } from 'react'
//
//   const content: React.FC<SVGProps<SVGSVGElement>>
//   export default content
// }
//
declare module '*.svg' {
  const content: string
  export default content
}
