import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

const SkeletonCard = ({props} : any) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#4e557d"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="6" y="16" rx="10" ry="2" width="341" height="293" /> 
   
  </ContentLoader>
)

export default SkeletonCard

