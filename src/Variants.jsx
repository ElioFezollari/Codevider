const cardAnimation = {
    hidden:{
        opacity:0,
        x:'100px',
        y:'20px',
        rotate:3,
        display:'none'
    },
    visible:{
        opacity:1,
        x:'0px',
        y:'0',
        rotate:0,
        display:'block'
    }
}
const textAnimation = {
    hidden:{
        opacity:0,
        x:"-100px"
    },
    visible:{
        opacity:1,
        x:'0px'
    }
}
export {cardAnimation,textAnimation}