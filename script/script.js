window.addEventListener('DOMContentLoaded', function(){

  'use strict';


  const DomElement = function(selector, height, width, bg, fontSize) {
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;    
      this.newElement = function() {
          let newElem = document.createElement('div');
          if (this.selector[0] === '.'){
              newElem.className = this.selector.slice(1);
          } if (this.selector[0] === '#'){
              newElem.setAttribute('id', this.selector.slice(1));
          }
          newElem.style.cssText = ` height: ${height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; position: absolute`;
          // newElem.innerText = prompt('Введите текст');
          document.body.prepend(newElem);


      };
      this.squareElem = function() {
          let moveX = 0,
              moveY = 0;
          const square = document.querySelector('.new-class');                       
          document.addEventListener('keydown', (event) => {  
              console.log(event);                       
              if(event.key === 'ArrowRight'){                                        
                  moveX += 10;
                  square.style.left = `${moveX}px`;

              }
              if(event.key === 'ArrowLeft'){                    
                  moveX -= 10;
                  square.style.left = `${moveX}px`;

              }
              if(event.key === 'ArrowUp'){                    
                  moveY -= 10;
                  square.style.top = `${moveY}px`;

              }
              if(event.key === 'ArrowDown'){                    
                  moveY += 10;
                  square.style.top = `${moveY}px`;

              }
          })

      }

      

  }; 
  
  const createElem = new DomElement('.new-class', '100px', '100px', 'red', '32px');
  
  createElem.newElement();
  createElem.squareElem();
   






});

      


  
  










