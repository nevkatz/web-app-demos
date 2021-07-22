
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
        title: 'Nev\'s Coffee',
        page_callback: 'app_home',
     };
     items.app_order_path = {
        title: 'Order',
        page_callback: 'app_order'
     };
     items.app_contact_path = {
        title: 'Contact',
        page_callback: 'app_contact'
     };
     items.app_gift_path = {
        title: 'Gift',
        page_callback: 'app_gift'
     };
     items.app_about_path = {
        title: 'About',
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
    markup: '<h3>Welcome!</h3>'
  };

  content.img = {
    markup: '<img src="images/coffee.svg"/>'
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
      text:'Gift',
      href:'#app_gift_path',
      className:'gift'
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
    markup: '<p>Order here.</p>'
  };

  content.img = {
    markup: '<img src="images/coffee-cup.svg" class="large-icon"/>'
  };

  content.nav = {
    className:'nav',
    links:[{
      text:'Home',
      href:'#app_home_path'
    },
    {
      text:'About',
      href:'#app_about_path'
    },
    {
      text:'Gift',
      href:'#app_gift_path'
    },
    {
      text:'Contact',
      href:'#app_contact_path'
    }]
  };
  return content;
}
function sendMessage() {
  alert('message sent!');
}
/*
 *  the page 3 callback.
 */
function app_contact() {
  let content = {};
  
  content.instrux = {
    markup: '<p>Enter your message here and press <strong>send</strong>.<p>.'
  };
  content.fields = {
    text_inputs:[{
      label:'Your Name',
      required:true,
      id:'sender-name',
    },{
      label:'Your email address',
      required:true,
      id:'sender-email',
    },
    {
      label:'Subject',
      required:true,
      id:'sender-subject'
    }]
  }

  content.message = {
    markup:'<label>Message</label><textarea id="msg"></textarea>'
  };
  content.submit = {
    className:'align-left',
    button: {
      id:'my-button',
      className:'submit',
      textContent:'Send',
      attrs:{
        onclick:'sendMessage()'
      }
    }
  }

 content.nav ={
  className:'nav',
  links: [{
      text:'Home',
      href:'#app_home_path'
    },
    {
      text:'Order',
      href:'#app_order_path'
    },
    {
      text:'About',
      href:'#app_about_path'
    },
    {
      text:'Gift',
      href:'#app_gift_path'
    }]
  };
  return content;
}

function app_gift() {
  let content = {};
  
  content.msg = {
    markup: 'Gift Page.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'Home',
      href:'#app_home_path'
    },
    {
      text:'Order',
      href:'#app_order_path'
    },
    {
      text:'About',
      href:'#app_about_path'
    },
    {
      text:'Contact',
      href:'#app_contact_path'
    }]
  };
  return content;
}

function app_about() {
  let content = {};
  
  content.msg = {
    markup: 'About Us.'
  };
  content.nav = {
    className:'nav',
    links:[{
      text:'Home',
      href:'#app_home_path'
    },
    {
      text:'Gift',
      href:'#app_gift_path'
    },
    {
      text:'Contact',
      href:'#app_contact_path'
    },
    {
      text:'Order',
      href:'#app_order_path'
    }]
  };
  return content;
}




// call the function and pass in the ID of the container.
