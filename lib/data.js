// Replace the entire file with this custom data structure
// You can easily add your own images and links here

export const mediaItems = [
    {
      id: "media-1",
      // // title:: "Amazing Gaming Video #1",
      imageUrl: "https://i.imgur.com/Wub2Xc0.jpeg", // Replace with your image path
      link: "https://inopportunelargestrumble.com/us4w9ya4gj?key=7d2a35b1e233288eca027f4eabfb76ad", 
      views: "1.2K",
    },
    {
      id: "media-2",
      // // title:: "Travel Vlog in Paris",
      imageUrl: "https://i.imgur.com/p20nZCY.jpeg", // Replace with your image path
      link: "https://inopportunelargestrumble.com/us4w9ya4gj?key=7d2a35b1e233288eca027f4eabfb76ad", 
      views: "3.4K",
    },
    {
      id: "media-3",
      // // title:: "Tech Review: Latest Smartphone",
      imageUrl: "https://i.imgur.com/SI2F1ID.jpeg", // Replace with your image path
      link: "https://inopportunelargestrumble.com/us4w9ya4gj?key=7d2a35b1e233288eca027f4eabfb76ad", 
      views: "5.7K",
    },
    {
      id: "media-4",
      // // title:: "Cooking Tutorial: Italian Pasta",
      imageUrl: "https://i.imgur.com/yc2FwJE.jpeg", // Replace with your image path
      link: "https://inopportunelargestrumble.com/us4w9ya4gj?key=7d2a35b1e233288eca027f4eabfb76ad", 
      views: "2.3K",
    },
    // {
    //   id: "media-5",
    //   // // title:: "Music Video: Summer Hits",
    //   imageUrl: "/path/to/your/image5.jpg", // Replace with your image path
    //   link: "https://example.com/your-link-5", // Replace with your destination link
    //   views: "8.9K",
    // },
    
    // Continue adding more items...
  ]
  
  // This function returns all media items
  export function getAllMediaItems() {
    return mediaItems
  }
  
  // This function can be used if you want to get a specific number of items
  export function getMediaItems(count = 20) {
    return mediaItems.slice(0, count)
  }
  
  export function generateMediaItems(count) {
    const items = mediaItems.slice(0, count)
    return items
  }
  