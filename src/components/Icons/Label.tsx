import SvgIcon from '../../styles/SvgIcon'

interface ILabel {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Label: React.FC<ILabel> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/>
        </SvgIcon>
    )
}

export default Label