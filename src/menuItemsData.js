export const menuItemsData = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/About',
  }
,
{
  title: 'Products',
  url: '/Products',
    submenu: [
      {
        title: 'Motor Starters',
        url: 'Product/Starters',
        submenu: [
          {
            title: 'Direct Online Motor Starters',
            url: 'Product/Starters/DirectOnlineStarters',
          },
          {
            title: 'Star Delta Motor Starters',
            url: 'Product/Starters/StarDeltaStarters',
          },
          {
            title: 'Reverse Forward Starters',
            url: 'Product/Starters/ReverseForwardStarters',
          },

        ]
      },

      {
        title: 'Control Switches',
        url: 'Product/ControlSwitches',
        submenu: [ 
        {
          title: 'Forward Reverse Switches',
          url: '/Product/ControlSwitches/ReverseForwardSwitches',
        },
        {
          title: 'Change-over Switches',
          url: '/Product/ControlSwitches/ReverseForwardSwitches',
        },
        {
          title: 'On/Off Switches',
          url: '/Product/ControlSwitches/OnOffSwitches',
        },
        {
          title: 'Star-Delta Switches',
          url: '/Product/ControlSwitches/StarDeltaSwitches',
        },

        ]
      },
      {
        title: 'Submersible Panels',
        url: '/Product/SubmersiblePanels',  
      },
      {
        title: 'Limit Switches',
        url: '/Product/LimitSwitches',  
      },   
      {
        title: 'Plugs and Sockets',
        url: '/Product/PlugSockets',  
      },  
      {
        title: 'Panel Accessories',
        url: '/Product/PanelAccessories',  
      },    
    ]
  },
    {
      title: 'Contact us',
      url: '/Contact',
    }
    ]
