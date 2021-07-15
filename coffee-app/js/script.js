
utils.init('app');

/* 
 * this menu outlines all the pages and their paths. 
 */
function app_menu() {
    // start by declaring an items object.
     var items = {};
  
     // each key will be ID of the "screen."
     items.app_home_path = {
        active: true,
        title: 'Nev\'s Coffee & Juice',
        page_callback: 'app_home',
     };
     items.app_order_path = {
        title: 'Order',
        page_callback: 'app_order'
     };
     items.app_contact_path = {
        title: 'About',
        page_callback: 'app_contact'
     };
     items.app_locations_path = {
        title: 'Locations',
        page_callback: 'app_locations'
     };
        items.app_about_path = {
        title: 'Locations',
        page_callback: 'app_about'
     };
  
    return items;
}
/*
 *  the page 1 callback.
 */
function app_home() {
  // start with content.
  let content = {};
  // each major section will be specified by an object.
  
  // object with a markup property.
  content.msg = {
    markup: 'Welcome to Nev\'s Coffee & Juice!'
  };
  
  // object with a links property.
  content.nav = {
    className:'home-menu',
    links:[{
      text:'Order',
      href:'#app_order_path',
      className:'order'
    },
    {
      text:'About',
      href:'#app_about_path',
      className:'about',
    },
    {
      text:'Locations',
      href:'#app_locations_path',
      className:'locations'
    },
    {
      text:'Contact',
      href:'#app_contact_path',
      className:'contact'
    }]
  };
  // return the content.
  return content;
}
/*
 *  the page 2 callback.
 */
function app_order() {
  let content = {};
  
  content.msg = {
    markup: 'This is page 2.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'page 1',
      href:'#app_home_path'
    },
    {
      text:'page 2',
      href:'#app_contact_path'
    }]
  };
  return content;
}
/*
 *  the page 3 callback.
 */
function app_contact() {
  let content = {};
  
  content.msg = {
    markup: 'Contact Page.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'page 1',
      href:'#app_home_path'
    },
    {
      text:'page 2',
      href:'#app_order_path'
    }]
  };
  return content;
}

function app_locations() {
  let content = {};
  
  content.msg = {
    markup: 'Locations Page.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'page 1',
      href:'#app_home_path'
    },
    {
      text:'page 2',
      href:'#app_order_path'
    }]
  };
  return content;
}

function app_about() {
  let content = {};
  
  content.msg = {
    markup: 'Locations Page.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'page 1',
      href:'#app_home_path'
    },
    {
      text:'page 2',
      href:'#app_order_path'
    }]
  };
  return content;
}




// call the function and pass in the ID of the container.
