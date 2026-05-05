#pragma once

#include"ArrayT.h"
#include"Array2T.h"
#include"AbilityT.h"
#include"CardT.h"
#include<string>
#include<iostream>

template<typename T>
class ConcentrationT{
    public:
        ConcentrationT() = delete;
        ConcentrationT(size_t r, size_t c, int players, ArrayT<T> d);
        void Play();
        void Report();

        size_t Rows() const;
        size_t Cols() const;
        int PCS() const;
        int PAmount() const;
        int ScoreOne() const;
        int ScoreTwo() const;

    private:
    int playerControlScore;
    int amountOfPlayers;
    int playerOneScore;
    int playerTwoScore;
    int amountOfMatches;
    int matches;
    ArrayT<T> deck;
    size_t rows;
    size_t columns;
    Array2T<T> gameBoard;
};

template<typename T>
ConcentrationT<T>::ConcentrationT(size_t r, size_t c, int players, ArrayT<T> d){
    rows = r;
    columns = c;
    amountOfPlayers = players;
    deck = d;
    gameBoard = Array2T<T>(rows, columns);
    playerOneScore = 0;
    playerTwoScore = 0;
    playerControlScore =0;
    amountOfMatches = 0;
    matches = 3;
    
}
template<typename T>
void ConcentrationT<T>::Play(){
    size_t row{0};
    size_t row2{0};
    size_t col{0};
    size_t col2{0};

    deck.ShuffleDeck(deck);
    gameBoard.TransferDeckToBoard(gameBoard, deck);
    gameBoard.PrintArray2T(gameBoard);
    while(amountOfMatches < matches){
        int Control{playerControlScore%2};
        
        std::cout << "Enter a card: ";
        std::cin >> row;
        std::cin.ignore(10000, ',');
        std::cin >> col;
        while(row >= rows or col >= columns){
            std::cout << "Enter a card: ";
            std::cin >> row;
            std::cin.ignore(10000, ',');
            std::cin >> col;
        }
        while(gameBoard[row,col].CardState() == true){
            std::cout << "Enter a card: ";
            std::cin >> row;
            std::cin.ignore(10000, ',');
            std::cin >> col;
        }
        gameBoard[row,col].FlipCard(gameBoard[row,col]);
        gameBoard.PrintArray2T(gameBoard);
        std::cout << "Enter a card: ";
        std::cin >> row2;
        std::cin.ignore(10000, ',');
        std::cin >> col2;
        while(row2 >= rows or col2 >= columns){
            std::cout << "Enter a card: ";
            std::cin >> row2;
            std::cin.ignore(10000, ',');
            std::cin >> col2;
        }
        while(row2 == row and col2 == col){
            std::cout << "Enter a card: ";
            std::cin >> row2;
            std::cin.ignore(10000, ',');
            std::cin >> col2;
        }
        while(gameBoard[row2,col2].CardState() == true){
            std::cout << "Enter a card: ";
            std::cin >> row2;
            std::cin.ignore(10000, ',');
            std::cin >> col2;
        }
        gameBoard[row2,col2].FlipCard(gameBoard[row2,col2]);
        gameBoard.PrintArray2T(gameBoard);

        if(gameBoard[row,col] == gameBoard[row2,col2]){
            ++amountOfMatches;
            if(Control == 0){
                ++playerOneScore;
            } else{
                ++playerTwoScore;
            }
        } else{
            ++playerControlScore;
            gameBoard[row,col].FlipCard(gameBoard[row,col]);
            gameBoard[row2,col2].FlipCard(gameBoard[row2,col2]);
        }
    }

}

template<typename T>
void ConcentrationT<T>::Report(){
    if(playerOneScore > playerTwoScore){
        std::cout << "Congrats Player 1! You won with " << playerOneScore << " matches!" << std::endl;
    } else if(playerOneScore == playerTwoScore){
        std::cout << "Congrats PLayer 1 and Player 2! You tied." << std::endl;
    } else{
        std::cout << "Congrats Player 2! You won with " << playerTwoScore << " matches!" << std::endl;
    }

}

/*
template<typename T>
size_t ConcentrationT<T>::Rows() const{
    return rows;
}

template<typename T>
size_t ConcentrationT<T>::Cols() const{
    return columns;
}

template<typename T>
int ConcentrationT<T>::PCS() const{
    return playerControlScore;
}
template<typename T>
int ConcentrationT<T>::PAmount() const{
    return amountOfPlayers;
}
template<typename T>
int ConcentrationT<T>::ScoreOne() const{
    return playerOneScore;
}
template<typename T>
int ConcentrationT<T>::ScoreTwo() const{
    return playerTwoScore;
}
*/