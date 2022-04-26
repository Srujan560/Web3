export default {
    // name:'Upload',
    // title: 'upload Music',
    // type: 'document',
    // fields: [{
    //     title:'Arist Name',
    //     type:'string',
    //     name: 'arist'
        
        
    // }]
    
        name: "upload",
        title: "upload Music",
        type: "document",
        fields: [{
            title: "Song Title",
            name: "songName",
            type: "string",
          },
          {
            title: "Aritst name",
            name: "aritst",
            type: "string",
          },
         
          {
            title: "Image for the music",
            name: "image",
            type: "image",
            options: {
              hotspot: true,
            },
          },
          {
            title: "the music",
            name: "Musicuplo",
            type: "file",
            options: {
              accept: 'audio/*',
              hotspot: true,
            },

          },
         
        ],
      
    
}