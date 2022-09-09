var moveCount = 0;  // Счетчик количества ходов

var WHITE = 0x0;
var BLACK = 0x8;

var PAWN = 0x01;
var KNIGHT = 0x02;
var KING = 0x03;
var BISHOP = 0x05;
var ROOK = 0x06;
var QUEEN = 0x07;


// У белых фигур 4-й бит = 0
var WHITE_PAWN = 0x01;
var WHITE_KNIGHT = 0x02;
var WHITE_KING = 0x03;
var WHITE_BISHOP = 0x05;
var WHITE_ROOK = 0x06;
var WHITE_QUEEN = 0x07;

// У Черных фигур 4-й бит = 1
var BLACK_PAWN = 0x09;
var BLACK_KNIGHT = 0x0A;
var BLACK_KING = 0x0B;
var BLACK_BISHOP = 0x0D;
var BLACK_ROOK = 0x0E;
var BLACK_QUEEN = 0x0F;

var currentPlayer = WHITE;  // чья теперь очередь?

// Начальное состояние
var board = [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK, 0, 0, 0, 0, 0, 0, 0, 0,
             BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, 0, 0, 0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
             WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, 0, 0, 0, 0, 0, 0, 0, 0,
             WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_QUEEN, WHITE_KING, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK, 0, 0, 0, 0, 0, 0, 0, 0];

var castleRights = 0xF; // 4 бита для отслеживания рокировки в каждую сторону для обоих игроков

function validateMove(from, to, currentPlayer){
    return isPseudoLegal(from, to, currentPlayer) && !checkAfterMove(from, to, currentPlayer);
}

function isPseudoLegal(from, to, currentPlayer){

    var fromPiece = board[from];
    var toPiece = board[to];

    //log(from + ' => ' + to, fromPiece, toPiece, currentPlayer);

    if(!fromPiece){ // Перемещение пустого квадрата?
        return false;
    }

    if (to & 0x88){ // переход на внешнюю действующую доску?
        return false;
    }

    if( (fromPiece & 0x8) ^ currentPlayer ) {  //не твоя очередь?
       
        return false;
    }

    if(toPiece && (toPiece & 0x8) === currentPlayer ) {  // не может атаковать одного из своих
        return false;
    }

    var pieceType = fromPiece & 0x07;

    if(pieceType === QUEEN){ // королева
        if( (Math.abs(from - to) % 15 && Math.abs(from - to) % 17) &&    // ход слоном
            ((from & 0x0F) !== (to & 0x0F) && (from & 0xF0) !== (to & 0xF0))){  // ход ладьей
            return false;
        }
    }else if(pieceType === ROOK){ // ладья
        if( (from & 0x0F) !== (to & 0x0F) && (from & 0xF0) !== (to & 0xF0)  ){  // двигаться в файле или ряду
            return false;
        }
    }else if(pieceType === BISHOP){ // слон
        if( Math.abs(from - to) % 15 && Math.abs(from - to) % 17 ){  //слон может ходить только по диагонали 
            
            return false;
        }
    }else if(pieceType === KING){ // король
        var diff = Math.abs(from - to);
        var direction = from - to > 0 ? 0x0 : 0x1;

        if( diff === 1  || diff === 16 || diff === 17 || diff === 15 ){
           
        } else if ( diff === 2 && // castling
                   (castleRights >> (currentPlayer/4 + direction)) & 1 && //     Каслинг доступен в этом направлении
               
                   ! isSquareUnderAttack(from, currentPlayer) && //король сейчас не под шахом 

                   ! checkAfterMove(from, from + (direction ? 1 : -1), currentPlayer) && //  следующее поле не находится под шахом 
           
                   isPseudoLegal(from + (direction ? 3 : -4), from + (direction ? 1 : -1), currentPlayer) ){ //ладья может двигаться
                   
           
        } else {
            return false;
        }
    } else if(pieceType === KNIGHT){ 
        var diff = Math.abs(from - to);
        if( diff !== 14  && diff !== 18 && diff !== 31 && diff !== 33 ){
            return false;
        }
    } else if(pieceType === PAWN){ // пешка
        var direction = from - to > 0 ? 0x0 : 0x8;
        var diff = Math.abs(from - to);
        var fromRow = from & 0x70;

        if( direction !== currentPlayer ){ //  пешка может двигаться только вперед
           
            return false;
        }

        if(diff === 16 && !toPiece){  // одно движение вперед?
            
        } else if(diff === 32 &&
                  (fromRow === 0x60 || fromRow === 0x10) &&
                  !toPiece &&
                  !board[from + (direction ? 16 : -16)]){  //  двойной ход от начала
                   
   
        } else if ((diff === 15 || diff === 17) && toPiece) {
        
        } else {
            return false;
        }
    }

    if(fromPiece & 0x04){ // скользящая часть
        
        var diff = to - from;
        var step;

        if(diff % 17 === 0){
            step = 17;
        }else if(diff % 15 === 0){
            step = 15;
        }else if(diff % 16 === 0){
            step = 16;
        }else{
            step = 1;
        }

        var iterations = diff/step;
        if(iterations < 0){
            step = -step;
            iterations = -iterations;
        }

        var path = from + step;
        for(var i = 1; i < iterations; i++, path+=step){
            if(board[path]){
                return false;
            }
        }
    }

    return true;
}


/*
   
    Делает ход на доске.
    Эта функция вызывается только в том случае, если ход допустим.
    Этот метод обеспечивает перемещение фигур по доске и
    установка любых других переменных, таких как Castlerights.
*/

function makeMove(from, to){

    var capturedPiece = board[to];
    board[to] = board[from];
    board[from] = 0;
    var stateData = (capturedPiece << 4) + castleRights;


    if( (board[to] & 0x07) === KING ){

        // Ходы королем сбрасывают обе рокировки с каждой стороны.
        castleRights &= ~(3 << (currentPlayer/4));

        // ходить и ладьей, если это рокировка

        if( Math.abs(from - to) === 2 ){
            var rookTo = from + (from > to ? -1 : 1);
            var rookFrom = from + (from > to ? -4 : 3);

            board[rookTo] = board[rookFrom];
            board[rookFrom] = 0;
        }
    }

    // Ход ладьей сбрасывает рокировку в эту сторону
    if( (board[to] & 0x07) === ROOK ){
        if(from === 0x0 || from === 0x70){
            var direction = 0;
            castleRights &= ~(1 << (currentPlayer/4 + direction));
        } else if (from === 0x7 || from === 0x77) {
            var direction = 1;
            castleRights &= ~(1 << (currentPlayer/4 + direction));
        }
    }

    // Взятие ладьи сбрасывает рокировку в эту сторону
    if( (capturedPiece & 0x07) === ROOK ){
        if(to === 0x0 || to === 0x70){
            var direction = 0;
            var otherPlayer = currentPlayer ? 0 : 8;
            castleRights &= ~(1 << (otherPlayer/4 + direction));
        } else if (to === 0x7 || to === 0x77) {
            var direction = 1;
            var otherPlayer = currentPlayer ? 0 : 8;
            castleRights &= ~(1 << (otherPlayer/4 + direction));
        }
    }

    currentPlayer = currentPlayer ? 0 : 8;
    moveCount++;
    log(castleRights.toString(2));
    return stateData;
}

/*
    
Отменяет ВСЕ изменения, сделанные makeMove
*/

function unMakeMove(from, to, stateData){
    board[from] = board[to];
    board[to] = stateData >> 4;
    castleRights = stateData & 0xF;

    // отменить рокировку

    if( (board[from] & 0x07) === KING &&
        Math.abs(from - to) === 2){
        var rookTo = from + (from > to ? -1 : 1);
        var rookFrom = from + (from > to ? -4 : 3);

        board[rookFrom] = board[rookTo];
        board[rookTo] = 0;
    }

    currentPlayer = (currentPlayer === 0) ? 8 : 0;
    moveCount--;
    return true;
}

function checkAfterMove(from, to, currentPlayer){
    var stateData = makeMove(from, to);

    for( var i = 0 ; i < 128 ; i++ ){
        if(board[i] === (currentPlayer ? BLACK_KING : WHITE_KING) ){
            var kingPosition = i;
            break;
        }
    }

    var isKingUnderAttack = isSquareUnderAttack(kingPosition, currentPlayer);
    unMakeMove(from, to, stateData);
    return isKingUnderAttack;
}

/*
    нельзя использовать для проверки атак по пустым клеткам.
    на данный момент, так как взятие пешки в пустые клетки не будет проверяться (что нужно сделать: исправить это)
*/
function isSquareUnderAttack(square, currentPlayer){
    for( var i = 0 ; i < 128 ; i++ ){
        if(board[i]){
            if(isPseudoLegal(i, square, currentPlayer ? 0 : 8)){
                return true;
            }
        }
    }
    return false;
}