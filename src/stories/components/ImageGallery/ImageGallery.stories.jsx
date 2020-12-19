import React from "react";

import ImageGallery from "./ImageGallery"

export default {
    title: "ImageGallery"
}

export const ImageGalleryComponent = () => {
    const data = [{
        title: "Lets",
        description: "Play",
        meta: "Esse id officia ex sint eu amet. Qui laboris officia dolore amet adipisicing. Consectetur exercitation ullamco magna quis minim proident sit cillum. Et minim laboris dolore cupidatat velit mollit esse incididunt consequat deserunt. Nisi sint quis proident dolore ex aute enim reprehenderit est sit sit ad.",
        image: "https://picsum.photos/500/300?random=1",
    },{
        title: "Lets",
        description: "Play",
        meta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis velit excepturi dolorem ipsum quas nisi eos illo, iure blanditiis veritatis recusandae, architecto delectus ducimus quisquam sed laboriosam, neque aspernatur.",
        image: "https://picsum.photos/500/300?random=2",
    },{
        title: "Lets",
        description: "Play",
        meta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas eaque odit incidunt et ratione repudiandae minima, eveniet eligendi molestiae explicabo aliquid vel inventore officiis? Ab fuga placeat inventore quibusdam!",
        image: "https://picsum.photos/500/300?random=3",
    },{
        title: "Lets",
        description: "Play",
        meta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid neque vero esse iste labore tempora sed voluptatum impedit, adipisci, praesentium cupiditate voluptas enim optio doloribus maxime odit molestias molestiae cum.",
        image: "https://picsum.photos/500/300?random=4",
    },{
        title: "Lets",
        description: "Play",
        meta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab voluptatem, fugiat libero voluptas nihil fuga praesentium maiores accusamus. Quibusdam tempore itaque quasi quod ex voluptas, animi facere nobis sapiente!",
        image: "https://picsum.photos/500/300?random=5",
    }];
    return <ImageGallery data={data}/>
}