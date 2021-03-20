function Album2(props){
    const data=props.album2.map(photo=>(
        <div key={photo.id} className="photo">
            <p><strong>Title: </strong>{photo.title}</p>
            <p><strong>Id: </strong>{photo.id}</p>
            <img src={photo.thumbnailUrl} alt={photo.title}/>
        </div>
    ))
    return data;
}
export default Album2;