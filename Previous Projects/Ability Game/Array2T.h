#pragma once

#include<iostream>
#include"ArrayT.h"
#include<iomanip>
#include"CardT.h"

template<typename T>
class Array2T {
    public:
        Array2T();
        Array2T(size_t r, size_t c);
        Array2T(const Array2T & src);

        ~Array2T();
        Array2T<T> & operator = (const Array2T<T> & src);

        T operator[] (size_t r, size_t c) const;
        T & operator[] (size_t r, size_t c);

        void PrintArray2T(Array2T<T> & grid);
        void TransferDeckToBoard(Array2T<T> & board, ArrayT<T> & deck);

        size_t Rows() const;
        size_t Cols() const;
    private:
        T * data;
        size_t rows, cols;
};

template<typename T>
Array2T<T>::Array2T() {
   rows = 0;
   cols = 0;
   data = nullptr;
}

template<typename T>
Array2T<T>::Array2T(size_t r, size_t c) {
    rows = r;
    cols = c;

    data = new T[rows * cols *  sizeof(T)];
}
// not a cloass function
size_t Index(size_t r, size_t c, size_t cols);
// not a class function needs templated
template<typename T>
void CopyArray(T dest[], const T src[], size_t rows, size_t cols) {
    size_t r,c;
    size_t idx;

    for(r = 0; r < rows; ++r) {
        for(c = 0; c < cols; ++c) {
            idx = Index(r,c,cols);
            dest[idx] = src[idx];
        }
    }
}

template<typename T>
Array2T<T>::Array2T(const Array2T & src) {
    rows = src.rows;
    cols = src.cols;
    data = new T[rows * cols *  sizeof(int)];

    CopyArray(data, src.data, rows, cols);
}

template<typename T>
Array2T<T>::~Array2T() {
    delete [] data;
}

template<typename T>
Array2T<T> & Array2T<T>::operator = (const Array2T & src) {
    if (this != &src) {
        delete [] data;

        rows = src.rows;
        cols = src.cols;
        data = new T[rows * cols *  sizeof(int)];

        CopyArray(data, src.data, rows, cols);
    }

    return *this;
}

template<typename T>
T Array2T<T>::operator[] (size_t r, size_t c) const {
   if (r < rows and c < cols) {
      return data[r*cols + c]; 
   } else {
      std::cerr << "Error,  Invalid index" << std::endl;
      return data[0];
   }
}

template<typename T>
T & Array2T<T>::operator[] (size_t r, size_t c) {
   if (r < rows and c < cols) {
      return data[r*cols + c]; 
   } else {
      std::cerr << "Error,  Invalid index" << std::endl;
      return data[0];
   }
}

template<typename T>
size_t Array2T<T>::Rows() const {
   return rows;
}

template<typename T>
size_t Array2T<T>::Cols() const {
   return cols;
}
// function proto for print array2t
template <typename T>
void Array2T<T>::PrintArray2T(Array2T<T> & grid){
    for(size_t j{0}; j < grid.Cols(); ++j){
        std::cout << "\t";
        std::cout << j;
    }
    std::cout << std::endl;

    for(size_t i{0}; i < grid.Rows(); ++i) {
        std::cout << i;
        for(size_t j{0}; j < grid.Cols(); ++j){
            std::cout << "\t";
            grid[i,j].PrintCard(grid[i,j]);
        }
        std::cout << std::endl;
    }
    return;
}

template<typename T>
void Array2T<T>::TransferDeckToBoard(Array2T<T> & board, ArrayT<T> & deck){
    size_t numberOfCols{board.Cols()};
    for(size_t i{0}; i < board.Rows(); i++){
        for(size_t j{0}; j < board.Cols(); j++){
            board[i,j] = deck[i * numberOfCols + j];
        }
    }
}