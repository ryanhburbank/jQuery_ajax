$(document).ready(function(){
  $('#get_color').on('click', function(game){

    game.preventDefault();
    game.stopPropagation();

    var url = ('/color');
    
    $.post(url, function(simonSays){
    var grid = JSON.parse(simonSays);
    var gridTile = grid.cell;
    var color = grid.color;
    
    console.log(color);
    console.log(gridTile);
    
    $('#color_me li:nth-child('+ gridTile +')').css('background-color', color);
  });
  });
});
