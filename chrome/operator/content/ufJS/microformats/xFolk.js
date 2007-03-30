function xFolk() {
}

ufJSParser.microformats.xFolk = {
  version: "0.2",
  mfName: "xFolk",
  mfObject: xFolk,
  className: "xfolkentry",
  definition:  {
    properties: {
      "description" : {
        plural: true
      },
      "taggedlink" : {
        subproperties: {
          "title" : {
            virtual: true,
            getter: function(parentnode) {
              if (parentnode.getAttribute("title")) {
                return parentnode.getAttribute("title");
              } else {
                return ufJSParser.defaultGetter(parentnode);
              }
            }
          },
          "link" : {
            datatype: "anyURI",
            virtual: true
          }
        },
      },
      "tag" : {
        plural: true,
        rel: true,
        datatype: "microformat",
        microformat: "tag",
        microformat_property: "tag"
      }
    },
    ufjs: {
      "ufjsDisplayName" : {
        virtual: true,
        getter: function(mfnode) {
          return ufJSParser.getMicroformatProperty(mfnode, "xFolk", "taggedlink.title");
        }
      }
    }
  },
  validate: function(node, error) {
    var taggedlink = ufJSParser.getMicroformatProperty(node, "xFolk", "taggedlink");
    if (!taggedlink) {
      if (error) {
        error.message = "No taggedlink specified";
      }
      return false;
    }
    return true;
  }
};
