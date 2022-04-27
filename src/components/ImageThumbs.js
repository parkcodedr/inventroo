const ImageThumbs = ({files,thumb,thumbInner,img})=>{
    
return (
   <>
   {files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
            />
          </div>
        </div>
      ))}
   </>
)    
}
export default ImageThumbs;