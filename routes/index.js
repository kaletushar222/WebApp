Router.route("/",{
  path: "/",
  action: function(){
    this.render("main");
  }
});

Router.route("registerUser",{
  path: "/registerUser",
  action: function(){
    this.render("registerUser");
  }
});

Router.route("home",{
  path: "/home",
  action: function(){
    this.render("home");
  }
});