$(document).ready(function(){
    let API_KEY = "AIzaSyDxgBr9pVQ5DTv78EdhHFQCbce1UV68KxU";

    let video = '';

    $("form").submit(function(event){
        event.preventDefault();

        let search = $("#search").val();

        videoSearch(API_KEY,search,10);
    })

    function videoSearch(key,search,maxResults){
        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
            console.log(data);

            data.items.forEach(item => {
                video = `
                <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`

                $("#videos").append(video);
            })
        })
    }
})