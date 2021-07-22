let utils = {};
/* start library */
(function(context) {

function buildPage(pageId) {
  
    let app = document.getElementById(context.id);

    let obj = context.routes[pageId];
    
    let page = document.createElement('div');
    
    page.className = 'page';
    page.id = pageId;
  
    let h2 = document.createElement('h2');
    let title = obj.title || 'Placeholder';
    h2.textContent = title;
    
    page.appendChild(h2);
    
    let ui = document.createElement('div');
    ui.className = 'ui-content';
    
    ui = addContent(pageId,page,ui);
    page.appendChild(ui);
    app.appendChild(page);
 
    return page;
}
/**
 *  changePage function.
 *  @param {Object} event  - the event object.
 */
function changePage(e) {
   // codepen-specific.
   let id = e.target.href.split('#')[1];
   
   // get the active page.
   let prev = document.querySelector('.page.active');
  
   // remove the 
   if (prev && prev.className.includes('active')) {
          prev.classList.remove('active');
   }
   // if page does not exist, build it dynamically.
   let page = document.getElementById(id) || buildPage(id);
         
   if (!page.className.includes('active')) {
         let delay = 200;
          window.setTimeout(function() {
             page.className += ' active';
          },delay); 
   }
   return {id,page};
}
/**
 *  addTextInput function.
 *  adds a text-label pair.
 *  @param {Object} event  - the event object.
 *  @param {Object} text_input - an object containing the needed properties.
 */
function addTextInput(el, text_input) {
   let label = document.createElement('label');
   label.textContent = text_input.label;
   label.setAttribute('for', text_input.id);
   
   let input = document.createElement('input');
   input.type = 'text';
   input.id = text_input.id;
   
   el.appendChild(label);
   el.appendChild(input);
}
/** 
 * add content.
 * @param {String} id - the id of the page. used to get the callback function.
 * @param {HTMLDOMElement} page - the page
 * @param {HTMLDomElement} el - the content element we are adding content to.
 * 
 */
function addContent(id,page,el) {
  el.innerHTML = '';
  
  let menu = app_menu();
  
  if (menu[id]) {

    let cb = menu[id].page_callback;
    
    let content = window[cb]();
    
    for (const key in content) {

     let o = content[key];
     
     // markup
     if (o.markup) {
       let div = document.createElement('div');
       div.innerHTML = o.markup;
       if (o.className) { div.className = o.className; }
       el.appendChild(div);
     }
     // text inputs
     if (o.text_inputs) {
      for (var text_input of o.text_inputs) {
         addTextInput(el, text_input)
      }
     }
     // button
     if (o.button) {
      let div = document.createElement('div');
      div.className = 'button-container';

      // append the className if necessary
      if (o.className) { div.className += ' ' + o.className; }

      let btn = document.createElement('button');
      // button attributes
      for (const prop in o.button) {
        if (prop == 'attrs') {
          for (const attr in o.button.attrs) {
            btn.setAttribute(attr,o.button.attrs[attr]);
          }
        }
        else {
         btn[prop] = o.button[prop];
       }

     }
     div.appendChild(btn);
     el.appendChild(div);
   }
   
   if (o.links) {
     addListLinks(o, el)
   }
 }
}
return el;
}
/** 
 * adds a list of links.
 * @param {Array} links - the list of links.
 * @param {String} className - the class of the list.
 * @param {HTMLDOMElement} el - the element we are appending the list to.
 */
function addListLinks({links, className}, el) {
   let ul = document.createElement('ul');
     
   if (className) { ul.className = className; }
     
   for (link of links) {
       let li = document.createElement('li');
       let a = document.createElement('a');
       a.textContent = link.text;
       a.href = link.href;
       a.className = link.className;
       li.appendChild(a);
       ul.appendChild(li);
       enableLink(a);
   }
   el.appendChild(ul);
}

/**
 *  for each page, add a title and content. 
 *  @param {String} id - the id of the parent element.
 *  @param {Array} my_routes - array of path-callback pairs.
 *  @param {Array} my_nav - array of link objects for the global menu.
 * 
 */
context.init = function(id, my_routes, my_nav) {
  
  context.id = id;
  context.routes = my_routes();
  
  let app = document.getElementById(id);
  
  let pageId = Object.keys(context.routes).find(id => context.routes[id].active);

  if (pageId) {
    // console.log('pageId: ' + pageId);
    page = buildPage(pageId);
    
    page.className += ' active';
  }
  }
/**
 *  enable a link once it is added.
 *  @param link - the HTML Element we are adding the link to.
 */
 function enableLink(link) {
  link.addEventListener('click',function(e) {
   let o = changePage(e);        
 }); 
}
})(utils);