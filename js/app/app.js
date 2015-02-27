(function () {
    // Extract the text from the template .html() is the jquery helper method for that
    var raw_template = $('#simple-template').html();
    // Compile that into an handlebars template
    var template = Handlebars.compile(raw_template);
    // Retrieve the placeHolder where the Posts will be displayed 
    var placeHolder = $("#main");
    // Fetch all data from server in JSON
    $.getJSON("https://api.myjson.com/bins/2gj97",function(data,status,xhr){
        $.each(data,function(index,element){
            // Generate the HTML for each post		  
            var html = template(element);
            // Render the posts into the page
            placeHolder.append(html);
        });
    });
    Handlebars.registerHelper('agree_button', function() {
        var dataArray = new Array();	
        dataArray = this;
        var colorName = Handlebars.escapeExpression(dataArray);
        return new Handlebars.SafeString(colorName);
    });
})();