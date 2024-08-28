interface TextProps{
    text: string
}
const TitleText: React.FC<TextProps> = ({text}) => {
    return(
        <p className=" text-transparent bg-clip-text bg-gradient-to-tr dark:from-cyan-400 from-blue-700 dark:to-pink-600 to-pink-400 lg:text-7xl text-5xl"> {text} </p>
    )

}
export default TitleText