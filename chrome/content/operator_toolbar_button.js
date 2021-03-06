/*extern Microformats, Operator, Components, content */

var Operator_ToolbarButton = {
  addPopup: function(menu, clone)
  {
    if (this.isVisible()) {
      if (menu) {
        /* Position popup? */
/*            popup.setAttribute("position", "before_start"); */
        if (clone) {
          var newmenu = menu.cloneNode(true);
          var menuitems = menu.getElementsByTagName("menuitem");
          var newmenuitems = newmenu.getElementsByTagName("menuitem");
          for(var i=0; i < menuitems.length; i++) {
            if (menuitems[i].store_oncommand) {
              newmenuitems[i].addEventListener("command", menuitems[i].store_oncommand, true);
            }
            if (menuitems[i].store_onclick) {
              newmenuitems[i].addEventListener("click", menuitems[i].store_onclick, true);
            }
            if (menuitems[i].store_onDOMMenuItemActive) {
              newmenuitems[i].addEventListener("DOMMenuItemActive", menuitems[i].store_onDOMMenuItemActive, true);
            }
          }
          var menus = menu.getElementsByTagName("menu");
          var newmenus = newmenu.getElementsByTagName("menu");
          for(var i=0; i < menus.length; i++) {
            if (menus[i].store_onpopupshowing) {
              newmenus[i].addEventListener("popupshowing", menus[i].store_onpopupshowing, true);
            }
          }
          var menupops = menu.getElementsByTagName("menupopup");
          var newmenupops = newmenu.getElementsByTagName("menupopup");
          for(var i=0; i < menupops.length; i++) {
            if (menupops[i].store_onpopupshowing) {
              newmenupops[i].addEventListener("popupshowing", menupops[i].store_onpopupshowing, true);
            }
          }
          newmenu.addEventListener("popupshowing", function(event) {if (event.target == newmenu) Operator.updateMenus = false;}, false);
          newmenu.addEventListener("popuphiding", function(event) {if (event.target == newmenu) Operator.updateMenus = true;}, false);
          document.getElementById("operator-toolbar-button").appendChild(newmenu);
        } else {
          menu.addEventListener("popupshowing", function(event) {if (event.target == menu) Operator.updateMenus = false;}, false);
          menu.addEventListener("popuphiding", function(event) {if (event.target == menu) Operator.updateMenus = true;}, false);
          document.getElementById("operator-toolbar-button").appendChild(menu);
        }
        return true;
      }
    }
    return false;
  },
  clearPopup: function()
  {
    if (this.isVisible()) {
      var toolbar = document.getElementById("operator-toolbar-button");
      while (toolbar.firstChild) {
        toolbar.removeChild(toolbar.firstChild);
      }
    }
  },
  disable: function()
  {
    if (this.isVisible()) {
      document.getElementById("operator-toolbar-button").setAttribute("disabled", "true");
    }
  },
  enable: function()
  {
    if (this.isVisible()) {
      document.getElementById("operator-toolbar-button").setAttribute("disabled", "false");
    }
  },
  isVisible: function()
  {
    if (document.getElementById("operator-toolbar-button")) {
      return true;
    }
    return false;
  }
};
