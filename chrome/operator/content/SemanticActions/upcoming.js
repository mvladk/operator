var upcoming_search_tags = {
  version: 0.8,
  description: "Find events on Upcoming.org",
  icon: "http://upcoming.yahoo.com/favicon.ico",
  scope: {
    semantic: {
      "tag" : "tag"
    }
  },
  doAction: function(semanticObject, semanticObjectType) {
    if (semanticObject.tag) {
      return "http://upcoming.yahoo.com/tag/" + encodeURIComponent(semanticObject.tag);
    }
  }
};

SemanticActions.add("upcoming_search_tags", upcoming_search_tags);
