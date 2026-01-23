const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=400",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=400",
    "https://images.unsplash.com/photo-1493244040629-496f6d136cc8?q=80&w=400",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400"
]

const randomIndex = Math.floor(Math.random() * images.length)
const randomImageUrl = images[randomIndex]

document.querySelector('.fill').style.backgroundImage = `url(${randomImageUrl})`