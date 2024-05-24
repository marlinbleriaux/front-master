function genRscCode(rscType, rscName, user){
    const time= new Date;
    const stamp = time.getTime();
return  rscType+"|"+rscName+"|"+user+"|"+stamp;
}
export default genRscCode;