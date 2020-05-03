var config = {
  style: "mapbox://styles/jtbekwealor/ck7ge9hix0n291iql4nnzydby",
  accessToken:
    "pk.eyJ1IjoianRiZWt3ZWFsb3IiLCJhIjoiY2s3ZjlpMW9wMDBmdzNvcHIzeXV0YWtobyJ9.FnpEWxYT2IcGZ1aDZnRiSw",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  title: "Scrollytelling!",
  subtitle: "A descriptive and interesting subtitle to draw in the reader",
  byline: "By JTBE",
  footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "start",
      title: "the beginning",
      image: "./path/to/image/source.png",
      description:
        "<p>This is the start of my story</p>",
      location: {center: [-87.13230, 41.88994],
                  zoom: 8.48,
                  pitch: 60.00,
                  bearing: 0.00
      },
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },
    {
      id: "other-identifier",
      title: "Second Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
       center: [-118.16237, 34.06923],
        zoom: 12.88,
        pitch: 60.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "other-other-identifier",
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
    center: [-122.29904, 37.84591],
    zoom: 11.53,
    pitch: 59.00,
    bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    }
  ]
};
