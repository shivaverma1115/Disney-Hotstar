import React from 'react'

const VideoDisplay = ({ src, videoRef }) => {
    setTimeout(() => {
        console.log('component refresh');
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
    }, 1000);
    return (
        <video loop autoPlay muted
            ref={videoRef}
            style={{
                width: '100%',
                height: '100%',
                fit: 'cover',
            }}
        >
            <source src={src} type='video/webm' />
            {/* <source src={'https://res.cloudinary.com/dbbuqesjg/video/upload/v1705655839/Desney_hotstar/trailers/FREELANCER_iexisg.mp4'} type='video/webm' /> */}
        </video>
    )
}

export default VideoDisplay
