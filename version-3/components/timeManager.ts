/**
 * @export
 *  @param {gameTime}
 *  @param {amount} 
 * **/

export function get(gameTime: number, amount: number): Number {
        let result = gameTime % amount;
        console.log(result);
        return result;
    }