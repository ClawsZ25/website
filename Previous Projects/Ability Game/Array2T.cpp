#include <iostream>
#include "Array2T.h"

using namespace std;

//Array2T functions
size_t Index(size_t r, size_t c, size_t cols) {
    return r*cols + c;
}
/*
template <typename T>
void PrintArray2T(Array2T<T> & grid){
    for(size_t j{0}; j < grid.Cols(); ++j){
        cout << "\t";
        cout << j;
    }
    cout << endl;

    for(size_t i{0}; i < grid.Rows(); ++i) {
        cout << i;
        for(size_t j{0}; j < grid.Cols(); ++j){
            cout << "\t" << grid[i, j];
        }
        cout << endl;
    }
    return;
}
*/