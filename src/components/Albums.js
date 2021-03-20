import { Component } from "react";
import Album1 from "./Album1";
import Album2 from "./Album2";
import Album3 from "./Album3";

class Albums extends Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            album1:[],
            album2:[],
            album3:[]
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response=> response.json())
        .then(photos=>{
            const albums=Array.from(new Set(photos.map(photo=>photo.albumId)));
            const recentAlbums=albums.slice(-3,);
            const album1=photos.filter(photo=>{
                    if(photo.albumId===recentAlbums[0]){
                        return photo.id;
                    }
            });
            const album2=photos.filter(photo=>{
                    if(photo.albumId===recentAlbums[1]){
                        return photo.id;
                    }
            });
            const album3=photos.filter(photo=>{
                    if(photo.albumId===recentAlbums[2]){
                        return photo.id;
                    }
            });
            this.setState({
                isLoaded:true,
                album1:album1.slice(-2,),
                album2:album2.slice(-2,),
                album3:album3.slice(-2,)
            })
        })
        .catch(err=>{
            this.setState({
                isLoaded:true,
                error:err
            })
            console.log("this is request error");
        })
    }

    render(){
        const {error, isLoaded, album1,album2,album3}=this.state;
        if(error){
            return(
                <div className="error">
                    Error: {error.message}
                </div>
            )
        }else if(isLoaded===false){
            return(
                <div className="isLoaded">
                    Loading Albums...
                </div>
            );
        }else{
            return(
            <div className="albums">
                <div className="album1">
                    <h3>Album -1</h3>
                    <Album1 album1={album1}/>
                </div>
                <div className="album2">
                    <h3>Album -2</h3>
                    <Album2 album2={album2}/>
                </div>
                <div className="album3">
                    <h3>Album -3</h3>
                    <Album3 album3={album3}/>
                </div>
            </div>
                );
        }
        
    }
}
export default Albums;