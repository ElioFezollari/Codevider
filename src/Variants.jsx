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
const hamburgerAnimation = {
    open :{
      x:"0",
      opacity:1,

      transition:{
        type:"spring",
    }
    },
    closed:{
      opacity:0,

      x:'10vw',
    }
  }
export {cardAnimation,textAnimation,hamburgerAnimation}