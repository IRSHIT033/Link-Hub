import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { COLORS } from '../../constants/theme'
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill={COLORS.light}
        {...props}
    >
        <Path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
        <Path fill="none" d="M0 0h48v48H0z" />
    </Svg>
)
export default SvgComponent
