const ROWS = 9;
const COLS = 9;

$("#play").on("click", ()=>{
    $("#tablero").empty();
    for (let i = 0; i < ROWS; i++) {
        const $rows = $('<div>').addClass('ROW');
        for (let j = 0; j < COLS; j++) {
            const $cols = $('<div>')
                .addClass('col hidden')
                .attr('data-row', i)
                .attr('data-col', j);
        }
        $("#tablero").append($rows);
    }
    
});