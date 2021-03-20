function Album3(props){
    const data=props.album3.map(photo=>(
        <div key={photo.id} className="photo">
            <p><strong>Title: </strong>{photo.title}</p>
            <p><strong>Id: </strong>{photo.id}</p>
            <img src={photo.thumbnailUrl} alt={photo.title}/>
        </div>
    ))
    return data;
}
export default Album3;