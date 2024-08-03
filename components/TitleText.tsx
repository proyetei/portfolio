interface TextProps{
    text: string
}
const TitleText: React.FC<TextProps> = ({text}) => {
    return(
        <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#4F56FF] via-pink-400 to-[#FF4980] lg:text-7xl md:text-2xl text-5xl"> {text} </p>
    )

}
export default TitleText