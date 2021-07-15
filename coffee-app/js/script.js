let utils = {};
  

/* 
 * this menu outlines all the pages and their paths. 
 */
function app_menu() {
    // start by declaring an items object.
     var items = {};
  
     // each key will be ID of the "screen."
     items.page_one_path = {
        active: true,
        title: 'Page 1 title',
        page_callback: 'page_one',
     };
     items.page_two_path = {
        title: 'page 2 title',
        page_callback: 'page_two'
     };
     items.page_three_path = {
        title: 'page 3 title',
        page_callback: 'page_three'
     };
    return items;
}
/*
 *  the page 1 callback.
 */
function page_one() {
  // start with content.
  let content = {};
  // each major section will be specified by an object.
  
  // object with a markup property.
  content.msg = {
    markup: 'This is page 1.'
  };
  
  // object with a links property.
  content.nav = {
    className:'nav',
    links:[{
      text:'page 2',
      href:'#page_two_path'
    },
    {
      text:'page 3',
      href:'#page_three_path'
    }]
  };
  // return the content.
  return content;
}
/*
 *  the page 2 callback.
 */
function page_two() {
  let content = {};
  
  content.msg = {
    markup: 'This is page 2.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'page 1',
      href:'#page_one_path'
    },
    {
      text:'page 2',
      href:'#page_three_path'
    }]
  };
  return content;
}
/*
 *  the page 3 callback.
 */
function page_three() {
  let content = {};
  
  content.msg = {
    markup: 'This is page 3.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'page 1',
      href:'#page_one_path'
    },
    {
      text:'page 2',
      href:'#page_two_path'
    }]
  };
  return content;
}
(function(context) {
/*
 *  changePage function.
 */
  function changePage(e) {
   let id = e.target.href.split('#')[1];
   
   let prev = document.querySelector('.page.active');
  
   if (prev && prev.className.includes('active')) {
          prev.classList.remove('active');
   }
   let page = document.getElementById(id);
       
   if (page && !page.className.includes('active')) {
          page.className += ' active';
   }
   else {
     alert('page: ' + page.className);
   }

   return {id,page};
}
/* add content. */
function addContent(id,page,el) {
  el.innerHTML = '';
  
  let menu = app_menu();
  
  if (menu[id]) {
    let cb = menu[id].page_callback;
     
    let content = this[cb]();
 
    for (const key in content) {

     let o = content[key];
 
     if (o.markup) {
     
      let div = document.createElement('div');
       div.innerHTML = o.markup;
       el.appendChild(div);
     }
      
     if (o.links) {
       let ul = document.createElement('ul');
       if (o.className) { ul.className = o.className; }
       for (link of o.links) {
         let li = document.createElement('li');
         let a = document.createElement('a');
         a.textContent = link.text;
         a.href = link.href;
         li.appendChild(a);
         ul.appendChild(li);
         enableLink(a);
       }
       el.appendChild(ul);
     }
    }
  }
  return el;
}
 
/* for each page, add a title and content. */
context.init = function(id) {

  let menu = app_menu();
  
  let active_added = false;
  
  let app = document.getElementById(id);
  
  for (const id in menu) {

    let obj = menu[id];
    
    let page = document.createElement('div');
    
    page.className = 'page';
    page.id = id;
    
    if (obj.active && !active_added) {
      page.className += ' active';
      active_added = true;
    }
    let h2 = document.createElement('h2');
    let title = obj.title || 'Placeholder';
    h2.textContent = title;
    
    page.appendChild(h2);
    
    let ui = document.createElement('div');
    ui.className = 'ui-content';
    
    ui = addContent(id,page,ui);
    page.appendChild(ui);
    app.appendChild(page);
  }
}
/*
 *  enable a link once it is added.
 */
function enableLink(link) {
  link.addEventListener('click',function(e) {
     let o = changePage(e);        
  }); 
}
})(utils);

// call the function and pass in the ID of the container.
utils.init('app');