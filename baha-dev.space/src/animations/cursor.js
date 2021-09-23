import { gsap } from 'gsap'; 

class MouseCursor {
    constructor() {
      this.page = document.querySelector('#root'); 
  
      const cursor = document.querySelector('.c-cursor__pointer');
  
      gsap.to(cursor, {
        autoAlpha: 0, 
      });
    }  
   
    // eslint-disable-next-line class-methods-use-this
    moveMousePos(e) {
      const mousePosX = e.clientX;
      const mousePosY = e.clientY;
      const cursor = document.querySelector('.c-cursor__pointer');
      
      if (e.target.classList.contains('c-magnetic')) return;
  
      gsap.to(cursor, {  
        duration: 0.5, 
        x: mousePosX,
        y: mousePosY
      });
    }
  
    // eslint-disable-next-line class-methods-use-this
    enterMouse() {
      const cursor = document.querySelector('.c-cursor__pointer');
  
      gsap.to(cursor, {
        duration: 1,
        autoAlpha: 1
      });
    }
  
    handleMousePos() {
      this.page.addEventListener('mouseenter', this.enterMouse);
      this.page.addEventListener('mousemove', this.moveMousePos, false);
    }
  
    // eslint-disable-next-line class-methods-use-this
    updateOnHover(e) {
      const { tagName, classList } = e.target;
   
      if (tagName === 'LABEL' ||
        tagName === 'A' ||
        tagName === 'BUTTON' ||
        tagName === 'IMG' ||
        classList.contains('is-cursor-hover') ||
        (e.target.parentElement.tagName === 'A' && e.target.tagName === 'IMG')
      ) {
        document.querySelector('html').classList.toggle('is-hover');
      }
    }
  
    handleLinkHover() {
      this.page.addEventListener('mouseover', this.updateOnHover.bind(this));
      this.page.addEventListener('mouseout', this.updateOnHover.bind(this));
    }
  
    render() {
      this.handleMousePos();
      this.handleLinkHover();
    }
}  

window.addEventListener("load", function() {
  class MagneticCursor {
    constructor() {
      this.links = [...document.querySelectorAll('.c-magnetic')];
      this.cursor = document.querySelector('.c-cursor__pointer');
      this.pos = { x: 0, y: 0 };
    }
    
    activateMagnetic() {
      this.links.map(link => {
        const that = this;
        link.addEventListener('mousemove', function(e) {
          that.moveTarget(e, this, this.querySelector('span'), 50);
          that.moveCursor(e, this, 1.5);
        });
        
        link.addEventListener('mouseout', function() {
          gsap.to(this.querySelector('span'), {
            duration: 0.3,
            x: 0,
            y: 0
          });
        });

        return 0;
      });
    }
    
    moveCursor(e, link, force) {
      var rect = link.getBoundingClientRect();
      var relX = e.pageX - rect.left;
      var relY = e.pageY - rect.top;
      this.pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / force;
      this.pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / force;
  
      gsap.to(this.cursor, {
        duration: 0.3,
        x: this.pos.x,
        y: this.pos.y
      });
    }
    
    moveTarget(e, link, span, force) {
      var boundingRect = link.getBoundingClientRect();
      var relX = e.pageX - boundingRect.left;
      var relY = e.pageY - boundingRect.top;
  
      gsap.to(span,  {
        duration: 0.3,
        x: (relX - boundingRect.width / 2) / boundingRect.width * force,
        y: (relY - boundingRect.height / 2) / boundingRect.height * force,
        ease: "Power2.easeOut"
      });
    }
    
    render() {
      this.activateMagnetic();
    }
  }
  
  if(document.documentElement.clientWidth > 1023) {
    const magneticCursor = new MagneticCursor();   
    magneticCursor.render();  
  }
})

if(document.documentElement.clientWidth > 1023) {
  const mouseCursor = new MouseCursor();
  mouseCursor.render();
}

