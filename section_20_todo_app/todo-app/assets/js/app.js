// we want all current and future li's to have listener
// but you can only use on on existing items

// only listen to li's within ul
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed")});

// remove item
$('ul').on("click", "span", function(event){
    // need to remove li
    // since span is child of li we need to remove parent
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // stop event from going up to parent elements
    // since span is within li
    event.stopPropagation();
})

// add new item to list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // get value
        var task = $(this).val();
        // make li
        $('ul').append("<li><span class='trash-span'><i class='fas fa-trash'></i></span> " + task + "</li>")
        // clear input
        $(this).val("");
    }
});

// toggle input
$("#plus-span").on("click", function(){
    $("input[type='text']").fadeToggle();
})