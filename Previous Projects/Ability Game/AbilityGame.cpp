/***************************************************************************************
 * Zachary Clawson
 * Object Oriented Programing
 * Dr.Bennet
 * 10/27/23
 * Homework4 (synopsis):
 *      This program will be a simulation of the comparisson memory game. This is a game were an x amount of cards
 *   are layed out in a determined number of rows and columns. A player will flip over one card at a time. Once,
 *   two cards are flipped over compare them, if they are the same they stay flipped over and a point is awarded to
 *   the player, if not the cards are flipped back over. The game is done when all the cards are flipped over.
 *   Do this program using Array2T as the grid, ArrayT holding the cards, and CardT to do card things.
 *   Everything should be templeted to handle multiple different data types (AbilityT, int, string).
 * 
********************************************************************************************/
#include <iostream>
#include "CardT.h"
#include "ArrayT.h"
#include "Array2T.h"
#include "AbilityT.h"
#include "ConcentrationT.h"

using namespace std;
using BaseT = CardT<AbilityT>;

int main (){

    ArrayT<BaseT> deck;
    // code to intialize players,rows, and columns
    size_t rows{3};
    size_t columns{2};
    int players{2};
    //intializing the deck to be  rows(3) * columns(2) = 6 in size 
    deck.PushBack(AbilityT::STRONG);
    deck.PushBack(AbilityT::STRONG);
    deck.PushBack(AbilityT::TOUGH);
    deck.PushBack(AbilityT::TOUGH);
    deck.PushBack(AbilityT::CLEVER);
    deck.PushBack(AbilityT::CLEVER);
    
    ConcentrationT<BaseT> game(rows, columns, players, deck);

    game.Play();
    game.Report();
    


    return 0;
}